import Link from "next/link";
import { MessageCircle, Compass, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogFinalCta() {
  return (
    <section className="relative overflow-hidden bg-pastel-gradient py-16 sm:py-24 border-t border-royal/10">
      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-saffron/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-deep">
            <Compass className="h-4 w-4" /> Ready for the Real Journey?
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-royal leading-tight">
            Turn These Stories Into Your{" "}
            <span className="text-saffron relative inline-block">
              Next Adventure
            </span>
          </h2>

          <p className="hand text-2xl sm:text-3xl text-royal/70 max-w-xl mx-auto">
            Private guides, luxury transport &amp; handpicked moments
          </p>

          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Whether you want a tranquil sunrise at the Taj Mahal, an insider food trail through Old
            Delhi, or royal palace explorations in Jaipur — we craft seamless, hassle-free private
            tours tailored to you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-saffron hover:bg-saffron-deep text-paper font-display text-base font-bold px-8 shadow-saffron transition-all hover:scale-105"
            >
              <Link href="/#packages">
                <span>Browse All Tour Packages</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-royal/20 bg-paper text-royal hover:bg-mint hover:text-royal font-display text-base font-bold px-7 shadow-soft"
            >
              <Link href="/contact">
                <span>Custom Tour Enquiry</span>
              </Link>
            </Button>

            <a
              href="https://wa.me/919876543210?text=Hello%20KranbsTour%20team,%20I%20would%20like%20to%20plan%20a%20tour!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-paper font-display text-sm font-bold px-6 py-3.5 shadow-soft transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-foreground/70">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-4 w-4 text-saffron" /> Licensed Local Guides
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Star className="h-4 w-4 fill-saffron text-saffron" /> 4.9/5 from 1,400+ Travellers
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              No Hidden Fees &amp; 100% Guaranteed Departures
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
