import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProviders from "@/components/layout/GlobalProviders";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    preload: true,
    variable: "--font-inter",
});

export const viewport: Viewport = {
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://sinanmcmalappuram.in"),

    title: {
        default:
            "Best Freelance Web Developer in Malappuram | Sinan MC",
        template: "%s | Sinan MC",
    },

    description:
        "Sinan MC is the best freelance web developer in Malappuram — building fast, SEO-optimised websites that rank on Google and convert visitors into customers. Serving Kerala businesses since 2024.",

    keywords: [
        "Best Freelance Web Developer in Malappuram",
        "SEO Specialist Kerala",
        "Web Developer Malappuram",
        "Sinan MC",
        "Local SEO Kerala",
        "Technical SEO Consultant",
        "Next.js Developer Kerala",
    ],

    category: "technology",
    creator: "Sinan MC",
    publisher: "Sinan MC",

    authors: [
        {
            name: "Sinan MC",
            url: "https://sinanmcmalappuram.in",
        },
    ],

    alternates: {
        canonical: "/",
    },

    manifest: "/site.webmanifest",

    icons: {
        icon: [
            {
                url: "/favicon.ico",
                sizes: "any",
            },
            {
                url: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                url: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        apple: {
            url: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
        },
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "website",
        url: "/",
        title:
            "Best Freelance Web Developer in Malappuram | Sinan MC",
        description:
            "Sinan MC builds fast, SEO-optimised websites that rank on Google and generate real business results for Kerala businesses.",
        siteName: "Sinan MC",
        locale: "en_IN",

        images: [
            {
                url: "/freelance-web-developer-SEO-specialist-Malappuram.webp",
                width: 1200,
                height: 630,
                alt: "Sinan MC — freelance web developer and SEO specialist based in Malappuram, Kerala",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Best Freelance Web Developer in Malappuram | Sinan MC",

        description:
            "Sinan MC builds fast, SEO-optimised websites that rank on Google and generate real business results for Kerala businesses.",

        creator: "@mc_sinan3229",

        images: [
            "/freelance-web-developer-SEO-specialist-Malappuram.webp",
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`dark scroll-smooth ${inter.variable}`}
        >
            <head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W367NZ2C');`,
                    }}
                />
                {/* End Google Tag Manager */}
            </head>
            <body
                className={`${inter.className} antialiased bg-black text-white`}
            >
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-W367NZ2C"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <GlobalProviders>{children}</GlobalProviders>
                <SpeedInsights />
                {process.env.NEXT_PUBLIC_GA_ID && (
                    <GoogleAnalytics GA_ID={process.env.NEXT_PUBLIC_GA_ID} />
                )}
            </body>
        </html>
    );
}
