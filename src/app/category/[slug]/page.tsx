import { getCategory } from "@/actions";
import { notFound } from "next/navigation";

import ArticleSection from "@/components/display/ArticleSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Category({ params }: Props) {
  const { slug } = await params;
  const data = await getCategory(slug);
  if (data.length < 1) return notFound();

  return (
    <div className="py-12">
      <ArticleSection name={slug} articles={data} />
    </div>
  );
}
