"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MouseFollower = dynamic(() => import("@/components/ui/MouseFollower"), {
    ssr: false,
});

const Chatbot = dynamic(() => import("@/components/Chatbot"), {
    ssr: false,
    loading: () => null,
});

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith("/admin");
    const isLandingRoute =
        pathname === "/best-digital-marketer-in-kerala" ||
        pathname?.startsWith("/best-digital-marketer-in-kerala") ||
        pathname === "/landing" ||
        pathname === "/ads" ||
        pathname === "/digital-marketing";
    const isCustomLayout = isAdminRoute || isLandingRoute;
    const [loadChatbot, setLoadChatbot] = useState(false);

    useEffect(() => {
        if (isLandingRoute) return;
        const timer = setTimeout(() => setLoadChatbot(true), 5000);
        return () => clearTimeout(timer);
    }, [isLandingRoute]);

    return (
        <LazyMotion features={domAnimation}>
            {/* Navbar/Footer rendered for standard pages; landing pages use their own minimal navigation and footer */}
            {!isCustomLayout && <Navbar />}
            {!isCustomLayout && <MouseFollower />}
            {children}
            {!isCustomLayout && <Footer />}
            {loadChatbot && !isCustomLayout && <Chatbot />}
        </LazyMotion>
    );
}
