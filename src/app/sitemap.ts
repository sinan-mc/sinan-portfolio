import { MetadataRoute } from "next";
import { portfolioProjects } from "@/data/portfolio";
import { blogPosts } from "@/lib/blog/data";

const baseUrl = "https://sinanmcmalappuram.in";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/best-digital-marketer-in-kerala`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-conditions`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        // Use post date if valid, otherwise fallback to current date
        lastModified: isNaN(new Date(post.date).getTime()) ? new Date() : new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...portfolioRoutes, ...blogRoutes];
}
