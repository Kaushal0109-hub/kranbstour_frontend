import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";

export const metadata = {
  title: "Golden Triangle Tour Packages – Delhi, Agra & Jaipur | KranbsTour",
  description:
    "Discover India's iconic Golden Triangle circuit connecting Delhi, Agra, and Jaipur. Tailor-made private journeys ranging from 3 to 6 days with luxury transport and licensed guides.",
  openGraph: {
    title: "Golden Triangle Tour Packages – Delhi, Agra & Jaipur | KranbsTour",
    description:
      "Experience Delhi's heritage, the Taj Mahal in Agra, and Jaipur's royal palaces in one seamless private journey across northern India.",
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
