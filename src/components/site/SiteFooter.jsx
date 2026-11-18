import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

import { Cloud, PaperPlane } from "./Decor";
import { Logo } from "./Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Tour Packages", href: "/#packages" },
  { label: "How It Works", href: "/#how" },
  { label: "Why KranbsTour", href: "/#why" },
  { label: "Travel Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const tourLinks = [
  { label: "Agra Tours", href: "/agra-tours" },
  { label: "Delhi Tours", href: "/delhi-tours" },
  { label: "Jaipur Tours", href: "/jaipur-tours" },
  { label: "Golden Triangle Tours", href: "/golden-triangle-tours" },
];

const socials = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "YouTube", icon: Youtube },
  { label: "X (Twitter)", icon: Twitter },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-royal text-ivory">
      {/* Curved top edge */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full text-paper sm:h-20"
      >
        <path d="M0 0 H1440 V20 C 1100 90, 760 0, 480 50 S 120 60, 0 30 Z" fill="currentColor" />
      </svg>
      <Cloud className="pointer-events-none absolute top-24 left-0 w-40 animate-cloud-slow text-paper/10" />
      <PaperPlane className="pointer-events-none absolute top-20 right-[8%] h-16 w-24 animate-drift text-ivory/50" />

      <div className="relative mx-auto max-w-[88rem] px-4 pt-12 pb-10 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" aria-label="KranbsTour home" className="inline-block">
              <Logo plate imgClassName="h-12" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
              KranbsTour crafts private journeys through Agra, Delhi and Jaipur — India&apos;s Golden
              Triangle — with trusted local experts and genuine hospitality.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#contact"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-paper/10 text-ivory transition-all duration-300 hover:-translate-y-1 hover:bg-saffron hover:text-paper"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-saffron">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href || `/#${l.hash}`}
                    className="text-sm text-ivory/75 transition-all hover:pl-1 hover:text-saffron"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-saffron">Our Tours</h3>
            <ul className="mt-5 space-y-3">
              {tourLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href || `/#${l.hash}`}
                    className="text-sm text-ivory/75 transition-all hover:pl-1 hover:text-saffron"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-saffron">Contact Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-ivory/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                Taj Ganj, Agra, Uttar Pradesh, India
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                <a href="tel:+910000000000" className="hover:text-saffron">
                  +91 00000 00000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                <a href="mailto:hello@kranbstour.com" className="hover:text-saffron">
                  hello@kranbstour.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KranbsTour. All rights reserved.</p>
          <p className="hand text-xl text-saffron">Agra ✦ Delhi ✦ Jaipur</p>
        </div>
      </div>
    </footer>
  );
}
