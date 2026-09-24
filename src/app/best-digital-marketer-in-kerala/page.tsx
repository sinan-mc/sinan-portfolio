import type { Metadata } from "next";
import LandingClient from "./LandingClient";

export const metadata: Metadata = {
    title: {
        absolute: "Sinan MC | Best Digital Marketer in Kerala | Web Developer & SEO",
    },
    description:
        "Sinan MC is the best digital marketer in Kerala and freelance web developer. Providing Google SEO rankings, fast Next.js websites, and high-ROI digital marketing.",
    keywords: [
        "Best Digital Marketer in Kerala",
        "Digital Marketer in Kerala",
        "Freelance Digital Marketer Kerala",
        "Best Freelance Web Developer in Kerala",
        "SEO Specialist Kerala",
        "Web Developer Kerala",
        "Digital Marketing Services Kerala",
        "Sinan MC",
        "Sinan MC Malappuram",
        "Local SEO Malappuram",
        "Google Ads Specialist Kerala",
    ],
    alternates: {
        canonical: "https://sinanmcmalappuram.in/best-digital-marketer-in-kerala",
    },
    openGraph: {
        type: "website",
        url: "https://sinanmcmalappuram.in/best-digital-marketer-in-kerala",
        title: "Sinan MC | Best Digital Marketer in Kerala | Web Developer & SEO",
        description:
            "Sinan MC is the best digital marketer in Kerala and freelance web developer. Providing Google SEO rankings, fast Next.js websites, and high-ROI digital marketing.",
        siteName: "Sinan MC",
        locale: "en_IN",
        images: [
            {
                url: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
                width: 1200,
                height: 630,
                alt: "Sinan MC — Best Digital Marketer in Kerala and Web Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sinan MC | Best Digital Marketer in Kerala | Web Developer & SEO",
        description:
            "Sinan MC is the best digital marketer in Kerala and freelance web developer. Providing Google SEO rankings, fast Next.js websites, and high-ROI digital marketing.",
        creator: "@mc_sinan3229",
        images: ["https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
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
    jobTitle: "Best Digital Marketer in Kerala & Web Developer",
    description:
        "Sinan MC is recognized as the best digital marketer in Kerala and freelance web developer, helping businesses grow through SEO, Next.js web development, and Google Ads.",
    url: "https://sinanmcmalappuram.in",
    image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
    telephone: "+917510477475",
    email: "sinanmc46@gmail.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Tirur",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        addressCountry: "IN",
        postalCode: "676101",
    },
    knowsAbout: [
        "Digital Marketing",
        "Search Engine Optimization (SEO)",
        "Local SEO",
        "Web Development",
        "Next.js",
        "Google Ads",
        "Conversion Rate Optimization",
    ],
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
        "https://www.behance.net/sinan_mc_malappuram",
        "https://www.facebook.com/share/1KaYZRrGny/",
        "https://x.com/mc_sinan3229",
    ],
};

const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://sinanmcmalappuram.in/#business",
    name: "Sinan MC — Best Digital Marketer & Web Developer in Kerala",
    url: "https://sinanmcmalappuram.in/best-digital-marketer-in-kerala",
    telephone: "+917510477475",
    image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
    priceRange: "₹₹",
    description:
        "Fast Next.js web design, Google Search SEO rankings, targeted digital marketing, and branding services for businesses across Kerala, India, and the GCC.",
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
    geo: {
        "@type": "GeoCoordinates",
        latitude: 10.8942876,
        longitude: 76.0291969,
    },
    hasMap: "https://www.google.com/maps/place/Sinan+MC+Malappuram/@10.8942876,76.0291969,17z",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
        },
    ],
    areaServed: [
        { "@type": "City", name: "Malappuram" },
        { "@type": "City", name: "Tirur" },
        { "@type": "City", name: "Kozhikode" },
        { "@type": "City", name: "Kochi" },
        { "@type": "City", name: "Kannur" },
        { "@type": "City", name: "Thrissur" },
        { "@type": "City", name: "Kottakkal" },
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
                    name: "Branding & Visual Identity",
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
            name: "Best Digital Marketer in Kerala",
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
            name: "How do I choose the best digital marketer in Kerala for my business?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Look for a specialist who shows real client case studies, verifiable Google rankings, and can handle both technical execution (fast website, on-page SEO) and marketing strategy (Google Ads, content). Choosing an independent specialist gives you direct communication, honest feedback, and hands-on accountability without bloated agency fees.",
            },
        },
        {
            "@type": "Question",
            name: "What does a digital marketer in Kerala do for a business?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A digital marketer helps your business get found by customers actively searching for what you offer. That includes ranking your website on Google search (SEO), setting up your Google Business Profile for local map pack visibility, running targeted Google Ads, and building fast websites that turn visitors into calls and WhatsApp chats.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build my website and handle digital marketing together?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and that is actually the most effective way. When the same person codes your website and manages your SEO and marketing, there is zero disconnect. The site is built from day one to load in under a second on phones, with clean SEO structure that Google easily understands and ranks.",
            },
        },
        {
            "@type": "Question",
            name: "Do you work with businesses outside Kerala or in the GCC?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. While physically based in Tirur, Malappuram, I regularly collaborate with businesses across Kerala, other Indian states, and clients in the UAE / GCC. Everything is handled smoothly through WhatsApp, video calls, and regular progress updates.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to see results from SEO and a new website?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A custom website is typically designed, coded, and launched within 2 to 3 weeks. For SEO, technical indexing and Google Search Console visibility take shape within a few weeks, while competitive organic keywords and local enquiries steadily build momentum over 2 to 4 months.",
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
