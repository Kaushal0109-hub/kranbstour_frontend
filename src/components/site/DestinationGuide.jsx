import {
  Camera,
  CheckCircle2,
  Clock,
  Compass,
  Lightbulb,
  MapPin,
  Route,
  SunMedium,
} from "lucide-react";

export function DestinationGuide({ guide, isGoldenTriangle = false }) {
  if (!guide) return null;

  return (
    <section id="destination-guide" className="py-16 sm:py-24 bg-ivory/50 border-t border-royal/10">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        {/* Guide Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3.5 py-1 text-xs text-saffron-deep">
            <Compass className="h-3.5 w-3.5" /> Destination Travel Guide
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-royal sm:text-4xl lg:text-5xl">
            {guide.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/80 sm:text-lg">
            {guide.subtitle}
          </p>
        </div>

        {/* Overview Narrative */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-royal/10 bg-paper p-6 sm:p-9 shadow-soft">
          <p className="font-display text-lg font-semibold text-royal sm:text-xl">
            About the Destination
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground/85">
            {guide.overview}
          </p>
        </div>

        {/* Golden Triangle Route Legs Breakdown (if Golden Triangle) */}
        {isGoldenTriangle && guide.routeLegs && (
          <div className="mt-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="eyebrow text-saffron-deep">Step-by-Step Circuit Breakdown</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-royal mt-1">
                The Classic Circuit: How the Journey Unfolds
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {guide.routeLegs.map((leg, idx) => (
                <div
                  key={leg.leg}
                  className="flex flex-col rounded-3xl border border-royal/10 bg-paper p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-royal text-xs font-bold text-paper">
                      0{idx + 1}
                    </span>
                    <span className="rounded-full bg-mint/80 px-2.5 py-0.5 text-[0.7rem] font-bold text-royal">
                      {leg.distance}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-lg font-bold text-royal">{leg.leg}</h4>
                  {leg.driveTime !== "-" && (
                    <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-saffron-deep">
                      <Clock className="h-3 w-3" /> {leg.driveTime}
                    </p>
                  )}

                  <p className="mt-3 text-xs leading-relaxed text-foreground/75 flex-1">
                    {leg.description}
                  </p>

                  <div className="mt-4 border-t border-royal/10 pt-3 text-[0.75rem] text-foreground/80">
                    <strong className="text-royal">Highlights:</strong> {leg.highlights}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Golden Triangle Duration Pacing Options */}
        {isGoldenTriangle && guide.durationOptions && (
          <div className="mt-12 rounded-3xl border border-saffron/20 bg-paper p-6 sm:p-8 shadow-soft">
            <h3 className="font-display text-2xl font-bold text-royal">
              How Many Days Do You Need?
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {guide.durationOptions.map((opt) => (
                <div key={opt.duration} className="rounded-2xl bg-ivory/60 p-5 border border-royal/5">
                  <span className="rounded-full bg-saffron px-3 py-1 text-xs font-bold text-paper">
                    {opt.duration}
                  </span>
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-royal">Ideal For:</p>
                    <p className="mt-1 text-xs text-foreground/80">{opt.idealFor}</p>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-royal">Pacing:</p>
                    <p className="mt-1 text-xs text-foreground/80">{opt.pacing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Monuments & Attractions */}
        {guide.attractions && guide.attractions.length > 0 && (
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow text-saffron-deep">Must-See Landmarks</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-royal mt-1">
                Top Heritage Sights & Experiences
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {guide.attractions.map((att) => (
                <div
                  key={att.name}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-royal/10 bg-paper shadow-soft transition-all duration-300 hover:shadow-photo"
                >
                  {att.image && (
                    <div className="relative aspect-[16/9] overflow-hidden bg-mint/20">
                      <img
                        src={att.image}
                        alt={att.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="rounded-full bg-paper/90 px-3 py-1 text-xs font-bold text-royal">
                          {att.tagline}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h4 className="font-display text-2xl font-bold text-royal">{att.name}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      {att.description}
                    </p>

                    {att.tip && (
                      <div className="mt-5 rounded-2xl bg-mint/40 p-3.5 border border-mint text-xs text-royal flex items-start gap-2.5">
                        <Lightbulb className="h-4 w-4 shrink-0 text-saffron-deep mt-0.5" />
                        <div>
                          <strong className="font-semibold">Insider Tip:</strong> {att.tip}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Travel Tips & Best Time to Visit Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Best Time to Visit */}
          {guide.bestTimeToVisit && (
            <div className="rounded-[2rem] border border-royal/10 bg-paper p-6 sm:p-7 shadow-soft flex flex-col">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-saffron/15 text-saffron-deep">
                  <SunMedium className="h-5 w-5" />
                </span>
                <div>
                  <p className="eyebrow text-xs text-saffron-deep">Climate & Seasons</p>
                  <h4 className="font-display text-lg font-bold text-royal">Best Time to Visit</h4>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm flex-1">
                <div className="rounded-2xl bg-ivory p-4 border border-royal/5">
                  <p className="font-display font-bold text-royal">
                    {guide.bestTimeToVisit.season}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/80">
                    {guide.bestTimeToVisit.description}
                  </p>
                </div>

                {guide.bestTimeToVisit.avoid && (
                  <div className="rounded-2xl bg-rose-50/70 p-4 border border-rose-200/50">
                    <p className="font-display font-bold text-rose-900 text-xs uppercase tracking-wider">
                      When to Plan Carefully:
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-rose-900/80">
                      {guide.bestTimeToVisit.avoid}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Photography Tips */}
          {guide.photographyTips && (
            <div className="rounded-[2rem] border border-royal/10 bg-paper p-6 sm:p-7 shadow-soft flex flex-col">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-mint text-mint-deep">
                  <Camera className="h-5 w-5" />
                </span>
                <div>
                  <p className="eyebrow text-xs text-mint-deep">Camera & Angles</p>
                  <h4 className="font-display text-lg font-bold text-royal">Photography Tips</h4>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-xs leading-relaxed text-foreground/80 flex-1">
                {guide.photographyTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-mint text-mint-deep">
                      ✦
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Practical Tips */}
          {guide.practicalTips && (
            <div className="rounded-[2rem] border border-royal/10 bg-paper p-6 sm:p-7 shadow-soft flex flex-col">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-royal/10 text-royal">
                  <CheckCircle2 className="h-5 w-5 text-saffron" />
                </span>
                <div>
                  <p className="eyebrow text-xs text-royal/70">Local Advice</p>
                  <h4 className="font-display text-lg font-bold text-royal">Practical Travel Tips</h4>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-xs leading-relaxed text-foreground/80 flex-1">
                {guide.practicalTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-saffron/20 text-saffron-deep">
                      ✓
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
