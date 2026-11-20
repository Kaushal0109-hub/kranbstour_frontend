"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function BlogFaqAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="my-10 pt-6 border-t border-royal/10">
      <div className="space-y-1 mb-5">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-saffron-deep font-display">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Practical Advice</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-royal">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="divide-y divide-royal/10 border-y border-royal/10">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-1">
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-3.5 text-left transition-colors group"
              >
                <span className="font-display text-base sm:text-lg font-bold text-royal group-hover:text-saffron-deep transition-colors pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                    isOpen ? "bg-saffron text-paper rotate-180" : "text-royal/60 group-hover:text-royal"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              {isOpen && (
                <div className="pb-4 text-sm sm:text-base leading-relaxed text-foreground/80 font-sans">
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
