import { Sparkles } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { getRelatedArticles } from "@/data/blog";

export function BlogRelatedArticles({ currentArticle }) {
  if (!currentArticle) return null;

  const related = getRelatedArticles(currentArticle, 3);
  if (!related || related.length === 0) return null;

  return (
    <section className="py-14 sm:py-20 bg-ivory/40 border-t border-royal/10">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3.5 py-1 text-xs font-bold text-saffron-deep">
            <Sparkles className="h-3.5 w-3.5" /> Keep Reading
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-royal">
            More Stories You May Enjoy
          </h2>
          <p className="mt-2 text-base text-foreground/75">
            Continue planning your India journey with our latest insider guides.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {related.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
