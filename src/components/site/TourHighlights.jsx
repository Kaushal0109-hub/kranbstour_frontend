import { Check, Sparkles } from "lucide-react";

export function TourHighlights({ highlights = [] }) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="border-t border-royal/10 pt-8 sm:pt-10">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-saffron/15 text-saffron-deep">
          <Sparkles className="h-4 w-4" />
        </span>
        <h2 className="font-display text-2xl font-extrabold text-royal">Tour Highlights</h2>
      </div>

      <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
        {highlights.map((h, idx) => (
          <div
            key={idx}
            className="group flex items-start gap-3.5 rounded-2xl border border-royal/10 bg-ivory/40 p-4 transition-all duration-200 hover:border-saffron/40 hover:bg-paper hover:shadow-soft"
          >
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-mint-deep shadow-xs group-hover:bg-saffron group-hover:text-paper transition-colors">
              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
            </span>
            <span className="text-sm font-medium leading-snug text-royal/90">
              {h}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
