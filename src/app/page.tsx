import nextDynamic from "next/dynamic";
import { faqs } from "@/data/faqData";

import Hero from "@/components/sections/Hero";

const About = nextDynamic(() => import("@/components/sections/About"));
const Brands = nextDynamic(() => import("@/components/sections/BrandsClient"));

const Services = nextDynamic(() => import("@/components/sections/Services"));

const CertificationsSection = nextDynamic(
    () => import("@/components/sections/CertificationsSection")
);

const WhyChooseSection = nextDynamic(
    () => import("@/components/sections/WhyChooseSection")
);

const WebSeoComboSection = nextDynamic(
    () => import("@/components/sections/WebSeoComboSection")
);

const TestimonialsSection = nextDynamic(
    () => import("@/components/sections/TestimonialsSection")
);

const FAQ = nextDynamic(() => import("@/components/sections/FAQ"));

const HomeContactCTA = nextDynamic(
    () => import("@/components/sections/HomeContactCTA")
);

// ── Enhanced Person Schema (E-E-A-T signals) ──────────────────────────────────
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sinanmcmalappuram.in/#person",
    name: "Sinan MC",
    givenName: "Sinan",
    familyName: "MC",
    jobTitle: "Freelance Web Developer & SEO Specialist",
    description:
        "Sinan MC is the best freelance web developer in Malappuram, building fast Next.js websites and delivering data-driven SEO strategies that help Kerala businesses rank on Google.",
    url: "https://sinanmcmalappuram.in",
    image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
    telephone: "+917510477475",
    email: "sinanmc@email.com",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        addressCountry: "IN",
        postalCode: "676101",
    },
    alumniOf: [
        {
            "@type": "EducationalOrganization",
            name: "IGNOU – Indira Gandhi National Open University",
            description: "Bachelor of Commerce (B.Com)",
        },
        {
            "@type": "EducationalOrganization",
            name: "Oxdu Training Institute, Kondotty",
            description: "Professional Digital Marketing Certification",
        },
    ],
    knowsAbout: [
        "Web Development",
        "Search Engine Optimization",
        "Local SEO",
        "Technical SEO",
        "Next.js",
        "React",
        "Core Web Vitals",
        "Google Search Console",
        "Google Analytics",
        "AI Automation",
        "Social Media Marketing",
        "Google Ads",
        "Conversion Rate Optimization",
        "Mobile-First Design",
    ],
    areaServed: [
        {
            "@type": "City",
            name: "Malappuram",
        },
        {
            "@type": "State",
            name: "Kerala",
        },
        {
            "@type": "Country",
            name: "India",
        },
    ],
    sameAs: [
        "https://www.instagram.com/sinan_mc_malappuram?igsh=Mzl5MGFhem1mY2g1",
        "https://www.linkedin.com/in/mhd-sinan-mc",
        "https://www.behance.net/sinan_mc_malappuram",
        "https://www.facebook.com/share/1KaYZRrGny/",
        "https://x.com/mc_sinan3229",
    ],
};

// ── Enhanced LocalBusiness Schema ─────────────────────────────────────────────
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://sinanmcmalappuram.in/#business",
    name: "Sinan MC — Freelance Web Developer & SEO Specialist",
    url: "https://sinanmcmalappuram.in",
    telephone: "+917510477475",
    image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
    priceRange: "₹₹",
    description:
        "Professional web development and SEO services in Malappuram, Kerala. Specialising in Next.js websites, technical SEO, local SEO, and Google Ads for Kerala businesses.",
    openingHours: "Mo-Sa 09:00-20:00",
    paymentAccepted: "Cash, Bank Transfer, UPI",
    currenciesAccepted: "INR",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Tirur",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        postalCode: "676101",
        addressCountry: "IN",
    },
    areaServed: [
        { "@type": "City", name: "Malappuram" },
        { "@type": "City", name: "Calicut" },
        { "@type": "City", name: "Kondotty" },
        { "@type": "City", name: "Tirur" },
        { "@type": "State", name: "Kerala" },
    ],
    knowsAbout: [
        "Web Development",
        "SEO",
        "Local SEO",
        "Technical SEO",
        "Google Ads",
        "AI Automation",
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development & Digital Marketing Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Custom Website Development",
                    description:
                        "Fast, mobile-responsive, SEO-optimised websites built with Next.js and React for Kerala businesses.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Search Engine Optimization (SEO)",
                    description:
                        "Technical SEO, local SEO, on-page optimization, and Core Web Vitals improvements to rank higher on Google.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Digital Marketing & Google Ads",
                    description:
                        "Performance marketing, Google Ads campaigns, and social media marketing to grow your business online.",
                },
            },
        ],
    },
    sameAs: [
        "https://www.instagram.com/sinan_mc_malappuram?igsh=Mzl5MGFhem1mY2g1",
        "https://www.linkedin.com/in/mhd-sinan-mc",
        "https://www.behance.net/sinan_mc_malappuram",
        "https://www.facebook.com/share/1KaYZRrGny/",
        "https://x.com/mc_sinan3229",
    ],
};

// ── WebSite Schema ────────────────────────────────────────────────────────────
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sinanmcmalappuram.in/#website",
    name: "Sinan MC",
    url: "https://sinanmcmalappuram.in",
    description:
        "Portfolio website of Sinan MC — freelance web developer and SEO specialist based in Malappuram, Kerala.",
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate:
                "https://sinanmcmalappuram.in/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
    },
};

// ── BreadcrumbList Schema ─────────────────────────────────────────────────────
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://sinanmcmalappuram.in",
        },
    ],
};

// ── FAQ Schema ────────────────────────────────────────────────────────────────
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export const dynamic = "force-static";

export default function Home() {
    return (
        <>
            {/* Synchronous JSON-LD for Googlebot — do NOT use next/script afterInteractive for structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main role="main">
                <Hero />

                <Brands />

                <About />

                <Services />

                <CertificationsSection />

                <WhyChooseSection />

                <WebSeoComboSection />

                <TestimonialsSection />

                <FAQ />

                <HomeContactCTA />
            </main>
        </>
    );
}
