import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { PartnerWith } from "@/components/site/PartnerWith";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Destinations } from "@/components/site/Destinations";
import { Marquee } from "@/components/site/Marquee";
import { CityTours } from "@/components/site/CityTours";
import { GoldenTriangle } from "@/components/site/GoldenTriangle";
import { WhyChoose } from "@/components/site/WhyChoose";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { SiteFooter } from "@/components/site/SiteFooter";

// ISR: Cache and revalidate every 1 hour (Option B)
export const revalidate = 3600;

export const metadata = {
  title: "KranbsTour — Private Tours to Agra, Delhi & Jaipur | Golden Triangle India",
  description:
    "Colourful, private journeys to the Taj Mahal, historic Delhi and royal Jaipur. Hand-crafted tour packages with licensed guides, luxury AC vehicles, and transparent pricing.",
  openGraph: {
    title: "KranbsTour — Private Tours to Agra, Delhi & Jaipur | Golden Triangle India",
    description:
      "Explore India's Golden Triangle: Agra, Delhi, and Jaipur. Tailor-made private day trips and multi-day tours with 5-star hospitality.",
    url: "https://kranbstour.com",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "KranbsTour",
    url: "https://kranbstour.com",
    logo: "https://kranbstour.com/kranbstour-logo.png",
    image: "https://kranbstour.com/partners/trip.avif",
    description:
      "Premier private tour operator in India specializing in Taj Mahal, Agra, Delhi, and Jaipur luxury guided tours.",
    telephone: "+91-9876543210",
    email: "contact@kranbstour.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1480",
    },
    sameAs: [
      "https://facebook.com/kranbstour",
      "https://instagram.com/kranbstour",
      "https://tripadvisor.com/kranbstour",
    ],
  };

  return (
    <div className="relative">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />

      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <PartnerWith />
        <TrustStrip />
        <Destinations />
        <CityTours />
        <GoldenTriangle />
        <WhyChoose />
        <HowItWorks />
        <Testimonials />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
