"use client";

import { useEffect, useState } from "react";
import { ListOrdered, ChevronDown, ChevronUp } from "lucide-react";

export function BlogTableOfContents({ sections = [] }) {
  const [activeId, setActiveId] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!sections || sections.length === 0) return null;

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // offset for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <div className="w-full">
      {/* Mobile Collapsible Pill Bar */}
      <div className="lg:hidden mb-8 border-b border-royal/10 pb-4">
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="flex w-full items-center justify-between py-2 text-left font-display text-sm font-bold text-royal"
        >
          <span className="flex items-center gap-2">
            <ListOrdered className="h-4 w-4 text-saffron" />
            Table of Contents ({sections.length} sections)
          </span>
          {isMobileOpen ? (
            <ChevronUp className="h-4 w-4 text-royal/60" />
          ) : (
            <ChevronDown className="h-4 w-4 text-royal/60" />
          )}
        </button>

        {isMobileOpen && (
          <nav className="mt-3 space-y-1 pt-2">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleScrollTo(e, section.id)}
                  className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-saffron/15 text-saffron-deep font-semibold"
                      : "text-foreground/75 hover:bg-paper hover:text-royal"
                  }`}
                >
                  <span className="text-royal/40 mr-2 font-mono text-xs">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Minimalist Sticky Contents Navigator */}
      <div className="hidden lg:block sticky top-28 space-y-4">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal/60 pb-3 border-b border-royal/10 font-display">
          TABLE OF CONTENTS
        </div>

        <nav className="space-y-1.5 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleScrollTo(e, section.id)}
                className={`group flex items-start gap-2.5 py-2 px-2.5 rounded-lg text-xs sm:text-[13px] transition-all leading-snug ${
                  isActive
                    ? "font-bold text-saffron-deep bg-saffron/10 border-l-2 border-saffron"
                    : "text-foreground/60 hover:text-royal hover:bg-ivory/50"
                }`}
              >
                <span
                  className={`font-mono text-[11px] shrink-0 ${
                    isActive ? "text-saffron-deep font-bold" : "text-royal/35 group-hover:text-royal"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="line-clamp-2">{section.heading}</span>
              </a>
            );
          })}
        </nav>

        {/* Minimalist Question Prompt */}
        <div className="pt-6 border-t border-royal/10">
          <p className="text-xs text-foreground/65 font-sans leading-relaxed">
            Planning a trip to this destination?
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%20KranbsTour%20team,%20I%20have%20questions%20about%20a%20tour"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-block text-xs font-bold text-saffron-deep hover:underline font-display"
          >
            Ask a Local Specialist →
          </a>
        </div>
      </div>
    </div>
  );
}
