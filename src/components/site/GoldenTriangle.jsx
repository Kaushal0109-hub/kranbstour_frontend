"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { images, packages } from "@/data/tours";
import { Cloud, LetsGoSticker, PaperPlane, Squiggle } from "./Decor";
import { Reveal } from "./Reveal";
import { TourCard } from "./TourCard";
import { TourDetailsDialog } from "./TourDetailsDialog";

const ROUTE =
  "M250 80 C 340 110, 425 220, 410 360 C 330 430, 170 430, 90 360 C 70 230, 160 110, 250 80 Z";

const stops = [
  {
    city: "Delhi",
    place: "Humayun's Tomb",
    image: images.humayunsTomb,
    x: "50%",
    y: "17.4%",
    label: "Start",
  },
  {
    city: "Agra",
    place: "Taj Mahal",
    image: images.tajGoldenHour,
    x: "82%",
    y: "78.3%",
    label: "≈ 230 km",
  },
  {
    city: "Jaipur",
    place: "Amber Fort",
    image: images.amberFort,
    x: "18%",
    y: "78.3%",
    label: "≈ 240 km",
  },
];

export function GoldenTriangle() {
  const tours = packages.filter((p) => p.category === "golden-triangle");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <section
      id="golden-triangle"
      className="relative isolate overflow-hidden bg-royal py-20 text-ivory sm:py-28"
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-royal-soft" />
        <div className="absolute -bottom-52 -left-32 h-[30rem] w-[30rem] rounded-full border-[40px] border-saffron/15" />
        <div className="absolute inset-0 bg-dots text-ivory/30" />
        <Cloud className="absolute top-24 left-0 w-36 animate-cloud text-paper/15" />
        <Cloud className="absolute bottom-40 left-0 w-52 animate-cloud-slow text-paper/10 [animation-delay:-30s]" />
      </div>

      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <p className="hand flex items-center gap-3 text-3xl text-saffron sm:text-4xl">
              The Golden Triangle
              <PaperPlane className="h-10 w-14 text-ivory" />
            </p>
            <h2 className="mt-3 text-[2.6rem] leading-[1.02] font-bold text-ivory sm:text-6xl xl:text-7xl">
              One Amazing Journey.{" "}
              <span className="relative inline-block text-saffron">
                Three Incredible
                <Squiggle className="absolute -bottom-2 left-0 h-3 w-full" />
              </span>{" "}
              Cities.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/75">
              India&apos;s most loved circuit links Delhi, Agra and Jaipur into one easy, privately guided
              journey through empires, palaces and living history.
            </p>

            <ol className="mt-9 flex flex-wrap items-center gap-3">
              {["Delhi", "Agra", "Jaipur"].map((c, i) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="flex items-center gap-2 rounded-full bg-paper/10 py-2 pr-4 pl-2 font-display text-lg font-semibold ring-1 ring-ivory/15 backdrop-blur">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-saffron text-sm font-bold text-paper">
                      {i + 1}
                    </span>
                    {c}
                  </span>
                  {i < 2 && <ArrowRight className="h-4 w-4 text-saffron" />}
                </li>
              ))}
            </ol>

            <Link
              href="/golden-triangle-tours"
              className="btn-shine group mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-saffron py-2 pr-2 pl-7 font-display text-lg font-semibold text-paper shadow-saffron transition-all hover:-translate-y-0.5"
            >
              Explore Golden Triangle Tours
              <span className="grid h-10 w-10 place-items-center rounded-full bg-paper text-saffron transition-transform group-hover:rotate-[-45deg]">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>

          {/* Illustrated route map */}
          <Reveal delay={150}>
            <div className="relative mx-auto aspect-[500/460] w-full max-w-[36rem]">
              <div className="absolute inset-[6%] rounded-[3rem] bg-royal-soft/60 ring-1 ring-ivory/10" />
              <svg
                viewBox="0 0 500 460"
                className="absolute inset-0 h-full w-full"
                fill="none"
                aria-hidden
              >
                <path
                  d={ROUTE}
                  stroke="var(--saffron)"
                  strokeOpacity="0.25"
                  strokeWidth="14"
                  strokeLinejoin="round"
                />
                <path
                  d={ROUTE}
                  stroke="var(--saffron)"
                  strokeWidth="3"
                  strokeDasharray="6 10"
                  strokeLinecap="round"
                  className="animate-dash"
                />
                <g>
                  <circle r="16" fill="var(--paper)" />
                  <path
                    d="M-8 2 L8 -1 L10 1 L-6 6 Z M-2 0 L-6 -8 L-2 -8 L4 -1 Z M-2 3 L-6 10 L-2 10 L4 3 Z"
                    fill="var(--royal)"
                  />
                  <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" path={ROUTE} />
                </g>
                <circle r="6" fill="var(--saffron)">
                  <animateMotion dur="12s" begin="-4s" repeatCount="indefinite" path={ROUTE} />
                </circle>
                <circle r="6" fill="var(--saffron)">
                  <animateMotion dur="12s" begin="-8s" repeatCount="indefinite" path={ROUTE} />
                </circle>
              </svg>

              {stops.map((s, i) => (
                <div
                  key={s.city}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: s.x, top: s.y }}
                >
                  <div className="relative">
                    <span
                      className="absolute -inset-2 animate-ping rounded-full bg-saffron/30 [animation-duration:2.6s]"
                      style={{ animationDelay: `${i * 0.6}s` }}
                    />
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-saffron shadow-photo sm:h-32 sm:w-32">
                      <img
                        src={s.image}
                        alt={`${s.place} in ${s.city}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 grid h-9 w-9 place-items-center rounded-full bg-saffron font-display text-sm font-bold text-paper shadow-soft">
                      {i + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-center font-display text-lg leading-tight font-bold text-ivory sm:text-xl">
                    {s.city}
                    <span className="block text-xs font-medium text-ivory/60">{s.place}</span>
                  </p>
                </div>
              ))}

              <span className="absolute top-[44%] right-[2%] rounded-full bg-paper px-3 py-1 font-display text-xs font-bold text-royal shadow-soft sm:text-sm">
                ≈ 230 km
              </span>
              <span className="absolute bottom-[2%] left-1/2 -translate-x-1/2 rounded-full bg-paper px-3 py-1 font-display text-xs font-bold text-royal shadow-soft sm:text-sm">
                ≈ 240 km
              </span>
              <span className="absolute top-[44%] left-[2%] rounded-full bg-paper px-3 py-1 font-display text-xs font-bold text-royal shadow-soft sm:text-sm">
                ≈ 280 km
              </span>
              <LetsGoSticker className="absolute top-[40%] left-1/2 w-20 -translate-x-1/2 animate-wiggle text-[0.8rem] sm:w-24 sm:text-[0.95rem]" />
            </div>
          </Reveal>
        </div>

        <div
          id="golden-tours"
          className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr]"
        >
          {tours.map((tour, i) => (
            <Reveal key={tour.id} delay={i * 100}>
              <TourCard
                tour={tour}
                onView={(t) => {
                  setSelected(t);
                  setOpen(true);
                }}
              />
            </Reveal>
          ))}
          <Reveal delay={220} className="md:col-span-2 lg:col-span-1">
            <div className="relative flex h-full min-h-[18rem] flex-col justify-end overflow-hidden rounded-[2rem] p-8">
              <img
                src={images.redFort}
                alt="Red Fort in Delhi"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-card-overlay" />
              <div className="relative">
                <p className="hand text-3xl text-saffron">3 cities · 1 journey</p>
                <p className="mt-2 font-display text-2xl font-bold text-paper">
                  Private car, local guides and hand-picked stays all the way.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <TourDetailsDialog tour={selected} open={open} onOpenChange={setOpen} />
    </section>
  );
}
