import { Clock, MapPin, Milestone } from "lucide-react";

export function TourItinerary({ itinerary = [], tourTitle = "" }) {
  if (!itinerary || itinerary.length === 0) return null;

  return (
    <section className="border-t border-royal/10 pt-8 sm:pt-10">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-royal/10 text-royal">
          <Milestone className="h-4 w-4 text-saffron" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-extrabold text-royal">Tour Itinerary</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Step-by-step route and activity schedule
          </p>
        </div>
      </div>

      <div className="mt-8 relative pl-2 sm:pl-4">
        {/* Vertical Connecting Line */}
        <div className="absolute left-6 sm:left-8 top-4 bottom-8 w-0.5 border-l-2 border-dashed border-royal/20" />

        <div className="space-y-6 sm:space-y-8">
          {itinerary.map((step, idx) => {
            const isLast = idx === itinerary.length - 1;
            return (
              <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Numbered Circle Marker */}
                <div className="relative z-10 grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full bg-royal text-paper font-display text-xs sm:text-sm font-bold shadow-soft group-hover:bg-saffron transition-colors">
                  {idx + 1}
                </div>

                {/* Itinerary Step Card */}
                <div className="flex-1 rounded-2xl border border-royal/10 bg-paper p-5 sm:p-6 shadow-xs group-hover:shadow-soft transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-royal/5 pb-2.5">
                    <span className="eyebrow text-xs text-saffron-deep font-bold">
                      {step.day || `Step ${idx + 1}`}
                    </span>
                    {step.time && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-ivory px-2.5 py-0.5 text-xs font-semibold text-royal">
                        <Clock className="h-3 w-3 text-saffron" />
                        {step.time}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2.5 font-display text-lg sm:text-xl font-bold text-royal">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {step.detail}
                  </p>

                  {step.location && (
                    <p className="mt-3 flex items-center gap-1 text-xs text-muted-foreground font-medium">
                      <MapPin className="h-3.5 w-3.5 text-saffron" />
                      {step.location}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-ivory/60 p-4 border border-royal/10 text-xs text-foreground/70">
        <p>
          * Pacing can be adjusted upon request to match your flight timings, train schedule, or
          personal preferences.
        </p>
      </div>
    </section>
  );
}
