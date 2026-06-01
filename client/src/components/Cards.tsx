import Link from "next/link";
import { battles } from "@/data/battles";
import { forts } from "@/data/forts";
import { people } from "@/data/people";

export function InternalLinkGrid({ links }: { links: string[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {links.map((href) => (
        <Link key={href} href={href} className="rounded-md border border-[#2a2a2a] bg-[#141414] px-4 py-3 font-sans text-sm font-semibold text-[#c0c0c0] hover:border-[#ff6b00] hover:text-[#ff8c00] transition-all">
          {href.split("/").filter(Boolean).at(-1)?.replaceAll("-", " ")}
        </Link>
      ))}
    </div>
  );
}

export function FortCard() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {forts.map((fort) => (
        <Link key={fort.slug} href={fort.slug} className="rounded-lg border border-[#2a2a2a] bg-[#141414] p-4 shadow-lg shadow-[#ff6b00]/5 hover:border-[#ff6b00] transition-all group">
          <h3 className="text-xl font-bold text-white group-hover:text-[#ff8c00] transition-colors">{fort.name}</h3>
          <p className="mt-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#ff6b00]">{fort.location}</p>
          <p className="mt-3 font-sans text-sm leading-6 text-[#a0a0a0]">{fort.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export function BattleCard() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {battles.map((battle) => (
        <Link key={battle.slug} href={battle.slug} className="rounded-lg border border-[#2a2a2a] bg-[#141414] p-4 shadow-lg shadow-[#ff6b00]/5 hover:border-[#ff6b00] transition-all group">
          <h3 className="text-xl font-bold text-white group-hover:text-[#ff8c00] transition-colors">{battle.name}</h3>
          <p className="mt-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#ff6b00]">{battle.date} · {battle.location}</p>
          <p className="mt-3 font-sans text-sm leading-6 text-[#a0a0a0]">{battle.outcome}</p>
        </Link>
      ))}
    </div>
  );
}

export function PersonCard() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {people.map((person) => (
        <Link key={person.slug} href={person.slug} className="rounded-lg border border-[#2a2a2a] bg-[#141414] p-4 shadow-lg shadow-[#ff6b00]/5 hover:border-[#ff6b00] transition-all group">
          <h3 className="text-xl font-bold text-white group-hover:text-[#ff8c00] transition-colors">{person.name}</h3>
          <p className="mt-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#ff6b00]">{person.role}</p>
          <p className="mt-3 font-sans text-sm leading-6 text-[#a0a0a0]">{person.summary}</p>
        </Link>
      ))}
    </div>
  );
}
