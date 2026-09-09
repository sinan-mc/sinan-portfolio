"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    Menu,
    X,
    MessageCircle,
    Phone,
    Mail,
    Loader2,
    Instagram,
    Linkedin,
    Facebook,
    Twitter,
    ExternalLink,
    ChevronDown,
} from "lucide-react";

// Conversion tracking helper for Google Ads / GA4
function trackConversion(eventName: string, params?: Record<string, unknown>) {
    if (typeof window !== "undefined") {
        const win = window as unknown as {
            gtag?: (command: string, eventName: string, eventParams?: Record<string, unknown>) => void;
            dataLayer?: unknown[];
        };
        if (typeof win.gtag === "function") {
            win.gtag("event", eventName, params);
        } else if (Array.isArray(win.dataLayer)) {
            win.dataLayer.push({ event: eventName, ...params });
        }
    }
}

// 6 Core Services with Editorial Hierarchy & Topical Depth
const services = [
    {
        number: "01",
        title: "Web Design & Development",
        tagline: "High-performance websites engineered for business conversions.",
        description:
            "Custom, fast-loading, mobile-first websites built with Next.js and clean architecture. Engineered for Core Web Vitals, accessible UX, responsive layouts across devices, and structured conversion paths that turn organic visits into direct inquiries.",
        deliverables: ["Next.js & React", "Core Web Vitals", "Mobile-First UX", "Conversion Paths"],
    },
    {
        number: "02",
        title: "Search Engine Optimization (SEO)",
        tagline: "Sustainable organic visibility for high-intent search terms.",
        description:
            "Comprehensive technical SEO audits, localized search optimization for Kerala businesses, and on-page keyword architecture. Configured with structured JSON-LD schema and Google Search Console indexing to build lasting organic Google rankings.",
        deliverables: ["Technical SEO Audits", "Local Kerala SEO", "Google Search Console", "Structured Schema"],
    },
    {
        number: "03",
        title: "Digital Marketing",
        tagline: "Performance-focused campaigns built for measurable ROI.",
        description:
            "Targeted Google Ads (PPC) and search intent funnels tailored to capture prospective customers actively searching for your services. No vanity metrics—every campaign focuses strictly on qualified inquiries, relevant clicks, and transparent acquisition costs.",
        deliverables: ["Google Ads / PPC", "Search Intent Funnels", "Conversion Tracking", "Lead Generation"],
    },
    {
        number: "04",
        title: "Social Media Marketing",
        tagline: "Strategic brand authority across Instagram and Facebook.",
        description:
            "Consistent social presence combining content strategy, professional visual communication, and audience engagement across Instagram and Facebook to build brand credibility and support your organic conversion pipeline.",
        deliverables: ["Content Strategy", "Instagram & Facebook", "Social Creatives", "Brand Authority"],
    },
    {
        number: "05",
        title: "Graphic & Poster Design",
        tagline: "Editorial promotional creatives with crisp visual hierarchy.",
        description:
            "High-impact marketing creatives, digital advertising banners, and promotional posters designed with disciplined typography, balanced whitespace, and purposeful visual weight crafted in Photoshop to attract attention.",
        deliverables: ["Ad Visuals", "Promotional Posters", "Social Assets", "Print & Display Formats"],
    },
    {
        number: "06",
        title: "Branding & Creative Design",
        tagline: "Cohesive visual identity that commands market trust.",
        description:
            "Distinct digital identities that give your business authority. Comprehensive brand guidelines, logo systems, typographic styling, and cohesive design tokens applied consistently across every digital touchpoint.",
        deliverables: ["Brand Identity Systems", "Logo Mark & Typography", "Visual Guidelines", "Digital Design Assets"],
    },
];

// Why Work With Sinan MC — Editorial Pillars
const editorialPillars = [
    {
        number: "01",
        title: "Direct communication",
        description:
            "You collaborate directly with me from day one through launch. No junior hand-offs, no account managers, and no diluted communication.",
    },
    {
        number: "02",
        title: "Modern development",
        description:
            "Clean, lightweight code built on modern web standards and Next.js. Fast load times, accessible interfaces, and zero technical bloat.",
    },
    {
        number: "03",
        title: "Performance-focused execution",
        description:
            "Every layout, heading, and campaign decision is grounded in real commercial outcomes: search visibility, trust building, and qualified inquiries.",
    },
    {
        number: "04",
        title: "Strategy + design + code aligned",
        description:
            "A unified workflow where visual design, search intent, and technical implementation are conceived together with a single clear direction.",
    },
];

