import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { sendChatbotLeadNotificationEmail } from "@/lib/mail";

// ─── Groq client (used ONLY for post-lead-capture general conversation) ───────
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// ─── Fixed lead-capture messages ─────────────────────────────────────────────
const MSG_GREETING = "Hey there! 👋 How can I help you today?";
const MSG_ASK_NAME = "What is your name?";
const MSG_ASK_PHONE = "Please provide your mobile number.";
const MSG_ASK_SERVICE =
  "Which service or package are you looking for? (Web Development, SEO, Digital Marketing, Graphic Design, Social Media, AI Automation, or Complete Package)";
const MSG_INVALID_PHONE = "Please provide a valid mobile number.";
const MSG_INVALID_SERVICE =
  "Please choose or specify a service or package (e.g. Web Development, SEO, Graphic Design, Digital Marketing, or Complete Package).";
const MSG_FALLBACK = "I'm sorry, something went wrong. Please try again.";

// ─── Lead capture states ──────────────────────────────────────────────────────
type LeadState =
  | "WAITING_FOR_INITIAL_REPLY"
  | "WAITING_FOR_NAME"
  | "WAITING_FOR_PHONE"
  | "WAITING_FOR_SERVICE"
  | "LEAD_COMPLETED";

// ─── Validators ───────────────────────────────────────────────────────────────
function isValidPhone(value: string): boolean {
  const digits = value.replace(/[\s\-().+]/g, "");
  return /^\d{7,15}$/.test(digits);
}

function normalizeService(value: string): string | null {
  const v = value.toLowerCase().trim();
  if (/\b(graphic(s)?|poster|logo|banner|branding|creative)\b/.test(v)) return "Graphic Design & Branding";
  if (/\b(web|website|web\s*dev(elopment)?|frontend|fullstack)\b/.test(v)) return "Web Development";
  if (/\b(seo|search\s*engine|ranking|google\s*rank)\b/.test(v)) return "SEO";
  if (/\b(social\s*media|smm|instagram|facebook)\b/.test(v)) return "Social Media Marketing";
  if (/\b(digital\s*marketing|sem|google\s*ads|ads|adwords|ppc)\b/.test(v)) return "Digital Marketing";
  if (/\b(ai|automation|chatbot|workflows)\b/.test(v)) return "AI Automation";
  if (/\b(package|combo|growth|all(\s*in\s*one)?|everything|complete)\b/.test(v)) return "Complete Growth Package";

  // Fallback: accept custom input if it's descriptive (at least 3 characters with letters)
  if (v.length >= 3 && /[a-zA-Z]/.test(v)) {
    return value.trim();
  }
  return null;
}

// ─── State machine: infer current state from conversation history ─────────────
type Message = { role: string; content: string };

function inferLeadState(messages: Message[]) {
  const userMessages = messages
    .filter((msg) => msg.role === "user")
    .map((msg) => String(msg.content ?? "").trim())
    .filter(Boolean);

  let state: LeadState = "WAITING_FOR_INITIAL_REPLY";
  let name = "";
  let phone = "";
  let service = "";

  let stateBeforeLast: LeadState = "WAITING_FOR_INITIAL_REPLY";

  for (let i = 0; i < userMessages.length; i++) {
    const value = userMessages[i];

    // Save state before processing the last user message
    if (i === userMessages.length - 1) {
      stateBeforeLast = state;
    }

    if (state === "WAITING_FOR_INITIAL_REPLY") {
      state = "WAITING_FOR_NAME";
      continue;
    }

    if (state === "WAITING_FOR_NAME") {
      name = value;
      state = "WAITING_FOR_PHONE";
      continue;
    }

    if (state === "WAITING_FOR_PHONE") {
      if (isValidPhone(value)) {
        phone = value;
        state = "WAITING_FOR_SERVICE";
      }
      continue;
    }

    if (state === "WAITING_FOR_SERVICE") {
      const normalized = normalizeService(value);
      if (normalized) {
        service = normalized;
        state = "LEAD_COMPLETED";
      }
      continue;
    }
  }

  // Also check if lead completed thank-you message is already in the history to avoid re-capturing
  const alreadySaved = messages.some(
    (m) =>
      m.role === "assistant" &&
      m.content.includes("Thank you") &&
      m.content.includes("saved successfully")
  );

  if (alreadySaved) {
    state = "LEAD_COMPLETED";
  }

  return {
    state,
    stateBeforeLast,
    name,
    phone,
    service,
  };
}

