import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/data/contact-info";

export function ContactWhatsAppBanner() {
  const whatsappUrl = getWhatsAppUrl(
    "Hello KranbsTour! I'm planning a trip and would love quick help with tour options."
  );

  return (
    <section className="py-12 sm:py-16 bg-paper border-t border-royal/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 p-8 sm:p-12 text-paper shadow-photo">
          {/* Subtle decorative circles */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-400/20 blur-2xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl space-y-3">
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-paper/15 px-3.5 py-1 text-xs font-semibold text-emerald-200">
                <Sparkles className="h-3.5 w-3.5" /> Direct Travel WhatsApp Desk
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-paper">
                Prefer a Quick Conversation?
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Have questions about your trip? Connect with our team directly through WhatsApp for
                instant replies, customized quotes, and vehicle recommendations.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                asChild
                size="pill-lg"
                className="bg-paper text-emerald-800 hover:bg-emerald-50 hover:text-emerald-900 shadow-photo font-bold text-sm sm:text-base h-12 sm:h-14 px-7"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
                  <MessageCircle className="h-5 w-5 text-emerald-600 fill-emerald-600" />
                  Chat With Us on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
