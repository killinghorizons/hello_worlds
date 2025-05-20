import { getData } from "@/actions";
import ArticleSection from "@/components/display/ArticleSection";
import Search from "@/components/Search";

export default async function Home() {
  const articles = await getData();
  const articleFirst = articles.filter(
    (article) => article.name[0].toLowerCase() === "a"
  );

  return (
    <div>
      <h1 className="text-center text-5xl font-black py-10">Hello, Worlds!</h1>
      <Search />
      <ArticleSection name="#A" articles={articleFirst} />
    </div>
  );
}
