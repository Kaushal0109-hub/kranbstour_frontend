import { Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { contactConfig, getMailtoUrl, getWhatsAppUrl } from "@/data/contact-info";

export function ContactInfoCards() {
  const cards = [
    {
      id: "phone",
      icon: Phone,
      title: "Phone Support",
      description: "Talk directly with our trip designers for custom itineraries.",
      value: contactConfig.phoneDisplay,
      subvalue: contactConfig.operatingHours.weekdays,
      href: `tel:${contactConfig.phone.replace(/[\s\-\(\)]/g, "")}`,
      cta: "Call Travel Desk",
      color: "bg-sky/20 border-sky/40 text-royal",
      iconBg: "bg-sky text-royal",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email Us",
      description: "Send us your detailed travel requirements and questions.",
      value: contactConfig.email,
      subvalue: "Quick reply within 12–24 hours",
      href: getMailtoUrl("Travel Inquiry - KranbsTour"),
      cta: "Send An Email",
      color: "bg-mint/30 border-mint/60 text-royal",
      iconBg: "bg-mint-deep text-paper",
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Connect with us for quick questions and instant updates.",
      value: contactConfig.whatsappDisplay,
      subvalue: "Available daily for fast messages",
      href: getWhatsAppUrl(),
      cta: "Chat on WhatsApp",
      color: "bg-emerald-50 border-emerald-200 text-royal",
      iconBg: "bg-emerald-600 text-paper",
    },
    {
      id: "location",
      icon: MapPin,
      title: "Our Location",
      description: "Headquartered in Agra at the doorstep of the Taj Mahal.",
      value: contactConfig.address.formatted,
      subvalue: "Operating across Agra, Delhi & Jaipur",
      href: "#office-location",
      cta: "View Location Info",
      color: "bg-peach/20 border-peach/50 text-royal",
      iconBg: "bg-saffron text-paper",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-paper">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3.5 py-1 text-xs text-saffron-deep">
            <Sparkles className="h-3.5 w-3.5" /> Reach Out Anytime
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-royal sm:text-4xl">
            How Can We Help You?
          </h2>
          <p className="mt-2 text-base text-foreground/75">
            Choose the contact channel that fits you best. Our team is always ready to assist.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`group flex flex-col justify-between rounded-[2rem] border p-6 sm:p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-photo ${card.color}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl shadow-xs ${card.iconBg}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[0.7rem] uppercase font-bold tracking-wider text-royal/60">
                      KranbsTour
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-royal">{card.title}</h3>
                  <p className="mt-1.5 text-xs text-foreground/75 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="mt-4 rounded-2xl bg-paper/90 p-3 border border-royal/5">
                    <p className="font-display text-xs sm:text-sm font-bold text-royal truncate">
                      {card.value}
                    </p>
                    <p className="mt-0.5 text-[0.68rem] text-muted-foreground">{card.subvalue}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-royal/10 pt-4">
                  <a
                    href={card.href}
                    target={card.id === "whatsapp" ? "_blank" : undefined}
                    rel={card.id === "whatsapp" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-royal transition-all group-hover:gap-2.5 group-hover:text-saffron-deep"
                  >
                    <span>{card.cta}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
