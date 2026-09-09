import type { Metadata } from "next";
import LandingClient from "./LandingClient";

export const metadata: Metadata = {
    title: "Best Digital Marketer in Kerala | Web Developer & SEO — Sinan MC",
    description:
        "Sinan MC is an independent digital marketer and web developer in Kerala, helping businesses improve Google visibility, build modern websites and gain enquiries.",
    alternates: {
        canonical: "https://sinanmcmalappuram.in/best-digital-marketer-in-kerala",
    },
    openGraph: {
        type: "website",
        url: "https://sinanmcmalappuram.in/best-digital-marketer-in-kerala",
        title: "Best Digital Marketer in Kerala | Web Developer & SEO — Sinan MC",
        description:
            "Sinan MC is an independent digital marketer and web developer in Kerala, helping businesses improve Google visibility, build modern websites and gain enquiries.",
        siteName: "Sinan MC",
        locale: "en_IN",
        images: [
            {
                url: "/freelance-web-developer-SEO-specialist-Malappuram.webp",
                width: 1200,
                height: 630,
                alt: "Sinan MC — Independent Digital Marketer and Web Developer in Kerala",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Digital Marketer in Kerala | Web Developer & SEO — Sinan MC",
        description:
            "Sinan MC is an independent digital marketer and web developer in Kerala, helping businesses improve Google visibility, build modern websites and gain enquiries.",
        creator: "@mc_sinan3229",
        images: ["/freelance-web-developer-SEO-specialist-Malappuram.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

// ── Structured Data ───────────────────────────────────────────────────────────
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sinanmcmalappuram.in/#person",
    name: "Sinan MC",
    givenName: "Sinan",
    familyName: "MC",
    jobTitle: "Freelance Digital Marketer & Web Developer",
    description:
        "Sinan MC is an independent digital marketer and web developer in Kerala providing SEO, high-performance Next.js web development, and digital marketing services.",
    url: "https://sinanmcmalappuram.in",
    image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
    telephone: "+917510477475",
    email: "sinanmc46@gmail.com",
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
    sameAs: [
        "https://www.instagram.com/sinan_mc_malappuram?igsh=Mzl5MGFhem1mY2g1",
        "https://www.linkedin.com/in/mhd-sinan-mc",
        "https://www.facebook.com/share/1KaYZRrGny/",
        "https://x.com/mc_sinan3229",
    ],
};

const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://sinanmcmalappuram.in/#business",
    name: "Sinan MC — Digital Marketing & Web Development Services",
    url: "https://sinanmcmalappuram.in/best-digital-marketer-in-kerala",
    telephone: "+917510477475",
    image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
    priceRange: "₹₹",
    description:
        "High-performance website development, search engine optimization (SEO), digital marketing, and creative design services for businesses in Kerala and India.",
    parentOrganization: {
        "@id": "https://sinanmcmalappuram.in/#person",
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "Tirur",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        addressCountry: "IN",
        postalCode: "676101",
    },
    areaServed: [
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing & Web Development Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Web Design & Development",
                    description:
                        "Modern, responsive, and high-performance websites built with Next.js for real business goals.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Search Engine Optimization (SEO)",
                    description:
                        "Technical SEO, on-page optimization, and organic search visibility strategies.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Digital Marketing & Google Ads",
                    description:
                        "Data-driven digital marketing campaigns focused on attracting relevant customers and leads.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Social Media Marketing (SMM)",
                    description:
                        "Content strategy, social media management, and audience growth across platforms.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Graphic & Poster Design",
                    description:
                        "Professional marketing creatives, promotional posters, and social media designs.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Branding & Creative Design",
                    description:
                        "Consistent visual identity and digital brand presentation to build credibility.",
                },
            },
        ],
    },
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sinanmcmalappuram.in/#website",
    url: "https://sinanmcmalappuram.in",
    name: "Sinan MC",
    publisher: {
        "@id": "https://sinanmcmalappuram.in/#person",
    },
};

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
        {
            "@type": "ListItem",
            position: 2,
            name: "Digital Marketing & Web Development",
            item: "https://sinanmcmalappuram.in/best-digital-marketer-in-kerala",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does a digital marketer in Kerala do for a business?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A digital marketer helps businesses establish search visibility and gain customers through web design, search engine optimization (SEO), Google Ads campaigns, and social media marketing tailored to their target market.",
            },
        },
        {
            "@type": "Question",
            name: "Do you provide SEO services for businesses in Kerala?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. I provide comprehensive search engine optimization services including technical SEO audits, on-page optimization, local SEO for Kerala cities, Google Search Console indexing, and organic keyword ranking strategies.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build a website and handle digital marketing together?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Combining Next.js web development with SEO and digital marketing ensures your website is architected from the ground up for fast load speeds, Core Web Vitals compliance, and high search engine conversion rates.",
            },
        },
        {
            "@type": "Question",
            name: "Do you work with businesses outside Kerala?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. While based in Malappuram, Kerala, I work with businesses across India and international clients, managing digital marketing, SEO, and website projects remotely with transparent communication.",
            },
        },
        {
            "@type": "Question",
            name: "How long does SEO or a website project usually take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A custom website development project typically takes 2 to 4 weeks depending on scope. Search engine optimization is an ongoing process where initial indexing and keyword improvements appear within weeks, with compounding organic growth over 3 to 6 months.",
            },
        },
    ],
};

export const dynamic = "force-static";

export default function BestDigitalMarketerInKeralaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
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
            <LandingClient />
        </>
    );
}
