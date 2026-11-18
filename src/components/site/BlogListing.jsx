"use client";

import { useEffect, useMemo, useState } from "react";
import { Filter, RotateCcw, Search, Sparkles } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { blogCategories } from "@/data/blog";
import { Button } from "@/components/ui/button";

export function BlogListing({ initialArticles = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // Read URL query params on mount and listen to search events from hero
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      const q = params.get("search");
      if (cat) setSelectedCategory(cat);
      if (q) setSearchQuery(q);

      const handleCustomSearch = (e) => {
        if (e.detail?.query) {
          setSearchQuery(e.detail.query);
          setVisibleCount(6);
        }
      };
      window.addEventListener("kranbs:blog-search", handleCustomSearch);
      return () => window.removeEventListener("kranbs:blog-search", handleCustomSearch);
    }
  }, []);

  // Filter and search logic
  const filteredArticles = useMemo(() => {
    let list = [...initialArticles];

    // Filter by Category
    if (selectedCategory !== "all") {
      list = list.filter((a) => {
        if (selectedCategory === "agra") return a.categorySlug === "agra" || a.destination === "Agra";
        if (selectedCategory === "delhi") return a.categorySlug === "delhi" || a.destination === "Delhi";
        if (selectedCategory === "jaipur") return a.categorySlug === "jaipur" || a.destination === "Jaipur";
        if (selectedCategory === "golden-triangle") return a.categorySlug === "golden-triangle" || a.destination === "Golden Triangle";
        if (selectedCategory === "travel-tips") return a.categorySlug === "travel-tips" || a.category === "Travel Tips";
        if (selectedCategory === "travel-guides") return a.categorySlug === "travel-guides" || a.category === "Travel Guides";
        if (selectedCategory === "heritage-culture") return a.categorySlug === "heritage-culture" || a.category === "Heritage & Culture";
        return true;
      });
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((a) => {
        return (
          a.title.toLowerCase().includes(q) ||
          a.subtitle.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.destination.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    return list;
  }, [initialArticles, selectedCategory, searchQuery]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;
  const hasActiveFilters = selectedCategory !== "all" || searchQuery.trim() !== "";

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setVisibleCount(6);
  };

  return (
    <section id="travel-stories" className="py-14 sm:py-20 bg-paper">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3.5 py-1 text-xs text-saffron-deep">
            <Sparkles className="h-3.5 w-3.5" /> Curated Reading
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-royal">
            Latest Travel Stories
          </h2>
          <p className="mt-3 text-base text-foreground/75 leading-relaxed">
            In-depth guides, monument photography insights, and cultural narratives to enrich your
            journey.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="rounded-3xl border border-royal/10 bg-ivory/60 p-4 sm:p-6 shadow-soft space-y-4">
          {/* Category Filter Buttons */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal/60 mb-3">
              <Filter className="h-3.5 w-3.5" /> Filter by Category:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {blogCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setVisibleCount(6);
                    }}
                    className={`rounded-full px-4 py-2 font-display text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-saffron text-paper shadow-saffron"
                        : "bg-paper text-royal hover:bg-mint hover:text-royal border border-royal/10"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search bar inside listing + Reset Button */}
          <div className="pt-3 border-t border-royal/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:max-w-md">
              <Search className="h-4 w-4 text-royal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="blog-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Filter articles by title, monument or keyword..."
                className="w-full rounded-full bg-paper pl-10 pr-4 py-2 text-xs sm:text-sm border border-royal/15 text-royal placeholder:text-royal/40 focus:outline-none focus:ring-2 focus:ring-saffron"
              />
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-4 text-xs font-semibold text-royal/70">
              <span>
                Showing <strong className="text-royal font-display">{displayedArticles.length}</strong> of{" "}
                <strong className="text-royal font-display">{filteredArticles.length}</strong> stories
              </span>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-xs text-saffron-deep hover:underline font-bold"
                >
                  <RotateCcw className="h-3 w-3" /> Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Articles 3-Column Grid */}
        {displayedArticles.length > 0 ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayedArticles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="mt-12 text-center py-16 px-4 rounded-3xl border border-dashed border-royal/20 bg-ivory/30">
            <Search className="h-10 w-10 text-royal/30 mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold text-royal">No articles found</h3>
            <p className="mt-1 text-sm text-foreground/70 max-w-md mx-auto">
              We couldn&apos;t find any stories matching your current filter. Try adjusting your search
              term or resetting the filters.
            </p>
            <Button
              onClick={resetFilters}
              variant="outline"
              size="sm"
              className="mt-5 rounded-full border-royal/20 bg-paper text-royal hover:bg-saffron hover:text-paper"
            >
              Show All Articles
            </Button>
          </div>
        )}

        {/* Load More Button (Pagination) */}
        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="rounded-full bg-royal hover:bg-saffron text-paper font-display text-sm font-bold px-8 py-3 shadow-soft transition-all"
            >
              Load More Stories ({filteredArticles.length - visibleCount} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
