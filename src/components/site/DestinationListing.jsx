"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, Filter, RotateCcw, Sparkles } from "lucide-react";

import { ListingTourCard } from "./ListingTourCard";
import { TourDetailsDialog } from "./TourDetailsDialog";
import { Button } from "@/components/ui/button";

export function DestinationListing({
  tours = [],
  heading = "Explore Tour Packages",
  intro = "Browse our collection of hand-crafted tour packages.",
}) {
  const [selectedTour, setSelectedTour] = useState(null);
  const [durationFilter, setDurationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [visibleCount, setVisibleCount] = useState(6);

  // Extract unique tour types from available tours
  const availableTypes = useMemo(() => {
    const types = new Set();
    tours.forEach((t) => {
      if (t.tourType) types.add(t.tourType);
    });
    return Array.from(types);
  }, [tours]);

  // Filter logic
  const filteredTours = useMemo(() => {
    let result = [...tours];

    if (durationFilter !== "all") {
      result = result.filter((t) => t.durationType === durationFilter);
    }

    if (typeFilter !== "all") {
      result = result.filter((t) => t.tourType === typeFilter);
    }

    // Sort logic
    result.sort((a, b) => {
      if (sortBy === "price-asc") {
        if (!a.price) return 1;
        if (!b.price) return -1;
        return a.price - b.price;
      }
      if (sortBy === "price-desc") {
        if (!a.price) return 1;
        if (!b.price) return -1;
        return b.price - a.price;
      }
      if (sortBy === "duration-asc") {
        return (a.durationHours || 0) - (b.durationHours || 0);
      }
      if (sortBy === "duration-desc") {
        return (b.durationHours || 0) - (a.durationHours || 0);
      }
      // "recommended" (featured first, then original order)
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    return result;
  }, [tours, durationFilter, typeFilter, sortBy]);

  const hasActiveFilters = durationFilter !== "all" || typeFilter !== "all";

  const resetFilters = () => {
    setDurationFilter("all");
    setTypeFilter("all");
    setSortBy("recommended");
  };

  const displayedTours = filteredTours.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTours.length;

  return (
    <section id="tour-packages" className="py-14 sm:py-20 lg:py-24 bg-paper">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        {/* Section Heading & Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-1 text-xs font-bold text-royal">
            <Sparkles className="h-3.5 w-3.5 text-saffron" />
            Curated Experiences
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-royal sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
            {intro}
          </p>
        </div>

        {/* Filter and Sort Control Bar */}
        <div className="mt-10 rounded-3xl border border-royal/10 bg-ivory/60 p-4 shadow-soft sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: Duration Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-royal/60 mr-1">
                <Filter className="h-3.5 w-3.5" /> Duration:
              </span>
              {[
                { label: "All", value: "all" },
                { label: "Half Day", value: "half-day" },
                { label: "1 Day (Full)", value: "full-day" },
                { label: "Multi-Day", value: "multi-day" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => {
                    setDurationFilter(tab.value);
                    setVisibleCount(6);
                  }}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    durationFilter === tab.value
                      ? "bg-royal text-paper shadow-sm"
                      : "bg-paper text-royal hover:bg-mint"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Right: Type Filter & Sort Dropdown */}
            <div className="flex flex-wrap items-center gap-3">
              {availableTypes.length > 1 && (
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-medium text-foreground/70">Type:</span>
                  <select
                    value={typeFilter}
                    onChange={(e) => {
                      setTypeFilter(e.target.value);
                      setVisibleCount(6);
                    }}
                    className="rounded-full border border-royal/15 bg-paper px-3 py-1.5 text-xs font-medium text-royal focus:border-royal focus:outline-none"
                  >
                    <option value="all">All Tour Types</option>
                    {availableTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex items-center gap-1.5">
                <ArrowUpDown className="h-3.5 w-3.5 text-royal/60" />
                <span className="text-xs font-medium text-foreground/70">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-full border border-royal/15 bg-paper px-3 py-1.5 text-xs font-medium text-royal focus:border-royal focus:outline-none"
                >
                  <option value="recommended">Recommended</option>
                  <option value="duration-asc">Duration: Short to Long</option>
                  <option value="duration-desc">Duration: Long to Short</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 rounded-full bg-paper px-3 py-1.5 text-xs font-semibold text-saffron-deep hover:bg-saffron/10 transition-colors"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Results count banner */}
          <div className="mt-3 flex items-center justify-between text-xs text-foreground/60 border-t border-royal/5 pt-3">
            <span>
              Showing <strong className="text-royal">{displayedTours.length}</strong> of{" "}
              <strong className="text-royal">{filteredTours.length}</strong> tour packages
            </span>
            {hasActiveFilters && (
              <span className="text-saffron-deep font-medium">Filtered results</span>
            )}
          </div>
        </div>

        {/* 3-Column Tour Card Grid */}
        {filteredTours.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedTours.map((tour) => (
              <ListingTourCard
                key={tour.id}
                tour={tour}
                onSelect={(selected) => setSelectedTour(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="my-16 rounded-3xl border border-dashed border-royal/20 bg-ivory/40 p-12 text-center">
            <p className="font-display text-xl font-bold text-royal">
              No packages match your selected filters.
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Try adjusting the duration or tour type, or reset the filters to see all available packages.
            </p>
            <div className="mt-6">
              <Button type="button" variant="saffron" size="pill" onClick={resetFilters}>
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Filters
              </Button>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              type="button"
              variant="outline-royal"
              size="pill-lg"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 shadow-sm hover:shadow-soft"
            >
              Load More Tour Packages ({filteredTours.length - visibleCount} remaining)
            </Button>
          </div>
        )}
      </div>

      {/* Tour Details Dialog */}
      <TourDetailsDialog
        tour={selectedTour}
        open={selectedTour !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedTour(null);
        }}
      />
    </section>
  );
}
