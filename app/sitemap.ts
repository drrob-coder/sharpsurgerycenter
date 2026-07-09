import type { MetadataRoute } from "next";

const SITE_URL = "https://www.sharpsurgerycenter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/facility`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/specialties`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/procedures`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
