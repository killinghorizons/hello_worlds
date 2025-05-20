import { IArticle } from "@/types";

export default function Article({ name, code }: IArticle) {
  return (
    <article className="border border-neutral-200 dark:border-neutral-800 rounded-xs shadow-xs shadow-pink-600 dark:shadow-pink-400">
      <h3 className="text-2xl font-bold p-4 rounded-t-xl text-pink-600 dark:text-pink-400 border-b border-dashed border-neutral-200 dark:border-neutral-800">
        {name}
      </h3>
      <pre className="rounded-b-xl p-4 text-light-dim dark:text-dark-dim overflow-x-auto font-mono">
        <code>{code}</code>
      </pre>
    </article>
  );
}
