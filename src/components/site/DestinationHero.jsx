import { Compass, Sparkles, MapPin, ShieldCheck, UserCheck, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cloud, PaperPlane, LetsGoSticker } from "./Decor";

export function DestinationHero({
  eyebrow,
  title,
  handwriting,
  description,
  heroImage,
  heroImageAlt,
  isGoldenTriangle = false,
  packageCount = 8,
}) {
  return (
    <section className="relative overflow-hidden bg-pastel-gradient pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 border-b border-royal/10">
      {/* Decorative background clouds and plane */}
      <Cloud className="pointer-events-none absolute -top-10 left-[5%] w-48 text-paper/40 animate-cloud-slow" />
      <Cloud className="pointer-events-none absolute top-1/2 right-[3%] w-60 text-paper/30 hidden md:block" />
      <PaperPlane className="pointer-events-none absolute top-10 right-[15%] h-12 w-20 text-royal/30 hidden lg:block" />

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-saffron-deep">
                <Compass className="h-3.5 w-3.5" />
                {eyebrow}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">
                <Sparkles className="h-3 w-3 text-saffron" />
                {packageCount} Curated Packages
              </span>
            </div>

            <div>
              <h1 className="font-display text-3xl font-extrabold leading-[1.15] text-royal sm:text-5xl lg:text-[3.25rem]">
                {title}
              </h1>
              {handwriting && (
                <p className="hand mt-2 text-2xl text-saffron sm:text-3xl">
                  {handwriting}
                </p>
              )}
            </div>

            <p className="max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              {description}
            </p>

            {/* Circuit highlight for Golden Triangle */}
            {isGoldenTriangle && (
              <div className="rounded-2xl border border-saffron/30 bg-paper/90 p-4 shadow-soft">
                <p className="eyebrow text-saffron-deep">Classic India Travel Corridor</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-bold text-royal">
                  <span className="rounded-full bg-royal/10 px-3 py-1">Delhi</span>
                  <span className="text-saffron font-bold">➔</span>
                  <span className="rounded-full bg-royal/10 px-3 py-1">Agra</span>
                  <span className="text-saffron font-bold">➔</span>
                  <span className="rounded-full bg-royal/10 px-3 py-1">Jaipur</span>
                  <span className="ml-auto text-xs font-medium text-foreground/70">
                    ~720 km total circuit
                  </span>
                </div>
              </div>
            )}

            {/* Quick trust badges */}
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              <div className="flex items-center gap-2 rounded-xl bg-paper/70 p-2.5 shadow-xs">
                <UserCheck className="h-4 w-4 shrink-0 text-mint-deep" />
                <span className="text-xs font-medium text-foreground/80">Govt Guides</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-paper/70 p-2.5 shadow-xs">
                <Car className="h-4 w-4 shrink-0 text-mint-deep" />
                <span className="text-xs font-medium text-foreground/80">Private AC Car</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-paper/70 p-2.5 shadow-xs">
                <ShieldCheck className="h-4 w-4 shrink-0 text-mint-deep" />
                <span className="text-xs font-medium text-foreground/80">Tailor-Made</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-paper/70 p-2.5 shadow-xs">
                <MapPin className="h-4 w-4 shrink-0 text-mint-deep" />
                <span className="text-xs font-medium text-foreground/80">Doorstep Pickup</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild variant="saffron" size="pill-lg">
                <a href="#tour-packages">Explore Tour Packages ↓</a>
              </Button>
              <Button asChild variant="outline-royal" size="pill-lg">
                <a href="#destination-guide">Travel Guide & Tips</a>
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-paper p-3 shadow-photo">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-[2rem]">
                <img
                  src={heroImage}
                  alt={heroImageAlt || title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-paper">
                  <span className="rounded-full bg-paper/90 px-3 py-1 text-xs font-bold text-royal shadow-sm">
                    Verified KranbsTour Itineraries
                  </span>
                  <span className="hand text-2xl text-saffron-light">Private & Escorted</span>
                </div>
              </div>
            </div>

            {/* Sticker decoration */}
            <LetsGoSticker className="absolute -bottom-6 -left-6 h-20 w-20 sm:h-24 sm:w-24 rotate-[-12deg] shadow-photo hidden sm:grid" />
          </div>
        </div>
      </div>
    </section>
  );
}