// 4-Step Process
const processSteps = [
    {
        number: "01",
        title: "Understand",
        description: "We analyze your business model, target audience, competitive landscape, and specific commercial targets.",
    },
    {
        number: "02",
        title: "Plan",
        description: "We map the digital strategy, conversion architecture, SEO keyword targets, and design requirements.",
    },
    {
        number: "03",
        title: "Build",
        description: "I design, code, and optimize your digital assets with obsessive attention to typography, speed, and responsiveness.",
    },
    {
        number: "04",
        title: "Improve",
        description: "We monitor performance metrics, analyze real user inquiries, and iterate to strengthen long-term visibility.",
    },
];

// FAQ Items matching Schema
const faqs = [
    {
        question: "What does a digital marketer in Kerala do for a business?",
        answer:
            "A digital marketer helps businesses establish search visibility and gain customers through web design, search engine optimization (SEO), Google Ads campaigns, and social media marketing tailored to their target market.",
    },
    {
        question: "Do you provide SEO services for businesses in Kerala?",
        answer:
            "Yes. I provide comprehensive search engine optimization services including technical SEO audits, on-page optimization, local SEO for Kerala cities, Google Search Console indexing, and organic keyword ranking strategies.",
    },
    {
        question: "Can you build a website and handle digital marketing together?",
        answer:
            "Yes. Combining Next.js web development with SEO and digital marketing ensures your website is architected from the ground up for fast load speeds, Core Web Vitals compliance, and high search engine conversion rates.",
    },
    {
        question: "Do you work with businesses outside Kerala?",
        answer:
            "Yes. While based in Malappuram, Kerala, I work with businesses across India and international clients, managing digital marketing, SEO, and website projects remotely with transparent communication.",
    },
    {
        question: "How long does SEO or a website project usually take?",
        answer:
            "A custom website development project typically takes 2 to 4 weeks depending on scope. Search engine optimization is an ongoing process where initial indexing and keyword improvements appear within weeks, with compounding organic growth over 3 to 6 months.",
    },
];

