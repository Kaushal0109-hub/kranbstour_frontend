import { Plane } from "lucide-react";

import { cn } from "@/lib/utils";

/** Puffy illustrated cloud. Colour follows `currentColor`. */
export function Cloud({ className }) {
  return (
    <svg aria-hidden viewBox="0 0 200 100" className={cn("text-paper", className)}>
      <g fill="currentColor">
        <circle cx="58" cy="62" r="32" />
        <circle cx="102" cy="46" r="42" />
        <circle cx="146" cy="62" r="30" />
        <rect x="30" y="58" width="146" height="36" rx="18" />
      </g>
    </svg>
  );
}

/** Outline paper airplane with a dotted trail. */
export function PaperPlane({ className }) {
  return (
    <svg aria-hidden viewBox="0 0 160 120" fill="none" className={cn("text-royal", className)}>
      <path
        d="M8 112 C 30 80, 70 100, 82 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 7"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M88 58 L152 14 L118 86 L106 66 Z"
        className="fill-paper"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M106 66 L152 14 L96 54 Z"
        className="fill-mint"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M106 66 L104 82 L116 74"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Round "Let's Go!" travel sticker. */
export function LetsGoSticker({ className }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative grid aspect-square place-items-center rounded-full bg-paper shadow-lift",
        className,
      )}
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full text-saffron">
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="60"
            y1="-2"
            x2="60"
            y2="6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${i * 45 + 22} 60 60)`}
          />
        ))}
      </svg>
      <span className="hand -rotate-6 text-center text-[1.9em] leading-[0.8] text-saffron">
        Let&apos;s
        <br />
        Go!
      </span>
    </div>
  );
}

/** Slowly spinning circular badge with destination names. */
export function RingSticker({
  className,
  text = "AGRA • DELHI • JAIPUR • GOLDEN TRIANGLE • ",
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative grid aspect-square place-items-center rounded-full bg-royal text-ivory shadow-lift",
        className,
      )}
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="ring-path" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
        </defs>
        <text className="fill-current font-sans text-[10.5px] font-bold tracking-[0.18em]">
          <textPath href="#ring-path">{text}</textPath>
        </text>
      </svg>
      <span className="grid h-[42%] w-[42%] place-items-center rounded-full bg-saffron text-paper">
        <Plane className="h-1/2 w-1/2 -rotate-45" />
      </span>
    </div>
  );
}

/** Hand-drawn squiggle underline. */
export function Squiggle({ className }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 24"
      preserveAspectRatio="none"
      fill="none"
      className={cn("text-saffron", className)}
    >
      <path
        d="M3 15 C 30 3, 50 23, 78 12 S 128 3, 152 13 S 200 20, 217 8"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small location pin badge used on photo cards. */
export function LocationBadge({ city, place, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-paper/95 py-1.5 pr-3.5 pl-1.5 text-royal shadow-soft backdrop-blur",
        className,
      )}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-saffron text-paper">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
          <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
        </svg>
      </span>
      <span className="font-display text-sm leading-tight font-semibold">
        {city}
        {place && (
          <span className="block text-[0.78rem] font-medium text-muted-foreground">{place}</span>
        )}
      </span>
    </span>
  );
}
