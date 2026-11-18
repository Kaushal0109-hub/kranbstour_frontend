import { ArrowRight, Info, MapPin, Navigation } from "lucide-react";

export function TourMapLocation({ tour }) {
  const isGoldenTriangle = tour.category === "golden-triangle";

  return (
    <section className="border-t border-royal/10 pt-8 sm:pt-10">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-royal/10 text-royal">
          <Navigation className="h-4 w-4 text-saffron" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-extrabold text-royal">Where You&apos;ll Go</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Route overview and primary stops</p>
        </div>
      </div>

      <div className="mt-5 rounded-3xl border border-royal/10 bg-paper p-6 sm:p-7 shadow-soft">
        {/* Route Highlights Pill */}
        {tour.route && (
          <div className="rounded-2xl bg-ivory/80 p-4 border border-royal/5">
            <p className="eyebrow text-xs text-saffron-deep">Tour Routing</p>
            <p className="mt-1 font-display text-base sm:text-lg font-bold text-royal">
              {tour.route}
            </p>
          </div>
        )}

        {/* Visual Route Corridor */}
        {isGoldenTriangle ? (
          <div className="mt-6 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              The Golden Triangle Circuit
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-royal/10 bg-ivory/50 p-4 text-center">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-royal text-paper text-xs font-bold mx-auto mb-2">
                  1
                </span>
                <p className="font-display font-bold text-royal">Delhi</p>
                <p className="text-[0.7rem] text-muted-foreground mt-1">Arrival & Historic Heart</p>
              </div>

              <div className="rounded-2xl border border-royal/10 bg-ivory/50 p-4 text-center">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-saffron text-paper text-xs font-bold mx-auto mb-2">
                  2
                </span>
                <p className="font-display font-bold text-royal">Agra</p>
                <p className="text-[0.7rem] text-muted-foreground mt-1">Taj Mahal & Mughal Fort</p>
              </div>

              <div className="rounded-2xl border border-royal/10 bg-ivory/50 p-4 text-center">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-royal text-paper text-xs font-bold mx-auto mb-2">
                  3
                </span>
                <p className="font-display font-bold text-royal">Jaipur</p>
                <p className="text-[0.7rem] text-muted-foreground mt-1">Amber Fort & Royal Palaces</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-royal">
            <span className="rounded-full bg-mint/70 px-3.5 py-1.5 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-mint-deep" />
              Pickup in {tour.startingPoint || tour.destination}
            </span>
            <ArrowRight className="h-4 w-4 text-saffron shrink-0" />
            <span className="rounded-full bg-paper border border-royal/15 px-3.5 py-1.5">
              Monument Sightseeing
            </span>
            <ArrowRight className="h-4 w-4 text-saffron shrink-0" />
            <span className="rounded-full bg-mint/70 px-3.5 py-1.5 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-mint-deep" />
              Safe Drop-off
            </span>
          </div>
        )}

        {/* Pickup Notice */}
        <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-amber-50/80 p-4 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
          <Info className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
          <p>
            <strong>Pickup & Meeting Point Notice:</strong> Doorstep pickup is provided from your
            hotel, Indira Gandhi International Airport (DEL), Agra Cantt Railway Station, or any
            central location. Exact chauffeur contact and vehicle number are shared 24 hours prior.
          </p>
        </div>
      </div>
    </section>
  );
}
