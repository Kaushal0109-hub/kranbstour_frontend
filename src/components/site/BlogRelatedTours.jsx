import Link from "next/link";
import Image from "next/image";
import { Star, Clock, ArrowRight, Compass } from "lucide-react";
import { getTourBySlug, packages } from "@/data/tours";
import { Button } from "@/components/ui/button";

export function BlogRelatedTours({ relatedTourSlugs = [], destination = "" }) {
  // Find tours by slugs or fallback
  let tours = (relatedTourSlugs || [])
    .map((slug) => getTourBySlug(slug))
    .filter(Boolean);

  // If none matched, fallback to destination packages
  if (tours.length === 0) {
    const destLower = (destination || "").toLowerCase();
    tours = packages
      .filter((p) => p.category.includes(destLower) || p.title.toLowerCase().includes(destLower))
      .slice(0, 3);
  }

  // Ensure at least 2 tours
  if (tours.length === 0) {
    tours = packages.slice(0, 3);
  } else if (tours.length > 3) {
    tours = tours.slice(0, 3);
  }

  return (
    <section className="my-14 rounded-3xl border border-royal/10 bg-mint/15 p-6 sm:p-10 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-saffron-deep">
            <Compass className="h-3.5 w-3.5" /> Experience It Live
          </span>
          <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-royal">
            Recommended Tours &amp; Day Trips
          </h3>
          <p className="mt-1 text-sm text-foreground/75">
            Hand-crafted private itineraries inspired by this story.
          </p>
        </div>
        <Link
          href="/#packages"
          className="text-xs sm:text-sm font-bold text-royal hover:text-saffron transition-colors inline-flex items-center gap-1 shrink-0"
        >
          View all 48+ tours →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => {
          const detailUrl = `/tours/${tour.slug || tour.id}`;
          return (
            <div
              key={tour.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-royal/10 bg-paper shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image & Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-ivory">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {tour.badge && (
                  <div className="absolute top-3 left-3 rounded-full bg-saffron px-3 py-1 text-[11px] font-bold text-paper shadow-soft">
                    {tour.badge}
                  </div>
                )}
                {tour.duration && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-paper/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-royal shadow-soft">
                    <Clock className="h-3 w-3 text-saffron" />
                    <span>{tour.duration}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 text-xs text-saffron font-bold mb-2">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-royal font-display">{tour.rating || 4.9}</span>
                  <span className="text-foreground/50 font-sans font-normal">
                    ({tour.reviewCount || 120})
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-display text-base font-bold text-royal line-clamp-2 group-hover:text-saffron-deep transition-colors mb-3">
                  <Link href={detailUrl}>{tour.title}</Link>
                </h4>

                {/* Price & CTA */}
                <div className="mt-auto pt-3 border-t border-royal/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-foreground/50 block">
                      From
                    </span>
                    <span className="font-display text-lg font-extrabold text-royal">
                      {tour.price}
                    </span>
                  </div>

                  <Button
                    asChild
                    size="sm"
                    className="bg-royal hover:bg-saffron hover:text-paper text-paper font-display text-xs font-bold transition-all shadow-soft"
                  >
                    <Link href={detailUrl}>
                      <span>View Tour</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
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
