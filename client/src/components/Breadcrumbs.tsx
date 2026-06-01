import Link from "next/link";
import { breadcrumbItems } from "@/lib/seo";

export function Breadcrumbs({ slug }: { slug: string }) {
  const items = breadcrumbItems(slug);
  return (
    <nav aria-label="Breadcrumb" className="font-sans text-sm text-[#888888]">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true" className="text-[#ff6b00]">/</span> : null}
            <Link href={item.href} className="hover:text-[#ff8c00] transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
