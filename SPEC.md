Build a production-quality SEO-focused website using Next.js App Router.

Project goal:
Create a complete informational website about Chhatrapati Shivaji Maharaj designed for organic search ranking, topical authority, and high page indexing. No backend. Use static/generated pages only.

Tech requirements:
- Use Next.js latest stable App Router
- Use TypeScript
- Use Tailwind CSS
- No backend/API/database
- Use static data files in /data
- Use reusable components
- Use SEO metadata per page
- Use JSON-LD structured data
- Use next/image
- Use images from reliable public web sources using remote image URLs
- Add proper alt text, captions, and image credits
- Responsive, fast, accessible
- Clean folder structure
- Production-grade code

Important SEO requirements:
- Every page must have unique title, description, canonical URL, Open Graph, Twitter metadata
- Add Article schema, Breadcrumb schema, FAQ schema where relevant
- Main pillar pages should internally link to all cluster pages
- Cluster pages should link back to pillar page and related pages
- Use semantic HTML: header, nav, main, article, section, aside, footer
- Add sitemap.ts and robots.ts
- Add breadcrumb navigation
- Add table of contents on long pages
- Add FAQ section on every important page
- Optimize headings: one H1 only, proper H2/H3 hierarchy
- Add image alt tags naturally including page topic
- Use clean SEO URLs

Website sections and pages:

1. Main pillar:
- /shivaji-maharaj
Title: Chhatrapati Shivaji Maharaj: History, Biography, Battles, Forts and Legacy
Sections:
Birth, childhood, family, rise of Swarajya, battles, forts, navy, administration, coronation, death, legacy, timeline, FAQs.

2. History cluster:
- /history/shivaji-maharaj-biography
- /history/childhood
- /history/early-life
- /history/achievements
- /history/coronation
- /history/death
- /history/legacy
- /history/facts

3. Battles cluster:
- /battles
- /battles/battle-of-pratapgad
- /battles/battle-of-pavan-khind
- /battles/battle-of-salher
- /battles/battle-of-umberkhind
- /battles/shivaji-vs-afzal-khan
- /battles/shivaji-vs-shaista-khan
- /battles/shivaji-vs-mughals

Each battle page must include:
Cause, date, location, commanders, strategy, outcome, impact, timeline, related people, related forts, FAQ.

4. Forts cluster:
- /forts
- /forts/raigad-fort
- /forts/sinhagad-fort
- /forts/pratapgad-fort
- /forts/torna-fort
- /forts/rajgad-fort
- /forts/shivneri-fort
- /forts/purandar-fort
- /forts/vijaydurg-fort
- /forts/sindhudurg-fort
- /forts/lohagad-fort

Each fort page must include:
History, importance during Shivaji Maharaj era, architecture, location, how to reach, nearby places, best time to visit, map placeholder, FAQs.

5. Military cluster:
- /military/shivaji-maharaj-military-strategy
- /military/ganimi-kava
- /military/guerrilla-warfare
- /military/intelligence-network
- /military/army-structure
- /military/weapons

6. Navy cluster:
- /navy/shivaji-maharaj-navy
- /navy/maratha-navy
- /navy/naval-forts
- /navy/naval-strategy
- /navy/sindhudurg-naval-base

7. Administration cluster:
- /administration/ashta-pradhan-mandal
- /administration/revenue-system
- /administration/justice-system
- /administration/governance-model
- /administration/tax-system

8. Family and people:
- /family
- /family/jijabai
- /family/shahaji-maharaj
- /family/sambhaji-maharaj
- /family/rajaram-maharaj
- /family/family-tree
- /people/tanaji-malusare
- /people/baji-prabhu-deshpande
- /people/netaji-palkar
- /people/moropant-pingle
- /people/hambirrao-mohite
- /people/kanhoji-angre

9. Timeline:
- /timeline
- /timeline/important-events
- /timeline/coronation-timeline
- /timeline/military-campaigns

10. Travel SEO:
- /travel-guides/best-forts-near-pune
- /travel-guides/weekend-forts-in-maharashtra
- /travel-guides/shivaji-forts-road-trip
- /travel-guides/raigad-travel-guide
- /travel-guides/sinhagad-travel-guide

11. FAQ/search intent pages:
- /faq/who-was-shivaji-maharaj
- /faq/where-was-shivaji-born
- /faq/how-many-forts-did-shivaji-have
- /faq/when-was-shivaji-crowned
- /faq/how-did-shivaji-die
- /faq/who-was-jijabai
- /faq/who-killed-afzal-khan

Components to build:
- Header
- Footer
- SEOHero
- Breadcrumbs
- TableOfContents
- ArticleLayout
- RelatedPages
- FAQBlock
- ImageWithCredit
- Timeline
- FortCard
- BattleCard
- PersonCard
- InternalLinkGrid
- SourceReferences
- SearchIntentSection

Design:
- Historical premium look
- Saffron/gold/stone-inspired color palette
- Clean typography
- Fast-loading layout
- Mobile-first
- Cards for forts, battles, people
- Long-form readable article pages
- Sticky table of contents on desktop
- CTA blocks linking to related pages

Data structure:
Create static data files:
- /data/pages.ts
- /data/forts.ts
- /data/battles.ts
- /data/people.ts
- /data/faqs.ts
- /data/timeline.ts
- /data/images.ts

Use these data files to generate repeated cards, related links, breadcrumbs, metadata, FAQs, and internal links.

Image requirements:
Use remote public image URLs from reliable sources like Wikimedia Commons where possible.
Every image object must include:
- src
- alt
- caption
- credit
- sourceUrl
- width
- height

Do not use random uncredited images.
Do not hotlink low-quality or copyrighted images without attribution.

Content requirements:
Generate detailed, SEO-friendly placeholder content for every page.
Content should be historically respectful and neutral.
Do not fabricate controversial facts.
Where exact details are uncertain, write carefully and mention historical variation.
Use references/source placeholders at the bottom of each article.

Internal linking rules:
- Every page links to /shivaji-maharaj
- Every fort page links to /forts and 3 related forts
- Every battle page links to /battles, related people, and related forts
- Every person page links to /family or /people and related battles
- Every FAQ page links to a deeper article
- Add “Related Articles” section on all pages

Performance:
- Use static rendering
- Avoid client components unless necessary
- Minimize JavaScript
- Use server components by default
- Use next/image with remotePatterns configured
- Add loading states only where needed
- Ensure Lighthouse SEO score 95+

Deliverables:
- Full Next.js project structure
- All route files
- Reusable components
- Static data files
- SEO metadata helpers
- JSON-LD helpers
- robots.ts
- sitemap.ts
- README with setup instructions

Do not create backend logic.
Do not require CMS.
Do not require database.
Do not use CommonJS.
Use ES module syntax only.