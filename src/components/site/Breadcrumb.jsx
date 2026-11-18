import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb({
  items = [],
  rootLabel = "Tours",
  rootHref = "/#packages",
  showRoot = true,
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-royal/10 bg-paper/60 backdrop-blur-sm">
      <div className="mx-auto max-w-[88rem] px-4 py-3 sm:px-6 lg:px-10">
        <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-foreground/70">
          <li className="flex items-center gap-1.5">
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-saffron text-royal"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {showRoot && rootLabel && (
            <li className="flex items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-royal/40" />
              {rootHref ? (
                <Link
                  href={rootHref}
                  className="transition-colors hover:text-saffron text-royal/80"
                >
                  {rootLabel}
                </Link>
              ) : (
                <span className="text-royal/80">{rootLabel}</span>
              )}
            </li>
          )}

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label || index} className="flex items-center gap-2">
                <ChevronRight className="h-3.5 w-3.5 text-royal/40" />
                {isLast || !item.href ? (
                  <span className="font-semibold text-saffron-deep" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-saffron text-royal/80"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
