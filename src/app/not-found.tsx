import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="mb-6">404 - Not Found</h1>
        <Link href="/" className="underline">
          Home
        </Link>
      </div>
    </section>
  );
}
