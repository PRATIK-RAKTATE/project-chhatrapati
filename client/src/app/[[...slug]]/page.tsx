import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { allPages, pageMap } from "@/data/pages";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonLd";
import { metadataForPage } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

const slugFromParams = (slug?: string[]) => {
  const path = slug?.join("/") ?? "";
  return path ? `/${path}` : "/";
};

export function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slug === "/" ? [] : page.slug.slice(1).split("/")
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = pageMap.get(slugFromParams((await params).slug));

  if (!page) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false }
    };
  }

  return metadataForPage(page);
}

export default async function StaticPage({ params }: PageProps) {
  const page = pageMap.get(slugFromParams((await params).slug));

  if (!page) {
    notFound();
  }

  const schemas = [articleJsonLd(page), breadcrumbJsonLd(page.slug), faqJsonLd(page)];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("</", "<\\/") }}
        />
      ))}
      <ArticleLayout page={page} />
    </>
  );
}
