// Server Component — no "use client", no framer-motion.
// All motion.div whileInView wrappers replaced with plain HTML.
// This removes ~50KB of Framer Motion from the footer's JS chunk.
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight, Instagram, Linkedin, Facebook, Twitter, MessageCircle } from "lucide-react";
import BehanceIcon from "@/components/ui/BehanceIcon";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sinan MC Malappuram",
    "image": "https://sinanmcmalappuram.in/logo.png",
    "description": "Best freelance web developer & SEO specialist in Malappuram, Kerala, helping businesses grow with modern websites, SEO, and AI automation solutions.",
    "telephone": "+917510477475",
    "email": "sinanmc46@gmail.com",
    "priceRange": "₹₹",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tirur",
        "addressLocality": "Malappuram",
        "addressRegion": "Kerala",
        "postalCode": "676101",
        "addressCountry": "IN"
    },
    "url": "https://sinanmcmalappuram.in",
    "sameAs": [
        "https://www.instagram.com/sinan_mc_malappuram?igsh=Mzl5MGFhem1mY2g1",
        "https://www.linkedin.com/in/mhd-sinan-mc",
        "https://www.behance.net/sinan_mc_malappuram",
        "https://www.facebook.com/share/1KaYZRrGny/",
        "https://x.com/mc_sinan3229"
    ]
};

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" },
];

const services = [
    { name: "Web Dev", href: "/#services" },
    { name: "SEO", href: "/#services" },
    { name: "Digital Marketing", href: "/best-digital-marketer-in-kerala" },
    { name: "SMM", href: "/#services" },
    { name: "SEM", href: "/#services" },
    { name: "AI Automation", href: "/#services" },
    { name: "Branding", href: "/#services" },
];

