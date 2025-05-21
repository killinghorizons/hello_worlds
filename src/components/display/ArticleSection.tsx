"use client";
import { IArticle } from "@/types";
import Article from "@/components/display/Article";
import Search from "../Search";
import { useState } from "react";

interface Props {
  name: string;
  articles: IArticle[];
}

export default function ArticleSection({ name, articles }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const filtered = articles.filter((article) =>
    article.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <h2 className="text-3xl font-bold text-light-dim dark:text-dark-dim border-b border-dashed py-4 mb-10 border-neutral-300 dark:border-neutral-700 title">
        {name.toLocaleUpperCase()}
      </h2>

      <div className="flex flex-col gap-10">
        {filtered.map(({ id, name, code }) => (
          <Article key={id} code={code} name={name} />
        ))}
      </div>
    </section>
  );
}
