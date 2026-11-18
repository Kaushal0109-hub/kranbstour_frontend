"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, Grid, X } from "lucide-react";

export function TourGallery({ gallery = [], tourTitle = "Tour Photography" }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const images = gallery.length > 0 ? gallery : [];

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  const openLightboxAt = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  if (images.length === 0) return null;

  const mainImage = images[0];
  const sideImages = images.slice(1, 5);

  return (
    <section className="bg-paper py-6">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        {/* Desktop 5-Image Collage Grid */}
        <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-3 lg:gap-4 h-[440px] lg:h-[500px] rounded-[2rem] overflow-hidden relative">
          {/* Main Large Image (Left 2 columns, 2 rows) */}
          <div
            onClick={() => openLightboxAt(0)}
            className="md:col-span-2 md:row-span-2 relative overflow-hidden cursor-pointer group bg-mint/20"
          >
            <img
              src={mainImage}
              alt={`${tourTitle} - Main View`}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-royal/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-bold text-royal shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Click to enlarge
            </span>
          </div>

          {/* 4 Supporting Images (Right 2 columns, 2x2 grid) */}
          {sideImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightboxAt(idx + 1)}
              className="relative overflow-hidden cursor-pointer group bg-mint/20"
            >
              <img
                src={img}
                alt={`${tourTitle} - Photo ${idx + 2}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-royal/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          {/* "View All Photos" Button */}
          <button
            type="button"
            onClick={() => openLightboxAt(0)}
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-paper/95 px-4 py-2 font-display text-xs font-bold text-royal shadow-photo backdrop-blur-sm transition-all hover:bg-royal hover:text-paper"
          >
            <Grid className="h-4 w-4 text-saffron" />
            <span>View All {images.length} Photos</span>
          </button>
        </div>

        {/* Mobile Swipeable Gallery Carousel */}
        <div className="md:hidden relative rounded-2xl overflow-hidden shadow-soft">
          <div className="relative aspect-[16/11] bg-mint/20">
            <img
              src={images[mobileIndex]}
              alt={`${tourTitle} - Image ${mobileIndex + 1}`}
              onClick={() => openLightboxAt(mobileIndex)}
              className="h-full w-full object-cover cursor-pointer"
            />

            {/* Navigation Arrows on Mobile */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() =>
                    setMobileIndex((prev) => (prev - 1 + images.length) % images.length)
                  }
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-paper/85 text-royal shadow-sm"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setMobileIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-paper/85 text-royal shadow-sm"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}

            {/* Counter Badge */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-navy/80 px-2.5 py-1 text-xs font-semibold text-paper backdrop-blur-xs">
              <Eye className="h-3 w-3 text-saffron" />
              <span>
                {mobileIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 py-2.5 bg-paper">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setMobileIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  mobileIndex === i ? "w-6 bg-saffron" : "w-1.5 bg-royal/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Tour image lightbox"
          className="fixed inset-0 z-50 flex flex-col bg-navy/95 backdrop-blur-md animate-in fade-in duration-300"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-ivory/10 text-ivory">
            <div>
              <p className="font-display font-bold text-sm sm:text-base text-paper">{tourTitle}</p>
              <p className="text-xs text-ivory/70">
                Photo {currentIndex + 1} of {images.length}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full bg-paper/10 text-ivory hover:bg-paper/20 transition-colors"
              aria-label="Close photo viewer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Photo Display */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8">
            <button
              type="button"
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
              }
              aria-label="Previous photo"
              className="absolute left-4 sm:left-8 z-10 grid h-12 w-12 place-items-center rounded-full bg-paper/15 text-paper hover:bg-saffron transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <img
              src={images[currentIndex]}
              alt={`${tourTitle} - Photo ${currentIndex + 1}`}
              className="max-h-[72vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            />

            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              aria-label="Next photo"
              className="absolute right-4 sm:right-8 z-10 grid h-12 w-12 place-items-center rounded-full bg-paper/15 text-paper hover:bg-saffron transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Thumbnails */}
          <div className="flex justify-center gap-2 p-4 overflow-x-auto border-t border-ivory/10">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                  currentIndex === i ? "border-saffron scale-105" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
