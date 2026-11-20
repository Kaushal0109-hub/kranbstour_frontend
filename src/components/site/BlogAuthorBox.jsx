import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function BlogAuthorBox({ author }) {
  if (!author) return null;

  return (
    <div className="my-8 py-5 border-y border-royal/10">
      <div className="flex items-start sm:items-center gap-4">
        {/* Author Avatar */}
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-saffron bg-ivory">
          <Image
            src={author.avatar || "/avatars/avatar-1.jpg"}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Byline & Bio */}
        <div className="space-y-1 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-foreground/50 font-medium">
              Written by
            </span>
            <span className="text-royal/30">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-green-800">
              <CheckCircle2 className="h-3 w-3 text-green-700" /> Verified Local Guide
            </span>
          </div>

          <h3 className="font-display text-base sm:text-lg font-bold text-royal">
            {author.name}
          </h3>

          <p className="text-xs text-saffron-deep font-semibold">
            {author.role}
          </p>

          <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-sans pt-0.5">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
