import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { TourDetailHeader } from "@/components/site/TourDetailHeader";
import { TourGallery } from "@/components/site/TourGallery";
import { StickyBookingCard } from "@/components/site/StickyBookingCard";
import { TourAbout } from "@/components/site/TourAbout";
import { TourHighlights } from "@/components/site/TourHighlights";
import { TourItinerary } from "@/components/site/TourItinerary";
import { TourMapLocation } from "@/components/site/TourMapLocation";
import { TourInclusions } from "@/components/site/TourInclusions";
import { TourImportantInfo } from "@/components/site/TourImportantInfo";
import { TourFaqAccordion } from "@/components/site/TourFaqAccordion";
import { TourReviews } from "@/components/site/TourReviews";
import { RelatedToursSection } from "@/components/site/RelatedToursSection";
import { TourFinalCta } from "@/components/site/TourFinalCta";

import {
  getAllTourSlugs,
  getRelatedTours,
  getTourBySlug,
} from "@/data/tours";

export async function generateStaticParams() {
  const slugs = getAllTourSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour Not Found | KranbsTour",
      description: "The requested tour package could not be found.",
    };
  }

  const title = `${tour.title} | KranbsTour`;
  const description =
    tour.summary ||
    tour.overview ||
    `Book ${tour.title} with KranbsTour. Licensed guides, private AC transport, and transparent pricing.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://kranbstour.com/tours/${tour.slug}`,
      type: "website",
      images: [
        {
          url: tour.image,
          width: 1200,
          height: 630,
          alt: tour.imageAlt || tour.title,
        },
      ],
    },
    alternates: {
      canonical: `/tours/${tour.slug}`,
    },
  };
}

export default async function TourDetailPage({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const relatedTours = getRelatedTours(tour, 3);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-foreground selection:bg-saffron/20 selection:text-royal">
      {/* Global Site Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Title, Breadcrumb & Key Information Bar */}
        <TourDetailHeader tour={tour} />

        {/* 5-Photo Image Gallery & Fullscreen Lightbox */}
        <TourGallery gallery={tour.gallery} tourTitle={tour.title} />

        {/* Two-Column Layout: Main Content (Left) & Sticky Booking Card (Right) */}
        <section className="py-10 sm:py-14 bg-paper">
          <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] items-start">
              {/* Left Column: Comprehensive Tour Content */}
              <div className="space-y-10 min-w-0">
                {/* About This Tour */}
                <TourAbout tour={tour} />

                {/* Tour Highlights */}
                <TourHighlights highlights={tour.highlights} />

                {/* Tour Itinerary */}
                <TourItinerary itinerary={tour.itinerary} tourTitle={tour.title} />

                {/* Map & Location */}
                <TourMapLocation tour={tour} />

                {/* Inclusions & Exclusions */}
                <TourInclusions
                  inclusions={tour.inclusions}
                  exclusions={tour.exclusions}
                />

                {/* Important Information Before You Travel */}
                <TourImportantInfo importantInfo={tour.importantInformation} />

                {/* Tour Specific FAQs */}
                <TourFaqAccordion faqs={tour.faqs} />

                {/* Reviews */}
                <TourReviews
                  reviews={tour.reviews}
                  rating={tour.rating}
                  reviewCount={tour.reviewCount}
                />
              </div>

              {/* Right Column: Sticky Booking Card */}
              <div className="relative">
                <StickyBookingCard tour={tour} />
              </div>
            </div>
          </div>
        </section>

        {/* Related Tours ("You May Also Like") */}
        <RelatedToursSection relatedTours={relatedTours} />

        {/* Final Conversion CTA */}
        <TourFinalCta tour={tour} />
      </main>

      {/* Global Site Footer */}
      <SiteFooter />
    </div>
  );
}
