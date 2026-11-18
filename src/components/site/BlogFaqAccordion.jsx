"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export function BlogFaqAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0); // open first FAQ by default

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="my-12 rounded-3xl border border-royal/10 bg-paper p-6 sm:p-8 shadow-card">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-deep mb-2">
        <HelpCircle className="h-4 w-4" /> Frequently Asked Questions
      </div>
      <h3 className="font-display text-2xl font-bold text-royal mb-6">
        Essential Questions Answered
      </h3>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? "border-saffron/40 bg-ivory/50 shadow-soft"
                  : "border-royal/10 bg-paper hover:border-royal/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-4 sm:p-5 text-left transition-colors"
              >
                <span className="font-display text-base font-bold text-royal pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                    isOpen ? "bg-saffron text-paper rotate-180" : "bg-royal/5 text-royal"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 pt-0 sm:px-5 sm:pb-6 text-sm sm:text-base leading-relaxed text-foreground/80 font-sans border-t border-royal/5 mt-1 pt-3">
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
