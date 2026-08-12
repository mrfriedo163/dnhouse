import type { MetadataRoute } from "next";
import { seoPages } from "@/config/seoPages";
import { siteConfig } from "@/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteConfig.siteUrl}/hoi-dap-giat-say-can-tho`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    ...seoPages.map((page) => ({
      url: `${siteConfig.siteUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85
    }))
  ];
}
