import { timeline } from "@/data/timeline";

export function Timeline() {
  return (
    <section aria-labelledby="timeline-section" className="mt-10">
      <h2 id="timeline-section" className="text-2xl font-bold text-white">
        Timeline
      </h2>
      <ol className="mt-5 grid gap-4">
        {timeline.map((item) => (
          <li key={`${item.year}-${item.title}`} className="grid gap-2 rounded-lg border border-[#2a2a2a] bg-[#141414] p-4 sm:grid-cols-[7rem_1fr] hover:border-[#ff6b00]/30 transition-colors">
            <time className="font-sans text-sm font-black text-[#ff6b00]">{item.year}</time>
            <div>
              <h3 className="font-bold text-[#e0e0e0]">{item.title}</h3>
              <p className="mt-1 font-sans text-sm leading-6 text-[#a0a0a0]">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
