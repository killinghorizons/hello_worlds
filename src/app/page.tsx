import { getCount } from "@/actions";
import LinksList from "@/components/LinksList";

export default async function Home() {
  const [{ count }] = await getCount();

  return (
    <div className="py-24">
      <h2 className="text-center text-3xl font-bold title mb-4">{count}</h2>
      <h1 className="text-center text-7xl font-bold title mb-6">
        Hello, Worlds!
      </h1>
      <h3 className="text-center text-lg font-semibold">
        In different programming, markup languages and frameworks.
      </h3>
      <LinksList />
    </div>
  );
}
