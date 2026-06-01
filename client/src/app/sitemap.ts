import type { MetadataRoute } from "next";
import { allPages } from "@/data/pages";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: absoluteUrl(page.slug),
    lastModified: new Date(),
    changeFrequency: page.kind === "pillar" ? "weekly" : "monthly",
    priority: page.kind === "pillar" ? 1 : page.kind === "cluster" ? 0.85 : 0.72
  }));
}
