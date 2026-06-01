import type { SitePage } from "@/data/pages";
import { absoluteUrl, breadcrumbItems } from "./seo";

export const articleJsonLd = (page: SitePage) => ({
  "@context": "https://schema.org",
  "@type": page.kind === "faq" ? "FAQPage" : "Article",
  headline: page.h1,
  description: page.description,
  mainEntityOfPage: absoluteUrl(page.slug),
  author: { "@type": "Organization", name: "Chhatrapati Shivaji Maharaj Knowledge Hub" },
  publisher: { "@type": "Organization", name: "Chhatrapati Shivaji Maharaj Knowledge Hub" }
});

export const breadcrumbJsonLd = (slug: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbItems(slug).map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.href)
  }))
});

export const faqJsonLd = (page: SitePage) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: page.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer }
  }))
});
