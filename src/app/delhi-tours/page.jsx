import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";

export const metadata = {
  title: "Delhi Tours & Sightseeing Packages | KranbsTour",
  description:
    "Explore Delhi's historic monuments, bustling Old Delhi spice bazaars, UNESCO garden tombs, and grand New Delhi avenues with KranbsTour's private escorted tours.",
  openGraph: {
    title: "Delhi Tours & Sightseeing Packages | KranbsTour",
    description:
      "Curated guided tours of Old & New Delhi, Humayun's Tomb, Qutub Minar, and Chandni Chowk rickshaw excursions with private AC vehicles and expert storytellers.",
    url: "https://kranbstour.com/delhi-tours",
    type: "website",
  },
  alternates: {
    canonical: "/delhi-tours",
  },
};

export default function DelhiToursPage() {
  return <DestinationPageTemplate destinationKey="delhi" />;
}
