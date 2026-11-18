import Link from "next/link";
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cloud, PaperPlane } from "./Decor";
import { images } from "@/data/tours";

export function BlogInspirationBanner() {
  return (
    <section className="relative overflow-hidden bg-royal py-16 sm:py-20 text-ivory">
      {/* Decorative clouds and planes */}
      <Cloud className="pointer-events-none absolute -top-10 left-[8%] w-48 text-paper/10 animate-cloud-slow" />
      <PaperPlane className="pointer-events-none absolute bottom-8 right-[10%] h-12 w-20 text-ivory/20" />

      {/* Background miniature photo elements */}
      <div className="pointer-events-none absolute top-8 left-6 w-28 aspect-square rounded-2xl overflow-hidden opacity-20 border-2 border-paper rotate-[-8deg] hidden xl:block">
        <img src={images.tajMahal} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute bottom-8 right-6 w-28 aspect-square rounded-2xl overflow-hidden opacity-20 border-2 border-paper rotate-[8deg] hidden xl:block">
        <img src={images.amberFort} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-paper/10 px-4 py-1.5 text-xs text-saffron">
          <Sparkles className="h-3.5 w-3.5" /> From Inspiration to Reality
        </span>

        <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl text-paper">
          Your Next Journey Starts With a Story
        </h2>

        <p className="hand mt-2 text-2xl text-saffron sm:text-3xl">
          Turn travel inspiration into private, unforgettable adventures
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          Explore our destination guides and discover experiences worth remembering. When you are
          ready, our team of local historians and private chauffeurs will bring the journey to life.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="saffron" size="pill-lg" className="shadow-saffron font-bold">
            <Link href="/golden-triangle-tours">
              Explore Tour Packages <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline-ivory" size="pill-lg">
            <Link href="/contact">
              Plan Custom Itinerary
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
