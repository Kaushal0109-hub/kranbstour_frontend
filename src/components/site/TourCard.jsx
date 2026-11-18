import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { categoryLabels, formatPrice } from "@/data/tours";
import { cn } from "@/lib/utils";

/** Photographic tour card used in the city carousels and Golden Triangle section. */
export function TourCard({ tour, onView, className }) {
  const detailUrl = `/tours/${tour.slug}`;

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-[2rem] bg-paper p-3 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift",
        className,
      )}
    >
      <Link href={detailUrl} className="relative block h-64 overflow-hidden rounded-[1.6rem] sm:h-72">
        <img
          src={tour.image}
          alt={tour.imageAlt}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full bg-saffron px-3 py-1 text-[0.78rem] font-bold tracking-wide text-paper uppercase">
          {categoryLabels[tour.category]}
        </span>
        <span className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-paper/95 px-3 py-1.5 text-xs font-bold text-royal shadow-soft">
          <Clock className="h-3.5 w-3.5 text-saffron" /> {tour.duration}
        </span>
      </Link>
      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <h3 className="text-[1.45rem] leading-tight font-bold">
          <Link href={detailUrl} className="hover:text-saffron-deep transition-colors">
            {tour.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/70">{tour.summary}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <p className="leading-tight">
            <span className="block text-xs text-muted-foreground">From</span>
            <span className="font-display text-2xl font-bold text-royal">
              {formatPrice(tour.price)}
            </span>
            <span className="text-xs text-muted-foreground"> / person</span>
          </p>
          <Link
            href={detailUrl}
            className="btn-shine group/btn inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-royal px-5 font-display text-sm font-semibold text-ivory transition-all duration-300 hover:bg-saffron"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
