"use client";

import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Clock, ListOrdered } from "lucide-react";

export function BlogTrendingSidebar({
  trendingArticles = [],
  sections = [],
  activeSectionId = "",
  onScrollToSection = () => {},
}) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Optional Compact Table of Contents if article has multiple sections */}
      {sections && sections.length > 0 && (
        <div className="rounded-2xl border border-royal/10 bg-paper p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-royal/10 text-xs font-bold uppercase tracking-wider text-royal font-display">
            <ListOrdered className="h-4 w-4 text-saffron" />
            <span>Table of Contents</span>
          </div>

          <nav className="mt-3 space-y-1 max-h-56 overflow-y-auto pr-1">
            {sections.map((section, idx) => {
              const isActive = activeSectionId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onScrollToSection(section.id)}
                  className={`w-full text-left flex items-start gap-2 py-1.5 px-2 rounded-lg text-xs leading-snug transition-colors ${
                    isActive
                      ? "bg-saffron/10 text-saffron-deep font-bold border-l-2 border-saffron"
                      : "text-foreground/70 hover:text-royal hover:bg-ivory/60"
                  }`}
                >
                  <span className="text-[11px] font-mono text-royal/40 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="line-clamp-1">{section.heading}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Trending Stories Box */}
      <div className="rounded-2xl border border-royal/10 bg-paper p-5 shadow-xs space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-royal/10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-royal font-display">
            <TrendingUp className="h-4 w-4 text-saffron" />
            <span>Trending Stories</span>
          </div>
          <span className="text-[10px] font-bold text-saffron-deep bg-saffron/10 px-2 py-0.5 rounded-full font-display">
            Popular
          </span>
        </div>

        {/* List of 4-5 Trending Posts */}
        <div className="space-y-3.5 divide-y divide-royal/5">
          {trendingArticles.map((article, idx) => {
            const articleUrl = `/blog/${article.slug}`;
            return (
              <article
                key={article.id || idx}
                className="pt-3.5 first:pt-0 group flex items-start gap-3"
              >
                {/* Thumbnail */}
                <Link
                  href={articleUrl}
                  className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-ivory border border-royal/10"
                >
                  <Image
                    src={article.coverImage}
                    alt={article.coverImageAlt || article.title}
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* Details */}
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/50 uppercase tracking-wider">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5">
                      <Clock className="h-2.5 w-2.5" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h4 className="font-display text-xs sm:text-[13px] font-bold text-royal line-clamp-2 leading-snug group-hover:text-saffron-deep transition-colors">
                    <Link href={articleUrl}>{article.title}</Link>
                  </h4>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Local Travel Help Card */}
      <div className="rounded-2xl border border-royal/10 bg-[#FAF7EE] p-5 space-y-2">
        <p className="font-display font-bold text-royal text-sm">
          Plan Your India Journey
        </p>
        <p className="text-xs text-foreground/75 leading-relaxed font-sans">
          Have questions about Agra, Delhi, or Jaipur? Our local trip designers are here to assist.
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/919876543210?text=Hello%20KranbsTour%20team,%20I%20have%20questions%20about%20a%20tour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-saffron-deep hover:underline font-display"
          >
            Chat with a Specialist →
          </a>
        </div>
      </div>
    </aside>
  );
}