const socials = [
    { Icon: Instagram, href: "https://www.instagram.com/sinan_mc_malappuram?igsh=Mzl5MGFhem1mY2g1", label: "Instagram" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/mhd-sinan-mc", label: "LinkedIn" },
    { Icon: BehanceIcon, href: "https://www.behance.net/sinan_mc_malappuram", label: "Behance" },
    { Icon: Facebook, href: "https://www.facebook.com/share/1KaYZRrGny/", label: "Facebook" },
    { Icon: Twitter, href: "https://x.com/mc_sinan3229", label: "Twitter" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group w-full py-1.5 px-3 -ml-3 rounded-lg hover:bg-white/[0.03] focus:outline-none focus:bg-white/[0.03] focus:text-white border border-transparent hover:border-white/5"
        >
            <ArrowRight size={14} className="text-[#FFD700] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0A0A] border-t border-white/5 pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Background effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-64 bg-[#FFD700]/[0.08] blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-full overflow-hidden">
                {/* Main layout: side-by-side links on mobile, 4 columns on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 md:gap-12 lg:gap-8 mb-12 md:mb-20">

                    {/* Column 1: Brand Info (Full width on mobile/tablet) */}
                    <div className="col-span-2 lg:col-span-4 flex flex-col gap-5 md:gap-6">
                        <div>
                            <Link href="/" className="inline-block group focus:outline-none">
                                <h2 className="text-3xl font-bold tracking-tighter text-white group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] transition-all duration-300 mb-2">
                                    Sinan MC <br className="hidden lg:block" /><span className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">Malappuram</span>
                                </h2>
                            </Link>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed md:pr-4">
                            Sinan MC Malappuram is the{" "}
                            <strong className="text-gray-200 font-medium">best freelance web developer &amp; SEO specialist in Malappuram, Kerala</strong>,
                            helping businesses grow with modern websites, SEO, and AI automation solutions.
                        </p>
                    </div>

                    {/* Column 2: Quick Links (Half width on mobile, 2/12 on desktop) */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 md:gap-6">
                        <h3 className="text-white font-semibold text-base md:text-lg border-b border-white/10 pb-2 w-max pr-4 md:pr-8">Quick Links</h3>
                        <ul className="flex flex-col gap-1 md:gap-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink href={link.href}>{link.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services (Half width on mobile, 2/12 on desktop) */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 md:gap-6">
                        <h3 className="text-white font-semibold text-base md:text-lg border-b border-white/10 pb-2 w-max pr-4 md:pr-8">Services</h3>
                        <ul className="flex flex-col gap-1 md:gap-2">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <NavLink href={service.href}>{service.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info (Full width on mobile, 4/12 on desktop) */}
                    <div className="col-span-2 lg:col-span-4 flex flex-col gap-5 md:gap-6 mt-2 lg:mt-0">
                        <h3 className="text-white font-semibold text-lg md:text-xl border-b border-white/10 pb-2 w-max pr-8">Contact Info</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="tel:+917510477475" className="flex items-center gap-3 md:gap-4 text-gray-400 hover:text-white transition-all duration-300 text-sm group focus:outline-none p-2.5 md:p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#FFD700]/30 hover:shadow-[0_4px_20px_rgba(255,215,0,0.05)] w-full overflow-hidden">
                                    <span className="p-2.5 bg-[#141414] rounded-lg group-hover:bg-[#FFD700]/10 transition-colors border border-white/5 group-hover:border-[#FFD700]/30 shrink-0">
                                        <Phone size={16} className="text-[#FFD700]" />
                                    </span>
                                    <div className="flex flex-col justify-center min-w-0 flex-1">
                                        <span className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mb-0.5">Phone</span>
                                        <span className="font-medium group-hover:text-[#FFD700] transition-colors truncate">+91 7510 477 475</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/917510477475" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 text-gray-400 hover:text-white transition-all duration-300 text-sm group focus:outline-none p-2.5 md:p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#FFD700]/30 hover:shadow-[0_4px_20px_rgba(255,215,0,0.05)] w-full overflow-hidden">
                                    <span className="p-2 md:p-2.5 bg-[#141414] rounded-lg group-hover:bg-[#FFD700]/10 transition-colors border border-white/5 group-hover:border-[#FFD700]/30 shrink-0">
                                        <MessageCircle size={16} className="text-[#FFD700]" />
                                    </span>
                                    <div className="flex flex-col justify-center min-w-0 flex-1">
                                        <span className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mb-0.5">WhatsApp</span>
                                        <span className="font-medium group-hover:text-[#FFD700] transition-colors truncate">+91 7510 477 475</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:sinanmc46@gmail.com" className="flex items-center gap-3 md:gap-4 text-gray-400 hover:text-white transition-all duration-300 text-sm group focus:outline-none p-2.5 md:p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#FFD700]/30 hover:shadow-[0_4px_20px_rgba(255,215,0,0.05)] w-full overflow-hidden">
                                    <span className="p-2 md:p-2.5 bg-[#141414] rounded-lg group-hover:bg-[#FFD700]/10 transition-colors border border-white/5 group-hover:border-[#FFD700]/30 shrink-0">
                                        <Mail size={16} className="text-[#FFD700]" />
                                    </span>
                                    <div className="flex flex-col justify-center min-w-0 flex-1">
                                        <span className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mb-0.5">Email</span>
                                        <span className="font-medium group-hover:text-[#FFD700] transition-colors truncate">sinanmc46@gmail.com</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <Link href="/contact#location-map" className="flex items-center gap-3 md:gap-4 text-gray-400 hover:text-white transition-all duration-300 text-sm group focus:outline-none p-2.5 md:p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#FFD700]/30 hover:shadow-[0_4px_20px_rgba(255,215,0,0.05)] w-full overflow-hidden">
                                    <span className="p-2 md:p-2.5 bg-[#141414] rounded-lg group-hover:bg-[#FFD700]/10 transition-colors border border-white/5 group-hover:border-[#FFD700]/30 shrink-0">
                                        <MapPin size={16} className="text-[#FFD700]" />
                                    </span>
                                    <div className="flex flex-col justify-center min-w-0 flex-1">
                                        <span className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mb-0.5">Location</span>
                                        <span className="font-medium group-hover:text-[#FFD700] transition-colors truncate">Malappuram, Kerala, India</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media & Bottom Bar */}
                <div className="border-t border-white/10 pt-8 mt-10 md:mt-16 flex flex-col items-center lg:flex-row lg:justify-between gap-8 lg:gap-4 relative z-10 w-full overflow-hidden">

                    {/* Social Icons */}
                    <div className="flex flex-wrap justify-center gap-4 order-1 lg:order-none">
                        {socials.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-2.5 md:p-3 bg-white/[0.02] rounded-xl border border-white/5 text-gray-400 hover:text-white hover:border-[#FFD700]/30 hover:bg-white/[0.05] hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(255,215,0,0.1)] focus:outline-none"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center lg:text-right flex flex-col gap-4 order-2 w-full lg:w-auto mt-2 lg:mt-0">
                        <p className="text-[11px] md:text-xs text-gray-400/80 font-medium tracking-wide pb-3 border-b border-white/5 mx-auto lg:ml-auto lg:mr-0 inline-block w-full max-w-full text-balance leading-relaxed">
                            Freelance Web Developer in Malappuram | SEO Specialist in Kerala | Website Designer in Malappuram
                        </p>
                        <div className="flex flex-col gap-2 items-center lg:items-end w-full">
                            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3 md:gap-4 text-[11px] md:text-xs font-medium text-gray-400 w-full">
                                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
                            </div>
                            <p className="text-xs md:text-sm text-gray-400/80 mt-1">© {new Date().getFullYear()} Sinan MC Malappuram. All rights reserved.</p>
                            <p className="text-[10px] md:text-xs font-medium tracking-wide bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent w-full leading-relaxed max-w-[90%] md:max-w-none mx-auto lg:mx-0">
                                Best Freelance Web Developer &amp; SEO Specialist in Malappuram, Kerala
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
