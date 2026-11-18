import { ArrowUpRight, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cloud, PaperPlane } from "./Decor";

export function DestinationCtaBanner({ destinationName = "India" }) {
  return (
    <section className="relative overflow-hidden bg-royal py-16 sm:py-20 text-ivory">
      {/* Decorative clouds / airplane */}
      <Cloud className="pointer-events-none absolute -top-10 left-[8%] w-48 text-paper/10 animate-cloud-slow" />
      <PaperPlane className="pointer-events-none absolute bottom-8 right-[10%] h-12 w-20 text-ivory/20" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-paper/10 px-4 py-1 text-xs text-saffron">
          <Sparkles className="h-3.5 w-3.5" /> Tailor-Made Private Journeys
        </span>

        <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl text-paper">
          Ready to Plan Your {destinationName} Tour?
        </h2>

        <p className="hand mt-2 text-2xl text-saffron sm:text-3xl">
          Crafted to your pace, schedule & preferences
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          Whether you need a private day excursion, a luxury heritage circuit, or specialized
          photography pacing, our dedicated local travel designers will create your dream itinerary.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="saffron" size="pill-lg">
            <a
              href={`mailto:hello@kranbstour.com?subject=${encodeURIComponent(
                `Custom Tour Inquiry: ${destinationName}`,
              )}`}
            >
              Request Custom Itinerary <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>

          <Button asChild variant="outline-ivory" size="pill-lg">
            <a href="tel:+910000000000" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-saffron" /> Call Travel Desk
            </a>
          </Button>

          <Button asChild variant="outline-ivory" size="pill-lg">
            <a href="mailto:hello@kranbstour.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-saffron" /> hello@kranbstour.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
