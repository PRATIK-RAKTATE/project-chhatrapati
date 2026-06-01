export function SourceReferences({ references }: { references: string[] }) {
  return (
    <section aria-labelledby="sources" className="mt-12 border-t border-[#2a2a2a] pt-8">
      <h2 id="sources" className="text-2xl font-bold text-white">
        Sources and Editorial Notes
      </h2>
      <ul className="mt-4 grid gap-3 font-sans text-sm leading-7 text-[#909090]">
        {references.map((source) => (
          <li key={source} className="border-l-2 border-[#ff6b00]/30 pl-4">{source}</li>
        ))}
      </ul>
    </section>
  );
}
