import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact Sinan MC | Web Developer & SEO Specialist in Malappuram',
    description: 'Get in touch with Sinan MC — freelance web developer and SEO consultant in Malappuram, Kerala. Contact for custom website development, technical SEO, AI automation, and digital marketing solutions.',
    alternates: {
        canonical: 'https://sinanmcmalappuram.in/contact',
    },
    openGraph: {
        title: 'Contact Sinan MC | Web Developer & SEO Specialist in Malappuram',
        description: 'Reach out to discuss your website, SEO strategy, or digital marketing project. Based in Malappuram, Kerala — serving businesses across India.',
        url: 'https://sinanmcmalappuram.in/contact',
        siteName: 'Sinan MC',
        images: [
            {
                url: '/freelance-web-developer-SEO-specialist-Malappuram.webp',
                width: 1200,
                height: 630,
                alt: 'Contact Sinan MC — web developer and SEO specialist in Malappuram',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Contact Sinan MC | Web Developer & SEO Specialist in Malappuram',
        description: 'Reach out to discuss your website, SEO strategy, or digital marketing project. Based in Malappuram, Kerala.',
        images: ['/freelance-web-developer-SEO-specialist-Malappuram.webp'],
    },
};

export default function ContactPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://sinanmcmalappuram.in/#business',
        name: 'Sinan MC — Freelance Web Developer & SEO Specialist',
        description: 'Professional web development and SEO services in Malappuram, Kerala. Specialising in Next.js websites, technical SEO, local SEO, and Google Ads.',
        url: 'https://sinanmcmalappuram.in',
        telephone: '+917510477475',
        image: 'https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp',
        priceRange: '₹₹',
        openingHours: 'Mo-Sa 09:00-20:00',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Tirur',
            addressLocality: 'Malappuram',
            addressRegion: 'Kerala',
            postalCode: '676101',
            addressCountry: 'IN',
        },
        areaServed: [
            { '@type': 'City', name: 'Malappuram' },
            { '@type': 'City', name: 'Calicut' },
            { '@type': 'State', name: 'Kerala' },
        ],
        sameAs: [
            'https://www.instagram.com/sinan_mc_malappuram?igsh=Mzl5MGFhem1mY2g1',
            'https://www.linkedin.com/in/mhd-sinan-mc',
            'https://www.behance.net/sinan_mc_malappuram',
            'https://www.facebook.com/share/1KaYZRrGny/',
            'https://x.com/mc_sinan3229',
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContactClient />
        </>
    );
}
