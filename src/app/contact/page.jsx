import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ContactHero } from "@/components/site/ContactHero";
import { ContactInfoCards } from "@/components/site/ContactInfoCards";
import { ContactFormSection } from "@/components/site/ContactFormSection";
import { ContactWhatsAppBanner } from "@/components/site/ContactWhatsAppBanner";
import { ContactDestinationHelp } from "@/components/site/ContactDestinationHelp";
import { ContactLocationSection } from "@/components/site/ContactLocationSection";
import { ContactFaqSection } from "@/components/site/ContactFaqSection";
import { ContactFinalCta } from "@/components/site/ContactFinalCta";

// ISR: Cache and revalidate every 1 hour (Option B)
export const revalidate = 3600;

export const metadata = {
  title: "Contact Us — KranbsTour | Plan Your Dream Tour to Agra, Delhi & Jaipur",
  description:
    "Have questions, need help choosing a tour, or want to plan a custom trip to the Taj Mahal, Agra, Delhi, or Jaipur? Contact KranbsTour's dedicated travel team today.",
  openGraph: {
    title: "Contact Us — KranbsTour | Plan Your Dream Tour to Agra, Delhi & Jaipur",
    description:
      "Connect with KranbsTour for tailor-made private tours, licensed guides, and seamless journeys across India's Golden Triangle.",
    url: "https://kranbstour.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-paper text-foreground selection:bg-saffron/20 selection:text-royal">
      {/* Global KranbsTour Navigation Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbs} showRoot={false} />

        {/* 1. Travel-Themed Contact Hero */}
        <ContactHero />

        {/* 2. Contact Information Cards */}
        <ContactInfoCards />

        {/* 3. Main Two-Column Contact Form Section */}
        <ContactFormSection />

        {/* 4. Quick WhatsApp Enquiry Banner */}
        <ContactWhatsAppBanner />

        {/* 5. Destination Help Section */}
        <ContactDestinationHelp />

        {/* 6. Office / Operations Location Section */}
        <ContactLocationSection />

        {/* 7. Contact FAQs Accordion */}
        <ContactFaqSection />

        {/* 8. Final Encouraging Call to Action */}
        <ContactFinalCta />
      </main>

      {/* Global Footer */}
      <SiteFooter />
    </div>
  );
}
