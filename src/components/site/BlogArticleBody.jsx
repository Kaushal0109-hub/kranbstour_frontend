import { Lightbulb, Quote } from "lucide-react";

export function BlogArticleBody({ sections = [] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <article className="space-y-12">
      {sections.map((sec, idx) => (
        <section
          key={sec.id || idx}
          id={sec.id}
          className="scroll-mt-24 space-y-4 pt-2 border-b border-royal/5 pb-8 last:border-b-0"
        >
          {/* Section Heading */}
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-royal leading-tight">
            {sec.heading}
          </h2>

          {/* Section Paragraphs */}
          {sec.paragraphs &&
            sec.paragraphs.map((p, pIdx) => (
              <p
                key={pIdx}
                className="text-base sm:text-lg leading-[1.75] text-foreground/85 font-sans"
              >
                {p}
              </p>
            ))}

          {/* Pro Tip Box if present */}
          {sec.tip && (
            <div className="relative my-6 overflow-hidden rounded-2xl border border-saffron/30 bg-ivory p-5 sm:p-6 shadow-soft">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-saffron text-paper shadow-soft">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-saffron-deep">
                    KranbsTour Insider Tip
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
                    {sec.tip}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Blockquote if present */}
          {sec.quote && (
            <figure className="relative my-6 rounded-2xl border-l-4 border-royal bg-mint/15 p-6 shadow-soft">
              <Quote className="h-7 w-7 text-royal/20 mb-2" />
              <blockquote className="italic font-display text-lg sm:text-xl text-royal leading-relaxed">
                &ldquo;{sec.quote}&rdquo;
              </blockquote>
            </figure>
          )}
        </section>
      ))}
    </article>
  );
}
