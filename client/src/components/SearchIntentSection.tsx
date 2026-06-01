import Link from "next/link";

const intents = [
  ["/faq/who-was-shivaji-maharaj", "Who was Shivaji Maharaj?"],
  ["/faq/where-was-shivaji-born", "Where was Shivaji Maharaj Born?"],
  ["/faq/how-many-forts-did-shivaji-have", "How Many Forts Did Shivaji Maharaj Have?"],
  ["/faq/when-was-shivaji-crowned", "When was Shivaji Maharaj Crowned?"]
];

export function SearchIntentSection() {
  return (
    <section aria-labelledby="search-intent" className="mt-12 rounded-lg border border-[#ff6b00]/30 bg-gradient-to-br from-[#141414] to-[#0a0a0a] p-6 text-[#e0e0e0]">
      <h2 id="search-intent" className="text-2xl font-bold text-white">
        Quick Answers
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {intents.map(([href, label]) => (
          <Link key={href} href={href} className="rounded-md border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 font-sans text-sm font-bold text-[#c0c0c0] hover:border-[#ff6b00] hover:text-[#ff8c00] transition-all">
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
