const words = ["Agra", "Delhi", "Jaipur", "Golden Triangle"];

/** Saffron strip of destination names right after the hero. */
export function Marquee() {
  const row = [...words, ...words, ...words, ...words];
  return (
    <div aria-hidden className="relative z-10 -my-px overflow-hidden bg-saffron py-4 text-royal sm:py-5">
      <div className="flex w-max animate-marquee items-center">
        {row.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-xl font-bold tracking-wide uppercase sm:px-9 sm:text-2xl">
              {w}
            </span>
            <span className="text-2xl text-paper sm:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
