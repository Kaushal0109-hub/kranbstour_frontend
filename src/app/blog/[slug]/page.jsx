import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { BlogDetailHeader } from "@/components/site/BlogDetailHeader";
import { BlogCoverImage } from "@/components/site/BlogCoverImage";
import { BlogAuthorShareBar } from "@/components/site/BlogAuthorShareBar";
import { BlogTrendingSidebar } from "@/components/site/BlogTrendingSidebar";
import { BlogArticleBody } from "@/components/site/BlogArticleBody";
import { BlogDestinationBox } from "@/components/site/BlogDestinationBox";
import { BlogAuthorBox } from "@/components/site/BlogAuthorBox";
import { BlogFaqAccordion } from "@/components/site/BlogFaqAccordion";
import { BlogRelatedTours } from "@/components/site/BlogRelatedTours";
import { BlogRelatedArticles } from "@/components/site/BlogRelatedArticles";
import { BlogNewsletter } from "@/components/site/BlogNewsletter";
import { BlogFinalCta } from "@/components/site/BlogFinalCta";

import {
  getAllArticleSlugs,
  getArticleBySlug,
  getTrendingArticles,
  authors,
} from "@/data/blog";

// ISR: Cache and revalidate every 1 hour (Option B)
export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | KranbsTour Travel Blog",
      description: "The requested travel story could not be found.",
    };
  }

  const title = article.seoTitle || `${article.title} | KranbsTour Blog`;
  const description = article.seoDescription || article.excerpt;
  const author = authors[article.authorId];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: article.publishedAt,
      authors: author?.name ? [author.name] : ["KranbsTour"],
      tags: article.tags || [],
      url: `https://kranbstour.com/blog/${article.slug}`,
      images: [
        {
          url: article.coverImage,
          alt: article.coverImageAlt || article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.coverImage],
    },
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const author = authors[article.authorId] || {
    name: "KranbsTour Editorial Team",
    role: "Local Heritage Guides & Historians",
    avatar: "/avatars/avatar-1.jpg",
    bio: "Official editorial desk of KranbsTour, sharing verified monument advice and itinerary guides.",
  };

  const trendingArticles = getTrendingArticles(article.slug, 5);

  const breadcrumbs = [
    {
      label: article.category,
      href: `/blog?category=${article.categorySlug || "all"}`,
    },
    {
      label: article.title,
    },
  ];

  // Structured Data (JSON-LD)
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [typeof article.coverImage === "string" ? article.coverImage : ""],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "KranbsTour",
      logo: {
        "@type": "ImageObject",
        url: "https://kranbstour.com/kranbstour-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kranbstour.com/blog/${article.slug}`,
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kranbstour.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Travel Blog",
        item: "https://kranbstour.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.category,
        item: `https://kranbstour.com/blog?category=${article.categorySlug || "all"}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: article.title,
        item: `https://kranbstour.com/blog/${article.slug}`,
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper text-foreground selection:bg-saffron/20 selection:text-royal">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Global Navigation Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={breadcrumbs}
          rootLabel="Blog"
          rootHref="/blog"
          showRoot={true}
        />

        {/* 1. Article Header: Eyebrow Category, Title & Subtitle */}
        <BlogDetailHeader article={article} />

        {/* 2. Responsive 16:9 Cover Image */}
        <BlogCoverImage
          src={article.coverImage}
          alt={article.coverImageAlt}
          caption={article.coverImageAlt}
          destination={article.destination}
        />

        {/* 3. Rajesh Sharma Author Byline & Social Share Controls (Directly below Image) */}
        <BlogAuthorShareBar article={article} author={author} />

        {/* 4. Two-Column Layout: Left (70% Article Column) + Right (30% Sticky Trending Stories) */}
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-start">
            {/* Left Column: Main Article Body & Editorial Flow */}
            <div className="min-w-0 max-w-[800px]">
              {/* Article Content: Headings (26-28px), Body (16-17px), Inline Photos, Tips, Quotes */}
              <BlogArticleBody
                sections={article.content}
                destination={article.destination}
              />

              {/* Destination Essentials Snapshot */}
              <BlogDestinationBox
                destinationInfo={article.destinationInfo}
                destination={article.destination}
                categorySlug={article.categorySlug}
              />

              {/* Compact Author Byline */}
              <BlogAuthorBox author={author} />

              {/* Compact FAQs */}
              {article.faqs && article.faqs.length > 0 && (
                <BlogFaqAccordion faqs={article.faqs} />
              )}

              {/* Related Tour Packages (2-3 compact cards) */}
              <BlogRelatedTours
                relatedTourSlugs={article.relatedTourSlugs}
                destination={article.destination}
              />
            </div>

            {/* Right Column: Sticky Trending Stories Sidebar (30% width) */}
            <div className="w-full">
              <BlogTrendingSidebar
                trendingArticles={trendingArticles}
                sections={article.content}
              />
            </div>
          </div>
        </div>

        {/* 5. More Stories You May Enjoy (3 compact cards) */}
        <BlogRelatedArticles currentArticle={article} />

        {/* 6. Newsletter Subscription Dispatch */}
        <BlogNewsletter />

        {/* 7. Final Travel Experience CTA */}
        <BlogFinalCta />
      </main>

      {/* Global Footer */}
      <SiteFooter />
    </div>
  );
}
