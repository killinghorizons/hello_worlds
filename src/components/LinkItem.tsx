import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

export default function LinkItem({ label, href }: Props) {
  return (
    <li>
      <Link href={href}>
        <p className="text-3xl font-bold text-pink-600 dark:text-pink-400">
          {label}
        </p>
      </Link>
    </li>
  );
}
