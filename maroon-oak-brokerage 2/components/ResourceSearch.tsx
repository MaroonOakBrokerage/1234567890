"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ResourceArticle } from "@/lib/data";

export default function ResourceSearch({ articles }: { articles: ResourceArticle[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(articles.map((a) => a.category)))], [articles]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const matchesQuery =
        q === "" || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [articles, query, category]);

  return (
    <div>
      <div className="mx-auto mb-8 max-w-[560px]">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides — e.g. &ldquo;renters&rdquo; or &ldquo;cyber&rdquo;"
          aria-label="Search resource guides"
          className="w-full rounded-full border border-maroon/20 bg-white px-5 py-3.5 text-[14.5px] focus:border-maroon focus:outline-none"
        />
      </div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
              category === c ? "border-maroon bg-maroon text-stone" : "border-maroon/20 text-maroon hover:bg-maroon/5"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {results.length === 0 ? (
        <p className="text-center font-sans text-sm text-[#8a8178]">
          No guides match that search yet. Try a different term, or{" "}
          <Link href="/contact" className="font-bold text-maroon hover:underline">ask us directly</Link>.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {results.map((a) => (
            <Link
              key={a.slug}
              href={`/resources/${a.slug}`}
              className="flex flex-col rounded-lg border border-charcoal/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
            >
              <div className="mb-2.5 flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-wide text-gold-dim">
                <span>{a.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{a.readingTime}</span>
              </div>
              <h3 className="mb-2.5 font-serif text-[17px] font-semibold text-maroon">{a.title}</h3>
              <p className="mb-4 flex-1 font-sans text-[13.5px] text-[#55504a]">{a.description}</p>
              <span className="text-xs font-bold uppercase tracking-wide text-gold-dim">Read the Guide &rarr;</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
