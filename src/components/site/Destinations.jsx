"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { destinations, exploreSpots } from "@/data/tours";
import { cn } from "@/lib/utils";
import { Cloud, LocationBadge, Squiggle } from "./Decor";
import { Reveal } from "./Reveal";

const tones = {
  agra: { soft: "bg-mint", strong: "bg-mint-deep" },
  delhi: { soft: "bg-sky", strong: "bg-sky-deep" },
  jaipur: { soft: "bg-peach", strong: "bg-saffron" },
};

/** "Things to Explore" — three city tabs with featured experiences. */
export function Destinations() {
  const [active, setActive] = useState("agra");
  const city = destinations.find((d) => d.id === active) ?? destinations[0];
  const spots = exploreSpots[active];
  const [main, ...rest] = spots;

  return (
    <section id="destinations" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dots text-royal/40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <Cloud className="pointer-events-none absolute top-16 -right-10 w-48 opacity-90" />

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="hand text-3xl text-saffron sm:text-4xl">Pick a city, any city</p>
            <h2 className="mt-2 text-[2.5rem] leading-[1.02] font-bold sm:text-6xl">
              Things to Explore in Your{" "}
              <span className="relative inline-block text-saffron">
                Favourite
                <Squiggle className="absolute -bottom-3 left-0 h-3 w-full" />
              </span>{" "}
              Destination
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Destinations"
            className="flex gap-2 overflow-x-auto no-scrollbar sm:gap-3"
          >
            {destinations.map((d) => {
              const selected = d.id === active;
              return (
                <button
                  key={d.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="explore-panel"
                  onClick={() => setActive(d.id)}
                  className={cn(
                    "group flex shrink-0 items-center gap-3 rounded-full py-1.5 pr-5 pl-1.5 font-display text-lg font-semibold transition-all duration-500",
                    selected
                      ? "bg-royal text-ivory shadow-lift"
                      : "bg-paper text-royal shadow-soft hover:-translate-y-0.5",
                  )}
                >
                  <span
                    className={cn(
                      "h-11 w-11 overflow-hidden rounded-full ring-2 transition-all",
                      selected ? "ring-saffron" : "ring-transparent",
                    )}
                  >
                    <img
                      src={d.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                  </span>
                  {d.city}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          id="explore-panel"
          role="tabpanel"
          key={active}
          className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-6"
        >
          {main && (
            <article className="group relative h-[28rem] animate-pop overflow-hidden rounded-[2.5rem] shadow-photo sm:h-[34rem]">
              <img
                src={main.image}
                alt={main.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-card-overlay" />
              <LocationBadge
                city={city.city}
                place={main.title}
                className="absolute top-5 left-5"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="hand text-3xl text-saffron">{city.tagline}</p>
                <h3 className="mt-1 text-4xl font-bold text-paper sm:text-5xl">{main.title}</h3>
                <p className="mt-3 max-w-md text-paper/85">{main.text}</p>
                <Link
                  href={`/${city.id}-tours`}
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-paper py-2 pr-2 pl-6 font-display font-semibold text-royal transition-all duration-300 hover:gap-4 hover:bg-saffron hover:text-paper"
                >
                  Explore {city.city} Tours
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron text-paper">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </article>
          )}

          {rest.map((spot, i) => (
            <article
              key={spot.title}
              className={cn(
                "group relative flex animate-pop flex-col rounded-[2.5rem] p-3 transition-transform duration-500 hover:-translate-y-2",
                tones[active].soft,
                i === 0 ? "[animation-delay:120ms] lg:mt-10" : "[animation-delay:240ms]",
              )}
            >
              <div className="relative h-72 overflow-hidden arch sm:h-80">
                <img
                  src={spot.image}
                  alt={spot.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col px-4 pt-5 pb-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold">{spot.title}</h3>
                  <span
                    className={cn(
                      "grid h-10 w-10 shrink-0 place-items-center rounded-full text-paper transition-transform duration-500 group-hover:rotate-45",
                      tones[active].strong,
                    )}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{spot.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
