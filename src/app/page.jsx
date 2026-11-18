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

export default function HomePage() {
  return (
    <div className="relative">
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
