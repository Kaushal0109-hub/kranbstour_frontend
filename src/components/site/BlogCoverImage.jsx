import Image from "next/image";
import { Camera } from "lucide-react";

export function BlogCoverImage({ src, alt, caption, destination }) {
  if (!src) return null;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0 -mt-2 mb-10">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-3xl border border-royal/10 shadow-card bg-ivory">
        <Image
          src={src}
          alt={alt || "KranbsTour Travel Story"}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />

        {destination && (
          <div className="absolute top-4 left-4 rounded-full bg-paper/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-royal shadow-soft">
            📍 {destination}
          </div>
        )}
      </div>

      {/* Caption & Photo credit */}
      {(caption || alt) && (
        <div className="mt-2.5 flex items-center justify-between px-2 text-xs text-foreground/60">
          <span className="flex items-center gap-1.5 italic">
            <Camera className="h-3 w-3 text-royal/40" />
            {caption || alt}
          </span>
          <span className="hidden sm:inline-block font-sans text-[11px] text-royal/40">
            KranbsTour Travel Archives
          </span>
        </div>
      )}
    </div>
  );
}