export default function LandingClient() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");
    const [selectedService, setSelectedService] = useState("Web Design & Development");
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const whatsappUrl =
        "https://wa.me/917510477475?text=Hi%20Sinan,%20I'm%20interested%20in%20your%20digital%20services.%20I'd%20like%20to%20discuss%20my%20project.";

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setStatusMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name")?.toString().trim() || "",
            phone: formData.get("phone")?.toString().trim() || "",
            email: formData.get("email")?.toString().trim() || "",
            service: formData.get("service")?.toString() || selectedService,
            message: formData.get("message")?.toString().trim() || "",
            source: "ads_landing_page",
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Unable to send message. Please contact via WhatsApp directly.");
            }

            setSubmitStatus("success");
            setStatusMessage("Thank you! Your enquiry has been received. I will review your project details and get back to you shortly.");
            form.reset();

            // Track conversion event for Google Ads & GA4
            trackConversion("generate_lead", {
                service: payload.service,
                landing_page: "/best-digital-marketer-in-kerala",
            });
        } catch (err: unknown) {
            setSubmitStatus("error");
            setStatusMessage(err instanceof Error ? err.message : "Something went wrong. Please reach out via WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAF8] text-[#111111] font-sans antialiased selection:bg-[#FFD700] selection:text-black">
            {/* ── 1. MINIMAL EDITORIAL NAVIGATION ── */}
            <header className="sticky top-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E8E5]">
                <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
                    {/* Brand Wordmark */}
                    <Link
                        href="/"
                        className="flex items-baseline gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded group"
                        aria-label="Sinan MC Homepage"
                    >
                        <span className="text-lg sm:text-xl font-bold tracking-tight text-[#111111]">
                            SINAN
                        </span>
                        <span className="text-lg sm:text-xl font-black italic text-[#FFD700] drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
                            MC
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav
                        aria-label="Landing Page Navigation"
                        className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-[#5F6368]"
                    >
                        <a href="#services" className="hover:text-[#111111] transition-colors">
                            Services
                        </a>
                        <a href="#work" className="hover:text-[#111111] transition-colors">
                            Work
                        </a>
                        <a href="#about" className="hover:text-[#111111] transition-colors">
                            About
                        </a>
                        <a href="#faq" className="hover:text-[#111111] transition-colors">
                            FAQ
                        </a>
                        <a href="#contact" className="hover:text-[#111111] transition-colors">
                            Contact
                        </a>
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#111111] text-white text-xs sm:text-sm font-medium hover:bg-black hover:shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                        >
                            Start a Project
                        </a>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-[#E8E8E5]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Drawer Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-b border-[#E8E8E5] bg-[#FAFAF8] px-5 py-5 flex flex-col gap-3.5 animate-fade-in">
                        <a
                            href="#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-medium text-[#5F6368] hover:text-[#111111] py-1 transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#work"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-medium text-[#5F6368] hover:text-[#111111] py-1 transition-colors"
                        >
                            Work
                        </a>
                        <a
                            href="#about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-medium text-[#5F6368] hover:text-[#111111] py-1 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#faq"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-medium text-[#5F6368] hover:text-[#111111] py-1 transition-colors"
                        >
                            FAQ
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-medium text-[#5F6368] hover:text-[#111111] py-1 transition-colors"
                        >
                            Contact
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-center py-2.5 rounded-lg bg-[#111111] text-white font-medium text-sm mt-2 transition-colors"
                        >
                            Start a Project
                        </a>
                    </div>
                )}
            </header>

            <main role="main">
                {/* ── 2. EDITORIAL HERO SECTION ── */}
                <section
                    className="pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 border-b border-[#E8E8E5]"
                    aria-label="Introduction"
                >
                    <div className="max-w-6xl mx-auto px-5 sm:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                            {/* Left Text & Narrative */}
                            <div className="lg:col-span-7 flex flex-col items-start">
                                {/* Small Eyebrow with subtle brand dot */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E8E8E5] text-[11px] sm:text-xs font-semibold tracking-wider text-[#5F6368] uppercase mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                                    <span>DIGITAL MARKETING · SEO · WEB DEVELOPMENT · KERALA</span>
                                </div>

                                {/* Semantic Editorial H1 */}
                                <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-[#111111] leading-[1.14] tracking-tight mb-6">
                                    Digital Marketing &amp; Web Development for Kerala Businesses
                                </h1>

                                {/* Supporting Copy — establishes core identity within ~100 words */}
                                <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed max-w-xl mb-8">
                                    Sinan MC is an independent digital marketer and web developer in Kerala, helping businesses improve search visibility, build high-performance websites and generate meaningful enquiries.
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-7">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#111111] text-white text-sm font-semibold hover:bg-black hover:shadow-md transition-all group"
                                    >
                                        <span>Start a Project</span>
                                        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                    <a
                                        href="#work"
                                        className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 rounded-lg border border-[#E8E8E5] bg-[#FFFFFF] hover:bg-[#FAFAF8] hover:border-[#111111]/30 text-[#111111] font-medium text-sm transition-all"
                                    >
                                        View Selected Work
                                    </a>
                                </div>

                                {/* Trust Statement */}
                                <div className="flex items-center gap-2.5 text-xs text-[#5F6368]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/40" />
                                    <span>Independent Specialist · Strategy, Design &amp; Code · Malappuram, Kerala</span>
                                </div>
                            </div>

                            {/* Right Editorial Portrait Composition */}
                            <div className="lg:col-span-5 flex justify-center lg:justify-end">
                                <div className="w-full max-w-[340px] sm:max-w-[380px] flex flex-col">
                                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F0EFEA] border border-[#E8E8E5] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                                        <Image
                                            src="/freelance-web-developer-SEO-specialist-Malappuram.webp"
                                            alt="Sinan MC, independent digital marketer and web developer in Kerala"
                                            width={420}
                                            height={525}
                                            priority
                                            className="w-full h-full object-cover object-top filter contrast-[1.02]"
                                            sizes="(max-width: 640px) 300px, 380px"
                                        />
                                    </div>
                                    <div className="mt-3 flex items-center justify-between text-xs text-[#5F6368] px-1">
                                        <span className="font-medium text-[#111111]">Sinan MC</span>
                                        <span>Digital Consultant &amp; Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 3. SERVICES SECTION: WHAT I CAN HELP YOU BUILD ── */}
                <section id="services" className="py-20 sm:py-28 border-b border-[#E8E8E5]" aria-label="Services">
                    <div className="max-w-6xl mx-auto px-5 sm:px-8">
                        {/* Section Header */}
                        <div className="max-w-2xl mb-14 sm:mb-16">
                            <span className="text-xs font-semibold tracking-wider text-[#5F6368] uppercase block mb-2">
                                Services
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                                What I Can Help You Build
                            </h2>
                            <p className="text-sm sm:text-base text-[#5F6368] mt-3 leading-relaxed">
                                Focused digital services for businesses that want a stronger online presence and sustainable organic growth.
                            </p>
                        </div>

                        {/* 2-Column Editorial List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 sm:gap-y-12">
                            {services.map((item) => (
                                <div
                                    key={item.number}
                                    className="pt-6 border-t border-[#E8E8E5] flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-baseline justify-between mb-2">
                                            <span className="text-xs font-mono font-medium text-[#5F6368]">
                                                {item.number}
                                            </span>
                                            <a
                                                href="#contact"
                                                className="text-xs text-[#5F6368] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium"
                                            >
                                                <span>Inquire</span>
                                                <ArrowUpRight size={13} />
                                            </a>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-1.5 group-hover:text-black transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-medium text-[#111111]/80 mb-3">
                                            {item.tagline}
                                        </p>
                                        <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Subtle deliverables tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-3">
                                        {item.deliverables.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[11px] font-medium text-[#5F6368] bg-[#FFFFFF] px-2.5 py-0.5 rounded border border-[#E8E8E5]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 4. WHY WORK WITH ME (EDITORIAL SPLIT & CREDENTIALS) ── */}
                <section id="about" className="py-20 sm:py-28 border-b border-[#E8E8E5]" aria-label="Why Work With Me">
                    <div className="max-w-6xl mx-auto px-5 sm:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                            {/* Left Column: Bold Typographic Statement & Credentials */}
                            <div className="lg:col-span-5 lg:sticky lg:top-28">
                                <span className="text-xs font-semibold tracking-wider text-[#5F6368] uppercase block mb-3">
                                    The Approach
                                </span>
                                <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight leading-tight mb-6">
                                    One person.
                                    <br />
                                    One clear direction.
                                    <br />
                                    Everything digital.
                                </h2>
                                <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed mb-6">
                                    Traditional agencies frequently divide your project across account managers, junior designers, and outsourced developers. Critical nuances get lost in translation.
                                </p>
                                <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed mb-8">
                                    Working directly with an independent specialist gives your business direct communication, clear accountability, and a coherent vision where design, search optimization, and development work together smoothly.
                                </p>

                                {/* Truthful E-E-A-T Credential Block */}
                                <div className="p-4 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] space-y-2">
                                    <div className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                                        Verified Background
                                    </div>
                                    <div className="text-xs text-[#5F6368] space-y-1">
                                        <p>• Bachelor of Commerce (B.Com) — IGNOU</p>
                                        <p>• Digital Marketing Certification — Oxdu Training Institute, Kondotty</p>
                                        <p>• Hands-on web engineering &amp; multi-city SEO execution</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: 4 Editorial Points */}
                            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
                                {editorialPillars.map((point) => (
                                    <div
                                        key={point.number}
                                        className="pt-6 border-t border-[#E8E8E5] first:pt-0 first:border-t-0"
                                    >
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <span className="text-xs font-mono font-medium text-[#5F6368]">
                                                {point.number}
                                            </span>
                                            <h3 className="text-base sm:text-lg font-bold text-[#111111]">
                                                {point.title}
                                            </h3>
                                        </div>
                                        <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed pl-7">
                                            {point.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 5. SELECTED WORK (MAJOR VISUAL SECTION) ── */}
                <section id="work" className="py-20 sm:py-28 border-b border-[#E8E8E5]" aria-label="Selected Projects">
                    <div className="max-w-6xl mx-auto px-5 sm:px-8">
                        {/* Section Header */}
                        <div className="max-w-2xl mb-14 sm:mb-16">
                            <span className="text-xs font-semibold tracking-wider text-[#5F6368] uppercase block mb-2">
                                Proof of Work
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                                Selected Work
                            </h2>
                            <p className="text-sm sm:text-base text-[#5F6368] mt-3 leading-relaxed">
                                Real projects across websites, SEO and digital creatives with practical commercial focus.
                            </p>
                        </div>

                        {/* Varied Editorial Project Presentations */}
                        <div className="space-y-14 sm:space-y-16">
                            {/* Project 1: Featured Hero Project (MindBeat Healing Center) */}
                            <div className="bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#111111]/20 transition-all group">
                                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                                    <div className="lg:col-span-7 relative aspect-[16/10] bg-[#F5F5F3] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E8E8E5]">
                                        <Image
                                            src="/best-web-developer-in-kerala-project2.webp"
                                            alt="MindBeat Healing Center Website Design and Development by Sinan MC"
                                            width={720}
                                            height={450}
                                            className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500"
                                            sizes="(max-width: 1024px) 100vw, 650px"
                                        />
                                    </div>
                                    <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                                        <div>
                                            <div className="inline-block text-[11px] font-semibold text-[#5F6368] uppercase tracking-wider mb-3">
                                                Web Design &amp; Development
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3">
                                                MindBeat Healing Center
                                            </h3>
                                            <div className="text-xs sm:text-sm text-[#5F6368] space-y-2 mb-6 leading-relaxed">
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Challenge:</strong> A healthcare counseling clinic needed an approachable, fast-loading digital touchpoint to replace fragmented communication.
                                                </p>
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Solution:</strong> Designed and developed a responsive Next.js website with empathetic layout hierarchy, intuitive appointment enquiry pathways, and local SEO structure.
                                                </p>
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Outcome:</strong> Sub-second loading speeds, improved mobile navigation, and seamless direct consultation enquiries.
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 mb-8">
                                                {["Next.js", "Responsive UX", "Local SEO", "Fast PageSpeed"].map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-[11px] font-medium text-[#5F6368] bg-[#FAFAF8] px-2.5 py-0.5 rounded border border-[#E8E8E5]"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <a
                                                href="https://mindbeathealing.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111111] hover:text-black group/link"
                                            >
                                                <span>View Live Project</span>
                                                <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project 2: Wide Split Layout (Best Shine Cleaning Services) */}
                            <div className="bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#111111]/20 transition-all group">
                                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                                    <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between order-2 lg:order-1">
                                        <div>
                                            <div className="inline-block text-[11px] font-semibold text-[#5F6368] uppercase tracking-wider mb-3">
                                                Website &amp; Lead Generation
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3">
                                                Best Shine Cleaning Services
                                            </h3>
                                            <div className="text-xs sm:text-sm text-[#5F6368] space-y-2 mb-6 leading-relaxed">
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Challenge:</strong> A UAE cleaning contractor required strong web credibility and frictionless quote submissions for high-intent queries.
                                                </p>
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Solution:</strong> Built a conversion-engineered corporate website featuring instant-quote form inputs, service-specific landing structure, and clean on-page technical SEO.
                                                </p>
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Outcome:</strong> Enhanced brand presentation with structured enquiry capture and streamlined customer touchpoints.
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 mb-8">
                                                {["Service Pages", "Lead Capture", "Organic SEO", "Commercial Queries"].map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-[11px] font-medium text-[#5F6368] bg-[#FAFAF8] px-2.5 py-0.5 rounded border border-[#E8E8E5]"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <a
                                                href="https://bestshinecleaningservices.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111111] hover:text-black group/link"
                                            >
                                                <span>Visit Live Website</span>
                                                <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-7 relative aspect-[16/10] bg-[#F5F5F3] overflow-hidden border-b lg:border-b-0 lg:border-l border-[#E8E8E5] order-1 lg:order-2">
                                        <Image
                                            src="/best-web-developer-in-kerala-project1.webp"
                                            alt="Best Shine Cleaning Services Website by Sinan MC"
                                            width={720}
                                            height={450}
                                            className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500"
                                            sizes="(max-width: 1024px) 100vw, 650px"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Projects 3 & 4: Two-Column Complementary Projects */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                                {/* Digisinans SEO Ranking Proof */}
                                <div className="bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#111111]/20 transition-all flex flex-col justify-between group">
                                    <div>
                                        <div className="relative aspect-[16/10] bg-[#F5F5F3] overflow-hidden border-b border-[#E8E8E5]">
                                            <Image
                                                src="/digisinans-kerala-ranking-proof.webp"
                                                alt="Digisinans SEO Search Ranking Proof across Kerala locations"
                                                width={550}
                                                height={340}
                                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 550px"
                                            />
                                        </div>
                                        <div className="p-6 sm:p-7">
                                            <div className="text-[11px] font-semibold text-[#5F6368] uppercase tracking-wider mb-2">
                                                Search Engine Optimization
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-2">
                                                Digisinans — Search Ranking Case Study
                                            </h3>
                                            <div className="text-xs sm:text-sm text-[#5F6368] space-y-1.5 mb-4 leading-relaxed">
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Challenge:</strong> Building search footprint across competitive multi-city Kerala keywords.
                                                </p>
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Execution:</strong> Implemented structured schema data, technical site health audits, and localized search optimization.
                                                </p>
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Outcome:</strong> Achieved verified Google search visibility and steady organic search impressions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 sm:px-7 pb-6">
                                        <Link
                                            href="/portfolio/digisinans-kerala"
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-black group/link"
                                        >
                                            <span>Read SEO Case Study</span>
                                            <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Qland Ad Creatives & Posters */}
                                <div className="bg-[#FFFFFF] rounded-xl border border-[#E8E8E5] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#111111]/20 transition-all flex flex-col justify-between group">
                                    <div>
                                        <div className="relative aspect-[16/10] bg-[#F5F5F3] overflow-hidden border-b border-[#E8E8E5]">
                                            <Image
                                                src="/social-media-poster-1.webp"
                                                alt="Qland Advertising Poster Design by Sinan MC"
                                                width={550}
                                                height={340}
                                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 550px"
                                            />
                                        </div>
                                        <div className="p-6 sm:p-7">
                                            <div className="text-[11px] font-semibold text-[#5F6368] uppercase tracking-wider mb-2">
                                                Graphic Design &amp; Creatives
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-2">
                                                Qland — Campaign Poster Design
                                            </h3>
                                            <div className="text-xs sm:text-sm text-[#5F6368] space-y-1.5 mb-4 leading-relaxed">
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Challenge:</strong> Creating promotional posters that cut through visual clutter across social and print.
                                                </p>
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Execution:</strong> Designed advertising creatives with disciplined typography, high-contrast layouts, and clear CTA focal points.
                                                </p>
                                                <p>
                                                    <strong className="text-[#111111] font-semibold">Outcome:</strong> Professional marketing presentation that reinforces brand credibility.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 sm:px-7 pb-6">
                                        <Link
                                            href="/portfolio/qland-poster-design"
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-black group/link"
                                        >
                                            <span>View Creative Details</span>
                                            <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Link to all projects */}
                        <div className="mt-12 text-center">
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111111] hover:underline"
                            >
                                <span>View all projects in portfolio</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── 6. PROCESS SECTION (HORIZONTAL EDITORIAL TIMELINE) ── */}
                <section className="py-20 sm:py-28 border-b border-[#E8E8E5]" aria-label="Process">
                    <div className="max-w-6xl mx-auto px-5 sm:px-8">
                        {/* Section Header */}
                        <div className="max-w-2xl mb-14 sm:mb-16">
                            <span className="text-xs font-semibold tracking-wider text-[#5F6368] uppercase block mb-2">
                                Method
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                                How I Work
                            </h2>
                            <p className="text-sm sm:text-base text-[#5F6368] mt-3 leading-relaxed">
                                A simple, transparent 4-step workflow to keep projects organized and moving forward.
                            </p>
                        </div>

                        {/* Horizontal Timeline on Desktop, Stacked on Mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                            {processSteps.map((step) => (
                                <div
                                    key={step.number}
                                    className="pt-6 border-t border-[#E8E8E5] flex flex-col"
                                >
                                    <span className="text-sm font-mono font-bold text-[#111111] mb-3 block">
                                        {step.number}
                                    </span>
                                    <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 7. SEO POSITIONING (EDITORIAL PERSPECTIVE) ── */}
                <section className="py-20 sm:py-24 border-b border-[#E8E8E5]" aria-label="SEO Positioning">
                    <div className="max-w-6xl mx-auto px-5 sm:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                            {/* Left: Large Editorial Statement */}
                            <div className="lg:col-span-5">
                                <span className="text-xs font-semibold tracking-wider text-[#5F6368] uppercase block mb-3">
                                    Perspective
                                </span>
                                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111111] tracking-tight leading-tight">
                                    Digital Marketing That Connects Visibility With Real Business Goals.
                                </h2>
                            </div>

                            {/* Right: Clean, Natural Paragraphs explaining how channels interact */}
                            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                                <p>
                                    People searching for the{" "}
                                    <strong className="font-semibold text-[#111111]">
                                        best digital marketer in Kerala
                                    </strong>{" "}
                                    are usually comparing experience, communication, technical capability and real project work. The right choice is not simply the person making the biggest claim; it is the professional who can connect strategy with execution.
                                </p>
                                <p>
                                    A visually attractive website delivers little value if prospective clients cannot find it on Google, while driving paid traffic to a sluggish, poorly structured page simply wastes ad budget. Search engine optimization provides compounding organic discoverability, modern Next.js development ensures high-speed user conversion, and targeted Google Ads capture immediate high-intent customer demand.
                                </p>
                                <p>
                                    When supported by consistent social media branding across Instagram and Facebook, these elements work together as an integrated acquisition system. As an independent digital marketer in Kerala, I implement each of these components directly—ensuring technical precision, transparent metrics, and alignment with your genuine commercial goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 8. COMPACT EDITORIAL FAQ SECTION ── */}
                <section id="faq" className="py-20 sm:py-28 border-b border-[#E8E8E5]" aria-label="Frequently Asked Questions">
                    <div className="max-w-4xl mx-auto px-5 sm:px-8">
                        {/* Section Header */}
                        <div className="max-w-2xl mb-12 sm:mb-14">
                            <span className="text-xs font-semibold tracking-wider text-[#5F6368] uppercase block mb-2">
                                FAQ
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-sm sm:text-base text-[#5F6368] mt-3 leading-relaxed">
                                Straightforward answers on services, process, timelines and working together.
                            </p>
                        </div>

                        {/* Accordion List */}
                        <div className="divide-y divide-[#E8E8E5] border-y border-[#E8E8E5]">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div key={index} className="py-5 sm:py-6">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded group"
                                            aria-expanded={isOpen}
                                        >
                                            <h3 className="text-sm sm:text-base font-bold text-[#111111] group-hover:text-black transition-colors">
                                                {faq.question}
                                            </h3>
                                            <span
                                                className={`p-1 rounded-full text-[#5F6368] group-hover:text-[#111111] transition-transform duration-200 shrink-0 ${
                                                    isOpen ? "rotate-180" : ""
                                                }`}
                                            >
                                                <ChevronDown size={18} />
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className="mt-3.5 pr-8 text-xs sm:text-sm text-[#5F6368] leading-relaxed animate-fade-in">
                                                <p>{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── 9. COMPACT CONVERSION CONTACT SECTION ── */}
                <section id="contact" className="py-20 sm:py-28 border-b border-[#E8E8E5] bg-[#FFFFFF]" aria-label="Contact">
                    <div className="max-w-5xl mx-auto px-5 sm:px-8">
                        {/* Section Header */}
                        <div className="max-w-2xl mb-12 sm:mb-14">
                            <span className="text-xs font-semibold tracking-wider text-[#5F6368] uppercase block mb-2">
                                Start a Conversation
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                                Have a Project in Mind?
                            </h2>
                            <p className="text-sm sm:text-base text-[#5F6368] mt-3 leading-relaxed">
                                Tell me what you&apos;re building and I&apos;ll get back to you with a clear roadmap.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                            {/* Left: Compact, High-Conversion Form */}
                            <div className="lg:col-span-7 bg-[#FAFAF8] p-6 sm:p-8 rounded-xl border border-[#E8E8E5]">
                                {submitStatus === "success" ? (
                                    <div className="py-10 text-center flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center mb-4">
                                            <Check size={22} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-2">
                                            Enquiry Sent Successfully
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#5F6368] max-w-sm mb-6 leading-relaxed">
                                            {statusMessage}
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                                            <button
                                                onClick={() => setSubmitStatus("idle")}
                                                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#E8E8E5] bg-[#FFFFFF] text-xs font-semibold text-[#111111] hover:bg-[#FAFAF8] transition-colors"
                                            >
                                                Send Another Note
                                            </button>
                                            <a
                                                href={whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#111111] text-white text-xs font-semibold hover:bg-black transition-colors"
                                            >
                                                <MessageCircle size={14} />
                                                <span>Continue on WhatsApp</span>
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        {submitStatus === "error" && (
                                            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs leading-relaxed">
                                                {statusMessage}
                                            </div>
                                        )}

                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-semibold text-[#111111] mb-1.5">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="e.g. Rahul Nair or Company Name"
                                                className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] text-[#111111] placeholder-[#5F6368]/60 text-xs sm:text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-colors"
                                            />
                                        </div>

                                        {/* Contact Grid: Phone & Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                            <div>
                                                <label htmlFor="phone" className="block text-xs font-semibold text-[#111111] mb-1.5">
                                                    Phone / WhatsApp <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    placeholder="+91 98765 43210"
                                                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] text-[#111111] placeholder-[#5F6368]/60 text-xs sm:text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-xs font-semibold text-[#111111] mb-1.5">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="you@company.com"
                                                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] text-[#111111] placeholder-[#5F6368]/60 text-xs sm:text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Compact Service Dropdown */}
                                        <div>
                                            <label htmlFor="service" className="block text-xs font-semibold text-[#111111] mb-1.5">
                                                Service Required <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={selectedService}
                                                onChange={(e) => setSelectedService(e.target.value)}
                                                className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] text-[#111111] text-xs sm:text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-colors"
                                            >
                                                <option value="Web Design & Development">Web Design &amp; Development</option>
                                                <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                                                <option value="Digital Marketing">Digital Marketing &amp; Google Ads</option>
                                                <option value="Social Media Marketing">Social Media Marketing</option>
                                                <option value="Graphic & Poster Design">Graphic &amp; Poster Design</option>
                                                <option value="Branding & Creative Design">Branding &amp; Creative Design</option>
                                                <option value="Complete Digital Growth Package">Complete Digital Growth Package</option>
                                            </select>
                                        </div>

                                        {/* Compact Message Textarea */}
                                        <div>
                                            <label htmlFor="message" className="block text-xs font-semibold text-[#111111] mb-1.5">
                                                Project Brief <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={3}
                                                required
                                                placeholder="Tell me briefly about your business goals, timeline, or current website..."
                                                className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] text-[#111111] placeholder-[#5F6368]/60 text-xs sm:text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-colors resize-none"
                                            />
                                        </div>

                                        {/* Primary Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3 rounded-lg bg-[#111111] hover:bg-black text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60 shadow-sm"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 size={15} className="animate-spin" />
                                                    <span>Sending enquiry...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Enquiry</span>
                                                    <ArrowRight size={14} />
                                                </>
                                            )}
                                        </button>

                                        {/* Alternative WhatsApp Link */}
                                        <div className="pt-2 text-center">
                                            <a
                                                href={whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => trackConversion("whatsapp_click", { location: "contact_form_alternative" })}
                                                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5F6368] hover:text-[#111111] transition-colors"
                                            >
                                                <MessageCircle size={14} />
                                                <span>Prefer WhatsApp? Chat directly with Sinan →</span>
                                            </a>
                                        </div>
                                    </form>
                                )}
                            </div>

                            {/* Right: Direct Information Panel */}
                            <div className="lg:col-span-5 space-y-6">
                                <div className="p-6 sm:p-7 rounded-xl border border-[#E8E8E5] bg-[#FAFAF8]">
                                    <h3 className="text-xs font-semibold text-[#5F6368] uppercase tracking-wider mb-4">
                                        Direct Communication
                                    </h3>

                                    <div className="space-y-4 text-xs sm:text-sm">
                                        {/* WhatsApp */}
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => trackConversion("whatsapp_click", { location: "contact_panel" })}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] hover:border-[#111111]/30 transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded bg-[#FAFAF8] border border-[#E8E8E5] flex items-center justify-center text-[#111111] shrink-0">
                                                <MessageCircle size={15} />
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                                <span className="text-[10px] text-[#5F6368] uppercase font-medium">WhatsApp</span>
                                                <span className="font-semibold text-[#111111] group-hover:underline truncate">+91 7510 477 475</span>
                                            </div>
                                        </a>

                                        {/* Phone */}
                                        <a
                                            href="tel:+917510477475"
                                            onClick={() => trackConversion("phone_click", { phone: "+917510477475" })}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] hover:border-[#111111]/30 transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded bg-[#FAFAF8] border border-[#E8E8E5] flex items-center justify-center text-[#111111] shrink-0">
                                                <Phone size={15} />
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                                <span className="text-[10px] text-[#5F6368] uppercase font-medium">Direct Call</span>
                                                <span className="font-semibold text-[#111111] group-hover:underline truncate">+91 7510 477 475</span>
                                            </div>
                                        </a>

                                        {/* Email */}
                                        <a
                                            href="mailto:sinanmc46@gmail.com"
                                            onClick={() => trackConversion("email_click", { email: "sinanmc46@gmail.com" })}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-[#FFFFFF] border border-[#E8E8E5] hover:border-[#111111]/30 transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded bg-[#FAFAF8] border border-[#E8E8E5] flex items-center justify-center text-[#111111] shrink-0">
                                                <Mail size={15} />
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                                <span className="text-[10px] text-[#5F6368] uppercase font-medium">Email</span>
                                                <span className="font-semibold text-[#111111] group-hover:underline truncate">sinanmc46@gmail.com</span>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-[#E8E8E5] text-[11px] text-[#5F6368] leading-relaxed">
                                        Based in Malappuram, Kerala. Delivering digital services for businesses across Kerala, India, and internationally.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 10. FINAL CALL TO ACTION ── */}
                <section className="py-20 sm:py-28 border-b border-[#E8E8E5] text-center" aria-label="Final Call to Action">
                    <div className="max-w-3xl mx-auto px-5 sm:px-8">
                        <h2 className="text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight mb-4">
                            Let&apos;s build something worth finding.
                        </h2>
                        <p className="text-sm sm:text-base text-[#5F6368] mb-8 max-w-xl mx-auto leading-relaxed">
                            Websites, SEO, digital marketing and creative work for businesses ready to grow.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                            <a
                                href="#contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 sm:py-3.5 rounded-lg bg-[#111111] text-white text-sm font-semibold hover:bg-black hover:shadow-md transition-all"
                            >
                                Start a Project
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackConversion("whatsapp_click", { location: "final_cta" })}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-lg border border-[#E8E8E5] bg-[#FFFFFF] hover:bg-[#FAFAF8] text-[#111111] font-medium text-sm transition-all"
                            >
                                <MessageCircle size={15} />
                                <span>WhatsApp Me</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* ── 11. MINIMAL EDITORIAL FOOTER ── */}
            <footer className="py-10 bg-[#FAFAF8] text-[#5F6368] text-xs">
                <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Left: Brand & Title */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
                        <span className="font-bold text-[#111111] tracking-tight">SINAN MC</span>
                        <span className="hidden sm:inline text-[#E8E8E5]">|</span>
                        <span>Independent Digital Marketer &amp; Web Developer</span>
                    </div>

                    {/* Center: Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.instagram.com/sinan_mc_malappuram?igsh=Mzl5MGFhem1mY2g1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Sinan MC on Instagram"
                            className="p-1 text-[#5F6368] hover:text-[#111111] transition-colors"
                        >
                            <Instagram size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mhd-sinan-mc"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Sinan MC on LinkedIn"
                            className="p-1 text-[#5F6368] hover:text-[#111111] transition-colors"
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href="https://www.facebook.com/share/1KaYZRrGny/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Sinan MC on Facebook"
                            className="p-1 text-[#5F6368] hover:text-[#111111] transition-colors"
                        >
                            <Facebook size={16} />
                        </a>
                        <a
                            href="https://x.com/mc_sinan3229"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Sinan MC on X"
                            className="p-1 text-[#5F6368] hover:text-[#111111] transition-colors"
                        >
                            <Twitter size={16} />
                        </a>
                    </div>

                    {/* Right: Legal & Navigation */}
                    <div className="flex items-center gap-3 text-[#5F6368]">
                        <span>© 2026 Sinan MC</span>
                        <span>·</span>
                        <Link href="/privacy-policy" className="hover:text-[#111111] transition-colors">
                            Privacy
                        </Link>
                        <span>·</span>
                        <Link href="/terms-conditions" className="hover:text-[#111111] transition-colors">
                            Terms
                        </Link>
                        <span>·</span>
                        <Link href="/" className="hover:text-[#111111] transition-colors">
                            Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
