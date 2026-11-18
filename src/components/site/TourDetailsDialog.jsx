"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, Clock, MapPin, Minus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { categoryLabels, formatPrice } from "@/data/tours";

export function TourDetailsDialog({ tour, open, onOpenChange }) {
  return (
    <DialogPrimitive.Root open={open && tour !== null} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        {tour && (
          <DialogPrimitive.Content className="fixed top-1/2 left-1/2 z-50 max-h-[92svh] w-[min(64rem,94vw)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[2rem] bg-ivory shadow-photo duration-500 focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-6 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
            {/* Photo header */}
            <div className="relative h-64 overflow-hidden sm:h-80">
              <img
                src={tour.image}
                alt={tour.imageAlt}
                className="h-full w-full object-cover animate-in zoom-in-110 duration-[1600ms]"
              />
              <div className="absolute inset-0 bg-card-overlay" />
              <DialogPrimitive.Close
                aria-label="Close details"
                className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-ivory text-royal shadow-soft transition-transform duration-300 hover:rotate-90"
              >
                <X className="h-5 w-5" />
              </DialogPrimitive.Close>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-saffron px-3 py-1 eyebrow text-[0.7rem] tracking-[0.2em] text-paper">
                    <MapPin className="h-3 w-3" /> {categoryLabels[tour.category]}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-ivory/90 px-3 py-1 text-xs font-bold text-royal">
                    <Clock className="h-3.5 w-3.5" /> {tour.duration}
                  </span>
                  {tour.pickup && (
                    <span className="rounded-full bg-mint/90 px-3 py-1 text-xs font-semibold text-royal">
                      {tour.pickup}
                    </span>
                  )}
                  {tour.route && (
                    <span className="hidden sm:inline-block rounded-full bg-paper/80 px-3 py-1 text-xs font-medium text-royal">
                      Route: {tour.route}
                    </span>
                  )}
                </div>
                <DialogPrimitive.Title className="mt-3 font-display text-3xl font-semibold text-ivory sm:text-5xl">
                  {tour.title}
                </DialogPrimitive.Title>
              </div>
            </div>

            <div className="grid gap-10 p-6 sm:p-9 md:grid-cols-[1.45fr_1fr]">
              <div className="space-y-10">
                <section>
                  <h3 className="eyebrow text-saffron-deep">Overview</h3>
                  <DialogPrimitive.Description className="mt-3 text-base leading-relaxed text-foreground/80">
                    {tour.overview}
                  </DialogPrimitive.Description>
                </section>

                <section>
                  <h3 className="font-display text-2xl font-semibold">Tour Highlights</h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {tour.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 rounded-2xl bg-paper/80 p-3.5 shadow-sm">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-mint-deep">
                          <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                        </span>
                        <span className="text-sm font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-display text-2xl font-semibold">Day by Day</h3>
                  <ol className="mt-5 space-y-4">
                    {tour.itinerary.map((step, idx) => (
                      <li key={step.title} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-royal font-display text-xs font-bold text-ivory">
                            {idx + 1}
                          </span>
                          {idx < tour.itinerary.length - 1 && (
                            <span className="my-1 w-0.5 flex-1 bg-border" />
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="eyebrow text-saffron-deep">{step.day}</p>
                          <h4 className="mt-1 font-display text-lg font-bold">{step.title}</h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-foreground/75">
                            {step.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>

              {/* Booking sidebar */}
              <aside className="flex flex-col gap-6">
                <div className="rounded-[1.75rem] bg-paper p-6 shadow-soft sm:p-7">
                  <p className="eyebrow text-muted-foreground">Price</p>
                  {tour.price ? (
                    <p className="mt-1 flex items-baseline gap-2 font-display text-4xl font-bold text-royal">
                      {formatPrice(tour.price)}
                      <span className="text-xs font-normal text-muted-foreground">/ person</span>
                    </p>
                  ) : (
                    <p className="mt-1 font-display text-3xl font-bold text-royal">
                      Enquire for Price
                    </p>
                  )}
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Final price depends on group size, vehicle choice and hotel preference.
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Button asChild variant="saffron" size="pill-lg" className="w-full">
                      <a
                        href={`mailto:hello@kranbstour.com?subject=${encodeURIComponent(`Booking inquiry: ${tour.title}`)}`}
                      >
                        Inquire About This Tour <ArrowUpRight />
                      </a>
                    </Button>
                    <Button asChild variant="outline-royal" size="pill" className="w-full">
                      <a href="tel:+910000000000">Call Our Travel Desk</a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-5 rounded-[1.75rem] border border-border bg-paper/60 p-6 text-sm">
                  <div>
                    <h4 className="font-display font-semibold text-royal">What&apos;s Included</h4>
                    <ul className="mt-3 space-y-2">
                      {tour.inclusions.map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-foreground/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-deep" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-royal">What&apos;s Excluded</h4>
                    <ul className="mt-3 space-y-2">
                      {tour.exclusions.map((exc) => (
                        <li key={exc} className="flex items-start gap-2 text-muted-foreground">
                          <Minus className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </DialogPrimitive.Content>
        )}
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
