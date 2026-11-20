"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  Copy,
  MessageCircle,
} from "lucide-react";

export function BlogAuthorShareBar({ article, author }) {
  const [copied, setCopied] = useState(false);

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
    <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
      <div className="pb-5 mb-6 border-b border-royal/10 flex flex-wrap items-center justify-between gap-4">
        {/* Author Byline */}
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-saffron bg-ivory shadow-xs">
            <Image
              src={author?.avatar || "/avatars/avatar-1.jpg"}
              alt={author?.name || "KranbsTour Writer"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display font-bold text-royal text-sm sm:text-base leading-tight">
              {author?.name || "KranbsTour Editorial Team"}
            </p>
            <div className="flex items-center gap-2 text-xs text-foreground/60 mt-0.5 font-sans">
              <span>{article.publishedAt}</span>
              <span>•</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
        </div>

        {/* Social Share Controls */}
        <div className="flex items-center gap-2 text-xs font-sans">
          <span className="font-semibold text-royal/60 mr-1 hidden sm:inline-block">
            Share:
          </span>

          {/* WhatsApp */}
          <a
            href={`https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on WhatsApp"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-royal/15 bg-paper text-royal hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all shadow-xs"
            aria-label="Share on WhatsApp"
          >
            <MessageCircle className="h-3.5 w-3.5" />
          </a>

          {/* X / Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on X"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-royal/15 bg-paper text-royal hover:bg-black hover:text-white hover:border-transparent transition-all shadow-xs"
            aria-label="Share on X"
          >
            <span className="text-[11px] font-bold font-sans">𝕏</span>
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Facebook"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-royal/15 bg-paper text-royal hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all shadow-xs"
            aria-label="Share on Facebook"
          >
            <span className="text-xs font-bold font-sans">f</span>
          </a>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopyLink}
            title={copied ? "Link Copied!" : "Copy Link"}
            className={`flex items-center gap-1 h-8 rounded-full px-3 text-xs font-semibold border transition-all shadow-xs ${
              copied
                ? "bg-green-600 border-green-600 text-white"
                : "bg-paper border-royal/15 text-royal hover:bg-ivory"
            }`}
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
