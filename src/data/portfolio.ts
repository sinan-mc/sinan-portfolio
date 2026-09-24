export type ProjectCategory = "SEO Projects" | "Website Projects" | "SMM Projects" | "AI Automation";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    image: string;
    shortDescription: string;
    fullDescription: string;
    seoStrategy: string[];
    results: string[];
    technologies: string[];
    screenshots: string[];
    link?: string;
    imageAlt?: string;
}

export const portfolioProjects: Project[] = [
    {
        id: "digisinans-kerala",
        title: "Digisinans – Ranking Kerala's Leading AI-Integrated Digital Marketing Agency",
        category: "SEO Projects",
        image: "/digisinans-kerala-ranking-proof.webp",
        imageAlt: "Digisinans SEO Case Study - Kerala, Malappuram & Tirur search ranking proof",
        shortDescription: "Secured #1 search rankings across Kerala, Malappuram, and Tirur for Digisinans through a data-driven SEO campaign blending technical auditing, local search optimization, and AI-powered content strategy.",
        fullDescription: "A high-impact search engine optimization campaign designed to establish Digisinans as the premier AI-integrated digital marketing agency across Kerala, Malappuram, and Tirur. By conducting a meticulous technical website audit, structuring hyper-local landing pages, and implementing a next-generation AI-assisted content strategy, we achieved top rankings for highly competitive keywords. The campaign also leveraged comprehensive Google Business Profile (GBP) optimization and high-authority local citations to capture regional search traffic and generate high-intent inbound leads.",
        seoStrategy: [
            "Advanced Multi-City Keyword Research & Semantic Mapping (Kerala, Malappuram, Tirur)",
            "Comprehensive Technical SEO Audit & Core Web Vitals Performance Tuning",
            "Hyper-Local SEO Strategy & Google Business Profile (GBP) Domination",
            "Conversion-Focused City Landing Page Architecture for Tirur & Malappuram",
            "AI-Assisted Content Optimization & Entity-Based Structure Refinement",
            "High-Authority Local Citation & Strategic Link-Building Campaign"
        ],
        results: [
            "Achieved Rank #1 for 'Best AI Integrated Digital Marketing Agency in Kerala'",
            "Secured Top 3 Map Pack placements for competitive digital marketing queries in Malappuram",
            "Dominated Page 1 Search Results for 'Best Digital Marketing Agency in Tirur'",
            "Generated a 300% increase in organic search traffic within 4 months, driving record inbound leads"
        ],
        technologies: ["Next.js", "SEMrush", "Ahrefs", "Google Search Console", "Google Business Profile", "Surfer SEO", "Schema.org", "Google Analytics", "Technical SEO"],
        screenshots: [
            "/digisinans-kerala-ranking-proof.webp",
            "/digisinans-kerala-ranking-proof-ai-result.webp",
            "/digisinans-malappuram-ranking-proof.webp",
            "/tirur-digital-marketing-ranking.webp"
        ]
    },
    {
        id: "ai-first-kannur",
        title: "AI First – Digital Marketing Expert in Kannur",
        category: "SEO Projects",
        image: "/ai-first-kannur-ranking.webp",
        shortDescription: "Optimised and ranked AI First website using modern SEO strategy.",
        fullDescription: "Complete SEO overhaul for 'AI First' targeting the Kannur region. The strategy involved restructuring their existing content, improving site speed, and securing niche-relevant backlinks.",
        seoStrategy: [
            "Competitor Analysis",
            "Site Speed & Performance Optimisation",
            "Content Gap Analysis & Implementation"
        ],
        results: [
            "Top placements for 'Digital Marketing Expert Kannur'",
            "Improved site health score to 95+",
            "Steady stream of inbound leads"
        ],
        technologies: ["Next.js", "Screaming Frog", "PageSpeed Insights"],
        screenshots: [
            "/ai-first-kannur-ranking.webp"
        ]
    },
    {
        id: "mind-beat-seo",
        title: "Mind Beat Multi Speciality Centre For Counselling Mind Reframing & Training",
        category: "SEO Projects",
        image: "/best-psychologist-in-tirur-google-ranking.webp",
        shortDescription: "Ranked Mind Beat on Google Page 1 for psychology and counselling search queries in Tirur.",
        fullDescription: "A specialized search engine optimization campaign designed to position Mind Beat Multi Speciality Centre as the top-ranking counselling and mind-reframing clinic in Tirur. Implemented localized keyword targeting, schema markup, and Google Business Profile optimization to maximize online visibility and client inquiries.",
        seoStrategy: [
            "Local SEO & Google Business Profile Optimisation",
            "Targeted On-Page SEO for 'Best Psychologist in Tirur'",
            "Optimisation for brand queries like 'Mind Beat healing'",
            "Technical SEO & mobile responsiveness enhancements"
        ],
        results: [
            "Ranked Page 1/Top Positions for 'Best Psychologist in Tirur'",
            "Ranked Page 1/Top Positions for 'Counselling Center in Tirur'",
            "Enhanced organic search visibility for brand terms like 'Mind Beat healing'",
            "Significant boost in direct phone call inquiries and consultations"
        ],
        technologies: ["Google Business Profile", "Ahrefs", "Google Search Console", "Technical SEO"],
        link: "https://mindbeathealing.com/",
        screenshots: [
            "/best-psychologist-in-tirur-google-ranking.webp",
            "/counselling-center-in-tirur-google-ranking.webp"
        ]
    },
    {
        id: "best-shine-seo",
        title: "Best Shine – Google Search Ranking SEO Case Study",
        category: "SEO Projects",
        image: "/best-shine-building-cleaning-services-google-ranking.webp",
        imageAlt: "Best Shine Building Cleaning Services Google Search Ranking Proof",
        shortDescription: "Secured Page 1 Google rankings for high-volume building cleaning service keywords in the UAE, driving a significant increase in organic leads and inquiries.",
        fullDescription: "A comprehensive Search Engine Optimization (SEO) campaign executed for Best Shine Building Cleaning Services, a top cleaning provider in the UAE. By leveraging localized search strategy, mapping key industry search intent, implementing advanced on-page optimization, and fixing technical SEO bottlenecks, we propelled competitive keywords to the top of Google Search. This sustained increase in search engine visibility directly translated to high-intent traffic, more phone calls, and direct online bookings via their website.",
        seoStrategy: [
            "Targeted Local SEO optimization for UAE and GCC cleaning service queries",
            "In-depth competitor keyword analysis and intent mapping",
            "Schema markup implementation for local business and service categories",
            "Google Business Profile (GBP) integration and optimization",
            "On-page content optimization targeting high-intent service terms",
            "Core Web Vitals improvement and page speed alignment for mobile users"
        ],
        results: [
            "Achieved Page 1 rankings for 'building cleaning services UAE' and related terms",
            "Significant boost in organic search traffic and search impressions within 3 months",
            "Increased daily inbound cleaning service leads and website inquiries by 150%",
            "Enhanced map pack and local search visibility for key service areas in UAE"
        ],
        technologies: ["Google Search Console", "Google Analytics", "Ahrefs", "Google Business Profile", "Technical SEO", "On-Page SEO", "Schema.org"],
        link: "https://bestshinecleaningservices.com/",
        screenshots: [
            "/best-shine-building-cleaning-services-google-ranking.webp"
        ]
    },
    {
        id: "digisinans-website",
        title: "Digisinans Digital Marketing Agency Website",
        category: "Website Projects",
        image: "/digisinans-website.webp",
        shortDescription: "Designed and developed modern AI-powered agency website.",
        fullDescription: "A full-scale custom design and development project for Digisinans. Built from the ground up to reflect a premium, futuristic, and AI-first brand identity while maintaining lightning-fast performance.",
        seoStrategy: [
            "SEO-friendly architecture from day one",
            "Next.js Server-Side Rendering (SSR)",
            "Optimized Core Web Vitals"
        ],
        results: [
            "Sub-second page load times",
            "Perfect 100/100 Lighthouse scores",
            "High user engagement and reduced bounce rate"
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://digisinans.in/",
        screenshots: [
            "/digisinans-website.webp",
            "/website-speed-seo.webp"
        ]
    },
    {
        id: "best-shine-website",
        title: "Best Shine Website Development",
        category: "Website Projects",
        image: "/best-web-developer-in-kerala-project1.webp",
        imageAlt: "best web developer in kerala - Best Shine website screenshot",
        shortDescription: "Developed a modern, high-performance web platform for a UAE client, featuring a sticky contact form, Firebase integration, and a Groq AI chatbot.",
        fullDescription: "Designed and developed a premium business website for Best Shine, a prominent client in the UAE. Built using Next.js for exceptional page speeds, server-side rendering, and robust SEO. The platform features a Firebase database backend, a conversion-optimized sticky contact form for effortless lead generation, and an interactive customer support chatbot powered by the Groq AI API.",
        seoStrategy: [
            "Optimized page-load speed and core web vitals for search rankings",
            "Implemented a conversion-focused sticky contact form for quick inquiries",
            "Targeted GCC-region and local industry search queries",
            "Structured schema markup for services and local SEO"
        ],
        results: [
            "Significant increase in conversion rates via the sticky contact form",
            "Seamless data management and real-time inquiries using Firebase",
            "Instant chatbot response systems boosting customer engagement",
            "Premium, mobile-responsive layout designed for the UAE market"
        ],
        technologies: ["Next.js", "Firebase", "Groq AI", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://bestshinecleaningservices.com/",
        screenshots: [
            "/best-web-developer-in-kerala-project1.webp"
        ]
    },
    {
        id: "mindbeat-healing-center-website",
        title: "MindBeat Healing Center Website",
        category: "Website Projects",
        image: "/best-web-developer-in-kerala-project2.webp",
        imageAlt: "best web developer in kerala - MindBeat Healing Center Website screenshot",
        shortDescription: "Designed and developed a responsive, conversion-focused WordPress website for MindBeat Healing Center.",
        fullDescription: "Designed and developed a modern, user-friendly WordPress website for MindBeat Healing Center. Built with a calming aesthetic and responsive layouts to serve users looking for professional counselling and training programs. Features structured service pathways, booking integration, and highly optimized page speed.",
        seoStrategy: [
            "Calming, clean user interface design with clear call-to-actions",
            "WordPress speed optimization and image compression techniques",
            "SEO-friendly permalinks, title structures, and schema mapping",
            "Mobile-responsive optimization for all display sizes"
        ],
        results: [
            "Delivered a modern, fast, and fully responsive WordPress site",
            "Improved inquiry rate via clear service sections and easy contact forms",
            "Strong local search authority and search visibility foundation"
        ],
        technologies: ["WordPress", "PHP", "Elementor", "Yoast SEO", "Google Search Console"],
        link: "https://mindbeathealing.com/",
        screenshots: [
            "/best-web-developer-in-kerala-project2.webp"
        ]
    },
    {
        id: "qland-poster-design",
        title: "Social Media Advertising Poster Design in Photoshop - Qland",
        category: "SMM Projects",
        image: "/social-media-poster-1.webp",
        imageAlt: "best freelance graphic designer in tirur",
        shortDescription: "Designed high-converting social media advertising posters for Qland using advanced Photoshop techniques.",
        fullDescription: "A comprehensive social media design project for Qland. The primary focus was creating visually striking and highly engaging advertising posters tailored for social media platforms. By leveraging Adobe Photoshop, we crafted custom graphics with strong typography and compelling visual elements to maximize user engagement and ad performance.",
        seoStrategy: [
            "Visual Hierarchy & Typography",
            "High-Engagement Ad Creatives",
            "Brand Color Scheme Synchronization"
        ],
        results: [
            "Significantly increased click-through rate (CTR) on ads",
            "Enhanced overall brand aesthetic",
            "Boosted social media user engagement"
        ],
        technologies: ["Adobe Photoshop", "Graphic Design", "Social Media Marketing"],
        link: "https://www.behance.net/sinan_mc_malappuram",
        screenshots: [
            "/social-media-poster-1.webp",
            "/social-media-poster-2.webp",
            "/social-media-poster-3.webp"
        ]
    },
    {
        id: "ai-automation-web-chatbots",
        title: "AI automation web Chatbots",
        category: "AI Automation",
        image: "/ai-chatbot-1.webp",
        imageAlt: "ai frist digital marketer in kerala ",
        shortDescription: "Developed the fastest AI automation web chatbots using the Grooq API.",
        fullDescription: "Built an advanced AI automation web chatbot tailored for seamless online interaction. Utilizing the blazing fast Grooq API, this custom chatbot solution significantly reduces response times and enhances user engagement, providing instant support and automation capabilities directly on the website.",
        seoStrategy: [
            "Seamless Web Integration",
            "Conversational Flow Design",
            "High-Speed API Execution"
        ],
        results: [
            "Extremely fast conversational responses using Grooq API",
            "Improved website user support and automation",
            "Modern, engaging, and reactive chatbot UI"
        ],
        technologies: ["Grooq API", "AI Automation", "Web Chatbots"],
        screenshots: [
            "/ai-chatbot-1.webp",
            "/ai-chatbot-2.webp"
        ]
    }
];
