import { Clock, Compass, ExternalLink, MapPin, Navigation, Phone, ShieldCheck } from "lucide-react";
import { contactConfig } from "@/data/contact-info";

export function ContactLocationSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contactConfig.address.formatted
  )}`;

  return (
    <section id="office-location" className="py-16 sm:py-20 bg-paper border-t border-royal/10">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3.5 py-1 text-xs text-saffron-deep">
            <MapPin className="h-3.5 w-3.5" /> Our Base in Agra
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-royal sm:text-4xl">
            Find Us Here
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/75">
            Conveniently situated in Taj Ganj, minutes from the East Gate of the Taj Mahal.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-royal/10 bg-ivory/50 p-6 sm:p-10 shadow-soft">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            {/* Address & Hours */}
            <div className="space-y-6">
              <div>
                <span className="eyebrow text-xs text-saffron-deep font-bold">Registered Office</span>
                <h3 className="font-display text-2xl font-bold text-royal mt-1">
                  KranbsTour Travel Desk
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85 font-medium">
                  {contactConfig.address.street}
                  <br />
                  {contactConfig.address.city}, {contactConfig.address.state}{" "}
                  {contactConfig.address.postalCode}
                  <br />
                  {contactConfig.address.country}
                </p>
              </div>

              <div className="rounded-2xl bg-paper p-4 border border-royal/10 space-y-2">
                <div className="flex items-start gap-2.5 text-xs text-foreground/80">
                  <Clock className="h-4 w-4 shrink-0 text-saffron mt-0.5" />
                  <div>
                    <strong className="block text-royal font-bold">Operating Hours</strong>
                    <span>{contactConfig.operatingHours.weekdays}</span>
                    <br />
                    <span>{contactConfig.operatingHours.sunday}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-foreground/80 pt-2 border-t border-royal/5">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-mint-deep mt-0.5" />
                  <div>
                    <strong className="block text-royal font-bold">Tour Operations</strong>
                    <span>{contactConfig.operatingHours.support}</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-2.5 font-display text-xs font-bold text-ivory transition-colors hover:bg-saffron hover:text-paper shadow-sm"
                >
                  <Navigation className="h-3.5 w-3.5 text-saffron" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </div>
            </div>

            {/* Hub Details & Coverage Area */}
            <div className="rounded-3xl border border-royal/10 bg-paper p-6 sm:p-7 shadow-xs space-y-4">
              <h4 className="font-display text-lg font-bold text-royal flex items-center gap-2">
                <Compass className="h-4 w-4 text-saffron" />
                Service Coverage Area
              </h4>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                While our main office is located in historic Agra, KranbsTour operates dedicated
                private chauffeurs, airport pickup fleets, and certified local guides across:
              </p>

              <ul className="space-y-2 text-xs font-medium text-royal">
                <li className="flex items-center gap-2 rounded-xl bg-ivory p-2.5">
                  <span className="h-2 w-2 rounded-full bg-saffron" />
                  <strong>Agra:</strong> Taj Ganj, Cantt Railway Station & all hotels
                </li>
                <li className="flex items-center gap-2 rounded-xl bg-ivory p-2.5">
                  <span className="h-2 w-2 rounded-full bg-saffron" />
                  <strong>Delhi NCR:</strong> IGI Airport (DEL), Central, South Delhi, Noida & Gurgaon
                </li>
                <li className="flex items-center gap-2 rounded-xl bg-ivory p-2.5">
                  <span className="h-2 w-2 rounded-full bg-saffron" />
                  <strong>Jaipur:</strong> Jaipur Airport (JAI), Station & Pink City heritage stays
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
