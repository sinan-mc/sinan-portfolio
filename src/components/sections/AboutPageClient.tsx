"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    GraduationCap,
    Briefcase,
    Award,
    Zap,
    CheckCircle2,
    Star,
    Users,
    TrendingUp,
    Search,
    BarChart3,
    FileText,
    Cpu,
    ShieldCheck,
    Rocket,
    Target,
    Code2,
    Bot,
    Smartphone,
} from "lucide-react";

/* ─── Shared transition presets ─── */
const T_DEFAULT = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const };
const T_SLOW = { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const };

/* ─── Wrapper that reveals on scroll using intersection observer ─── */
function Reveal({
    children,
    delay = 0,
    fromLeft = false,
    fromRight = false,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    fromLeft?: boolean;
    fromRight?: boolean;
    className?: string;
}) {
    const xVal = fromLeft ? -40 : fromRight ? 40 : 0;
    return (
        <m.div
            className={className}
            initial={{ opacity: 0, x: xVal, y: xVal === 0 ? 30 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...T_DEFAULT, delay }}
        >
            {children}
        </m.div>
    );
}

/* ─── Staggered list ─── */
function StaggerList({ children }: { children: React.ReactNode }) {
    return (
        <m.ul
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
            } as import("framer-motion").Variants}
        >
            {children}
        </m.ul>
    );
}

