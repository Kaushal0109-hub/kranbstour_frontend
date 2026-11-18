"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import { images, packages } from "@/data/tours";
import { cn } from "@/lib/utils";
import { Cloud, LocationBadge, Squiggle } from "./Decor";
import { Reveal } from "./Reveal";
import { TourCard } from "./TourCard";
import { TourDetailsDialog } from "./TourDetailsDialog";

const sections = [
  {
    category: "agra",
    city: "Agra",
    label: "The city of love",
    heading: ["Discover the Magic", "of Agra"],
    text: "Sunrise at the Taj Mahal, Mughal forts and riverside gardens — Agra in all its glory.",
    photo: images.tajArchway,
    photoAlt: "The Taj Mahal framed by a carved arch",
    place: "Taj Mahal",
    bg: "bg-paper",
    blob: "bg-mint",
  },
  {
    category: "delhi",
    city: "Delhi",
    label: "Where history meets today",
    heading: ["Explore Historic", "Delhi"],
    text: "Old Delhi's lanes, grand monuments and leafy Mughal gardens in India's capital.",
    photo: images.qutubMinar,
    photoAlt: "Qutub Minar at sunset in Delhi",
    place: "Qutub Minar",
    bg: "bg-sky-gradient",
    blob: "bg-paper/70",
  },
  {
    category: "jaipur",
    city: "Jaipur",
    label: "The pink city",
    heading: ["Experience Royal", "Jaipur"],
    text: "Hilltop forts, painted palaces and colourful bazaars in Rajasthan's royal capital.",
    photo: images.jalMahal,
    photoAlt: "Jal Mahal on the lake in Jaipur at sunset",
    place: "Jal Mahal",
    bg: "bg-peach-gradient",
    blob: "bg-paper/70",
  },
];

function CityCarousel({ section, onView }) {
  const tours = packages.filter((p) => p.category === section.category);
  const [ref, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    if (!api) return;
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    update();
    api.on("select", update).on("reInit", update);
    return () => {
      api.off("select", update).off("reInit", update);
    };
  }, [api, update]);

  return (
    <section
      id={`${section.category}-tours`}
      aria-labelledby={`${section.category}-heading`}
      className={cn("relative overflow-hidden py-20 sm:py-24", section.bg)}
    >
      <div
        className={cn(
          "pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-2xl",
          section.blob,
        )}
      />
      <Cloud className="pointer-events-none absolute top-10 right-[6%] w-32 animate-float-slower opacity-90" />

      <div className="relative mx-auto grid max-w-[88rem] gap-10 px-4 sm:px-6 lg:grid-cols-[21rem_minmax(0,1fr)] lg:gap-14 lg:px-10">
        <Reveal className="flex flex-col">
          <p className="hand text-3xl text-saffron">{section.label}</p>
          <h2
            id={`${section.category}-heading`}
            className="mt-2 text-[2.4rem] leading-[1.02] font-bold sm:text-5xl"
          >
            {section.heading[0]}{" "}
            <span className="relative inline-block text-saffron">
              {section.heading[1]}
              <Squiggle className="absolute -bottom-2 left-0 h-3 w-full" />
            </span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70">{section.text}</p>

          <div className="mt-7 flex items-center gap-3">
            <button
              type="button"
              aria-label={`Previous ${section.city} tour`}
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-royal text-royal transition-all hover:bg-royal hover:text-ivory disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-royal"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={`Next ${section.city} tour`}
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
              className="grid h-12 w-12 place-items-center rounded-full bg-saffron text-paper shadow-saffron transition-all hover:bg-saffron-deep disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <span className="ml-1 font-display text-sm font-medium text-royal/60">
              {tours.length} journeys
            </span>
          </div>

          <div className="mt-3">
            <a
              href={`/${section.category}-tours`}
              className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-saffron-deep transition-all hover:gap-2.5 hover:text-royal"
            >
              View all {section.city} packages →
            </a>
          </div>

          <figure className="relative mt-10 hidden h-64 w-52 rotate-[-4deg] overflow-hidden arch border-4 border-paper shadow-photo transition-transform duration-700 hover:rotate-0 lg:block">
            <img
              src={section.photo}
              alt={section.photoAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <LocationBadge
              city={section.city}
              place={section.place}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
            />
          </figure>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <div ref={ref} className="-m-4 overflow-hidden p-4">
            <div className="flex gap-5">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[calc(50%-0.65rem)] xl:basis-[calc(43%-0.65rem)]"
                >
                  <TourCard tour={tour} onView={onView} />
                </div>
              ))}
              <div className="min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[calc(50%-0.65rem)] xl:basis-[calc(43%-0.65rem)]">
                <a
                  href={`mailto:hello@kranbstour.com?subject=${encodeURIComponent(`Custom ${section.city} tour`)}`}
                  className="group relative flex h-full min-h-[30rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-royal p-8 text-ivory transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
                >
                  <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full border-[28px] border-saffron/25 transition-transform duration-700 group-hover:scale-110" />
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-saffron text-paper">
                    <Sparkles className="h-6 w-6" />
                  </span>
                  <div className="relative">
                    <p className="hand text-3xl text-saffron">Made just for you</p>
                    <h3 className="mt-2 text-3xl font-bold text-ivory">
                      Plan a custom {section.city} trip
                    </h3>
                    <p className="mt-3 text-ivory/75">
                      Tell us your dates and interests and we&apos;ll shape a journey around you.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-saffron">
                      Ask our team{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Agra, Delhi and Jaipur tour carousels, sharing one details popup. */
export function CityTours() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const onView = (tour) => {
    setSelected(tour);
    setOpen(true);
  };

  return (
    <div id="packages">
      {sections.map((section) => (
        <CityCarousel key={section.category} section={section} onView={onView} />
      ))}
      <TourDetailsDialog tour={selected} open={open} onOpenChange={setOpen} />
    </div>
  );
}