// ─── System prompt for post-lead-capture general conversation ─────────────────
const POST_LEAD_SYSTEM_PROMPT = `
You are DigiBot, the professional AI assistant of Sinan MC Malappuram, Freelance Web Developer and SEO Specialist.

The user's contact details have already been collected and saved. Do NOT ask for name, mobile number, or service again.
Sinan MC will contact the user shortly to discuss details, including pricing.

CRITICAL PRICING RULES (MUST STRICTLY FOLLOW):
1. NEVER provide any price, price range, cost estimate, package price, or pricing table.
2. NEVER mention prices in INR, USD, AED, or any other currency (e.g. do not output numbers with currency symbols like ₹20,000 or $500).
3. If the user asks about website cost, SEO price, digital marketing price, package price, budget, or charges, explain that Sinan MC will discuss the pricing directly with them.
4. Never invent a price or estimate the project cost.
5. Never mention generic market prices or say things like "starting from", "typically costs", or "average cost".
6. Never create packages or plans, or suggest discounts/offers.
7. Always redirect pricing discussions directly to Sinan MC.
8. Keep the response short, natural, and professional.

Preferred response styles:
- For website pricing: "The price depends on your website requirements and features. Sinan MC will contact you and discuss the pricing details directly."
- For SEO pricing: "SEO pricing depends on your website and requirements. Sinan MC will discuss the pricing details with you directly."
- For digital marketing pricing: "The pricing depends on your marketing requirements and campaign goals. Sinan MC will discuss the pricing details with you directly."
- Generic: "The price depends on your requirements and project scope. Sinan MC will contact you and discuss the pricing details directly."

Answer all non-pricing questions about web development, SEO, digital marketing, timelines, and portfolio topics professionally and helpfully.

OUTPUT RULES — ABSOLUTE PRIORITY:
1. NEVER reveal internal reasoning, chain of thought, planning steps, or analysis.
2. NEVER output labels such as: "Plan:", "Reasoning:", "Analysis:", "Thought:", "Thoughts:", "Thinking:", "Thinking process:", "Chain of thought:", "My reasoning:", "Wait,", "Let's think", "I will...", "I'll...", "First,", "Step 1:", "Step 2:", "Final Plan:", "The user is...", "Response structure:", "Here's a thinking process:", or ANY similar internal text.
3. NEVER output <think>, </think>, <tool_call>, </tool_call>, function JSON, or XML tool syntax.
4. NEVER output raw JSON in your reply.
5. ALWAYS output ONLY the final user-facing conversational answer.
`.trim();

