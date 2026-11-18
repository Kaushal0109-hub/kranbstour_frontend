import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { images } from "@/data/tours";

const destinationCardData = [
  {
    id: "agra",
    title: "Agra Tours",
    subtitle: "The City of Love & Taj Mahal",
    description:
      "Marvel at the Taj Mahal at dawn, wander through majestic Mughal fortresses, and discover exquisite riverside marble tombs.",
    href: "/agra-tours",
    image: images.tajGoldenHour,
  },
  {
    id: "delhi",
    title: "Delhi Tours",
    subtitle: "India's Historic & Modern Capital",
    description:
      "Explore medieval spice markets, Mughal bastions, towering ancient minarets, and grand British colonial boulevards.",
    href: "/delhi-tours",
    image: images.indiaGate,
  },
  {
    id: "jaipur",
    title: "Jaipur Tours",
    subtitle: "The Royal Terracotta Pink City",
    description:
      "Ascend hilltop Rajput fortresses, marvel at the honeycombed Palace of Winds, and wander royal courtyards.",
    href: "/jaipur-tours",
    image: images.hawaMahal,
  },
  {
    id: "golden-triangle",
    title: "Golden Triangle Tours",
    subtitle: "Delhi ✦ Agra ✦ Jaipur Combined",
    description:
      "Experience India's most celebrated travel corridor in one seamless private journey across three iconic royal cities.",
    href: "/golden-triangle-tours",
    image: images.tajArchway,
  },
];

export function RelatedDestinations({ currentId }) {
  const related = destinationCardData.filter((d) => d.id !== currentId);

  return (
    <section className="py-16 sm:py-24 bg-ivory/50 border-t border-royal/10">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-1 text-xs text-royal">
            <Compass className="h-3.5 w-3.5 text-saffron" /> More Iconic Journeys
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-royal sm:text-4xl">
            Explore Other Destinations
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/75">
            Discover our other curated tours across northern India's celebrated heritage trail.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {related.map((dest) => (
            <div
              key={dest.id}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-royal/10 bg-paper shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-photo"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-mint/20">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-paper/95 px-3 py-1 text-xs font-bold text-royal">
                  {dest.subtitle}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold text-royal">{dest.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-foreground/75 flex-1">
                  {dest.description}
                </p>

                <div className="mt-6 border-t border-royal/10 pt-4">
                  <Link
                    href={dest.href}
                    className="inline-flex items-center gap-2 font-display text-sm font-bold text-saffron-deep transition-all group-hover:gap-3 group-hover:text-royal"
                  >
                    View Packages <ArrowRight className="h-4 w-4" />
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
