"use client";

import { useState } from "react";
import { Camera, ChevronDown, Heart, Sparkles, Users } from "lucide-react";

export function TourAbout({ tour }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="space-y-8">
      {/* About Overview */}
      <div>
        <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3 py-1 text-xs text-saffron-deep">
          <Sparkles className="h-3.5 w-3.5" /> Experience Overview
        </span>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-royal">
          About This Tour
        </h2>
        <div className="mt-4 text-base leading-relaxed text-foreground/85 space-y-3">
          <p>{tour.overview || tour.summary}</p>
          <p className="text-foreground/75 text-sm">
            Crafted for discerning travelers who value personal comfort, authentic storytelling,
            and unhurried exploration. Accompanied by our certified English-speaking local
            historians and professional chauffeurs, every segment is managed with meticulous
            care from doorstep pickup to final return.
          </p>
        </div>
      </div>

      {/* What Makes It Special */}
      <div className="rounded-3xl border border-royal/10 bg-ivory/60 p-6 sm:p-7 shadow-xs">
        <h3 className="font-display text-lg font-bold text-royal flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-saffron" />
          What Makes This Experience Special
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs sm:text-sm text-foreground/80">
          <div className="rounded-2xl bg-paper p-4 border border-royal/5">
            <strong className="block font-bold text-royal mb-1">
              🏛️ Licensed Historian Guides
            </strong>
            Engaging, verified stories of Mughal court intrigues, Rajput chivalry, and architectural
            symbolism without rushed group schedules.
          </div>
          <div className="rounded-2xl bg-paper p-4 border border-royal/5">
            <strong className="block font-bold text-royal mb-1">
              🚗 Door-to-Door Private Chauffeur
            </strong>
            Sanitized late-model air-conditioned vehicle exclusively for your party, with highway tolls,
            fuel, and parking fees completely pre-settled.
          </div>
          <div className="rounded-2xl bg-paper p-4 border border-royal/5">
            <strong className="block font-bold text-royal mb-1">
              ⏱️ Unhurried, Flexible Pacing
            </strong>
            Spend as much time as you like capturing sunrise photographs or browsing artisan marble
            studios without feeling pushed.
          </div>
          <div className="rounded-2xl bg-paper p-4 border border-royal/5">
            <strong className="block font-bold text-royal mb-1">
              💎 Authentic Artisan Connections
            </strong>
            Direct visits to traditional stone-inlay or textile guild studios, avoiding commercial
            tourist commission traps.
          </div>
        </div>
      </div>

      {/* Who This Tour Is Suitable For */}
      <div>
        <h3 className="font-display text-lg font-bold text-royal mb-3">
          Who Is This Tour Suitable For?
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="rounded-2xl bg-paper p-3.5 border border-royal/10 text-center shadow-xs">
            <Heart className="h-4 w-4 text-rose-500 mx-auto mb-1.5" />
            <span className="font-bold text-royal block">Couples</span>
            <span className="text-[0.7rem] text-muted-foreground">Romantic, quiet pacing</span>
          </div>
          <div className="rounded-2xl bg-paper p-3.5 border border-royal/10 text-center shadow-xs">
            <Users className="h-4 w-4 text-saffron mx-auto mb-1.5" />
            <span className="font-bold text-royal block">Families</span>
            <span className="text-[0.7rem] text-muted-foreground">Spacious car & flexible stops</span>
          </div>
          <div className="rounded-2xl bg-paper p-3.5 border border-royal/10 text-center shadow-xs">
            <Camera className="h-4 w-4 text-mint-deep mx-auto mb-1.5" />
            <span className="font-bold text-royal block">Photographers</span>
            <span className="text-[0.7rem] text-muted-foreground">Ideal golden hour angles</span>
          </div>
          <div className="rounded-2xl bg-paper p-3.5 border border-royal/10 text-center shadow-xs">
            <Sparkles className="h-4 w-4 text-sky-600 mx-auto mb-1.5" />
            <span className="font-bold text-royal block">Solo Explorers</span>
            <span className="text-[0.7rem] text-muted-foreground">Safe, escorted & verified</span>
          </div>
        </div>
      </div>

      {/* Expandable Full Tour Description (Section 14) */}
      <div className="border-t border-royal/10 pt-6">
        <h3 className="font-display text-xl font-bold text-royal">
          Discover More About This Experience
        </h3>
        <div
          className={`mt-3 text-sm leading-relaxed text-foreground/80 space-y-3 relative overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-[1000px]" : "max-h-24"
          }`}
        >
          <p>
            {tour.overview} Throughout the tour, your designated English-speaking historian will
            illuminate the fine details that standard guidebooks often omit: from the optical
            illusions engineered into calligraphy to the Persian symmetry embedded within garden
            waterways.
          </p>
          <p>
            Your private air-conditioned vehicle is stocked with chilled bottled water and wet
            tissues for maximum comfort. Travel smoothly between destination highlights with all
            navigation, interstate taxes, and parking managed on your behalf.
          </p>
          <p>
            Should you wish to stop for lunch, your guide will recommend celebrated local heritage
            dining establishments known for pristine hygiene and authentic regional gastronomy.
          </p>
          {!expanded && (
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent" />
          )}
        </div>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-3 inline-flex items-center gap-1.5 font-display text-xs font-bold text-saffron-deep hover:text-royal transition-colors"
        >
          {expanded ? "Read Less" : "Read Full Description"}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </section>
  );
}
