import React from "react";

export default function Schema() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Sinan MC Malappuram",
        jobTitle: "Best Freelance Web Developer & SEO Specialist in Malappuram",
        description: "Sinan MC creates fast, SEO-optimized, high-converting websites in Kerala.",
        url: "https://sinanmcmalappuram.in",
        image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
        sameAs: [
            "https://www.linkedin.com/in/sinanmc",
            "https://github.com/sinanmc",
            "https://instagram.com/sinanmc",
            "https://www.behance.net/sinan_mc_malappuram"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Sinan MC Malappuram — Freelance Web Developer & SEO Specialist",
        telephone: "+917510477475",
        url: "https://sinanmcmalappuram.in",
        image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
        priceRange: "₹₹",
        description: "Providing the best freelance web development and SEO services in Malappuram, Kerala.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Tirur",
            addressLocality: "Malappuram",
            addressRegion: "Kerala",
            postalCode: "676101",
            addressCountry: "IN"
        },
        areaServed: {
            "@type": "Place",
            name: "Malappuram, Kerala, India"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Sinan MC Malappuram",
        url: "https://sinanmcmalappuram.in",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://sinanmcmalappuram.in/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
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
        </>
    );
}
