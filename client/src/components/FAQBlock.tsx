import type { FAQ } from "@/data/faqs";

export function FAQBlock({ faqs }: { faqs: FAQ[] }) {
  return (
    <section aria-labelledby="faqs" className="mt-12 rounded-lg border border-[#2a2a2a] bg-[#141414] p-6">
      <h2 id="faqs" className="text-2xl font-bold text-white">
        FAQs
      </h2>
      <div className="mt-5 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-md border border-[#2a2a2a] bg-[#0a0a0a] p-4 hover:border-[#ff6b00]/30 transition-colors">
            <summary className="cursor-pointer font-sans font-bold text-[#e0e0e0] hover:text-[#ff8c00] transition-colors">{faq.question}</summary>
            <p className="mt-3 font-sans text-sm leading-7 text-[#a0a0a0]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
