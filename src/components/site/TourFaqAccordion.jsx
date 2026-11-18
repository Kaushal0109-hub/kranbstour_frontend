"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function TourFaqAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="border-t border-royal/10 pt-8 sm:pt-10">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-saffron/15 text-saffron-deep">
          <HelpCircle className="h-4 w-4" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-extrabold text-royal">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Key questions regarding this specific tour package
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-royal/10 bg-ivory/40 transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left"
              >
                <span className="font-display text-sm sm:text-base font-bold text-royal">
                  {faq.question}
                </span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-paper text-royal shadow-xs transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-saffron text-paper" : ""
                  }`}
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 pt-1 text-xs sm:text-sm leading-relaxed text-foreground/80 border-t border-royal/5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
