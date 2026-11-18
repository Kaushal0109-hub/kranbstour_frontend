import Link from "next/link";
import { Compass, Calendar, Clock, Landmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogDestinationBox({ destinationInfo, destination, categorySlug }) {
  if (!destinationInfo && !destination) return null;

  // Determine destination tour listing URL
  const getListingUrl = (dest) => {
    const d = (dest || "").toLowerCase();
    if (d.includes("agra")) return "/agra-tours";
    if (d.includes("delhi")) return "/delhi-tours";
    if (d.includes("jaipur")) return "/jaipur-tours";
    if (d.includes("golden") || d.includes("triangle")) return "/golden-triangle-tours";
    return "/#packages";
  };

  const listingUrl = getListingUrl(destination || categorySlug);
  const destName = destinationInfo?.destination || destination || "India";

  return (
    <div className="my-10 overflow-hidden rounded-3xl border-2 border-royal/15 bg-paper shadow-card">
      <div className="bg-royal px-6 py-4 text-paper flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-sm sm:text-base font-bold">
          <Compass className="h-4 w-4 text-saffron" />
          <span>Quick Destination Facts &amp; Trip Planning</span>
        </div>
        <span className="rounded-full bg-saffron/20 px-2.5 py-0.5 text-xs font-semibold text-saffron">
          {destName}
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {destinationInfo?.bestTime && (
            <div className="rounded-2xl border border-royal/10 bg-ivory/60 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-deep">
                <Calendar className="h-3.5 w-3.5" /> Best Season
              </div>
              <p className="mt-1 text-sm font-semibold text-royal">
                {destinationInfo.bestTime}
              </p>
            </div>
          )}

          {destinationInfo?.suggestedDuration && (
            <div className="rounded-2xl border border-royal/10 bg-ivory/60 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-deep">
                <Clock className="h-3.5 w-3.5" /> Ideal Duration
              </div>
              <p className="mt-1 text-sm font-semibold text-royal">
                {destinationInfo.suggestedDuration}
              </p>
            </div>
          )}

          {destinationInfo?.mustSeeAttractions && (
            <div className="rounded-2xl border border-royal/10 bg-ivory/60 p-4 sm:col-span-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron-deep">
                <Landmark className="h-3.5 w-3.5" /> Key Highlights
              </div>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-royal">
                {destinationInfo.mustSeeAttractions}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-royal/10">
          <p className="text-xs sm:text-sm text-foreground/75 text-center sm:text-left">
            Ready to plan your trip? Browse our hand-crafted private day trips and multi-day packages.
          </p>
          <Button
            asChild
            className="w-full sm:w-auto shrink-0 bg-saffron hover:bg-saffron-deep text-paper font-display text-sm font-bold shadow-saffron"
          >
            <Link href={listingUrl}>
              <span>Explore {destination || "Destination"} Tours</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
