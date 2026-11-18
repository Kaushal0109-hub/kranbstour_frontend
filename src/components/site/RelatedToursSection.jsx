import { Compass } from "lucide-react";
import { ListingTourCard } from "./ListingTourCard";

export function RelatedToursSection({ relatedTours = [] }) {
  if (!relatedTours || relatedTours.length === 0) return null;

  return (
    <section className="border-t border-royal/10 bg-ivory/40 py-16 sm:py-20">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-1 text-xs text-royal">
            <Compass className="h-3.5 w-3.5 text-saffron" /> Handpicked Alternatives
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-royal sm:text-4xl">
            You May Also Like
          </h2>
          <p className="mt-2 text-sm text-foreground/75">
            Explore more curated journeys across India&apos;s Golden Triangle circuit.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedTours.slice(0, 3).map((tour) => (
            <ListingTourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
