import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { authors } from "@/data/blog";

export function BlogCard({ article }) {
  const author = authors[article.authorId] || {
    name: "KranbsTour Team",
    avatar: "/avatars/avatar-1.jpg",
  };

  const articleUrl = `/blog/${article.slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-royal/10 bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:shadow-photo">
      {/* Cover Image */}
      <Link
        href={articleUrl}
        className="relative block aspect-[16/10] overflow-hidden bg-mint/20"
      >
        <img
          src={article.coverImage}
          alt={article.coverImageAlt || article.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal/60 via-transparent to-transparent opacity-80" />

        {/* Top Category Badge */}
        <div className="absolute top-3.5 left-3.5">
          <span className="rounded-full bg-saffron px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-paper shadow-sm">
            {article.category}
          </span>
        </div>

        {/* Bottom Destination & Reading Time */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-paper font-medium">
          <span>{article.destination}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {article.readingTime}
          </span>
        </div>
      </Link>

      {/* Body Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="text-[0.72rem] font-semibold text-muted-foreground">
          {article.publishedAt}
        </div>

        <h3 className="mt-2 font-display text-lg sm:text-xl font-bold leading-snug text-royal transition-colors group-hover:text-saffron-deep">
          <Link href={articleUrl} className="hover:underline">
            {article.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-foreground/75 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Card Footer: Author & Read More */}
        <div className="mt-auto border-t border-royal/10 pt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img
              src={author.avatar}
              alt={author.name}
              className="h-7 w-7 rounded-full object-cover border border-paper shadow-xs"
            />
            <span className="font-display text-xs font-bold text-royal truncate max-w-[120px]">
              {author.name}
            </span>
          </div>

          <Link
            href={articleUrl}
            className="inline-flex items-center gap-1 font-display text-xs font-bold text-saffron-deep transition-all group-hover:gap-2 group-hover:text-royal"
          >
            <span>Read More</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
