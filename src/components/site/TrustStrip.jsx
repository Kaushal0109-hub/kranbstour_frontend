import { Car, Compass, Headset, Landmark } from "lucide-react";

import { Reveal } from "./Reveal";

const indicators = [
  {
    icon: Compass,
    title: "Personalized Tours",
    text: "Plans shaped around you",
    tone: "bg-mint text-mint-deep",
  },
  {
    icon: Landmark,
    title: "Local Experiences",
    text: "Guides who call these cities home",
    tone: "bg-peach text-saffron-deep",
  },
  {
    icon: Car,
    title: "Comfortable Travel",
    text: "Private, air-conditioned rides",
    tone: "bg-sky text-sky-deep",
  },
  {
    icon: Headset,
    title: "Dedicated Assistance",
    text: "Help before and during your trip",
    tone: "bg-cream text-royal",
  },
];

/** "Travel With Confidence" — neutral trust indicators (no invented partners or stats). */
export function TrustStrip() {
  return (
    <section aria-labelledby="trust-heading" className="relative bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[0.9fr_2fr]">
          <div>
            <p className="hand text-3xl text-saffron">Why people book with us</p>
            <h2 id="trust-heading" className="mt-2 text-4xl font-bold sm:text-5xl">
              Travel With Confidence
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Reliable, thoughtfully planned journeys through Agra, Delhi and Jaipur — so you can
              simply enjoy every moment.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {indicators.map((item, i) => (
              <li
                key={item.title}
                className="group rounded-[1.75rem] border border-border bg-paper p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-lift"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${item.tone} transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110`}
                >
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
