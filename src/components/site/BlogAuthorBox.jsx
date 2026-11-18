import Image from "next/image";
import { CheckCircle2, Feather } from "lucide-react";

export function BlogAuthorBox({ author }) {
  if (!author) return null;

  return (
    <div className="my-10 rounded-3xl border border-royal/10 bg-ivory/50 p-6 sm:p-8 shadow-soft">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* Avatar */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-3 border-saffron shadow-card bg-paper">
          <Image
            src={author.avatar || "/avatars/avatar-1.jpg"}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-saffron-deep">
              <Feather className="h-3 w-3" /> Written by
            </span>
            <span className="text-royal/30">•</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-800 px-2 py-0.5 text-[11px] font-semibold">
              <CheckCircle2 className="h-3 w-3" /> Verified KranbsTour Guide
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-royal">
            {author.name}
          </h3>

          <p className="text-xs font-semibold text-royal/70">
            {author.role}
          </p>

          <p className="text-sm text-foreground/80 leading-relaxed font-sans pt-1">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
