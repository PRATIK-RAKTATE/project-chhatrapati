import type { Metadata } from "next";
import type { SitePage } from "@/data/pages";

export const siteUrl = "https://www.chhatrapatishivajimaharaj.org";

export const absoluteUrl = (slug: string) => `${siteUrl}${slug === "/" ? "" : slug}`;

export const metadataForPage = (page: SitePage): Metadata => ({
  title: page.title,
  description: page.description,
  alternates: { canonical: absoluteUrl(page.slug) },
  openGraph: {
    type: page.kind === "faq" ? "website" : "article",
    url: absoluteUrl(page.slug),
    title: page.title,
    description: page.description,
    siteName: "Chhatrapati Shivaji Maharaj Knowledge Hub"
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description
  }
});

export const breadcrumbItems = (slug: string) => {
  const parts = slug.split("/").filter(Boolean);
  const items = [{ name: "Home", href: "/" }];

  parts.forEach((part, index) => {
    items.push({
      name: part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      href: `/${parts.slice(0, index + 1).join("/")}`
    });
  });

  return items;
};
