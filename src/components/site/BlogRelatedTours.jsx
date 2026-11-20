import Link from "next/link";
import Image from "next/image";
import { Star, Clock, ArrowRight } from "lucide-react";
import { getTourBySlug, packages } from "@/data/tours";
import { Button } from "@/components/ui/button";

export function BlogRelatedTours({ relatedTourSlugs = [], destination = "" }) {
  let tours = (relatedTourSlugs || [])
    .map((slug) => getTourBySlug(slug))
    .filter(Boolean);

  if (tours.length === 0) {
    const destLower = (destination || "").toLowerCase();
    tours = packages
      .filter((p) => p.category.includes(destLower) || p.title.toLowerCase().includes(destLower))
      .slice(0, 3);
  }

  if (tours.length === 0) {
    tours = packages.slice(0, 2);
  } else if (tours.length > 3) {
    tours = tours.slice(0, 3);
  }

  return (
    <section className="my-10 pt-6 border-t border-royal/10">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-saffron-deep font-display block">
            EXPERIENCE THIS JOURNEY
          </span>
          <h3 className="font-display text-2xl font-bold text-royal">
            Recommended Tour Packages
          </h3>
        </div>
        <Link
          href="/#packages"
          className="text-xs font-bold text-royal hover:text-saffron transition-colors inline-flex items-center gap-1 shrink-0 font-display"
        >
          View all tours →
        </Link>
      </div>

      {/* 2 or 3 Compact Tour Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => {
          const detailUrl = `/tours/${tour.slug || tour.id}`;
          return (
            <div
              key={tour.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-royal/10 bg-paper shadow-xs hover:shadow-md transition-all duration-200"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-ivory">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {tour.duration && (
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-paper/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-royal shadow-xs">
                    <Clock className="h-2.5 w-2.5 text-saffron" />
                    <span>{tour.duration}</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-4 space-y-2">
                <div className="flex items-center gap-1 text-[11px] text-saffron font-bold">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-royal font-display">{tour.rating || 4.9}</span>
                  <span className="text-foreground/50 font-normal">
                    ({tour.reviewCount || 120})
                  </span>
                </div>

                <h4 className="font-display text-sm font-bold text-royal line-clamp-2 leading-snug group-hover:text-saffron-deep transition-colors">
                  <Link href={detailUrl}>{tour.title}</Link>
                </h4>

                <div className="mt-auto pt-2 border-t border-royal/10 flex items-center justify-between">
                  <span className="font-display text-sm font-extrabold text-royal">
                    {tour.price}
                  </span>

                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-royal hover:bg-saffron text-paper font-display text-[11px] font-bold px-3 py-1 h-7 shadow-xs"
                  >
                    <Link href={detailUrl}>
                      <span>View</span>
                      <ArrowRight className="ml-0.5 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