// ─── Robust Response Sanitizer ────────────────────────────────────────────────
const REASONING_BLOCK_STARTERS = [
  /^(here['']?s (a |my |the )?(thinking|thought|reasoning|analysis|plan|response))/i,
  /^thinking( process)?:/i,
  /^chain of thought:/i,
  /^my reasoning:/i,
  /^(internal )?analysis:/i,
  /^(internal )?reasoning:/i,
  /^plan:/i,
  /^final plan:/i,
  /^response structure:/i,
  /^thought:/i,
  /^thoughts:/i,
  /^wait[,.]?(\s|$)/i,
  /^let['']?s think/i,
  /^i will\b/i,
  /^i['']ll\b/i,
  /^first[,.](\s|$)/i,
  /^step \d+[:.]/i,
  /^the user (is |was |asked|wants|said|has |'s )/i,
  /^internal note:/i,
  /^note to self/i,
  /^okay[,.]? (so |let|i |the )/i,
  /^alright[,.]? (so |let|i |the )/i,
];

const INLINE_REASONING_PHRASES = [
  /here['']?s a thinking process:?[^\n]*/gi,
  /here['']?s my thinking[^\n]*/gi,
  /thinking process:[^\n]*/gi,
  /chain of thought:[^\n]*/gi,
  /my reasoning:[^\n]*/gi,
  /internal analysis:[^\n]*/gi,
  /internal note:[^\n]*/gi,
  /note to self[^\n]*/gi,
];

function sanitizeResponse(raw: string): string {
  let text = raw;

  // Pass 1: Remove XML-style blocks
  text = text.replace(/<think>[\s\S]*?<\/think>/gi, "");
  text = text.replace(/<\/?think>/gi, "");
  text = text.replace(/<tool_call>[\s\S]*?<\/tool_call>/gi, "");
  text = text.replace(/<\/?tool_call>/gi, "");
  text = text.replace(/<function[\s\S]*?<\/function>/gi, "");
  text = text.replace(/<\/?function>/gi, "");
  text = text.replace(/<parameter[\s\S]*?<\/parameter>/gi, "");
  text = text.replace(/<\/?parameter>/gi, "");

  // Pass 2: Remove JSON tool payloads
  text = text.replace(/\{\s*"name"\s*:\s*"save_lead"[\s\S]*?\}/gi, "");
  text = text.replace(/\{\s*"arguments"[\s\S]*?\}/gi, "");
  text = text.replace(/\{\s*"(name|phone|email|service)"[\s\S]*?\}/gi, "");

  // Pass 3: Remove inline reasoning phrases
  for (const phrase of INLINE_REASONING_PHRASES) {
    text = text.replace(phrase, "");
  }

  // Pass 4: Paragraph-level block discard
  const paragraphs = text.split(/\n{2,}/);
  let firstRealIndex = -1;
  for (let i = 0; i < paragraphs.length; i++) {
    const para = paragraphs[i].trim();
    if (!para) continue;
    const firstLine = para.split("\n")[0].trim();
    const isReasoning = REASONING_BLOCK_STARTERS.some((p) => p.test(firstLine));
    if (!isReasoning) {
      firstRealIndex = i;
      break;
    }
  }

  if (firstRealIndex === -1) {
    // Pass 5: Line-by-line fallback
    const lines = text.split("\n");
    let firstRealLine = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      if (!REASONING_BLOCK_STARTERS.some((p) => p.test(line))) {
        firstRealLine = i;
        break;
      }
    }
    if (firstRealLine === -1) return MSG_FALLBACK;
    text = lines.slice(firstRealLine).join("\n");
  } else {
    text = paragraphs.slice(firstRealIndex).join("\n\n");
  }

  text = text.trim();
  return text || MSG_FALLBACK;
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: Message[] = body.messages || [];

    // ── Infer current state from conversation history ──
    const { state, stateBeforeLast, name, phone, service } =
      inferLeadState(messages);

    const userMessages = messages
      .filter((msg) => msg.role === "user")
      .map((msg) => String(msg.content ?? "").trim())
      .filter(Boolean);

    // Temporary development logs for verification (will not go to client)
    console.log("CHAT MESSAGE COUNT:", messages.length);
    console.log("USER MESSAGES:", userMessages);
    console.log("INFERRED LEAD STATE:", state);
    console.log("STATE BEFORE LAST:", stateBeforeLast);

    // ── Deterministic lead capture state machine ──────────────────────────────
    // Each branch returns exactly ONE fixed question. Groq is never called here.

    if (state === "WAITING_FOR_INITIAL_REPLY") {
      return NextResponse.json({
        message: { role: "assistant", content: MSG_GREETING },
      });
    }

    if (state === "WAITING_FOR_NAME") {
      return NextResponse.json({
        message: { role: "assistant", content: MSG_ASK_NAME },
      });
    }

    if (state === "WAITING_FOR_PHONE") {
      if (stateBeforeLast === "WAITING_FOR_PHONE") {
        return NextResponse.json({
          message: { role: "assistant", content: MSG_INVALID_PHONE },
        });
      }
      return NextResponse.json({
        message: { role: "assistant", content: MSG_ASK_PHONE },
      });
    }

    if (state === "WAITING_FOR_SERVICE") {
      if (stateBeforeLast === "WAITING_FOR_SERVICE") {
        return NextResponse.json({
          message: { role: "assistant", content: MSG_INVALID_SERVICE },
        });
      }
      return NextResponse.json({
        message: { role: "assistant", content: MSG_ASK_SERVICE },
      });
    }

    if (state === "LEAD_COMPLETED") {
      // If we JUST completed the lead now
      if (stateBeforeLast === "WAITING_FOR_SERVICE") {
        try {
          await addDoc(collection(db, "chat_leads"), {
            name,
            phone,
            service,
            status: "new",
            source: "chatbot_ai",
            createdAt: serverTimestamp(),
          });
        } catch (dbError) {
          console.error("Firestore save failed:", dbError);
          return NextResponse.json({
            message: {
              role: "assistant",
              content:
                "I'm sorry, I encountered an error while saving your details. Please try again later.",
            },
          });
        }

        // Send instant email notification to mailbox
        try {
          await sendChatbotLeadNotificationEmail({
            name,
            phone,
            service,
          });
        } catch (emailErr) {
          console.error("Failed to send chatbot lead email notification:", emailErr);
        }

        return NextResponse.json({
          message: {
            role: "assistant",
            content: `Thank you! Your details have been saved successfully. Sinan MC Malappuram will contact you shortly regarding your ${service} requirements.`,
          },
        });
      }

      // Otherwise, it was already completed before this turn. Do normal Groq chat.
      const conversationHistory = messages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));

      let groqResponse;
      try {
        groqResponse = await groq.chat.completions.create({
          model: "openai/gpt-oss-120b",
          messages: [
            { role: "system", content: POST_LEAD_SYSTEM_PROMPT },
            ...conversationHistory,
          ],
        });
      } catch (groqError) {
        console.error("Groq API error:", groqError);
        return NextResponse.json({
          message: {
            role: "assistant",
            content:
              "I'm sorry, I'm having trouble connecting right now. Please try again.",
          },
        });
      }

      const rawContent = groqResponse.choices[0]?.message?.content ?? "";
      const cleanedContent = sanitizeResponse(rawContent);

      return NextResponse.json({
        message: { role: "assistant", content: cleanedContent },
      });
    }

    return NextResponse.json({
      message: { role: "assistant", content: MSG_FALLBACK },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
