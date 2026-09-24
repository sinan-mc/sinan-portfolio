"use client";
import { useState } from "react";

export default function GoogleMap() {
    const [active, setActive] = useState(false);

    return (
        <div
            onClick={() => setActive(true)}
            className="w-full relative h-[350px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-lg cursor-pointer"
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.9120617161384!2d76.0291969!3d10.8942876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b794ff271cc7%3A0xabe6bb1d5fe43d81!2sSinan%20MC%20Malappuram!5e0!3m2!1sen!2sin!4v1772195714648!5m2!1sen!2sin"
                style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: active ? "auto" : "none",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {!active && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        background: "transparent",
                        zIndex: 10,
                    }}
                />
            )}
        </div>
    );
}
