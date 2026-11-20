import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";

// ISR: Cache and revalidate every 1 hour (Option B)
export const revalidate = 3600;

export const metadata = {
  title: "Jaipur Tours & Pink City Sightseeing Packages | KranbsTour",
  description:
    "Immerse yourself in Rajasthan's royal heritage with guided tours to Amber Fort, City Palace, Hawa Mahal, and traditional bazaar walking trails in Jaipur.",
  openGraph: {
    title: "Jaipur Tours & Pink City Sightseeing Packages | KranbsTour",
    description:
      "Experience the Pink City with private guided day tours, luxury AC transfers, and insider access to royal Rajasthani monuments.",
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
