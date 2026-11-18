import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { BlogHero } from "@/components/site/BlogHero";
import { FeaturedBlogCard } from "@/components/site/FeaturedBlogCard";
import { BlogListing } from "@/components/site/BlogListing";
import { BlogInspirationBanner } from "@/components/site/BlogInspirationBanner";
import { BlogNewsletter } from "@/components/site/BlogNewsletter";
import { BlogFinalCta } from "@/components/site/BlogFinalCta";
import { getAllArticles, getFeaturedArticle } from "@/data/blog";

export const metadata = {
  title: "Travel Stories, Guides & Insider Tips | KranbsTour India Blog",
  description:
    "Discover authentic destination guides, sunrise photography tips, cultural history, and practical advice for the Taj Mahal, Agra, Delhi, and Jaipur from local historians.",
  openGraph: {
    title: "Travel Stories, Guides & Insider Tips | KranbsTour India Blog",
    description:
      "Your definitive editorial guide to North India's Golden Triangle: Agra, Delhi, and Jaipur.",
    url: "https://kranbstour.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogListingPage() {
  const articles = getAllArticles();
  const featuredArticle = getFeaturedArticle() || articles[0];

  const breadcrumbs = [
    {
      label: "Travel Blog",
      href: "/blog",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-paper text-foreground selection:bg-saffron/20 selection:text-royal">
      {/* Global Navigation Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbs} showRoot={false} />

        {/* 1. Travel Editorial Hero Section */}
        <BlogHero />

        {/* 2. Featured / Editor's Pick Article Banner */}
        {featuredArticle && <FeaturedBlogCard article={featuredArticle} />}

        {/* 3. Main Articles Grid with Filters, Search, and Pagination */}
        <BlogListing initialArticles={articles} />

        {/* 4. Creative Inspiration Promotional Banner */}
        <BlogInspirationBanner />

        {/* 5. Email Travel Dispatch Newsletter */}
        <BlogNewsletter />

        {/* 6. Final Travel Experience CTA */}
        <BlogFinalCta />
      </main>

      {/* Global Footer */}
      <SiteFooter />
    </div>
  );
}
