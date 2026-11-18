import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cloud, LetsGoSticker, PaperPlane } from "./Decor";
import { images } from "@/data/tours";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-pastel-gradient pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-royal/10">
      {/* Decorative floating clouds & plane */}
      <Cloud className="pointer-events-none absolute -top-8 left-[6%] w-44 text-paper/40 animate-cloud-slow" />
      <Cloud className="pointer-events-none absolute top-1/2 -right-10 w-56 text-paper/30 hidden md:block" />
      <PaperPlane className="pointer-events-none absolute top-12 right-[18%] h-12 w-20 text-royal/25 hidden lg:block" />

      {/* Decorative pastel circles */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-mint/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[5%] h-72 w-72 rounded-full bg-peach/25 blur-2xl" />

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-saffron/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-deep">
              <Compass className="h-3.5 w-3.5" />
              WE&apos;D LOVE TO HEAR FROM YOU
            </div>

            <div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.12] text-royal sm:text-5xl lg:text-6xl">
                Let&apos;s Plan Your{" "}
                <span className="text-saffron relative inline-block">
                  Next Adventure!
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
                Personalized travel design for Agra, Delhi & Jaipur
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              Have a question, need help choosing a tour, or want to plan a memorable journey through
              Agra, Delhi, and Jaipur? Our team is here to help you create the perfect travel
              experience.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button asChild variant="saffron" size="pill-lg" className="shadow-saffron">
                <a href="#enquiry-form">
                  Send an Enquiry <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline-royal" size="pill-lg">
                <Link href="/golden-triangle-tours">
                  Explore Our Tours <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Quick response note */}
            <div className="flex items-center gap-2 pt-2 text-xs font-medium text-foreground/75">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Travel desk active now • Responses typically within a few hours</span>
            </div>
          </div>

          {/* Right Column: Travel Illustration & Photographic Collage */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] sm:aspect-[16/12] w-full">
              {/* Dotted path illustration in background */}
              <svg
                aria-hidden
                viewBox="0 0 400 300"
                className="absolute inset-0 h-full w-full pointer-events-none"
              >
                <path
                  d="M40 260 C 100 200, 180 240, 260 120 C 300 60, 360 80, 370 40"
                  fill="none"
                  stroke="var(--saffron)"
                  strokeWidth="2.5"
                  strokeDasharray="4 8"
                  opacity="0.45"
                />
              </svg>

              {/* Main Photo: Taj Mahal */}
              <div className="absolute top-0 right-4 w-[62%] aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-paper shadow-photo rotate-[2deg] hover:rotate-0 transition-transform duration-500 z-10">
                <img
                  src={images.tajGoldenHour}
                  alt="Taj Mahal Agra"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1 rounded-full bg-paper/90 px-2.5 py-0.5 text-[0.68rem] font-bold text-royal shadow-xs">
                  <MapPin className="h-3 w-3 text-saffron" /> Agra • Taj Mahal
                </div>
              </div>

              {/* Supporting Photo 1: Hawa Mahal Jaipur */}
              <div className="absolute bottom-4 left-0 w-[50%] aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-paper shadow-photo rotate-[-4deg] hover:rotate-0 transition-transform duration-500 z-20">
                <img
                  src={images.hawaMahal}
                  alt="Hawa Mahal Jaipur"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1 rounded-full bg-paper/90 px-2.5 py-0.5 text-[0.68rem] font-bold text-royal shadow-xs">
                  <MapPin className="h-3 w-3 text-saffron" /> Jaipur • Pink City
                </div>
              </div>

              {/* Supporting Photo 2: India Gate Delhi */}
              <div className="absolute top-1/4 left-[34%] w-[38%] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-paper shadow-photo rotate-[5deg] hover:rotate-0 transition-transform duration-500 z-15 hidden sm:block">
                <img
                  src={images.indiaGate}
                  alt="India Gate Delhi"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-paper/90 px-2 py-0.5 text-[0.65rem] font-bold text-royal shadow-xs">
                  <MapPin className="h-2.5 w-2.5 text-saffron" /> Delhi
                </div>
              </div>

              {/* Floating "Let's Go!" travel sticker */}
              <LetsGoSticker className="absolute -bottom-4 right-8 h-20 w-20 sm:h-24 sm:w-24 rotate-[10deg] shadow-photo z-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
