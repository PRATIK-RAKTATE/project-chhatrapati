import type { PageSection } from "@/data/pages";

export function TableOfContents({ sections }: { sections: PageSection[] }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-lg border border-[#ff6b00]/20 bg-[#141414] p-4 shadow-lg shadow-[#ff6b00]/5">
        <h2 className="font-sans text-xs font-black uppercase tracking-[0.16em] text-[#ff6b00]">Contents</h2>
        <ol className="mt-3 grid gap-2 font-sans text-sm text-[#b0b0b0]">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:text-[#ff8c00] transition-colors block py-1 border-l-2 border-transparent hover:border-[#ff6b00] pl-3 -ml-3">
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
