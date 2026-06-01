import Image from "next/image";
import type { ImageAsset } from "@/data/images";

export function ImageWithCredit({ image, priority = false }: { image: ImageAsset; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#141414] shadow-lg shadow-[#ff6b00]/5">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        className="aspect-[16/10] w-full object-cover"
      />
      <figcaption className="border-t border-[#2a2a2a] px-4 py-3 font-sans text-xs leading-5 text-[#808080]">
        {image.caption} Credit:{" "}
        <a href={image.sourceUrl} className="text-[#ff8c00] hover:text-[#ff6b00] transition-colors" rel="noreferrer" target="_blank">
          {image.credit}
        </a>
      </figcaption>
    </figure>
  );
}
