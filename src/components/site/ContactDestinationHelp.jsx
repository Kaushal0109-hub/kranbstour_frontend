import Link from "next/link";
import { ArrowRight, Compass, MapPin } from "lucide-react";
import { images } from "@/data/tours";

const destinations = [
  {
    id: "agra",
    city: "Agra",
    tagline: "The City of Love & Timeless Wonder",
    description: "Taj Mahal, Agra Fort, Baby Taj & Mehtab Bagh sunset reflections.",
    href: "/agra-tours",
    image: images.tajGoldenHour,
    landmark: "Taj Mahal",
  },
  {
    id: "delhi",
    city: "Delhi",
    tagline: "India's Historic & Modern Capital",
    description: "Historic monuments, Old Delhi spice markets, Qutub Minar & Mughal tombs.",
    href: "/delhi-tours",
    image: images.indiaGate,
    landmark: "India Gate & Old Delhi",
  },
  {
    id: "jaipur",
    city: "Jaipur",
    tagline: "The Royal Terracotta Pink City",
    description: "Amber Fort, Hawa Mahal, City Palace courtyards & artisan craft guilds.",
    href: "/jaipur-tours",
    image: images.hawaMahal,
    landmark: "Amber Fort & Hawa Mahal",
  },
];

export function ContactDestinationHelp() {
  return (
    <section className="py-16 sm:py-20 bg-ivory/40 border-t border-royal/10">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-1 text-xs text-royal">
            <Compass className="h-3.5 w-3.5 text-saffron" /> Popular Destinations
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-royal sm:text-4xl">
            Planning a Trip to India?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/75">
            Explore our most popular destinations and discover unforgettable experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-royal/10 bg-paper shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-photo"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-mint/20">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 flex items-center gap-1.5 rounded-full bg-paper/95 px-3 py-1 text-xs font-bold text-royal shadow-xs">
                  <MapPin className="h-3.5 w-3.5 text-saffron" /> {dest.landmark}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-2xl font-bold text-royal">{dest.city} Tours</h3>
                <p className="eyebrow text-xs text-saffron-deep font-bold mt-1">{dest.tagline}</p>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/75 flex-1">
                  {dest.description}
                </p>

                <div className="mt-6 border-t border-royal/10 pt-4">
                  <Link
                    href={dest.href}
                    className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold text-royal transition-all group-hover:gap-3 group-hover:text-saffron-deep"
                  >
                    <span>Explore {dest.city} Packages</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
