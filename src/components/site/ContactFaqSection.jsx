"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const contactFaqs = [
  {
    question: "How can I book a tour with KranbsTour?",
    answer:
      "You can book directly by filling out the online enquiry form on this page, sending us an email at hello@kranbstour.com, or messaging us on WhatsApp. Our travel specialists will confirm vehicle options, guides, and timings, and send you a detailed written confirmation.",
  },
  {
    question: "Can I customize my Agra, Delhi, or Jaipur tour?",
    answer:
      "Yes, absolutely. All KranbsTour itineraries are 100% private and custom-crafted. You can add or omit monuments, choose preferred departure times (such as sunrise at the Taj Mahal), select hotel categories, and incorporate special activities like food walks or artisan workshops.",
  },
  {
    question: "How can I get information about tour prices?",
    answer:
      "Starting prices for packages are listed on our tour detail pages. Exact quotes depend on your party size (couples, families, small groups), choice of vehicle (sedan, MPV, luxury van), and whether you need boutique heritage hotel stays included. Submit an enquiry to receive a transparent, itemized quote with zero hidden fees.",
  },
  {
    question: "Can I book a private Golden Triangle tour?",
    answer:
      "Yes. Our Golden Triangle private tours (ranging from 3 to 7 days) are our most requested experiences. You have a dedicated private air-conditioned car and professional chauffeur for the entire circuit between Delhi, Agra, and Jaipur, plus local certified guides in each city.",
  },
  {
    question: "How can I contact your travel team?",
    answer:
      "You can reach our travel desk by phone at +91 00000 00000, by WhatsApp for quick messaging, or by email at hello@kranbstour.com. For guests currently traveling on our tours, our coordinator is on standby 24/7.",
  },
  {
    question: "Can I change my travel date?",
    answer:
      "Yes. We offer flexible rescheduling up to 24 hours prior to your scheduled tour start time at no penalty, subject to vehicle and guide availability. Simply reach out to your designated trip coordinator as early as possible.",
  },
];

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-ivory/50 border-t border-royal/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3.5 py-1 text-xs text-saffron-deep">
            <HelpCircle className="h-3.5 w-3.5" /> Common Inquiries
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-royal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/75">
            Quick answers about booking, customization, payments, and trip coordination.
          </p>
        </div>

        <div className="mt-12 space-y-3.5">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-royal/10 bg-paper transition-all shadow-xs"
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
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ivory text-royal shadow-xs transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-saffron text-paper" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm leading-relaxed text-foreground/80 border-t border-royal/5">
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
