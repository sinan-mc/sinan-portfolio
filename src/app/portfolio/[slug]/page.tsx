import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/portfolio";
import BehanceIcon from "@/components/ui/BehanceIcon";

// SEO Optimization: generateMetadata
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const resolvedParams = await params;
    const project = portfolioProjects.find((p) => p.id === resolvedParams.slug);

    if (!project) {
        return {
            title: "Project Not Found | Sinan MC Malappuram",
        };
    }

    const url = `https://sinanmcmalappuram.in/portfolio/${resolvedParams.slug}`;

    return {
        title: `${project.title} | Portfolio | Sinan MC Malappuram`,
        description: project.shortDescription,
        keywords: [
            project.category,
            "Freelance Web Developer Malappuram",
            "SEO Specialist Malappuram",
            "Digital Marketing",
            ...project.technologies
        ].join(", "),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            url,
            type: "article",
            images: [
                {
                    url: project.image,
                    alt: project.imageAlt || project.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.shortDescription,
            images: [project.image],
        },
    };
}

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const project = portfolioProjects.find((p) => p.id === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-dark w-full overflow-hidden text-white flex flex-col items-center">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[120px] mix-blend-screen animate-float-delayed" />
                <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* Hero Header */}
            <section className="pt-28 sm:pt-32 md:pt-40 pb-10 sm:pb-12 px-4 sm:px-6 md:px-12 w-full max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
                <Link
                    href="/portfolio"
                    className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 group mb-8 sm:mb-10 text-xs sm:text-sm font-medium backdrop-blur-md"
                >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Portfolio
                </Link>

                <div className="flex flex-col gap-4 sm:gap-6 items-center max-w-4xl">
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold tracking-widest uppercase text-[10px] sm:text-xs shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {project.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.2] sm:leading-[1.1] text-balance">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">{project.title}</span>
                    </h1>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:-translate-y-1 text-sm sm:text-base"
                        >
                            {project.link.includes("behance") ? (
                                <>
                                    <BehanceIcon size={18} />
                                    <span>View on Behance</span>
                                </>
                            ) : (
                                <span>Visit Live Website</span>
                            )}
                            <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>
            </section>

            {/* Main Feature Image */}
            <section className="px-4 sm:px-6 md:px-12 w-full max-w-6xl mx-auto mb-16 sm:mb-24 relative z-10">
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden glass-card shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10 opacity-60" />
                    <Image
                        src={project.image}
                        alt={project.imageAlt || `${project.category === 'SEO Projects' ? 'SEO ranking project' : project.title} by Sinan MC Malappuram best Freelance Web Developer & SEO Specialist in Malappuram`}
                        fill
                        priority
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </div>
            </section>

            {/* Content Grid */}
            <section className="px-4 sm:px-6 md:px-12 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 sm:mb-24 relative z-10">

                {/* Left Column (Main Content) */}
                <div className="lg:col-span-7 space-y-12 sm:space-y-16">

                    <div className="prose prose-invert prose-base sm:prose-lg max-w-none">
                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-white m-0">
                                Project Overview
                            </h2>
                        </div>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line font-medium">
                            {project.fullDescription}
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-8 overflow-hidden w-full relative">
                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-white m-0">
                                Screenshots & Proof
                            </h2>
                        </div>

                        {/* Auto-scrolling Marquee Container */}
                        <div className="relative w-full overflow-hidden -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 py-4">
                            {/* Gradient Masks */}
                            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

                            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                                {/* Two identical wrappers to create the 50% shift loop seamlessly */}
                                {[...Array(2)].map((_, wrapperIndex) => (
                                    <div key={`wrapper-${wrapperIndex}`} className="flex items-center">
                                        {[...Array(project.screenshots.length < 2 ? 4 : project.screenshots.length < 4 ? 2 : 1)].map((_, setIndex) => (
                                            <div key={`set-${setIndex}`} className="flex gap-6 sm:gap-8 pr-6 sm:pr-8 items-center">
                                                {project.screenshots.map((imgSrc, index) => (
                                                    <div
                                                        key={`item-${index}`}
                                                        className={`relative rounded-[2rem] overflow-hidden glass-card border border-white/10 shadow-xl flex-shrink-0 group ${project.category === "SMM Projects" || project.category === "AI Automation" ? "w-[300px] h-[375px] sm:w-[450px] sm:h-[562px]" : "w-[320px] h-[180px] sm:w-[640px] sm:h-[360px]"
                                                            }`}
                                                    >
                                                        <Image
                                                            src={imgSrc}
                                                            alt={project.imageAlt ? `${project.imageAlt} - screenshot ${index + 1}` : `${project.title} screenshot ${index + 1} by Sinan MC Malappuram`}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                            sizes={project.category === "SMM Projects" || project.category === "AI Automation" ? "(max-width: 640px) 300px, 450px" : "(max-width: 640px) 320px, 640px"}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="lg:col-span-5 space-y-6 sm:space-y-8">

                    {/* Sticky Container for Sidebar */}
                    <div className="lg:sticky lg:top-32 space-y-6 sm:space-y-8">
                        <div className="glass-card p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-2xl -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 transition-all duration-500 group-hover:bg-primary/10" />
                            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-primary">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </span>
                                SEO Strategy
                            </h3>
                            <ul className="space-y-4">
                                {project.seoStrategy.map((strategy, i) => (
                                    <li key={i} className="flex items-start text-gray-300 group/item">
                                        <span className="text-primary mr-3 mt-1 opacity-70 group-hover/item:opacity-100 transition-opacity">✓</span>
                                        <span className="text-base leading-relaxed">{strategy}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-card p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-accent/5 rounded-full blur-2xl -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 transition-all duration-500 group-hover:bg-accent/10" />
                            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-accent">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </span>
                                Results Achieved
                            </h3>
                            <ul className="space-y-4">
                                {project.results.map((result, i) => (
                                    <li key={i} className="flex items-start text-gray-300 group/item">
                                        <span className="text-accent mr-3 mt-1 opacity-70 group-hover/item:opacity-100 transition-opacity transform group-hover/item:translate-x-1 group-hover/item:-translate-y-1">↗</span>
                                        <span className="text-base leading-relaxed">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-card p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white flex items-center gap-3">
                                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-dark-200/50 border border-white/5 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default backdrop-blur-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="mt-8 sm:mt-10 py-16 sm:py-24 px-4 sm:px-6 w-full relative z-10 bg-noise bg-dark-100 flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-100 -z-10" />
                <div className="max-w-4xl w-full text-center glass-card p-6 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
                    {/* Decorative Blobs */}
                    <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl -mr-32 sm:-mr-40 -mt-32 sm:-mt-40 animate-pulse-slow pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
                    <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent/10 rounded-full blur-3xl -ml-32 sm:-ml-40 -mb-32 sm:-mb-40 animate-pulse-slow pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />

                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 relative z-10 leading-tight">
                        Ready to Build <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Something Extraordinary?</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto relative z-10 px-2 sm:px-0">
                        Partner with the best Freelance Web Developer & SEO Specialist in Malappuram to transform your digital presence and dominate search rankings.
                    </p>

                    <div className="inline-block relative z-10 hover:scale-105 active:scale-95 transition-transform duration-300">
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
                    </div>
                </div>
            </section>
        </main>
    );
}
