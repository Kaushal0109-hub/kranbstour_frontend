import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";

// ISR: Cache and revalidate every 1 hour (Option B)
export const revalidate = 3600;

export const metadata = {
  title: "Agra Tours & Taj Mahal Tour Packages | KranbsTour",
  description:
    "Discover Agra and the timeless Taj Mahal with curated sunrise tours, Mughal heritage excursions, and private guided day trips with licensed historians and luxury private transport.",
  openGraph: {
    title: "Agra Tours & Taj Mahal Tour Packages | KranbsTour",
    description:
      "Explore the Taj Mahal at dawn, Agra Fort, Baby Taj, and Mehtab Bagh with KranbsTour's private escorted tour packages.",
    url: "https://kranbstour.com/agra-tours",
    type: "website",
  },
  alternates: {
    canonical: "/agra-tours",
  },
};

export default function AgraToursPage() {
  return <DestinationPageTemplate destinationKey="agra" />;
}
