import Link from "next/link";

export function BlogDetailHeader({ article }) {
  if (!article) return null;

  const categoryLabel = (article.category || "Travel Guide").toUpperCase();
  const destinationTag = article.destination ? `${article.destination.toUpperCase()} • ` : "";

  return (
    <header className="pt-6 pb-2 sm:pt-8 sm:pb-3 bg-paper">
      <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8 space-y-3">
        {/* Category Eyebrow */}
        <div className="flex items-center gap-2">
          <Link
            href={`/blog?category=${article.categorySlug || "all"}`}
            className="text-xs font-bold tracking-widest uppercase text-saffron-deep hover:text-royal transition-colors font-display"
          >
            {destinationTag}{categoryLabel}
          </Link>
        </div>

        {/* Moderate Editorial Title (36px - 42px on desktop) */}
        <h1 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-royal leading-tight tracking-tight max-w-4xl">
          {article.title}
        </h1>

        {/* Short Description */}
        {article.subtitle && (
          <p className="text-base sm:text-lg text-foreground/75 font-sans leading-relaxed max-w-3xl">
            {article.subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
