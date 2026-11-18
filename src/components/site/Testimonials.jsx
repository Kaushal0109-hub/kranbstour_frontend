"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Cloud, Squiggle } from "./Decor";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Sophie Laurent",
    place: "Paris, France",
    tour: "Classic Golden Triangle",
    quote:
      "Watching the sun rise over the Taj Mahal with our guide was pure magic. Every detail of our Golden Triangle journey was thoughtfully arranged — we simply enjoyed India.",
    tone: "bg-mint",
  },
  {
    name: "James Whitmore",
    place: "London, UK",
    tour: "Royal Jaipur Escape",
    quote:
      "Amber Fort, the City Palace, the bazaars — Jaipur felt like stepping into a storybook. Our driver and guide felt like friends by the end.",
    tone: "bg-peach",
  },
  {
    name: "Ananya Mehta",
    place: "Singapore",
    tour: "Old & New Delhi Discovery",
    quote:
      "A perfect day in Delhi. The rickshaw ride through Chandni Chowk and the golden hour at Humayun's Tomb were unforgettable.",
    tone: "bg-sky",
  },
  {
    name: "Daniel Okafor",
    place: "Toronto, Canada",
    tour: "Sunrise at the Taj Mahal",
    quote:
      "Seeing the Taj Mahal at first light with almost no crowds was worth the early start. Our guide knew every story behind the marble.",
    tone: "bg-paper",
  },
  {
    name: "Mei Tanaka",
    place: "Osaka, Japan",
    tour: "Pink City Palace Trail",
    quote:
      "The City Palace and Hawa Mahal were even more colourful than the photos. A relaxed, beautifully planned day in Jaipur.",
    tone: "bg-peach",
  },
  {
    name: "Lucas Romero",
    place: "Madrid, Spain",
    tour: "Delhi Mughal Heritage Trail",
    quote:
      "Humayun's Tomb, Lodhi Gardens and qawwali at Nizamuddin — Delhi surprised us at every turn. Everything ran smoothly.",
    tone: "bg-mint",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export function Testimonials() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (api) setSelected(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const onInit = () => setSnaps(api.scrollSnapList());
    onInit();
    onSelect();
    api.on("select", onSelect).on("reInit", onInit).on("reInit", onSelect);
    const timer = window.setInterval(() => api.scrollNext(), 6500);
    return () => {
      api.off("select", onSelect).off("reInit", onInit).off("reInit", onSelect);
      window.clearInterval(timer);
    };
  }, [api, onSelect]);

  return (
    <section id="stories" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <Cloud className="pointer-events-none absolute top-16 left-0 w-44 animate-cloud-slow" />
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="hand text-3xl text-saffron sm:text-4xl">Traveller stories</p>
            <h2 className="mt-2 text-[2.5rem] leading-[1.02] font-bold sm:text-6xl">
              Happy Travellers,{" "}
              <span className="relative inline-block text-saffron">
                Beautiful Memories
                <Squiggle className="absolute -bottom-2 left-0 h-3 w-full" />
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous story"
              onClick={() => api?.scrollPrev()}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-royal text-royal transition-all hover:bg-royal hover:text-ivory"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next story"
              onClick={() => api?.scrollNext()}
              className="grid h-12 w-12 place-items-center rounded-full bg-saffron text-paper shadow-saffron transition-all hover:bg-saffron-deep"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div ref={ref} className="-m-4 overflow-hidden p-4">
            <div className="-mr-4 flex">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-0 shrink-0 grow-0 basis-[88%] pr-4 sm:basis-1/2 lg:basis-1/4"
                >
                  <figure
                    className={cn(
                      "relative flex h-full flex-col rounded-[1.75rem] p-6 ring-1 ring-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
                      t.tone,
                    )}
                  >
                    <Quote className="absolute top-5 right-5 h-9 w-9 fill-current text-paper" />
                    <div className="flex gap-0.5 text-saffron" aria-label="Rated 5 out of 5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-royal">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-royal/10 pt-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-paper font-display text-sm font-bold text-royal">
                        {initials(t.name)}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-display font-bold text-royal">
                          {t.name}
                        </span>
                        <span className="block truncate text-xs text-ink/60">
                          {t.place} · {t.tour}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show story ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-500",
                  selected === i ? "w-10 bg-saffron" : "w-2.5 bg-royal/20",
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
