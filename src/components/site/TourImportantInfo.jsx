import {
  AlertTriangle,
  Ban,
  CheckCircle,
  HelpCircle,
  Luggage,
  ShieldAlert,
  Accessibility,
} from "lucide-react";

export function TourImportantInfo({ importantInfo = {} }) {
  const {
    whatToBring = [],
    notAllowed = [],
    knowBeforeYouBook = [],
    accessibility = "",
  } = importantInfo;

  return (
    <section className="border-t border-royal/10 pt-8 sm:pt-10">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-royal/10 text-royal">
          <AlertTriangle className="h-4 w-4 text-saffron" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-extrabold text-royal">
            Important Information Before You Travel
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Essential guidelines for monument regulations and visitor comfort
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* What to Bring */}
        {whatToBring.length > 0 && (
          <div className="rounded-3xl border border-royal/10 bg-paper p-6 shadow-xs">
            <h3 className="font-display text-base font-bold text-royal flex items-center gap-2">
              <Luggage className="h-4 w-4 text-saffron" />
              What to Bring
            </h3>
            <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-foreground/80">
              {whatToBring.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-saffron font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Not Allowed */}
        {notAllowed.length > 0 && (
          <div className="rounded-3xl border border-rose-200/60 bg-rose-50/40 p-6 shadow-xs">
            <h3 className="font-display text-base font-bold text-rose-900 flex items-center gap-2">
              <Ban className="h-4 w-4 text-rose-600" />
              Not Allowed
            </h3>
            <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-rose-950/80">
              {notAllowed.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Know Before You Book */}
        {knowBeforeYouBook.length > 0 && (
          <div className="rounded-3xl border border-royal/10 bg-paper p-6 shadow-xs sm:col-span-2">
            <h3 className="font-display text-base font-bold text-royal flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-saffron" />
              Know Before You Book
            </h3>
            <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-foreground/80">
              {knowBeforeYouBook.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-mint-deep shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Accessibility & Cancellation Summary */}
        <div className="rounded-3xl border border-royal/10 bg-ivory/60 p-6 shadow-xs sm:col-span-2 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <h4 className="font-display text-sm font-bold text-royal flex items-center gap-1.5 mb-1.5">
              <Accessibility className="h-4 w-4 text-royal/70" /> Accessibility
            </h4>
            <p className="text-xs text-foreground/75 leading-relaxed">
              {accessibility ||
                "Wheelchair access is available across major paved outer courtyards. Some historic fortifications feature ancient stone ramps and elevated thresholds."}
            </p>
          </div>

          <div className="border-t sm:border-t-0 sm:border-l border-royal/10 pt-4 sm:pt-0 sm:pl-6 flex-1">
            <h4 className="font-display text-sm font-bold text-royal flex items-center gap-1.5 mb-1.5">
              <CheckCircle className="h-4 w-4 text-mint-deep" /> Cancellation Policy
            </h4>
            <p className="text-xs text-foreground/75 leading-relaxed">
              Cancel up to 24 hours in advance of your scheduled tour date for a full, hassle-free
              refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
