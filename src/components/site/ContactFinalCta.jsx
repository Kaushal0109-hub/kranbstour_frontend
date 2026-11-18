import Link from "next/link";
import { ArrowUpRight, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cloud, PaperPlane } from "./Decor";
import { images } from "@/data/tours";
import { contactConfig } from "@/data/contact-info";

export function ContactFinalCta() {
  return (
    <section className="relative overflow-hidden bg-royal py-16 sm:py-24 text-ivory">
      {/* Decorative clouds / airplane */}
      <Cloud className="pointer-events-none absolute -top-10 left-[8%] w-48 text-paper/10 animate-cloud-slow" />
      <PaperPlane className="pointer-events-none absolute bottom-8 right-[10%] h-12 w-20 text-ivory/20" />

      {/* Floating miniature photos in background */}
      <div className="pointer-events-none absolute top-12 left-4 w-32 aspect-square rounded-2xl overflow-hidden opacity-20 border-2 border-paper rotate-[-6deg] hidden lg:block">
        <img src={images.tajMahal} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute bottom-12 right-4 w-32 aspect-square rounded-2xl overflow-hidden opacity-20 border-2 border-paper rotate-[6deg] hidden lg:block">
        <img src={images.cityPalace} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-paper/10 px-4 py-1.5 text-xs text-saffron">
          <Sparkles className="h-3.5 w-3.5" /> Start Exploring
        </span>

        <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl text-paper">
          Your Next Great Journey Starts Here!
        </h2>

        <p className="hand mt-2 text-2xl text-saffron sm:text-3xl">
          Let&apos;s turn your travel plans into unforgettable memories
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          Connect with us today for a complimentary itinerary consultation or browse our signature
          private tours across Agra, Delhi, and Jaipur.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="saffron" size="pill-lg" className="shadow-saffron">
            <Link href="/#packages">
              Explore Tour Packages <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline-ivory" size="pill-lg">
            <a href="#enquiry-form">
              Contact Our Team
            </a>
          </Button>

          <Button asChild variant="outline-ivory" size="pill-lg">
            <a href={`tel:${contactConfig.phone.replace(/[\s\-\(\)]/g, "")}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-saffron" /> {contactConfig.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
