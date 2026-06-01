import Link from "next/link";
import { pageMap } from "@/data/pages";

export function RelatedPages({ slugs }: { slugs: string[] }) {
  return (
    <section aria-labelledby="related-pages" className="mt-12">
      <h2 id="related-pages" className="text-2xl font-bold text-white">
        Related Articles
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {slugs.slice(0, 8).map((slug) => {
          const page = pageMap.get(slug);
          return (
            <Link key={slug} href={slug} className="rounded-lg border border-[#2a2a2a] bg-[#141414] p-4 shadow-lg shadow-[#ff6b00]/5 transition hover:border-[#ff6b00] group">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#ff6b00]">{page?.eyebrow ?? "Guide"}</span>
              <h3 className="mt-2 text-lg font-bold text-white group-hover:text-[#ff8c00] transition-colors">{page?.h1 ?? slug}</h3>
              <p className="mt-2 font-sans text-sm leading-6 text-[#a0a0a0]">{page?.description ?? "Continue reading this related guide."}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
