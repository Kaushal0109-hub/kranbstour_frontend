import { ArrowUpRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cloud, PaperPlane } from "./Decor";

export function TourFinalCta({ tour }) {
  const whatsappMessage = `Hello KranbsTour, I am interested in booking "${tour.title}". Please assist me with availability and details.`;
  const whatsappUrl = `https://wa.me/910000000000?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-royal py-16 sm:py-20 text-ivory">
      {/* Decorative Elements */}
      <Cloud className="pointer-events-none absolute -top-10 left-[10%] w-48 text-paper/10 animate-cloud-slow" />
      <PaperPlane className="pointer-events-none absolute bottom-8 right-[12%] h-12 w-20 text-ivory/20" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-paper/10 px-4 py-1 text-xs text-saffron">
          <Sparkles className="h-3.5 w-3.5" /> Tailor-Made Private Journeys
        </span>

        <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl text-paper">
          Ready to Experience This Journey?
        </h2>

        <p className="hand mt-2 text-2xl text-saffron sm:text-3xl">
          Make your next trip memorable with KranbsTour
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          Have special requests, dietary preferences, or specific timing needs? Our local destination
          specialists are ready to fine-tune your itinerary to perfection.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="saffron" size="pill-lg">
            <a
              href={`mailto:hello@kranbstour.com?subject=${encodeURIComponent(
                `Booking Request: ${tour.title}`
              )}`}
            >
              Book This Tour <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline-ivory"
            size="pill-lg"
            className="border-emerald-400 text-emerald-200 hover:bg-emerald-950/40"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              Enquire on WhatsApp
            </a>
          </Button>

          <Button asChild variant="outline-ivory" size="pill-lg">
            <a href="tel:+910000000000" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-saffron" /> Call Our Desk
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
