"use client";

import { useState } from "react";
import { BookOpen, Compass, Search } from "lucide-react";
import { Cloud, PaperPlane, LetsGoSticker } from "./Decor";
import { images } from "@/data/tours";

export function BlogHero({
  searchQuery: propQuery,
  onSearchChange,
  onSearchSubmit,
}) {
  const [internalQuery, setInternalQuery] = useState("");
  const isControlled = propQuery !== undefined && onSearchChange !== undefined;
  const currentQuery = isControlled ? propQuery : internalQuery;

  const handleQueryChange = (val) => {
    if (isControlled) {
      onSearchChange(val);
    } else {
      setInternalQuery(val);
    }
  };

  const handleSearchSubmit = (val) => {
    if (onSearchSubmit) {
      onSearchSubmit(val);
    }
    // Dispatch custom event for BlogListing
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kranbs:blog-search", { detail: { query: val } })
      );
      const section = document.getElementById("travel-stories");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-pastel-gradient pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-22 border-b border-royal/10">
      {/* Decorative clouds and airplane */}
      <Cloud className="pointer-events-none absolute -top-8 left-[5%] w-44 text-paper/40 animate-cloud-slow" />
      <Cloud className="pointer-events-none absolute top-1/2 -right-8 w-56 text-paper/30 hidden md:block" />
      <PaperPlane className="pointer-events-none absolute top-10 right-[15%] h-12 w-20 text-royal/20 hidden lg:block" />

      {/* Decorative blurred pastel gradients */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-mint/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-peach/25 blur-2xl" />

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Heading, Copy, and Search Bar */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-saffron/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-deep">
              <BookOpen className="h-3.5 w-3.5" />
              TRAVEL STORIES &amp; INSPIRATION
            </div>

            <div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-royal sm:text-5xl lg:text-6xl">
                Explore India{" "}
                <span className="text-saffron relative inline-block">
                  Through Stories
                  <svg
                    aria-hidden
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-2.5 w-full text-saffron"
                  >
                    <path
                      d="M0 10 Q 50 20, 100 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="hand mt-2 text-2xl text-royal/70 sm:text-3xl">
                Guides, photography secrets &amp; cultural insights
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              Discover travel inspiration, destination guides, useful tips, and unforgettable
              experiences from Agra, Delhi, and Jaipur. Written by local historians and trip
              designers.
            </p>

            {/* Functional Search Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchSubmit(currentQuery);
              }}
              className="relative max-w-xl"
            >
              <div className="flex items-center rounded-full bg-paper p-1.5 shadow-photo border border-royal/15 transition-all focus-within:border-royal focus-within:ring-2 focus-within:ring-royal/10">
                <Search className="h-5 w-5 text-royal/40 ml-4 shrink-0" />
                <input
                  type="text"
                  value={currentQuery}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  placeholder="Search travel guides, destinations and stories..."
                  className="w-full bg-transparent px-3 py-2 text-sm text-royal placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-shine shrink-0 rounded-full bg-saffron px-6 py-2.5 font-display text-xs sm:text-sm font-bold text-paper shadow-sm transition-all hover:bg-saffron-deep"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-foreground/70">
              <span className="font-semibold text-royal">Popular topics:</span>
              <button
                type="button"
                onClick={() => {
                  handleQueryChange("Taj Mahal");
                  handleSearchSubmit("Taj Mahal");
                }}
                className="rounded-full bg-paper/80 px-2.5 py-1 text-[0.72rem] font-medium hover:bg-mint transition-colors text-royal"
              >
                Taj Mahal Sunrise
              </button>
              <button
                type="button"
                onClick={() => {
                  handleQueryChange("Delhi");
                  handleSearchSubmit("Delhi");
                }}
                className="rounded-full bg-paper/80 px-2.5 py-1 text-[0.72rem] font-medium hover:bg-mint transition-colors text-royal"
              >
                Old Delhi Food
              </button>
              <button
                type="button"
                onClick={() => {
                  handleQueryChange("Jaipur");
                  handleSearchSubmit("Jaipur");
                }}
                className="rounded-full bg-paper/80 px-2.5 py-1 text-[0.72rem] font-medium hover:bg-mint transition-colors text-royal"
              >
                Jaipur Forts
              </button>
              <button
                type="button"
                onClick={() => {
                  handleQueryChange("Golden Triangle");
                  handleSearchSubmit("Golden Triangle");
                }}
                className="rounded-full bg-paper/80 px-2.5 py-1 text-[0.72rem] font-medium hover:bg-mint transition-colors text-royal"
              >
                Golden Triangle Route
              </button>
            </div>
          </div>

          {/* Right Column: Visual Photo Collage */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] sm:aspect-[16/12] w-full">
              {/* Dotted path illustration in background */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-30 text-royal"
                viewBox="0 0 500 400"
                fill="none"
              >
                <path
                  d="M50 320 Q 220 80, 440 180"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              </svg>

              {/* Main Primary Image (Taj Mahal) */}
              <div className="absolute top-4 left-6 w-[62%] aspect-[4/3] rounded-3xl overflow-hidden shadow-photo border-4 border-paper rotate-[-3deg] transition-transform hover:rotate-0 hover:scale-105 duration-500">
                <img
                  src={images.tajGoldenHour}
                  alt="Taj Mahal early morning"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2 left-3 rounded-full bg-paper/90 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-bold text-royal">
                  Agra • Sunrise
                </div>
              </div>

              {/* Secondary Image (Amber Fort / Jaipur) */}
              <div className="absolute top-12 right-2 w-[48%] aspect-[4/3] rounded-3xl overflow-hidden shadow-photo border-4 border-paper rotate-[4deg] transition-transform hover:rotate-0 hover:scale-105 duration-500 z-10">
                <img
                  src={images.amberFort}
                  alt="Amber Fort Jaipur"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2 left-3 rounded-full bg-paper/90 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-bold text-royal">
                  Jaipur • Fortresses
                </div>
              </div>

              {/* Tertiary Image (Humayun's Tomb / Delhi) */}
              <div className="absolute bottom-2 left-[20%] w-[50%] aspect-[16/10] rounded-2xl overflow-hidden shadow-card border-4 border-paper rotate-[-2deg] transition-transform hover:rotate-0 hover:scale-105 duration-500 z-20">
                <img
                  src={images.humayunsTomb}
                  alt="Humayun's Tomb Delhi"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2 left-3 rounded-full bg-paper/90 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-bold text-royal">
                  Delhi • Mughal Legacy
                </div>
              </div>

              {/* Decorative Travel Sticker */}
              <div className="absolute -bottom-4 right-8 z-30 hidden sm:block">
                <LetsGoSticker className="h-16 w-28 drop-shadow-md rotate-[12deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
