import type { SitePage } from "@/data/pages";
import { BattleCard, FortCard, InternalLinkGrid, PersonCard } from "./Cards";
import { FAQBlock } from "./FAQBlock";
import { RelatedPages } from "./RelatedPages";
import { SearchIntentSection } from "./SearchIntentSection";
import { SEOHero } from "./SEOHero";
import { SourceReferences } from "./SourceReferences";
import { TableOfContents } from "./TableOfContents";
import { Timeline } from "./Timeline";

export function ArticleLayout({ page }: { page: SitePage }) {
  return (
    <main>
      <SEOHero page={page} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:px-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="prose-body min-w-0">
          {page.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {page.slug === "/" || page.slug === "/shivaji-maharaj" ? <InternalLinkGrid links={page.related} /> : null}
          {page.slug === "/forts" ? <FortCard /> : null}
          {page.slug === "/battles" ? <BattleCard /> : null}
          {page.slug === "/family" ? <PersonCard /> : null}
          {page.slug.includes("timeline") || page.slug === "/shivaji-maharaj" ? <Timeline /> : null}

          <SearchIntentSection />
          <FAQBlock faqs={page.faqs} />
          <RelatedPages slugs={page.related} />
          <SourceReferences references={page.references} />
        </article>
        <TableOfContents sections={page.sections} />
      </div>
    </main>
  );
}
