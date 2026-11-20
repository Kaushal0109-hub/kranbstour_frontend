import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { getRelatedArticles, authors } from "@/data/blog";

export function BlogRelatedArticles({ currentArticle }) {
  if (!currentArticle) return null;

  const related = getRelatedArticles(currentArticle, 3);
  if (!related || related.length === 0) return null;

  return (
    <section className="py-14 bg-ivory/40 border-t border-royal/10">
      <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-deep font-display block">
              MORE STORIES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-royal">
              More Stories You May Enjoy
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs sm:text-sm font-bold text-royal hover:text-saffron transition-colors inline-flex items-center gap-1 shrink-0 font-display"
          >
            Explore all articles →
          </Link>
        </div>

        {/* 3 Compact Article Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((article) => {
            const author = authors[article.authorId];
            const articleUrl = `/blog/${article.slug}`;

            return (
              <article
                key={article.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-royal/10 bg-paper shadow-xs hover:shadow-md transition-all duration-200"
              >
                {/* Image */}
                <Link
                  href={articleUrl}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-ivory block"
                >
                  <Image
                    src={article.coverImage}
                    alt={article.coverImageAlt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-saffron px-2.5 py-0.5 text-[10px] font-bold text-paper uppercase tracking-wider font-display">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 rounded-full bg-paper/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-royal flex items-center gap-1 shadow-xs">
                    <Clock className="h-2.5 w-2.5 text-saffron" />
                    <span>{article.readingTime}</span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 space-y-2">
                  <div className="text-[11px] text-foreground/50 font-medium">
                    {article.destination} • {article.publishedAt}
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-royal line-clamp-2 leading-snug group-hover:text-saffron-deep transition-colors">
                    <Link href={articleUrl}>{article.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground/75 line-clamp-2 leading-relaxed font-sans">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto pt-3 border-t border-royal/10 flex items-center justify-between text-xs">
                    <span className="font-display font-medium text-royal/70 truncate max-w-[140px]">
                      By {author?.name || "KranbsTour"}
                    </span>

                    <Link
                      href={articleUrl}
                      className="inline-flex items-center gap-1 font-display font-bold text-saffron-deep group-hover:gap-1.5 transition-all"
                    >
                      <span>Read</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
