import nodemailer from "nodemailer";

export interface SendContactEmailParams {
    name: string;
    email: string;
    phone?: string;
    service?: string;
    message: string;
}

export function getTransporter() {
    const user = process.env.EMAIL_USER || "sinanmc46@gmail.com";
    // Strip any spaces from the Google App Password
    const pass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, "") : "";

    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user,
            pass,
        },
    });
}

export async function sendContactNotificationEmail(data: SendContactEmailParams) {
    const transporter = getTransporter();
    const recipient = process.env.CONTACT_EMAIL || process.env.EMAIL_USER || "sinanmc46@gmail.com";
    const sender = process.env.EMAIL_USER || "sinanmc46@gmail.com";

    const formattedDate = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
    });

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d0d0d; color: #f3f4f6; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #141414; border-radius: 16px; border: 1px solid #262626; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
            .header { background: linear-gradient(135deg, #1f1f1f, #0d0d0d); padding: 28px 24px; border-bottom: 2px solid #FFD700; }
            .header h1 { margin: 0; color: #FFD700; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0; color: #9ca3af; font-size: 13px; }
            .content { padding: 24px; }
            .info-grid { margin-bottom: 24px; }
            .info-row { display: flex; padding: 12px 0; border-bottom: 1px solid #222; }
            .label { width: 130px; font-weight: 600; color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { flex: 1; color: #ffffff; font-size: 14px; word-break: break-word; }
            .value a { color: #FFD700; text-decoration: none; }
            .message-box { background: #1a1a1a; border-left: 3px solid #FFD700; border-radius: 8px; padding: 16px 20px; margin-top: 10px; }
            .message-label { font-size: 12px; color: #9ca3af; text-transform: uppercase; margin-bottom: 8px; font-weight: 600; }
            .message-body { font-size: 14px; line-height: 1.6; color: #e5e7eb; white-space: pre-wrap; }
            .footer { padding: 16px 24px; background: #0f0f0f; border-top: 1px solid #1f1f1f; text-align: center; font-size: 12px; color: #6b7280; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📬 New Contact Form Submission</h1>
                <p>Received via your portfolio website &bull; ${formattedDate} IST</p>
            </div>
            <div class="content">
                <div class="info-grid">
                    <div class="info-row">
                        <span class="label">Name:</span>
                        <span class="value"><strong>${data.name}</strong></span>
                    </div>
                    <div class="info-row">
                        <span class="label">Email:</span>
                        <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
                    </div>
                    <div class="info-row">
                        <span class="label">Phone:</span>
                        <span class="value">${data.phone ? `<a href="tel:${data.phone}">${data.phone}</a>` : "Not provided"}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Service:</span>
                        <span class="value"><strong style="color: #FFD700;">${data.service || "General Inquiry"}</strong></span>
                    </div>
                </div>

                <div class="message-box">
                    <div class="message-label">Client Message</div>
                    <div class="message-body">${data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
                </div>
            </div>
            <div class="footer">
                Tip: You can hit <strong>Reply</strong> to directly respond to ${data.name} at ${data.email}.
            </div>
        </div>
    </body>
    </html>
    `;

    return transporter.sendMail({
        from: `"Sinan MC Portfolio" <${sender}>`,
        to: recipient,
        replyTo: data.email,
        subject: `🔔 New Inquiry from ${data.name} - [${data.service || "Web / SEO"}]`,
        text: `New contact form submission:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nService: ${data.service || "General Inquiry"}\n\nMessage:\n${data.message}`,
        html,
    });
}

export async function sendUserConfirmationEmail(data: SendContactEmailParams) {
    const transporter = getTransporter();
    const sender = process.env.EMAIL_USER || "sinanmc46@gmail.com";

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d0d0d; color: #f3f4f6; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #141414; border-radius: 16px; border: 1px solid #262626; overflow: hidden; }
            .header { background: linear-gradient(135deg, #1f1f1f, #0d0d0d); padding: 28px 24px; border-bottom: 2px solid #FFD700; text-align: center; }
            .header h1 { margin: 0; color: #FFD700; font-size: 24px; font-weight: 700; }
            .header p { margin: 8px 0 0; color: #9ca3af; font-size: 14px; }
            .content { padding: 28px 24px; line-height: 1.6; font-size: 14px; color: #d1d5db; }
            .cta-btn { display: inline-block; margin-top: 16px; padding: 12px 24px; background: #FFD700; color: #000; font-weight: 700; border-radius: 8px; text-decoration: none; }
            .footer { padding: 20px 24px; background: #0f0f0f; border-top: 1px solid #1f1f1f; text-align: center; font-size: 12px; color: #6b7280; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Sinan MC</h1>
                <p>Web Developer & SEO Specialist &bull; Malappuram, Kerala</p>
            </div>
            <div class="content">
                <p>Hi <strong>${data.name}</strong>,</p>
                <p>Thank you for reaching out! I have received your message regarding <strong>${data.service || "your project inquiry"}</strong>.</p>
                <p>I usually respond within 2 hours during business hours. In the meantime, feel free to connect directly via WhatsApp if it's urgent.</p>
                <div style="text-align: center; margin: 24px 0;">
                    <a href="https://wa.me/917510477475?text=Hi%20Sinan,%20I%20just%20submitted%20the%20contact%20form" class="cta-btn">Chat on WhatsApp</a>
                </div>
                <p style="margin-top: 24px; color: #9ca3af;">Best regards,<br><strong style="color: #fff;">Sinan MC</strong><br>Malappuram, Kerala</p>
            </div>
            <div class="footer">
                &copy; ${new Date().getFullYear()} Sinan MC. All rights reserved.
            </div>
        </div>
    </body>
    </html>
    `;

    return transporter.sendMail({
        from: `"Sinan MC" <${sender}>`,
        to: data.email,
        subject: `Thank you for contacting Sinan MC!`,
        text: `Hi ${data.name},\n\nThank you for reaching out! I've received your message regarding ${data.service || "your inquiry"} and will get back to you shortly.\n\nBest regards,\nSinan MC\nhttps://wa.me/917510477475`,
        html,
    });
}
