import { Car, Compass, Heart, Landmark } from "lucide-react";

import { images } from "@/data/tours";
import { Cloud, LocationBadge, PaperPlane, RingSticker, Squiggle } from "./Decor";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Compass,
    title: "Personalized Travel Experiences",
    text: "Tailored journeys designed around your pace, interests and preferences.",
    tone: "bg-mint",
    icon_tone: "bg-mint-deep",
  },
  {
    icon: Landmark,
    title: "Local Destination Knowledge",
    text: "Guides rooted in Agra, Delhi and Jaipur who share the real stories.",
    tone: "bg-peach",
    icon_tone: "bg-saffron",
  },
  {
    icon: Car,
    title: "Comfortable Journeys",
    text: "Private, air-conditioned travel and smooth, well-planned days.",
    tone: "bg-sky",
    icon_tone: "bg-sky-deep",
  },
  {
    icon: Heart,
    title: "Memorable Adventures",
    text: "Sunrises, bazaars and royal palaces — moments worth remembering.",
    tone: "bg-cream",
    icon_tone: "bg-royal",
  },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden bg-pastel-gradient py-20 sm:py-28">
      <Cloud className="pointer-events-none absolute top-12 left-0 w-40 animate-cloud opacity-90" />
      <div className="mx-auto grid max-w-[88rem] items-center gap-16 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        {/* Photo composition */}
        <Reveal className="relative mx-auto h-[30rem] w-full max-w-[32rem] sm:h-[38rem]">
          <div className="absolute inset-x-[8%] top-[6%] bottom-0 rounded-full bg-paper/60" />
          <figure className="group absolute top-0 left-[6%] h-[86%] w-[62%] overflow-hidden arch border-[6px] border-paper shadow-photo">
            <img
              src={images.amberFort}
              alt="Amber Fort above Maota Lake in Jaipur"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
            />
            <LocationBadge
              city="Jaipur"
              place="Amber Fort"
              className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
            />
          </figure>
          <figure className="group absolute right-0 bottom-0 h-[52%] w-[44%] animate-float-slow overflow-hidden rounded-[2rem] border-[6px] border-paper shadow-photo">
            <img
              src={images.tajMahal}
              alt="The Taj Mahal in Agra"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
            />
          </figure>
          <RingSticker className="absolute top-[8%] right-[6%] w-24 sm:w-28" />
          <PaperPlane className="absolute bottom-[4%] left-[-2%] h-16 w-24 animate-drift" />
        </Reveal>

        <div>
          <Reveal>
            <p className="hand text-3xl text-saffron sm:text-4xl">Why KranbsTour</p>
            <h2 className="mt-2 text-[2.6rem] leading-[1.02] font-bold sm:text-6xl">
              Why Travel With{" "}
              <span className="relative inline-block text-saffron">
                KranbsTour?
                <Squiggle className="absolute -bottom-2 left-0 h-3 w-full" />
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              We are a team of travel enthusiasts rooted in Agra, Delhi and Jaipur, sharing the
              stories, flavours and wonders of our home with travellers from around the world.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 90}>
                <div
                  className={`group h-full rounded-[2rem] ${f.tone} p-6 ring-1 ring-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift`}
                >
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-full ${f.icon_tone} text-paper shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}
                  >
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl leading-tight font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
