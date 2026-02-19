// src/app/chhatrapati-shivaji-maharaj/page.jsx

import Script from "next/script";
import Link from "next/link";

const SITE_URL = "https://truehistoryofshivaji.in";
const PATH = "/chhatrapati-shivaji-maharaj";
const CANONICAL = `${SITE_URL}${PATH}`;

export const metadata = {
  title:
    "Chhatrapati Shivaji Maharaj: Birth Date, Birthplace, Coronation (Rajyabhishek) 1674",
  description:
    "Chhatrapati Shivaji Maharaj: birth date (19 February 1630), birthplace (Shivneri Fort), coronation at Raigad in 1674, forts, administration, and legacy.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Chhatrapati Shivaji Maharaj: Birth Date, Birthplace, Coronation (Rajyabhishek) 1674",
    description:
      "Birth date and place, coronation in 1674 at Raigad, forts, governance, and legacy of Chhatrapati Shivaji Maharaj.",
    url: CANONICAL,
    type: "article",
  },
  twitter: {
    card: "summary",
    title:
      "Chhatrapati Shivaji Maharaj: Birth Date, Birthplace, Coronation (Rajyabhishek) 1674",
    description:
      "Birth date (19 February 1630), Shivneri Fort, coronation at Raigad in 1674, forts, administration, legacy.",
  },
};

export default function ChhatrapatiShivajiMaharajPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "History", item: `${SITE_URL}/history` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Chhatrapati Shivaji Maharaj",
        item: CANONICAL,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When was Chhatrapati Shivaji Maharaj born?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chhatrapati Shivaji Maharaj is traditionally associated with 19 February 1630 as his birth date.",
        },
      },
      {
        "@type": "Question",
        name: "Where was Chhatrapati Shivaji Maharaj born?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He was born at Shivneri Fort, near Junnar (present-day Maharashtra, India).",
        },
      },
      {
        "@type": "Question",
        name: "When did Rajyabhishek (coronation) happen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "His coronation (Rajyabhishek) took place in 1674 at Raigad Fort.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      {/* JSON-LD: Breadcrumbs + FAQ */}
      <Script
        id="jsonld-breadcrumbs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-orange-500/18 blur-3xl" />
          <div className="absolute -top-64 left-1/2 h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070A12] to-[#070A12]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-14 pt-20 text-center md:pb-20 md:pt-28">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            facts only, no fluff.
          </p>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            True, structured history of{" "}
            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-amber-300 bg-clip-text text-transparent">
              Chhatrapati Shivaji Maharaj
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-7 text-white/70 md:text-base">
            Birth date and birthplace, Rajyabhishek (1674), forts, governance, and legacy — organized
            for fast reading.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#facts"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 ring-1 ring-orange-400/40 transition hover:from-orange-400 hover:to-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              Explore Facts
            </Link>

            <Link
              href="#faq"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Learn More
            </Link>
          </div>

          
        </div>
      </section>

      {/* Content */}
      <section id="facts" className="mx-auto max-w-5xl px-6 pb-20 pt-4">
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">What you can access</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/65 md:text-base">
            Everything essential — minimal text, high signal. Use this as a quick reference.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-base font-semibold">
              Birth date & birthplace
              <span className="ml-2 inline-flex rounded-full bg-orange-500/15 px-2 py-0.5 text-xs font-medium text-orange-200 ring-1 ring-orange-500/25">
                Primary intent
              </span>
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <span className="font-semibold text-white">Birth date:</span> 19 February 1630
                <span className="text-white/55"> (traditional observance)</span>
              </li>
              <li>
                <span className="font-semibold text-white">Birthplace:</span> Shivneri Fort, near Junnar
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-base font-semibold">Rajyabhishek (1674)</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Coronation at <span className="font-semibold text-white">Raigad Fort</span> in{" "}
              <span className="font-semibold text-white">1674</span> — formal sovereignty of the realm.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-base font-semibold">Highlights</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <span className="font-semibold text-white">Forts:</span> strategic network for defense + administration
              </li>
              <li>
                <span className="font-semibold text-white">Governance:</span> disciplined revenue and local administration
              </li>
              <li>
                <span className="font-semibold text-white">Navy:</span> coastal defense and maritime strength
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-white/3 p-6 backdrop-blur md:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold md:text-2xl">FAQ</h2>
              <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-200">
                FAQ schema enabled
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <details className="group rounded-2xl border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white/90">
                  When was Chhatrapati Shivaji Maharaj born?
                  <span className="ml-2 text-orange-300/90 group-open:text-orange-200">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Traditionally observed as <span className="font-semibold text-white">19 February 1630</span>.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white/90">
                  Where was Chhatrapati Shivaji Maharaj born?
                  <span className="ml-2 text-orange-300/90 group-open:text-orange-200">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  <span className="font-semibold text-white">Shivneri Fort</span>, near Junnar, Maharashtra.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white/90">
                  When did Rajyabhishek (coronation) happen?
                  <span className="ml-2 text-orange-300/90 group-open:text-orange-200">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  In <span className="font-semibold text-white">1674</span> at{" "}
                  <span className="font-semibold text-white">Raigad Fort</span>.
                </p>
              </details>
            </div>

            <nav aria-label="Related links" className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-sm font-semibold text-white/85">Related</h3>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                <li>
                  <Link
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10"
                    href="/history"
                  >
                    History hub
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10"
                    href="/blog"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
              </ul>

              <p className="mt-5 text-xs text-white/50">
                Tip: don’t create duplicate pages for the same intent (e.g. “birth date”, “born when”)
                — keep one canonical URL and strengthen it with internal links.
              </p>
            </nav>
          </div>
        </section>
      </section>
    </main>
  );
}
