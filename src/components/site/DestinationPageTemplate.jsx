import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Breadcrumb } from "./Breadcrumb";
import { DestinationHero } from "./DestinationHero";
import { DestinationListing } from "./DestinationListing";
import { DestinationGuide } from "./DestinationGuide";
import { FaqAccordion } from "./FaqAccordion";
import { RelatedDestinations } from "./RelatedDestinations";
import { DestinationCtaBanner } from "./DestinationCtaBanner";
import { destinationGuides } from "@/data/destination-guides";
import { packages } from "@/data/tours";

export function DestinationPageTemplate({ destinationKey }) {
  const guideData = destinationGuides[destinationKey];

  if (!guideData) {
    return null;
  }

  // Filter packages for this specific destination
  const destinationPackages = packages.filter(
    (pkg) => pkg.category === destinationKey
  );

  const isGoldenTriangle = destinationKey === "golden-triangle";

  const breadcrumbItems = [
    {
      label: `${guideData.city} Tours`,
      href: `/${guideData.slug}`,
    },
  ];

  // Schema.org structured data for TouristDestination & ItemList (tours)
  const jsonLdDestination = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: `${guideData.city}, India`,
    description: guideData.heroDescription,
    url: `https://kranbstour.com/${guideData.slug}`,
    touristType: ["Cultural Tourism", "Heritage Tourism", "Private Sightseeing"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${guideData.city} Tour Packages`,
      itemListElement: destinationPackages.map((pkg, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: pkg.title,
          description: pkg.summary || pkg.overview,
          url: `https://kranbstour.com/tours/${pkg.slug}`,
        },
        price: String(pkg.price || "45").replace(/[^0-9]/g, "") || "45",
        priceCurrency: "USD",
        position: idx + 1,
      })),
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper text-foreground selection:bg-saffron/20 selection:text-royal">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDestination) }}
      />

      {/* KranbsTour Global Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Compact Internal Hero */}
        <DestinationHero
          eyebrow={guideData.eyebrow}
          title={guideData.heroTitle}
          handwriting={guideData.heroHandwriting}
          description={guideData.heroDescription}
          heroImage={guideData.heroImage}
          heroImageAlt={guideData.heroImageAlt}
          isGoldenTriangle={isGoldenTriangle}
          packageCount={destinationPackages.length}
        />

        {/* Interactive Tour Package Listing Section */}
        <DestinationListing
          tours={destinationPackages}
          heading={guideData.listHeading}
          intro={guideData.listIntro}
        />

        {/* Comprehensive Destination Travel Guide */}
        <DestinationGuide
          guide={guideData.guide}
          isGoldenTriangle={isGoldenTriangle}
        />

        
        {/* Conversion CTA Banner */}
        <DestinationCtaBanner destinationName={guideData.city} />

        {/* Related Destinations */}
        <RelatedDestinations currentId={destinationKey} />

        {/* Frequently Asked Questions */}
        <FaqAccordion
          faqs={guideData.faqs}
          destinationName={guideData.city}
        />
      </main>

      {/* KranbsTour Global Footer */}
      <SiteFooter />
    </div>
  );
}
