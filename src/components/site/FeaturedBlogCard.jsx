import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { authors } from "@/data/blog";

export function FeaturedBlogCard({ article }) {
  if (!article) return null;

  const author = authors[article.authorId] || {
    name: "KranbsTour Editorial Team",
    role: "Travel Specialists",
    avatar: "/avatars/avatar-1.jpg",
  };

  const articleUrl = `/blog/${article.slug}`;

  return (
    <section className="py-10 sm:py-14 bg-paper">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-saffron/15 text-saffron-deep">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="eyebrow text-xs text-saffron-deep font-bold">Featured Story</span>
        </div>

        <article className="group grid gap-8 lg:grid-cols-[1.2fr_0.8fr] rounded-[2.5rem] border border-royal/10 bg-ivory/50 p-6 sm:p-9 shadow-photo transition-all duration-300 hover:shadow-lift">
          {/* Large Image on Left */}
          <Link
            href={articleUrl}
            className="relative block aspect-[16/10] overflow-hidden rounded-[2rem] bg-mint/20"
          >
            <img
              src={article.coverImage}
              alt={article.coverImageAlt || article.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="rounded-full bg-saffron px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-paper shadow-sm">
                {article.category}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-paper font-medium">
              <span>{article.destination}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.readingTime}
              </span>
            </div>
          </Link>

          {/* Editorial Content on Right */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-royal/60">
                <span>{article.publishedAt}</span>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>

              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-royal transition-colors group-hover:text-saffron-deep">
                <Link href={articleUrl}>{article.title}</Link>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80 line-clamp-4">
                {article.excerpt}
              </p>
            </div>

            {/* Author Info & CTA */}
            <div className="border-t border-royal/10 pt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-11 w-11 rounded-full object-cover border-2 border-paper shadow-xs"
                />
                <div>
                  <p className="font-display text-sm font-bold text-royal">{author.name}</p>
                  <p className="text-[0.72rem] text-muted-foreground">{author.role}</p>
                </div>
              </div>

              <Link
                href={articleUrl}
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-royal px-5 py-2.5 font-display text-xs sm:text-sm font-bold text-paper transition-all hover:bg-saffron shadow-sm"
              >
                <span>Read Article</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
