import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { BlogDetailHeader } from "@/components/site/BlogDetailHeader";
import { BlogCoverImage } from "@/components/site/BlogCoverImage";
import { BlogTableOfContents } from "@/components/site/BlogTableOfContents";
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
  authors,
} from "@/data/blog";

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

        {/* 1. Article Header with title, badges, author row, and social share buttons */}
        <BlogDetailHeader article={article} author={author} />

        {/* 2. Featured Cover Image */}
        <div className="pt-8">
          <BlogCoverImage
            src={article.coverImage}
            alt={article.coverImageAlt}
            caption={article.coverImageAlt}
            destination={article.destination}
          />
        </div>

        {/* 3. Main Reading Grid: Left Article Content (8 cols) + Right Sticky TOC (4 cols) */}
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-12 items-start">
            {/* Primary Article Content Column */}
            <div className="min-w-0">
              {/* Semantic Body with Tips & Blockquotes */}
              <BlogArticleBody sections={article.content} />

              {/* Destination Quick Fact Box */}
              <BlogDestinationBox
                destinationInfo={article.destinationInfo}
                destination={article.destination}
                categorySlug={article.categorySlug}
              />

              {/* Author Bio Box */}
              <BlogAuthorBox author={author} />

              {/* Article-Specific FAQs Accordion */}
              {article.faqs && article.faqs.length > 0 && (
                <BlogFaqAccordion faqs={article.faqs} />
              )}

              {/* Related Tour Packages */}
              <BlogRelatedTours
                relatedTourSlugs={article.relatedTourSlugs}
                destination={article.destination}
              />
            </div>

            {/* Sidebar Column: Sticky Table of Contents */}
            <aside className="w-full lg:order-last">
              <BlogTableOfContents sections={article.content} />
            </aside>
          </div>
        </div>

        {/* 4. More Stories You May Enjoy (3 related articles) */}
        <BlogRelatedArticles currentArticle={article} />

        {/* 5. Newsletter Subscription Dispatch */}
        <BlogNewsletter />

        {/* 6. Final Travel CTA */}
        <BlogFinalCta />
      </main>

      {/* Global Footer */}
      <SiteFooter />
    </div>
  );
}
