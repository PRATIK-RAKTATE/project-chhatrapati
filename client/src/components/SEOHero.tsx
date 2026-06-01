import type { SitePage } from "@/data/pages";
import { images } from "@/data/images";
import { Breadcrumbs } from "./Breadcrumbs";
import { ImageWithCredit } from "./ImageWithCredit";

export function SEOHero({ page }: { page: SitePage }) {
  return (
    <section className="border-b border-[#ff6b00]/20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
        <div className="self-center">
          <Breadcrumbs slug={page.slug} />
          <p className="mt-8 font-sans text-xs font-black uppercase tracking-[0.18em] text-[#ff6b00]">{page.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl text-white">{page.h1}</h1>
          <p className="mt-5 max-w-3xl font-sans text-lg leading-8 text-[#b0b0b0]">{page.description}</p>
        </div>
        <ImageWithCredit image={images[page.image]} priority />
      </div>
    </section>
  );
}
