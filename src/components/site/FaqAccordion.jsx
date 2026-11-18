"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqAccordion({ faqs = [], destinationName = "this destination" }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-paper">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3.5 py-1 text-xs text-saffron-deep">
            <HelpCircle className="h-3.5 w-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-royal sm:text-4xl">
            Questions About Visiting {destinationName}
          </h2>
          <p className="mt-3 text-base text-foreground/75">
            Essential answers to help you plan your itinerary, monument visits, and logistics.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-royal/10 bg-ivory/50 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-royal">
                    {faq.question}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper text-royal shadow-xs transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-saffron text-paper" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm leading-relaxed text-foreground/80 border-t border-royal/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
