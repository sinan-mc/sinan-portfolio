"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, Send } from "lucide-react";
import Image from "next/image";

type Message = {
    role: "user" | "assistant" | "system";
    content: string;
};

export default function Chatbot() {
    const pathname = usePathname();
    const isLanding = pathname === "/best-digital-marketer-in-kerala" || pathname?.startsWith("/best-digital-marketer-in-kerala");

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hey there! 👋 How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isLoading, isOpen]);

    const sendMessage = async (textToSend: string) => {
        if (!textToSend.trim() || isLoading) return;

        const userText = textToSend.trim();
        const userMessage = { role: "user" as const, content: userText };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");

        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!res.ok) throw new Error("Failed to fetch response");
            const data = await res.json();

            if (data.message) {
                const messageObj = typeof data.message === "string"
                    ? { role: "assistant" as const, content: data.message }
                    : data.message;
                setMessages((prev) => [...prev, messageObj]);
            }
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const lastMessage = messages[messages.length - 1];
    const isAskingService = !isLoading && lastMessage?.role === "assistant" && (
        lastMessage.content.includes("service or package") ||
        lastMessage.content.includes("service are you looking for") ||
        lastMessage.content.includes("Please choose or specify a service") ||
        lastMessage.content.includes("Please choose")
    );

    const SERVICES_OPTIONS = [
        "Web Development",
        "SEO",
        "Digital Marketing",
        "Graphic Design",
        "Social Media",
        "AI Automation",
        "Complete Package",
    ];

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            {isOpen ? (
                <div className={`w-[calc(100vw-2rem)] sm:w-[380px] h-[calc(100dvh-2rem)] max-h-[600px] sm:h-[600px] sm:max-h-[calc(100vh-6rem)] rounded-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300 ${
                    isLanding
                        ? "bg-[#FFFFFF]/98 backdrop-blur-xl border border-[#E5E5E0] shadow-2xl shadow-black/10 text-[#111111]"
                        : "bg-black/95 backdrop-blur-md border border-yellow-500/30 shadow-2xl shadow-yellow-500/10 text-white"
                }`}>
                    {/* Header */}
                    <div className={`p-3 sm:p-4 flex justify-between items-center z-10 ${
                        isLanding
                            ? "bg-[#FAFAF8] border-b border-[#EAEAE6]"
                            : "bg-gradient-to-r from-black to-zinc-900 border-b border-yellow-500/30"
                    }`}>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${
                                isLanding ? "bg-black shadow-sm" : "shadow-sm shadow-yellow-500/20"
                            }`}>
                                <Image src={isLanding ? "/chatbot-icon-black.svg" : "/chatbot-icon.svg"} alt="Chatbot" width={48} height={48} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className={`font-semibold flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-sm ${
                                    isLanding ? "text-[#111111]" : "text-white"
                                }`}>
                                    AI Assistant
                                    <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
                                    </span>
                                </h3>
                                <p className={`text-[10px] sm:text-[11px] mt-0.5 ${
                                    isLanding ? "text-[#767670]" : "text-zinc-400"
                                }`}>
                                    {isLanding ? "Sinan MC • Kerala Digital Marketer" : "Sinan MC Malappuram"}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className={`transition-colors p-1.5 rounded-full ${
                                isLanding ? "text-[#767670] hover:text-[#111111] hover:bg-black/5" : "text-zinc-400 hover:text-white hover:bg-white/10"
                            }`}
                        >
                            <X size={18} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className={`flex-1 overflow-y-auto p-4 space-y-4 flex flex-col scroll-smooth ${
                        isLanding ? "bg-[#FAFAF8]/70" : ""
                    }`}>
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[14px] sm:text-[15px] leading-relaxed relative whitespace-pre-wrap ${
                                    msg.role === "user"
                                        ? (isLanding
                                            ? "bg-[#111111] text-[#FFFFFF] rounded-tr-sm shadow-sm"
                                            : "bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-tr-sm shadow-sm")
                                        : (isLanding
                                            ? "bg-[#FFFFFF] border border-[#EAEAE6] text-[#1A1A1A] rounded-tl-sm shadow-sm"
                                            : "bg-zinc-800/80 border border-zinc-700/50 text-zinc-100 rounded-tl-sm shadow-sm")
                                }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className={`p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center w-fit shadow-sm ${
                                    isLanding ? "bg-[#FFFFFF] border border-[#EAEAE6]" : "bg-zinc-800/80 border border-zinc-700/50"
                                }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.3s] ${isLanding ? "bg-[#888888]" : "bg-zinc-400"}`}></span>
                                    <span className={`w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.15s] ${isLanding ? "bg-[#888888]" : "bg-zinc-400"}`}></span>
                                    <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${isLanding ? "bg-[#888888]" : "bg-zinc-400"}`}></span>
                                </div>
                            </div>
                        )}
                        {isAskingService && (
                            <div className="flex flex-wrap gap-1.5 pt-1 pb-1 animate-in fade-in duration-300">
                                {SERVICES_OPTIONS.map((service) => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => sendMessage(service)}
                                        className={`text-[12px] font-medium px-2.5 py-1 rounded-full transition-all duration-200 active:scale-95 shadow-sm ${
                                            isLanding
                                                ? "bg-[#FFFFFF] hover:bg-[#111111] text-[#1A1A1A] hover:text-[#FFFFFF] border border-[#DCDCD6] hover:border-[#111111]"
                                                : "bg-yellow-500/15 hover:bg-yellow-500 hover:text-black text-yellow-400 border border-yellow-500/40"
                                        }`}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-2" />
                    </div>

                    {/* Input Area */}
                    <div className={`p-3 border-t ${
                        isLanding ? "border-[#EAEAE6] bg-[#FFFFFF]" : "border-yellow-500/20 bg-black"
                    }`}>
                        <form onSubmit={handleSubmit} className="relative flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Message the AI..."
                                className={`w-full text-[16px] sm:text-sm rounded-full pl-4 pr-12 py-3.5 outline-none transition-colors shadow-sm ${
                                    isLanding
                                        ? "bg-[#FAFAF8] border border-[#DCDCD6] text-[#111111] placeholder:text-[#888882] focus:border-[#111111] focus:bg-white"
                                        : "bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:border-yellow-500/50 shadow-inner"
                                }`}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className={`absolute right-1.5 w-10 h-10 flex items-center justify-center rounded-full transition-colors shadow-sm disabled:cursor-not-allowed ${
                                    isLanding
                                        ? "bg-[#111111] text-white hover:bg-[#2A2A2A] disabled:opacity-40 disabled:bg-[#EAEAE6] disabled:text-[#888882]"
                                        : "bg-yellow-500 text-black hover:bg-yellow-400 disabled:opacity-50 disabled:bg-zinc-700 disabled:text-zinc-400"
                                }`}
                            >
                                <Send size={16} className="-ml-0.5" />
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 group relative focus:outline-none focus:ring-2 z-50 animate-in fade-in zoom-in-95 ${
                        isLanding
                            ? "focus:ring-black shadow-black/30"
                            : "focus:ring-yellow-500 focus:ring-offset-2"
                    }`}
                >
                    {/* Continuous subtle pulse for attention */}
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-60 [animation-duration:3s] ${
                        isLanding ? "bg-black/20" : "bg-yellow-500/20"
                    }`}></div>
                    <Image
                        src={isLanding ? "/chatbot-icon-black.svg" : "/chatbot-icon.svg"}
                        alt="Chat"
                        width={64}
                        height={64}
                        className={`w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-300 ${
                            isLanding
                                ? "drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
                                : "drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                        }`}
                    />
                </button>
            )}
        </div>
    );
}
