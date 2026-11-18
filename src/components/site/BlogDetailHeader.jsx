"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Check,
  Copy,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export function BlogDetailHeader({ article, author }) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  if (!article) return null;

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://kranbstour.com/blog/${article.slug}`;

  const shareText = encodeURIComponent(`${article.title} | KranbsTour`);
  const encodedUrl = encodeURIComponent(currentUrl);

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <header className="py-8 sm:py-12 bg-pastel-gradient border-b border-royal/10">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Category & Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/blog?category=${article.categorySlug || "all"}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-saffron px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-paper shadow-soft hover:bg-saffron-deep transition-colors"
            >
              <Sparkles className="h-3 w-3" />
              {article.category}
            </Link>

            {article.destination && (
              <span className="inline-flex items-center rounded-full bg-royal/10 px-3.5 py-1 text-xs font-semibold text-royal">
                📍 {article.destination}
              </span>
            )}

            {article.featured && (
              <span className="inline-flex items-center rounded-full bg-mint/50 px-3.5 py-1 text-xs font-semibold text-royal">
                ★ Editor&apos;s Pick
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-royal leading-[1.2]">
            {article.title}
          </h1>

          {/* Subtitle / Excerpt */}
          {article.subtitle && (
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-sans">
              {article.subtitle}
            </p>
          )}

          {/* Author & Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-royal/10">
            {/* Author info */}
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-saffron shadow-soft">
                <Image
                  src={author?.avatar || "/avatars/avatar-1.jpg"}
                  alt={author?.name || "KranbsTour Writer"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display font-bold text-royal text-sm sm:text-base">
                  {author?.name || "KranbsTour Editorial Team"}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-foreground/70 mt-0.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-saffron" />
                    {article.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-saffron" />
                    {article.readingTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions: Share & Bookmark */}
            <div className="flex items-center gap-2">
              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-paper border border-royal/10 text-royal hover:bg-[#25D366] hover:text-paper hover:border-transparent transition-all shadow-soft"
                aria-label="Share on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-paper border border-royal/10 text-royal hover:bg-[#1877F2] hover:text-paper hover:border-transparent transition-all shadow-soft"
                aria-label="Share on Facebook"
              >
                <span className="text-xs font-bold font-sans">f</span>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-paper border border-royal/10 text-royal hover:bg-[#0A66C2] hover:text-paper hover:border-transparent transition-all shadow-soft"
                aria-label="Share on LinkedIn"
              >
                <span className="text-xs font-bold font-sans">in</span>
              </a>

              {/* Copy Link */}
              <button
                type="button"
                onClick={handleCopyLink}
                title={copied ? "Link Copied!" : "Copy Link"}
                className={`relative flex items-center gap-1.5 h-9 rounded-full px-3 text-xs font-semibold border transition-all shadow-soft ${
                  copied
                    ? "bg-green-600 border-green-600 text-white"
                    : "bg-paper border-royal/10 text-royal hover:bg-mint hover:text-royal"
                }`}
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>

              {/* Save / Bookmark */}
              <button
                type="button"
                onClick={() => setBookmarked((prev) => !prev)}
                title={bookmarked ? "Saved to Reading List" : "Save for later"}
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all shadow-soft ${
                  bookmarked
                    ? "bg-saffron border-saffron text-paper"
                    : "bg-paper border-royal/10 text-royal hover:bg-mint"
                }`}
                aria-label="Bookmark article"
              >
                <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
