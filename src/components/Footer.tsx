import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-700 dark:text-gray-200 mt-10 border-t border-t-dashed border-neutral-200 dark:border-neutral-800">
      <nav className="h-20 flex items-center justify-between container">
        <Link href="/" className="font-bold text-sm tracking-tight font-mono">
          Hello, Worlds!
        </Link>
        <p>&copy; kh</p>
      </nav>
    </footer>
  );
}
