import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Nav() {
  return (
    <header className="text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-black/60 sticky top-0 left-0 w-full backdrop-blur-md z-50 border-b border-b-dashed border-neutral-200 dark:border-neutral-800">
      <nav className="h-14 flex items-center justify-between container">
        <Link href="/" className="font-bold text-sm tracking-tight font-mono">
          Hello, Worlds!
        </Link>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
