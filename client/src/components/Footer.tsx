import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#ff6b00]/30 bg-[#111111] text-[#e0e0e0]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <section>
          <h2 className="text-xl font-bold text-white">Chhatrapati Shivaji Maharaj Knowledge Hub</h2>
          <p className="mt-3 max-w-2xl font-sans text-sm leading-7 text-[#a0a0a0]">
            A static informational website designed for long-form reading, topical authority, structured data and responsible historical summaries.
          </p>
        </section>
        <section className="font-sans text-sm">
          <h2 className="font-bold uppercase tracking-[0.15em] text-[#ff6b00]">Explore</h2>
          <div className="mt-3 grid gap-2">
            <Link href="/shivaji-maharaj" className="hover:text-[#ff8c00] transition-colors">Main guide</Link>
            <Link href="/forts" className="hover:text-[#ff8c00] transition-colors">Forts</Link>
            <Link href="/battles" className="hover:text-[#ff8c00] transition-colors">Battles</Link>
            <Link href="/travel-guides/best-forts-near-pune" className="hover:text-[#ff8c00] transition-colors">Travel guides</Link>
          </div>
        </section>
        <section className="font-sans text-sm">
          <h2 className="font-bold uppercase tracking-[0.15em] text-[#ff6b00]">Search Intent</h2>
          <div className="mt-3 grid gap-2">
            <Link href="/faq/who-was-shivaji-maharaj" className="hover:text-[#ff8c00] transition-colors">Who was Shivaji Maharaj?</Link>
            <Link href="/faq/where-was-shivaji-born" className="hover:text-[#ff8c00] transition-colors">Birthplace</Link>
            <Link href="/faq/when-was-shivaji-crowned" className="hover:text-[#ff8c00] transition-colors">Coronation</Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
