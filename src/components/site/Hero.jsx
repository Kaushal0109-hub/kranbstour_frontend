"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

import airplaneImg from "@/assets/hero-airplane.png";
import { images } from "@/data/tours";
import { cn } from "@/lib/utils";
import { Cloud, LetsGoSticker, LocationBadge, PaperPlane, RingSticker, Squiggle } from "./Decor";

const airplane = airplaneImg?.src || airplaneImg;
const cities = ["Agra", "Delhi", "Jaipur"];

/** Types and deletes the current city name, then moves to the next one. */
function useTypingCity(index, onDone) {
  const word = cities[index] ?? "Agra";
  const [text, setText] = useState(word);
  const [phase, setPhase] = useState("hold");

  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setText("");
    setPhase("typing");
  }, [index]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(word);
      const t = window.setTimeout(onDone, 3200);
      return () => window.clearTimeout(t);
    }
    let t;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = window.setTimeout(() => setText(word.slice(0, text.length + 1)), 120);
      } else {
        t = window.setTimeout(() => setPhase("hold"), 10);
      }
    } else if (phase === "hold") {
      t = window.setTimeout(() => setPhase("deleting"), 2200);
    } else if (text.length > 0) {
      t = window.setTimeout(() => setText(text.slice(0, -1)), 65);
    } else {
      t = window.setTimeout(onDone, 150);
    }
    return () => window.clearTimeout(t);
  }, [text, phase, word, onDone]);

  return text;
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % cities.length);
  const prev = () => setIndex((i) => (i + cities.length - 1) % cities.length);
  const [advance] = useState(() => () => setIndex((i) => (i + 1) % cities.length));
  const typed = useTypingCity(index, advance);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero-gradient">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[30rem] w-[30rem] rounded-full border border-mint-deep/20" />
        <div className="absolute -bottom-48 -left-40 h-[34rem] w-[34rem] rounded-full bg-peach/60" />
        <div className="absolute top-10 right-[8%] h-80 w-80 rounded-full bg-peach blur-3xl" />
        <div className="absolute top-[45%] left-[30%] h-72 w-72 rounded-full bg-mint blur-3xl" />
        <Cloud className="absolute top-[12%] left-0 w-40 animate-cloud opacity-90" />
        <Cloud className="absolute top-[58%] left-0 w-56 animate-cloud-slow opacity-80 [animation-delay:-25s]" />
        <Cloud className="absolute top-[30%] left-0 w-28 animate-cloud opacity-70 [animation-delay:-18s]" />
      </div>

      {/* Dotted flight path across the hero */}
      <svg
        aria-hidden
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 -z-[5] h-full w-full text-royal/30"
        fill="none"
      >
        <path
          d="M-20 120 C 200 40, 420 60, 560 180 S 760 420, 980 300 S 1300 60, 1480 140"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 10"
          strokeLinecap="round"
          className="animate-dash"
        />
      </svg>

      <div className="mx-auto grid max-w-[88rem] items-center gap-10 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1fr_1.08fr] lg:gap-4 lg:px-10 lg:py-10">
        {/* Copy */}
        <div className="relative z-20 lg:pl-16">
          {/* Slider controls */}
          <div className="absolute top-1/2 left-0 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
            <span className="h-24 w-px bg-mint-deep/40" />
            <button
              type="button"
              onClick={next}
              aria-label="Next city"
              className="grid h-9 w-9 place-items-center rounded-full border border-mint-deep text-mint-deep transition-colors hover:bg-mint-deep hover:text-paper"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous city"
              className="grid h-9 w-9 place-items-center rounded-full border border-mint-deep text-mint-deep transition-colors hover:bg-mint-deep hover:text-paper"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="h-24 w-px bg-mint-deep/40" />
          </div>

          <p className="hand flex items-center gap-3 text-[32px] text-saffron sm:text-[41.6px]">
            Explore India&apos;s Treasures
            <PaperPlane className="hidden h-12 w-16 -translate-y-3 animate-drift sm:block" />
          </p>

          <h1 className="mt-3 text-[3.1rem] leading-[0.98] font-bold text-royal sm:text-[4.6rem] lg:text-[4.9rem] xl:text-[5.9rem]">
            <span className="sr-only">Your Dream Tour to Agra, Delhi and Jaipur</span>
            <span aria-hidden className="block">
              Your Dream
            </span>
            <span aria-hidden className="block whitespace-nowrap">
              Tour to{" "}
              <span className="relative inline-block text-saffron">
                <span className="absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.32em] rounded-full bg-mint" />
                {typed}
                <span className="ml-1 inline-block h-[0.82em] w-[0.06em] translate-y-[0.06em] animate-blink rounded-full bg-royal" />
              </span>
            </span>
          </h1>
          <Squiggle className="mt-2 h-4 w-48 sm:w-64" />

          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Discover the magic of Agra, explore the vibrant streets of Delhi, and experience the
            royal charm of Jaipur with unforgettable journeys by KranbsTour.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5 sm:gap-7 hidden md:block">
            <Link
              href="#destinations"
              className="btn-shine group inline-flex h-16 items-center gap-4 rounded-full bg-saffron py-2 pr-2 pl-8 font-display text-lg font-semibold text-paper shadow-saffron transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron-deep"
            >
              Discover Now
              <span className="grid h-12 w-12 place-items-center rounded-full bg-paper text-saffron transition-transform duration-300 group-hover:rotate-[-45deg]">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
            <a
              href="#how"
              className="group inline-flex items-center gap-4 font-display text-lg font-medium text-royal"
            >
              <span className="relative grid h-16 w-16 place-items-center rounded-full bg-paper text-saffron shadow-soft transition-transform duration-300 group-hover:scale-110">
                <span className="absolute inset-0 animate-ping rounded-full bg-paper/70 [animation-duration:2.4s]" />
                <Play className="relative h-5 w-5 fill-current" />
              </span>
              How It Works?
            </a>
          </div>

          {/* Indicators */}
          <div className="mt-10 flex items-center gap-3" role="group" aria-label="Featured city">
            {cities.map((c, i) => (
              <button
                key={c}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${c}`}
                aria-pressed={index === i}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-500",
                  index === i ? "w-10 bg-saffron" : "w-2.5 bg-royal/20 hover:bg-royal/40",
                )}
              />
            ))}
            <span className="ml-2 font-display text-sm font-medium text-royal/60">
              0{index + 1} / 03 · {cities[index]}
            </span>
          </div>
        </div>

        {/* Collage */}
        <div className="relative mx-auto h-[25rem] w-full max-w-[36rem] sm:h-[34rem] lg:h-[40rem] lg:max-w-none xl:h-[42rem]">
          <LetsGoSticker className="absolute top-[0%] left-[30%] z-30 w-20 animate-wiggle text-[0.8rem] sm:w-28 sm:text-[1.1rem]" />
          <RingSticker className="absolute right-[1%] bottom-[0%] z-30 w-20 sm:w-28" />

          {/* Agra — airplane window */}
          <div className="absolute top-[14%] left-[0%] z-10 h-[78%] w-[42%] animate-float-slow">
            <div className="h-full w-full rounded-[999px] bg-paper p-2.5 shadow-photo sm:p-4">
              <div className="relative h-full w-full overflow-hidden rounded-[999px] shadow-[inset_0_0_0_6px_var(--ivory-deep)]">
                <img
                  src={images.tajMahal}
                  alt="The Taj Mahal at sunrise seen through an airplane window"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-110"
                />
                <div className="absolute inset-x-0 top-0 h-[16%] bg-gradient-to-b from-ivory-deep to-transparent" />
              </div>
            </div>
            <LocationBadge
              city="Agra"
              place="Taj Mahal"
              className="absolute bottom-[8%] left-1/2 -translate-x-1/2"
            />
          </div>

          {/* Delhi */}
          <figure className="group absolute top-[3%] left-[44%] z-0 h-[74%] w-[27%] animate-float-slower overflow-hidden arch border-4 border-paper shadow-photo [animation-delay:-3s]">
            <img
              src={images.indiaGate}
              alt="India Gate in New Delhi at blue hour"
              width={1024}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
            />
            <LocationBadge
              city="Delhi"
              className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-4"
            />
          </figure>

          {/* Jaipur */}
          <figure className="group absolute top-[20%] right-[0%] z-0 h-[70%] w-[26%] animate-float-slow overflow-hidden arch border-4 border-paper shadow-photo [animation-delay:-5s]">
            <img
              src={images.hawaMahal}
              alt="Hawa Mahal's pink sandstone facade in Jaipur"
              width={1024}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
            />
            <LocationBadge
              city="Jaipur"
              className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-4"
            />
          </figure>

          {/* Airplane crossing the collage */}
          <img
            src={airplane}
            alt=""
            aria-hidden
            width={1100}
            height={358}
            className="pointer-events-none absolute top-[30%] left-[12%] z-20 w-[66%] animate-fly drop-shadow-[0_30px_25px_color-mix(in_oklab,var(--navy)_35%,transparent)]"
          />

          {/* Clouds around the window */}
          <Cloud className="absolute bottom-[4%] left-[-6%] z-20 w-[34%] drop-shadow-[0_10px_20px_color-mix(in_oklab,var(--navy)_12%,transparent)]" />
          <Cloud className="absolute bottom-[14%] left-[26%] z-20 w-[22%] opacity-95" />
          <Cloud className="absolute top-[52%] right-[18%] z-20 w-[18%] opacity-90" />
        </div>
      </div>
    </section>
  );
}
