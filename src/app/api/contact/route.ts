

import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { sendContactNotificationEmail, sendUserConfirmationEmail } from "@/lib/mail";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message, phone, service } = body;

        // Simple validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Please fill in all required fields (Name, Email, Message)." },
                { status: 400 }
            );
        }

        // 1. Save to Firebase (safe fallback if firestore fails)
        let savedToFirebase = false;
        try {
            await addDoc(collection(db, "contacts"), {
                name,
                email,
                phone: phone || "Not provided",
                service: service || "Not provided",
                message,
                status: "new",
                source: "contact_form",
                createdAt: serverTimestamp()
            });
            savedToFirebase = true;
        } catch (firebaseError) {
            console.warn("Firestore save warning (non-fatal):", firebaseError);
        }

        // 2. Send email notification via Gmail SMTP
        let emailSent = false;
        try {
            await sendContactNotificationEmail({
                name,
                email,
                phone,
                service,
                message,
            });
            emailSent = true;

            // Send confirmation receipt to user asynchronously
            sendUserConfirmationEmail({
                name,
                email,
                phone,
                service,
                message,
            }).catch((err) => {
                console.warn("Client confirmation email skipped/failed:", err);
            });
        } catch (mailError) {
            console.error("Error sending notification email:", mailError);
        }

        if (!emailSent && !savedToFirebase) {
            return NextResponse.json(
                { error: "Failed to send message. Please try reaching out directly via WhatsApp or phone." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
