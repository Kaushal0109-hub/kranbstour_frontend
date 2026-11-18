import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";

export const metadata = {
  title: "Jaipur Tours & Royal Rajasthan Sightseeing | KranbsTour",
  description:
    "Experience the royal charm of Jaipur with private guided tours of Amber Fort, Hawa Mahal, City Palace, Jal Mahal, and colorful heritage textile bazaars.",
  openGraph: {
    title: "Jaipur Tours & Royal Rajasthan Sightseeing | KranbsTour",
    description:
      "Explore the Pink City's hilltop fortresses, Sheesh Mahal, royal courtyards, and artisanal guild quarters with KranbsTour's personalized private packages.",
    url: "https://kranbstour.com/jaipur-tours",
    type: "website",
  },
  alternates: {
    canonical: "/jaipur-tours",
  },
};

export default function JaipurToursPage() {
  return <DestinationPageTemplate destinationKey="jaipur" />;
}
