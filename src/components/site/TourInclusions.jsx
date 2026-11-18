import { Check, Minus, PlusCircle } from "lucide-react";

export function TourInclusions({ inclusions = [], exclusions = [] }) {
  return (
    <section className="border-t border-royal/10 pt-8 sm:pt-10">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-mint text-mint-deep">
          <PlusCircle className="h-4 w-4" />
        </span>
        <h2 className="font-display text-2xl font-extrabold text-royal">
          What&apos;s Included & Excluded
        </h2>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* Inclusions Card */}
        <div className="rounded-3xl border border-mint/70 bg-mint/15 p-6 sm:p-7 shadow-xs">
          <h3 className="font-display text-lg font-bold text-mint-deep flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-mint-deep text-paper text-xs">
              ✓
            </span>
            What&apos;s Included
          </h3>
          <ul className="mt-4 space-y-3">
            {inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                <Check className="h-4 w-4 shrink-0 text-mint-deep stroke-[2.5] mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions Card */}
        <div className="rounded-3xl border border-royal/10 bg-ivory/50 p-6 sm:p-7 shadow-xs">
          <h3 className="font-display text-lg font-bold text-royal/80 flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-royal/20 text-royal text-xs">
              ✕
            </span>
            What&apos;s Excluded
          </h3>
          <ul className="mt-4 space-y-3">
            {exclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                <Minus className="h-4 w-4 shrink-0 text-royal/40 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
