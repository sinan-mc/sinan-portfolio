"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, LazyMotion, domAnimation, AnimatePresence, Variants } from "framer-motion";
import { portfolioProjects, ProjectCategory } from "@/data/portfolio";
import BehanceIcon from "@/components/ui/BehanceIcon";

const categories: ("All" | ProjectCategory)[] = [
    "All",
    "SEO Projects",
    "Website Projects",
    "SMM Projects",
    "AI Automation",
];

// Stagger animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function PortfolioClient() {
    const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

    const filteredProjects = useMemo(() => {
        return portfolioProjects.filter((project) =>
            activeCategory === "All" ? true : project.category === activeCategory
        );
    }, [activeCategory]);

    return (
        <LazyMotion features={domAnimation}>
            <main className="min-h-screen bg-dark w-full overflow-hidden flex flex-col items-center">
                {/* Background Decorative Elements */}
                <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] mix-blend-screen animate-float-delayed" />
                    <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
                </div>

                {/* Hero Section */}
                <section className="pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 w-full max-w-7xl relative z-10 flex flex-col items-center text-center">
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl flex flex-col items-center"
                    >
                        <m.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold tracking-widest uppercase text-xs mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            My Creative Work
                        </m.span>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 text-balance tracking-tight leading-[1.2] sm:leading-[1.1]">
                            Portfolio of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">Sinan MC — Malappuram</span> <br />
                            <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-200 mt-2 block">Web Developer &amp; SEO Specialist</span>
                        </h1>

                        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mt-4 sm:mt-6 font-medium">
                            Explore a curated showcase of real client projects, high-ranking SEO results, futuristic AI automation systems, and high-converting websites.
                        </p>

                        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
                            <a
                                href="https://www.behance.net/sinan_mc_malappuram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#0057FF]/15 border border-[#0057FF]/40 text-[#4D8CFF] hover:bg-[#0057FF] hover:text-white transition-all duration-300 text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(0,87,255,0.2)] hover:shadow-[0_0_35px_rgba(0,87,255,0.5)] hover:scale-105 active:scale-95 group"
                            >
                                <BehanceIcon size={18} className="text-[#0057FF] group-hover:text-white transition-colors" />
                                <span>Explore Behance Design Portfolio</span>
                                <svg
                                    className="w-4 h-4 ml-0.5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </m.div>
                </section>

                {/* Filter Section */}
                <section className="py-8 sm:py-10 px-4 sm:px-6 w-full max-w-7xl relative z-10 flex flex-col items-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 md:gap-3 mb-10 sm:mb-16 p-1.5 sm:p-2 rounded-2xl md:rounded-[2rem] bg-dark-200/50 backdrop-blur-xl border border-white/5"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 z-10 ${activeCategory === category
                                    ? "text-dark"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {activeCategory === category && (
                                    <m.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full -z-10 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        ))}
                    </m.div>

                    {/* Projects Grid */}
                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <m.div
                                    key={project.id}
                                    layout
                                    layoutId={`project-${project.id}`}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                    className="group relative flex flex-col rounded-[2rem] bg-dark-100/80 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(255,215,0,0.2)] hover:-translate-y-2"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-dark-200 p-2">
                                        <div className="relative w-full h-full rounded-tr-[1.5rem] rounded-tl-[1.5rem] overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.imageAlt || `Project showcase: ${project.title} by Sinan MC Malappuram`}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={project.category === "SEO Projects"}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60" />
                                        </div>

                                        {/* Floating Category Badge */}
                                        <div className="absolute top-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                            {project.title}
                                        </h3>

                                        <div className="w-full h-1 scale-x-[0.15] origin-left bg-gradient-to-r from-primary to-transparent mb-4 rounded-full transition-[transform,opacity] duration-300 group-hover:scale-x-100 opacity-50 group-hover:opacity-100" />

                                        <p className="text-gray-400 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">
                                            {project.shortDescription}
                                        </p>

                                        <div className="mt-auto flex items-center gap-3">
                                            <Link href={`/portfolio/${project.id}`} className="flex-1 inline-flex items-center group/btn">
                                                <span className="flex items-center justify-center w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-dark hover:border-primary text-primary font-semibold transition-all duration-300 overflow-hidden relative">
                                                    <span className="relative z-10 flex items-center text-xs sm:text-sm">
                                                        View Case Study
                                                        <svg
                                                            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </Link>
                                            {project.link?.includes("behance") && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="View on Behance"
                                                    title="View on Behance"
                                                    className="w-11 h-11 shrink-0 rounded-full bg-[#0057FF]/15 border border-[#0057FF]/40 flex items-center justify-center text-[#4D8CFF] hover:bg-[#0057FF] hover:text-white transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,87,255,0.2)]"
                                                >
                                                    <BehanceIcon size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect inside card */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-[2rem] pointer-events-none transition-colors duration-500" />
                                </m.div>
                            ))}
                        </AnimatePresence>
                    </m.div>

                    {filteredProjects.length === 0 && (
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20 w-full"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dark-200 border border-white/10 mb-6">
                                <svg className="w-10 h-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-300 mb-2">Projects in Progress</h3>
                            <p className="text-gray-500 max-w-md mx-auto">I'm currently putting the finishing touches on projects in this category. Check back soon!</p>
                        </m.div>
                    )}
                </section>

                {/* CTA Section */}
                <section className="mt-16 sm:mt-20 py-16 sm:py-24 px-4 sm:px-6 w-full relative z-10 bg-noise bg-dark-100 flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-100 -z-10" />
                    <div className="max-w-4xl w-full text-center glass-card p-6 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
                        {/* Decorative Blobs */}
                        <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl -mr-32 sm:-mr-40 -mt-32 sm:-mt-40 animate-pulse-slow pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
                        <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent/10 rounded-full blur-3xl -ml-32 sm:-ml-40 -mb-32 sm:-mb-40 animate-pulse-slow pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />

                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 relative z-10 leading-tight">
                            Ready to Build <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Something Extraordinary?</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto relative z-10 px-2 sm:px-0">
                            Partner with a results-driven web developer and SEO specialist based in Malappuram to build your online presence and generate consistent business from Google.
                        </p>

                        <m.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block relative z-10"
                        >
                            <div className="absolute inset-0 bg-primary blur-xl opacity-40 rounded-full" />
                            <Link
                                href="/contact"
                                className="relative px-6 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary via-accent to-secondary text-dark font-black rounded-full text-sm sm:text-lg transition-all flex items-center gap-2 sm:gap-3 border border-white/20 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]"
                            >
                                Start Your Project Now
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </m.div>
                    </div>
                </section>
            </main>
        </LazyMotion>
    );
}

