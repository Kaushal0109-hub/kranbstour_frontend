import Image from "next/image";
import { Camera } from "lucide-react";

export function BlogCoverImage({ src, alt, caption, destination }) {
  if (!src) return null;

  return (
    <figure className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8 mt-3 mb-5">
      {/* 16:9 Responsive Cover Image with moderate rounding */}
      <div className="relative aspect-[16/9] w-full max-h-[480px] overflow-hidden rounded-2xl shadow-md bg-ivory">
        <Image
          src={src}
          alt={alt || "KranbsTour Travel Story"}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover"
        />

        {destination && (
          <div className="absolute top-4 left-4 rounded-full bg-paper/95 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-royal shadow-xs tracking-wider uppercase font-display">
            📍 {destination}
          </div>
        )}
      </div>

      {/* Caption & Photo credit */}
      {(caption || alt) && (
        <figcaption className="mt-2 flex items-center justify-between px-1 text-xs text-foreground/60">
          <span className="flex items-center gap-1.5 italic font-sans">
            <Camera className="h-3.5 w-3.5 text-royal/40" />
            {caption || alt}
          </span>
          <span className="hidden sm:inline-block font-sans text-[11px] tracking-wider uppercase text-royal/40">
            KranbsTour Travel Archives
          </span>
        </figcaption>
      )}
    </figure>
  );
}
