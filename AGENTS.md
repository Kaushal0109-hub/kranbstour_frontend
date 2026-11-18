<!-- PROJECT-GUIDELINES:BEGIN -->
- Framework: Next.js (App Router, JavaScript/JSX).
- Homepage is a single editorial page composed from `src/components/site/*` sections; tour/destination content lives in `src/data/tours.js` — why: one source of truth for cards, filters and the details popup.
- Tours are grouped into per-city carousel sections (`CityTours`) and the Golden Triangle section; nav links are hash anchors on `/` (no search params) — why: one scrolling page with direct jumps to each city.
- Logo is rendered through `Logo` using `/kranbstour-logo.png` (ivory plate on dark backgrounds) — why: the logo must never be recolored or redrawn.
- Global styling and tokens are controlled in `src/app/globals.css` with Tailwind CSS (rem scale).
- Scroll parallax uses `useParallax` (`src/hooks/use-parallax.js`, rAF transform, off for reduced motion); entry animations use `Reveal` — why: one performant motion system instead of an external library.
<!-- PROJECT-GUIDELINES:END -->
