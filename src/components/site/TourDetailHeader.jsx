"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Clock,
  Globe,
  Heart,
  Home,
  MapPin,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
} from "lucide-react";

export function TourDetailHeader({ tour }) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        try {
          await navigator.share({
            title: tour.title,
            text: tour.summary,
            url: window.location.href,
          });
          return;
        } catch (err) {
          // Fallback to clipboard
        }
      }
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch (err) {
        console.error("Clipboard copy failed", err);
      }
    }
  };

  const destinationHref = `/${tour.category}-tours`;

  return (
    <section className="bg-paper border-b border-royal/10 pt-4 pb-6 sm:pb-8">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-foreground/70">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-saffron text-royal">
                <Home className="h-3.5 w-3.5" />
                <span>Home</span>
              </Link>
            </li>
            <li className="text-royal/30">/</li>
            <li>
              <Link href={destinationHref} className="hover:text-saffron text-royal">
                {tour.destination}
              </Link>
            </li>
            <li className="text-royal/30">/</li>
            <li className="font-semibold text-saffron-deep truncate max-w-[280px] sm:max-w-md">
              {tour.title}
            </li>
          </ol>
        </nav>

        {/* Top Badges & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-saffron-deep">
              <Sparkles className="h-3.5 w-3.5" />
              {tour.destination}
            </span>
            {tour.tourType && (
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-royal">
                {tour.tourType}
              </span>
            )}
            {tour.featured && (
              <span className="rounded-full bg-royal px-3 py-1 text-xs font-bold text-paper">
                Top Rated Choice
              </span>
            )}
          </div>

          {/* Share & Save Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 rounded-full border border-royal/15 bg-paper px-3.5 py-1.5 text-xs font-semibold text-royal shadow-xs transition-colors hover:bg-ivory"
              aria-label="Share this tour"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-mint-deep" />
                  <span className="text-mint-deep font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5 text-royal/70" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setSaved(!saved)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold shadow-xs transition-colors ${
                saved
                  ? "border-rose-300 bg-rose-50 text-rose-600"
                  : "border-royal/15 bg-paper text-royal hover:bg-ivory"
              }`}
              aria-label={saved ? "Saved to wishlist" : "Save to wishlist"}
            >
              <Heart
                className={`h-3.5 w-3.5 ${
                  saved ? "fill-rose-500 text-rose-500" : "text-royal/70"
                }`}
              />
              <span>{saved ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>

        {/* Tour Title */}
        <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight text-royal sm:text-4xl lg:text-[2.75rem]">
          {tour.title}
        </h1>

        {/* Rating and Reviews */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-foreground/80">
          <div className="flex items-center gap-1.5 text-saffron-deep font-bold">
            <div className="flex items-center text-saffron">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>{tour.rating || 4.9}</span>
          </div>
          <span className="text-royal/30">•</span>
          <span className="font-medium text-royal">
            {tour.reviewCount || 124} verified traveller reviews
          </span>
          {tour.startingPoint && (
            <>
              <span className="text-royal/30">•</span>
              <span className="flex items-center gap-1 text-xs font-medium text-foreground/75">
                <MapPin className="h-3.5 w-3.5 text-saffron" />
                Starts from {tour.startingPoint}
              </span>
            </>
          )}
        </div>

        {/* Quick Information Specs Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 rounded-2xl bg-ivory/80 p-3 sm:p-4 border border-royal/10 text-xs sm:text-sm font-medium text-royal">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-paper shadow-xs text-saffron">
              <Clock className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.65rem] uppercase text-muted-foreground font-semibold">Duration</p>
              <p className="font-bold text-royal">{tour.duration}</p>
            </div>
          </div>

          <div className="hidden sm:block h-7 w-px bg-royal/10" />

          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-paper shadow-xs text-mint-deep">
              <UserCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.65rem] uppercase text-muted-foreground font-semibold">Tour Type</p>
              <p className="font-bold text-royal">Private & Chauffeur Driven</p>
            </div>
          </div>

          <div className="hidden md:block h-7 w-px bg-royal/10" />

          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-paper shadow-xs text-royal">
              <Globe className="h-4 w-4 text-saffron" />
            </span>
            <div>
              <p className="text-[0.65rem] uppercase text-muted-foreground font-semibold">Languages</p>
              <p className="font-bold text-royal">English, Hindi + Options</p>
            </div>
          </div>

          <div className="hidden lg:block h-7 w-px bg-royal/10" />

          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-paper shadow-xs text-mint-deep">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.65rem] uppercase text-muted-foreground font-semibold">Cancellation</p>
              <p className="font-bold text-royal">Free up to 24h prior</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
