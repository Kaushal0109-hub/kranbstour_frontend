import Link from "next/link";
import { ArrowUpRight, Check, Clock, Eye, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/tours";

export function ListingTourCard({ tour, onSelect }) {
  const isEnquireOnly = !tour.price || isNaN(tour.price);
  const detailUrl = `/tours/${tour.slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-royal/10 bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:shadow-photo">
      {/* Photo with duration badge and route */}
      <Link href={detailUrl} className="relative block aspect-[16/10] overflow-hidden bg-mint/30">
        <img
          src={tour.image}
          alt={tour.imageAlt || tour.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal/60 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-start justify-between gap-2">
          <span className="flex items-center gap-1 rounded-full bg-paper/95 px-3 py-1 font-display text-xs font-bold text-royal shadow-sm backdrop-blur-xs">
            <Clock className="h-3.5 w-3.5 text-saffron" />
            {tour.duration}
          </span>
          {tour.tourType && (
            <span className="rounded-full bg-saffron px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-paper shadow-sm">
              {tour.tourType}
            </span>
          )}
        </div>

        {/* Bottom overlay info */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-paper">
          {tour.route ? (
            <span className="flex items-center gap-1 truncate font-medium">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-saffron-light" />
              <span className="truncate">{tour.route}</span>
            </span>
          ) : tour.startingPoint ? (
            <span className="flex items-center gap-1 truncate font-medium">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-saffron-light" />
              <span>Starts: {tour.startingPoint}</span>
            </span>
          ) : null}

          {tour.pickup && (
            <span className="shrink-0 rounded-full bg-mint/90 px-2.5 py-0.5 text-[0.68rem] font-semibold text-royal shadow-xs">
              Pickup Inc.
            </span>
          )}
        </div>
      </Link>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Title */}
        <h3 className="font-display text-xl font-bold leading-snug text-royal transition-colors group-hover:text-saffron-deep">
          <Link href={detailUrl} className="hover:underline">
            {tour.title}
          </Link>
        </h3>

        {/* Summary */}
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-foreground/75">
          {tour.summary || tour.overview}
        </p>

        {/* Highlights */}
        {tour.highlights && tour.highlights.length > 0 && (
          <div className="mt-4 border-t border-royal/10 pt-3.5">
            <p className="eyebrow text-[0.65rem] tracking-wider text-muted-foreground">
              Key Highlights
            </p>
            <ul className="mt-2 space-y-1.5">
              {tour.highlights.slice(0, 3).map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-mint/70 text-mint-deep">
                    <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                  </span>
                  <span className="line-clamp-1">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer with Price and CTAs */}
        <div className="mt-auto pt-5">
          <div className="flex items-baseline justify-between border-t border-royal/10 pt-4">
            <div>
              <p className="text-[0.7rem] uppercase font-semibold tracking-wider text-muted-foreground">
                {isEnquireOnly ? "Pricing" : "Starting From"}
              </p>
              {isEnquireOnly ? (
                <p className="font-display text-lg font-bold text-royal">Enquire for Price</p>
              ) : (
                <p className="flex items-baseline gap-1 font-display text-2xl font-bold text-royal">
                  {formatPrice(tour.price)}
                  <span className="text-[0.7rem] font-normal text-muted-foreground">/ person</span>
                </p>
              )}
            </div>

            {tour.pickup && (
              <span className="text-right text-[0.7rem] font-medium text-muted-foreground">
                Doorstep Pickup
              </span>
            )}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <Button
              asChild
              variant="outline-royal"
              size="pill"
              className="w-full text-xs"
            >
              <Link href={detailUrl}>
                <Eye className="h-3.5 w-3.5" />
                View Details
              </Link>
            </Button>

            <Button asChild variant="saffron" size="pill" className="w-full text-xs">
              <a
                href={`mailto:hello@kranbstour.com?subject=${encodeURIComponent(`Inquiry for ${tour.title}`)}`}
              >
                Enquire Now <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
