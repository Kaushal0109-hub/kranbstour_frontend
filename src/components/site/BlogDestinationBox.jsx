import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogDestinationBox({ destinationInfo, destination, categorySlug }) {
  if (!destinationInfo && !destination) return null;

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
    <div className="my-8 rounded-xl border border-royal/10 bg-[#FAF7EE] p-5 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 pb-3 border-b border-royal/10">
        <Compass className="h-4 w-4 text-saffron" />
        <span className="text-xs font-bold uppercase tracking-wider text-royal font-display">
          DESTINATION ESSENTIALS • {destName.toUpperCase()}
        </span>
      </div>

      {/* 3 Compact Columns */}
      <div className="grid gap-4 sm:grid-cols-3">
        {destinationInfo?.bestTime && (
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase tracking-wider text-foreground/50 font-medium block">
              Best Time to Visit
            </span>
            <p className="font-display font-bold text-royal text-sm sm:text-base">
              {destinationInfo.bestTime}
            </p>
          </div>
        )}

        {destinationInfo?.suggestedDuration && (
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase tracking-wider text-foreground/50 font-medium block">
              Ideal Duration
            </span>
            <p className="font-display font-bold text-royal text-sm sm:text-base">
              {destinationInfo.suggestedDuration}
            </p>
          </div>
        )}

        {destinationInfo?.mustSeeAttractions && (
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase tracking-wider text-foreground/50 font-medium block">
              Key Highlights
            </span>
            <p className="font-display font-bold text-royal text-sm sm:text-base">
              {destinationInfo.mustSeeAttractions}
            </p>
          </div>
        )}
      </div>

      {/* Action Line */}
      <div className="pt-3 border-t border-royal/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-foreground/70 font-sans">
          Planning your trip? Browse our handpicked private tours.
        </p>
        <Button
          asChild
          size="sm"
          className="rounded-full bg-royal hover:bg-saffron text-paper font-display text-xs font-bold px-4 py-1.5 h-8 transition-colors shrink-0"
        >
          <Link href={listingUrl}>
            <span>View {destination || "Destination"} Tours</span>
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
