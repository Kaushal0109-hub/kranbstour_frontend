import { MessageSquare, Star } from "lucide-react";

export function TourReviews({ reviews = [], rating = 4.9, reviewCount = 124 }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="border-t border-royal/10 pt-8 sm:pt-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-royal/10 text-royal">
              <MessageSquare className="h-4 w-4 text-saffron" />
            </span>
            <h2 className="font-display text-2xl font-extrabold text-royal">
              What Our Travellers Say
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Verified experiences from travellers who booked with KranbsTour
          </p>
        </div>

        {/* Overall Rating Badge */}
        <div className="flex items-center gap-2 rounded-2xl bg-ivory px-4 py-2 border border-royal/10">
          <div className="flex text-saffron">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="font-display text-lg font-bold text-royal">{rating}</span>
          <span className="text-xs text-muted-foreground">({reviewCount} reviews)</span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-3xl border border-royal/10 bg-paper p-5 sm:p-6 shadow-xs"
          >
            <div>
              {/* Star Rating */}
              <div className="flex text-saffron mb-3">
                {[...Array(rev.rating || 5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>

              {/* Review Comment */}
              <p className="text-xs sm:text-sm leading-relaxed text-foreground/80 italic">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="mt-5 border-t border-royal/10 pt-3 flex items-center justify-between text-xs">
              <div>
                <strong className="block text-royal font-bold">{rev.name}</strong>
                <span className="text-muted-foreground">{rev.country}</span>
              </div>
              <span className="text-[0.68rem] text-muted-foreground">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
