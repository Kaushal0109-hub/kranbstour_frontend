"use client";

import { useEffect, useState } from "react";
import { ListOrdered, ChevronDown, ChevronUp } from "lucide-react";

export function BlogTableOfContents({ sections = [] }) {
  const [activeId, setActiveId] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    // Intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -60% 0px",
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
      const yOffset = -90; // offset for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <div className="w-full">
      {/* Mobile Collapsible Drawer */}
      <div className="lg:hidden mb-6 rounded-2xl border border-royal/10 bg-ivory/60 p-4 shadow-soft">
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="flex w-full items-center justify-between text-left font-display text-sm font-bold text-royal"
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
          <nav className="mt-3 space-y-1 pt-3 border-t border-royal/10">
            {sections.map((section, idx) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleScrollTo(e, section.id)}
                  className={`block py-1.5 px-2.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-saffron/15 text-saffron-deep font-semibold"
                      : "text-foreground/75 hover:bg-paper hover:text-royal"
                  }`}
                >
                  <span className="text-royal/40 mr-1.5">{idx + 1}.</span>
                  {section.heading}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Table of Contents */}
      <div className="hidden lg:block sticky top-24 rounded-3xl border border-royal/10 bg-paper p-6 shadow-card">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-royal pb-3 border-b border-royal/10">
          <ListOrdered className="h-4 w-4 text-saffron" />
          Table of Contents
        </div>

        <nav className="mt-4 space-y-1.5 max-h-[calc(100vh-14rem)] overflow-y-auto pr-1">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleScrollTo(e, section.id)}
                className={`group flex items-start gap-2.5 rounded-xl px-3 py-2 text-xs transition-all ${
                  isActive
                    ? "bg-saffron/10 text-saffron-deep font-bold border-l-3 border-saffron"
                    : "text-foreground/70 hover:bg-ivory hover:text-royal"
                }`}
              >
                <span
                  className={`mt-0.5 text-[11px] font-mono ${
                    isActive ? "text-saffron" : "text-royal/35 group-hover:text-royal"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{section.heading}</span>
              </a>
            );
          })}
        </nav>

        {/* Quick Travel Note */}
        <div className="mt-6 pt-4 border-t border-royal/10 bg-ivory/50 -mx-6 -mb-6 p-4 rounded-b-3xl">
          <p className="hand text-lg text-royal/80 leading-snug">
            Need local advice? Our guides are here to help anytime.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%20KranbsTour%20Team"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-saffron-deep hover:underline"
          >
            Chat with a Trip Specialist →
          </a>
        </div>
      </div>
    </div>
  );
}
