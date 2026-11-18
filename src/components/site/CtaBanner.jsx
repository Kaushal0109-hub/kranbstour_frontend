import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

import airplaneImg from "@/assets/hero-airplane.png";
import { images } from "@/data/tours";
import { Cloud, LetsGoSticker } from "./Decor";
import { Reveal } from "./Reveal";

const airplane = airplaneImg?.src || airplaneImg;

const photos = [
  {
    src: images.tajGoldenHour,
    alt: "Taj Mahal, Agra",
    city: "Agra",
    cls: "left-0 top-[12%] h-[70%] w-[30%] -rotate-6",
  },
  {
    src: images.redFort,
    alt: "Red Fort, Delhi",
    city: "Delhi",
    cls: "left-[34%] top-0 h-[82%] w-[32%] rotate-2",
  },
  {
    src: images.hawaMahal,
    alt: "Hawa Mahal, Jaipur",
    city: "Jaipur",
    cls: "right-0 top-[18%] h-[70%] w-[30%] rotate-6",
  },
];

export function CtaBanner() {
  return (
    <section id="plan" className="relative bg-paper px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <Reveal className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[3rem] bg-royal px-6 py-16 text-ivory sm:px-12 sm:py-20 lg:px-16">
        {/* Curved shapes */}
        <div className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full bg-saffron" />
        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full border-[48px] border-royal-soft" />
        <div className="pointer-events-none absolute inset-0 bg-dots text-ivory/25" />
        <Cloud className="pointer-events-none absolute bottom-6 left-0 w-40 animate-cloud text-paper/15" />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="hand text-3xl text-saffron sm:text-4xl">Pack your bags!</p>
            <h2 className="mt-3 text-[2.7rem] leading-[1] font-bold text-ivory sm:text-6xl xl:text-7xl">
              Ready for Your Next <span className="text-saffron">Adventure?</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/80">
              Discover Agra, Delhi, and Jaipur with unforgettable experiences from KranbsTour.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#packages"
                className="btn-shine group inline-flex h-16 items-center gap-4 rounded-full bg-saffron py-2 pr-2 pl-8 font-display text-lg font-semibold text-paper shadow-saffron transition-all hover:-translate-y-0.5 hover:bg-saffron-deep"
              >
                Start Exploring
                <span className="grid h-12 w-12 place-items-center rounded-full bg-paper text-saffron transition-transform group-hover:rotate-[-45deg]">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              <div className="flex flex-col gap-1.5 text-sm text-ivory/80">
                <a
                  href="mailto:hello@kranbstour.com"
                  className="flex items-center gap-2 hover:text-saffron"
                >
                  <Mail className="h-4 w-4 text-saffron" /> hello@kranbstour.com
                </a>
                <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-saffron">
                  <Phone className="h-4 w-4 text-saffron" /> +91 00000 00000
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-[22rem] sm:h-[28rem]">
            {photos.map((p, i) => (
              <figure
                key={p.city}
                className={`group absolute overflow-hidden arch border-4 border-paper shadow-photo transition-transform duration-700 hover:rotate-0 ${p.cls} ${i === 1 ? "animate-float-slow" : "animate-float-slower"}`}
                style={{ animationDelay: `${i * -2}s` }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-paper px-3 py-1 font-display text-sm font-bold text-royal">
                  {p.city}
                </span>
              </figure>
            ))}
            <img
              src={airplane}
              alt=""
              aria-hidden
              width={1100}
              height={358}
              loading="lazy"
              className="pointer-events-none absolute bottom-[2%] left-[10%] w-[60%] animate-fly"
            />
            <LetsGoSticker className="absolute -top-4 right-[30%] w-20 animate-wiggle text-[0.8rem] sm:w-24 sm:text-[0.95rem]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