/* ─── Animated list item ─── */
function ListItem({ text }: { text: string }) {
    return (
        <m.li
            variants={{
                hidden: { opacity: 0, x: -16 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            } as import("framer-motion").Variants}
            className="flex items-center gap-2.5 text-sm sm:text-base text-gray-300"
        >
            <CheckCircle2 className="shrink-0 w-4 h-4 text-primary" />
            {text}
        </m.li>
    );
}

/* ─── Section overline label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block text-xs font-bold tracking-[0.25em] text-primary uppercase mb-3">
            {children}
        </span>
    );
}

/* ─── Animated gold line ─── */
function GoldLine() {
    return (
        <div className="relative h-[2px] w-20 my-4 overflow-hidden rounded-full bg-white/5">
            <m.div
                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary via-accent to-secondary"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            />
        </div>
    );
}

/* ─── Two-column section layout ─── */
function TwoColSection({
    label,
    heading,
    children,
    className = "",
}: {
    label: string;
    heading: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={`relative z-10 py-16 sm:py-24 lg:py-28 ${className}`}>
            <div className="container mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">
                    {/* Sticky left heading */}
                    <Reveal fromLeft className="lg:sticky lg:top-32">
                        <SectionLabel>{label}</SectionLabel>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                            {heading}
                        </h2>
                        <GoldLine />
                    </Reveal>

                    {/* Right content */}
                    <div>{children}</div>
                </div>
            </div>
        </section>
    );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/*  MAIN PAGE COMPONENT                                     */
/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function AboutPageClient() {
    return (
        <main className="bg-dark text-white overflow-hidden">

            {/* ══════ SECTION 1 — HERO ABOUT ══════ */}
            <section
                className="relative pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden"
                aria-label="About Sinan MC – Freelance Web Developer and SEO Consultant in Malappuram"
            >
                {/* Background effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(255,215,0,0.05),transparent)] pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.025] bg-noise pointer-events-none" />
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

                <div className="container mx-auto px-5 sm:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                        {/* ── LEFT: Text panel ── */}
                        <div className="w-full lg:w-[55%] flex flex-col space-y-6 sm:space-y-8 z-10 order-2 lg:order-1">
                            <div>
                                {/* Overline */}
                                <m.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ...T_DEFAULT, delay: 0.3 }}
                                    className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-5 shadow-[0_0_20px_rgba(255,215,0,0.05)]"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    ABOUT SINAN MC
                                </m.div>

                                {/* H1 */}
                                <m.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ...T_SLOW, delay: 0.4 }}
                                    className="text-[32px] sm:text-4xl md:text-5xl xl:text-[3.5rem] font-bold leading-[1.2] sm:leading-[1.15] tracking-tight"
                                >
                                    <span className="text-white block mb-2 sm:mb-3">Expert Freelance</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#B8860B] animate-gradient-x">
                                        Web Developer & <br className="hidden sm:block" /> SEO Consultant
                                    </span>{" "}
                                    <span className="text-white block mt-2 sm:mt-3">in Malappuram</span>
                                </m.h1>
                            </div>

                            {/* Descriptions */}
                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...T_DEFAULT, delay: 0.52 }}
                                className="space-y-4"
                            >
                                <p className="text-base sm:text-lg text-primary/90 font-medium">
                                    B.Com Graduate & Certified Digital Marketing Expert, Kerala
                                </p>
                                <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg lg:max-w-xl">
                                    I am Sinan MC — a freelance web developer and SEO consultant based in Malappuram. With a B.Com from IGNOU and professional training in{" "}
                                    <Link
                                        href="/best-digital-marketer-in-kerala"
                                        className="text-gray-300 hover:text-primary underline decoration-white/20 hover:decoration-primary underline-offset-2 transition-colors"
                                    >
                                        digital marketing services in Kerala
                                    </Link>{" "}
                                    from Oxdu, Kondotty, I build high-performance websites using Next.js and React, optimised for Core Web Vitals, Google rankings, and real business results.
                                </p>
                            </m.div>

                            {/* Stats row — E-E-A-T proof */}
                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...T_DEFAULT, delay: 0.65 }}
                                className="grid grid-cols-3 gap-3 md:gap-4 max-w-md pt-2"
                            >
                                {[
                                    { icon: TrendingUp, value: "50+", label: "Projects" },
                                    { icon: Users, value: "40+", label: "Clients" },
                                    { icon: Award, value: "2024", label: "Est." },
                                ].map(({ icon: Icon, value, label }) => (
                                    <div key={label} className="relative flex flex-col items-center gap-1.5 p-3 sm:p-4 rounded-xl bg-[#0a0a0a]/50 border border-white/[0.08] backdrop-blur-xl hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,215,0,0.15)] transition-all duration-500 overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-0.5 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                        <span className="text-white font-bold text-xl sm:text-2xl leading-none relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-300">{value}</span>
                                        <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest relative z-10 group-hover:text-gray-300 transition-colors duration-300">{label}</span>
                                    </div>
                                ))}
                            </m.div>

                            {/* Buttons */}
                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...T_DEFAULT, delay: 0.74 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
                            >
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base bg-gradient-to-r from-primary via-[#FFC107] to-accent text-black hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.4)]"
                                >
                                    View Portfolio
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base border border-white/15 bg-white/[0.04] text-white hover:bg-primary/10 hover:border-primary/40 backdrop-blur-xl transition-all duration-300 hover:scale-105"
                                >
                                    Contact Me
                                </Link>
                            </m.div>
                        </div>

                        {/* ── RIGHT: Framed Image panel ── */}
                        <m.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="w-full lg:w-[45%] relative order-1 lg:order-2 flex justify-center"
                        >
                            <div className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-[420px] mx-auto group perspective-1000 mt-8 lg:mt-0">
                                {/* Decor elements */}
                                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-primary/20 to-transparent rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

                                <div className="absolute inset-0 border border-primary/20 rounded-[1.5rem] sm:rounded-[2rem] -rotate-3 transition-transform duration-700 group-hover:-rotate-6 pointer-events-none" />
                                <div className="absolute inset-0 border border-primary/20 rounded-[1.5rem] sm:rounded-[2rem] rotate-3 transition-transform duration-700 group-hover:rotate-6 pointer-events-none" />

                                <div className="relative w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-dark group-hover:border-primary/30 transition-all duration-700 block z-10">
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/20 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-50 pointer-events-none" />
                                    <Image
                                        src="/freelance-web-developer-SEO-specialist-Malappuram.webp"
                                        alt="Sinan MC — digital marketing professional and web developer from Malappuram, Kerala"
                                        width={420}
                                        height={525}
                                        style={{ width: "100%", height: "100%" }}
                                        priority
                                        sizes="(max-width: 768px) 100vw, 420px"
                                        className="object-cover object-top transition-all duration-1000 group-hover:scale-110"
                                    />

                                    {/* Hover Details/Badge */}
                                    <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-20 flex justify-center">
                                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark/80 backdrop-blur-md border border-primary/30 shadow-[0_0_20px_rgba(255,215,0,0.15)] group-hover:-translate-y-2 transition-transform duration-500">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                            </span>
                                            <p className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase">Open for Work</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    </div>
                </div>
            </section>

            {/* ══════ SECTION 2 — WHO I AM ══════ */}
            <TwoColSection
                label="Introduction"
                heading="WHO I AM"
                className="relative"
            >
                {/* Subtle grid bg */}
                <div
                    className="absolute inset-0 -z-10 opacity-[0.025] pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,215,0,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,215,0,0.5) 1px,transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
                <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

                <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
                    {[
                        "Hi there, I'm Sinan MC, a Malappuram-based freelance SEO expert and web developer. I completed my training in digital marketing at Oxdu Training Institute, Kondotty, and I have a B.Com. from IGNOU.",
                        "Everything changed for me after taking that course. Since then, I have been using the knowledge I have gained about SEO, web development, Google Ads, social media marketing, and AI automation for companies in Malappuram.",
                        <span key="para3">These days, I assist companies in Malappuram, Kondotty, Calicut, and Kerala in growing their online presence, generating more leads, and being found on Google. Are you curious what I can do?{" "}<Link href="/contact" className="text-primary hover:text-primary/80 underline underline-offset-2 decoration-primary/30 transition-colors">Come on, let&apos;s talk.</Link></span>,
                    ].map((text, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <p>{text}</p>
                        </Reveal>
                    ))}
                </div>
            </TwoColSection>

            {/* ══════ SECTION 3 — EDUCATION & EXPERTISE ══════ */}
            <TwoColSection
                label="Background"
                heading="EDUCATION AND EXPERTISE"
                className="bg-dark-100"
            >
                <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="space-y-6">
                    {/* B.Com Card */}
                    <Reveal>
                        <div className="glass-card rounded-2xl p-6 sm:p-8 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.12)] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="flex items-start gap-4 mb-4">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white">
                                        Bachelor of Commerce (B.Com)
                                    </h3>
                                    <p className="text-primary text-sm font-medium mt-0.5">
                                        IGNOU – Indira Gandhi National Open University
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                IGNOU helped me get my B.Com, which gave me a good understanding of business and money. That background really helps me when I work with clients because I know what they want, not just what their websites say.
                            </p>
                        </div>
                    </Reveal>

                    {/* Oxdu Digital Marketing Card */}
                    <Reveal delay={0.1}>
                        <div className="glass-card rounded-2xl p-6 sm:p-8 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.12)] transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            {/* Institution */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white">
                                        Digital Marketing Certification
                                    </h3>
                                    <p className="text-primary text-sm font-medium mt-0.5">
                                        Oxdu Training Institute, Kondotty, Malappuram
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-5">Specialised in:</p>

                            <StaggerList>
                                {[
                                    "Search Engine Optimization (SEO)",
                                    "Website Development",
                                    "Search Engine Marketing (SEM)",
                                    "AI Automation",
                                    "Social Media Marketing",
                                    "Google Ranking Strategy",
                                    "Technical SEO",
                                ].map((item) => (
                                    <ListItem key={item} text={item} />
                                ))}
                            </StaggerList>
                        </div>
                    </Reveal>
                </div>
            </TwoColSection>

            {/* ══════ SECTION 4 — PROFESSIONAL EXPERIENCE ══════ */}
            <TwoColSection label="Experience" heading="PROFESSIONAL BACKGROUND">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

                <Reveal>
                    <div className="relative pl-8 border-l-2 border-primary/20">
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-dark shadow-[0_0_16px_rgba(255,215,0,0.5)]" />

                        {/* Date badge */}
                        <div className="mb-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                                <Briefcase className="w-3 h-3" />
                                2024 — Present
                            </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                            Trusted Freelance Web Developer & SEO Consultant
                        </h3>
                        <p className="text-primary text-sm font-medium mb-4">
                            Malappuram, Kerala
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                            I work with small businesses, local shops, and growing brands
                            here in Kerala. No big agency. Just me, fully focused on your
                            results.
                        </p>

                        <p className="text-gray-400 text-sm mb-4">Services include:</p>
                        <StaggerList>
                            {[
                                "Business website development",
                                "Google ranking SEO",
                                "AI automation integration",
                                "Lead generation systems",
                            ].map((item) => (
                                <ListItem key={item} text={item} />
                            ))}
                        </StaggerList>
                    </div>
                </Reveal>
            </TwoColSection>

            {/* ══════ SECTION 5 — CERTIFICATIONS ══════ */}
            <TwoColSection
                label="Credentials"
                heading="PROFESSIONAL CERTIFICATIONS"
                className="bg-dark-100"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { name: "HubSpot Digital Marketing Certification", icon: ShieldCheck },
                        { name: "Semrush SEO Certification", icon: Search },
                        { name: "Google Analytics Certification", icon: BarChart3 },
                        { name: "Content Marketing Certification", icon: FileText },
                        { name: "AI and Automation Certification", icon: Cpu },
                    ].map((cert, i) => (
                        <Reveal key={cert.name} delay={i * 0.08}>
                            <div className="group relative glass-card rounded-2xl p-5 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(255,215,0,0.15)] hover:-translate-y-1 transition-all duration-500 h-full overflow-hidden cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-inner">
                                        <cert.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Award className="w-3.5 h-3.5 text-primary" />
                                            <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                                                Certified
                                            </span>
                                        </div>
                                        <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                                            {cert.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </TwoColSection>

            {/* ══════ SECTION 6 — SKILLS ══════ */}
            <TwoColSection label="Capabilities" heading="MY DIGITAL MARKETING SKILLS">
                <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

                <div className="space-y-5">
                    {[
                        { skill: "SEO", desc: "improving your Google ranking", level: 95 },
                        { skill: "Web Development", desc: "Making websites that are fast and up-to-date", level: 92 },
                        { skill: "SEM", desc: "Paid ads plan", level: 88 },
                        { skill: "AI Automation", desc: "Automating smart business tasks", level: 85 },
                        { skill: "Technical SEO", desc: "", level: 93 },
                        { skill: "Conversion Optimisation", desc: "Optimising for conversions", level: 90 },
                        { skill: "Website Speed Optimisation", desc: "Website speed optimisation", level: 91 },
                    ].map((item, idx) => (
                        <Reveal key={item.skill} delay={idx * 0.07}>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-primary shrink-0" />
                                        <span className="font-semibold text-white text-sm sm:text-base">
                                            {item.skill}
                                        </span>
                                        {item.desc && (
                                            <span className="text-gray-500 text-sm hidden sm:inline">
                                                — {item.desc}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-primary text-sm font-bold">
                                        {item.level}%
                                    </span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <m.div
                                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1.2,
                                            delay: idx * 0.08,
                                            ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                    />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </TwoColSection>

            {/* ══════ SECTION 7 — TOOLS I USE ══════ */}
            <TwoColSection
                label="Toolkit"
                heading="TOOLS I USE"
                className="bg-dark-100"
            >
                <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { icon: Search, name: "Google Search Console", category: "SEO & Analytics" },
                        { icon: BarChart3, name: "Google Analytics 4", category: "SEO & Analytics" },
                        { icon: Rocket, name: "Semrush", category: "Keyword & Competitor Research" },
                        { icon: Target, name: "Ahrefs", category: "Backlink & SEO Analysis" },
                        { icon: Zap, name: "Google PageSpeed Insights", category: "Performance" },
                        { icon: Code2, name: "Next.js / React", category: "Web Development" },
                        { icon: Bot, name: "AI Automation Tools", category: "Automation" },
                        { icon: Smartphone, name: "Google Ads / Meta Ads", category: "Paid Marketing" },
                    ].map((tool, i) => (
                        <Reveal key={tool.name} delay={i * 0.06}>
                            <div className="group relative glass-card rounded-2xl p-4 sm:p-5 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(255,215,0,0.12)] hover:-translate-y-1 transition-all duration-500 h-full overflow-hidden cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-primary/25 group-hover:border-primary/50 transition-all duration-500 shadow-inner">
                                        <tool.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-base font-semibold text-white leading-snug group-hover:text-primary transition-colors duration-300">
                                            {tool.name}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-0.5">{tool.category}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </TwoColSection>

            {/* ══════ SECTION 8 — CTA ══════ */}
            <section className="relative py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[150px] -z-10 pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.025] bg-noise pointer-events-none" />
                <div
                    className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,215,0,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,215,0,0.5) 1px,transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="container mx-auto px-5 sm:px-8 lg:px-12 text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {/* Stars */}
                        <Reveal>
                            <div className="flex items-center justify-center gap-1.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
                                    />
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <p className="text-xs sm:text-sm font-bold tracking-[0.3em] text-primary uppercase">
                                Ready to Grow?
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                                READY TO GROW YOUR{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#B8860B] animate-gradient-x">
                                    BUSINESS ONLINE?
                                </span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                                I&apos;m here to help if you need a website, want to rank on Google, or simply don&apos;t know where to begin with your online presence. No fluff or jargon. Just actual work that produces outcomes.
                            </p>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-sm sm:text-base bg-gradient-to-r from-primary via-[#FFC107] to-accent text-black hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,215,0,0.4),0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden group"
                                >
                                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                    Hire Me
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>

                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-sm sm:text-base border border-white/15 bg-white/[0.04] text-white hover:bg-primary/10 hover:border-primary/40 backdrop-blur-xl transition-all duration-300 hover:scale-105"
                                >
                                    View Portfolio
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main >
    );
}
