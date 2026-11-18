import { CalendarHeart, Map, Smile } from "lucide-react";

import { Cloud, PaperPlane } from "./Decor";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Map,
    title: "Explore Our Tours",
    text: "Browse journeys through Agra, Delhi, Jaipur and the Golden Triangle.",
    tone: "bg-mint",
    ring: "ring-mint-deep",
  },
  {
    icon: CalendarHeart,
    title: "Choose Your Experience",
    text: "Pick a tour or tell us your dates and we'll tailor it around you.",
    tone: "bg-peach",
    ring: "ring-saffron",
  },
  {
    icon: Smile,
    title: "Enjoy Your Journey",
    text: "Relax with your private car and local guide — we take care of the rest.",
    tone: "bg-sky",
    ring: "ring-sky-deep",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <Cloud className="pointer-events-none absolute top-20 right-0 w-44 animate-float-slower text-sky" />
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="hand text-3xl text-saffron sm:text-4xl">How it works</p>
          <h2 className="mt-2 text-[2.5rem] leading-[1.02] font-bold sm:text-6xl">
            Your Journey Starts in Three Simple Steps
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting dotted line */}
          <svg
            aria-hidden
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="pointer-events-none absolute top-6 right-[12%] left-[12%] hidden h-28 w-[76%] text-royal/40 md:block"
            fill="none"
          >
            <path
              d="M0 60 C 200 -10, 400 130, 600 60 S 1000 -10, 1200 60"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="4 10"
              strokeLinecap="round"
              className="animate-dash"
            />
          </svg>
          <PaperPlane className="absolute -top-8 right-[8%] hidden h-14 w-20 animate-drift md:block" />

          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 140}>
                <div className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <span
                      className={`grid h-36 w-36 place-items-center rounded-full ${s.tone} ring-8 ring-paper transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6`}
                    >
                      <s.icon className="h-14 w-14 text-royal" strokeWidth={1.6} />
                    </span>
                    <span
                      className={`absolute -top-1 -right-1 grid h-12 w-12 place-items-center rounded-full bg-saffron font-display text-xl font-bold text-paper shadow-saffron ring-4 ring-paper`}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <p className="hand mt-6 text-2xl text-saffron">Step {i + 1}</p>
                  <h3 className="mt-1 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-ink/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
