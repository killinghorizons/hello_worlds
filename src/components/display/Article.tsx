import { IArticle } from "@/types";
import GoTop from "../GoTop";

export default function Article({ name, code }: IArticle) {
  return (
    <article
      className="border border-neutral-200 dark:border-neutral-800 rounded-xs shadow-xs shadow-pink-600 dark:shadow-pink-400"
      id={name}
    >
      <div className="border-b border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-between rounded-t-xl p-4">
        <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">
          {name}
        </h3>
        <GoTop />
      </div>
      <pre className="rounded-b-xl p-4 text-light-dim dark:text-dark-dim overflow-x-auto font-mono">
        <code>{code}</code>
      </pre>
    </article>
  );
}
