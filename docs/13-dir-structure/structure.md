app/
  layout.tsx
  robots.ts
  sitemap.ts
  manifest.ts
  not-found.tsx

  (marketing)/
    page.tsx                    # /
    about/page.tsx
    contact/page.tsx
    pricing/page.tsx

  (auth)/
    login/page.tsx
    signup/page.tsx
    forgot-password/page.tsx

  blog/
    page.tsx                    # /blog (listing)
    [slug]/
      page.tsx                  # /blog/:slug
      opengraph-image.tsx
      twitter-image.tsx

  syllabus/                     # your core SEO cluster
    page.tsx                    # /syllabus (hub page)
    [program]/                  # /syllabus/fe, /syllabus/be, etc.
      page.tsx                  # program hub
      [year]/                   # /syllabus/fe/2024
        page.tsx                # year hub
        [slug]/                 # /syllabus/fe/2024/<subject-or-doc>
          page.tsx              # leaf SEO page
          opengraph-image.tsx
          twitter-image.tsx

  api/
    revalidate/route.ts         # on-demand ISR (optional)

components/
  seo/
    JsonLd.tsx
    Breadcrumbs.tsx
    Canonical.tsx

lib/
  seo/
    metadata.ts                 # build Metadata objects
    jsonld.ts                   # schema builders
  content/
    syllabus.ts                 # data access (db/cms/fs)
  routes/
    canonical.ts                # canonical URL helpers

public/
  syllabus/                     # PDFs, images (stable URLs)
    fe/
      2024/
        sppu-fe-2024.pdf
