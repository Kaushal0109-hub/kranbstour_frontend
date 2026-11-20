import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";

// ISR: Cache and revalidate every 1 hour (Option B)
export const revalidate = 3600;

export const metadata = {
  title: "Golden Triangle Tour Packages (Delhi, Agra, Jaipur) | KranbsTour",
  description:
    "Book complete multi-day Golden Triangle tours combining Delhi, Agra, and Jaipur. 3-day, 4-day, and 5-day itineraries with private chauffeurs and handpicked luxury hotels.",
  openGraph: {
    title: "Golden Triangle Tour Packages (Delhi, Agra, Jaipur) | KranbsTour",
    description:
      "Experience India's most celebrated heritage circuit with KranbsTour's bespoke Golden Triangle private itineraries.",
    url: "https://kranbstour.com/golden-triangle-tours",
    type: "website",
  },
  alternates: {
    canonical: "/golden-triangle-tours",
  },
};

export default function GoldenTriangleToursPage() {
  return <DestinationPageTemplate destinationKey="golden-triangle" />;
}
