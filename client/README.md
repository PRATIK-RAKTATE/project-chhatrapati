# Chhatrapati Shivaji Maharaj SEO Website

Production-oriented static Next.js App Router site for long-form SEO pages about Chhatrapati Shivaji Maharaj.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static data files in `src/data`
- Server components by default
- `next/image` with attributed Wikimedia Commons remote images
- Metadata, canonical URLs, Open Graph, Twitter metadata, sitemap, robots and JSON-LD

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run check
npm run build
```

## Structure

- `src/app/[[...slug]]/page.tsx` renders all static content routes from data.
- `src/data/pages.ts` defines every URL, metadata, sections, FAQs, related links and references.
- `src/data/forts.ts`, `battles.ts`, `people.ts`, `timeline.ts`, `faqs.ts`, `images.ts` hold reusable source data.
- `src/components` contains shared SEO article components.
- `src/lib/seo.ts` and `src/lib/jsonLd.ts` build metadata and structured data.

## Content Notes

The current content is detailed SEO-friendly placeholder copy written in a neutral style. Before publishing, replace source placeholders with audited citations and verify travel details such as access, timings, safety rules and local conservation restrictions.
