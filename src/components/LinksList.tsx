import LinkItem from "@/components/LinkItem";

export default function LinksList() {
  const list = [
    {
      label: "#",
      href: "/category/nonalphabetical",
    },
    {
      label: "A",
      href: "/category/a",
    },
    {
      label: "B",
      href: "/category/b",
    },
    {
      label: "C",
      href: "/category/c",
    },
    {
      label: "D",
      href: "/category/d",
    },
    {
      label: "E",
      href: "/category/e",
    },
    {
      label: "F",
      href: "/category/f",
    },
    {
      label: "G",
      href: "/category/g",
    },
    {
      label: "H",
      href: "/category/h",
    },
    {
      label: "I",
      href: "/category/i",
    },
    {
      label: "J",
      href: "/category/j",
    },
    {
      label: "K",
      href: "/category/k",
    },
    {
      label: "L",
      href: "/category/l",
    },
    {
      label: "M",
      href: "/category/m",
    },
    {
      label: "N",
      href: "/category/n",
    },
    {
      label: "O",
      href: "/category/o",
    },
    ,
    {
      label: "P",
      href: "/category/p",
    },
    {
      label: "Q",
      href: "/category/q",
    },
    {
      label: "R",
      href: "/category/r",
    },
    {
      label: "S",
      href: "/category/s",
    },
    {
      label: "T",
      href: "/category/t",
    },
    {
      label: "U",
      href: "/category/u",
    },
    {
      label: "V",
      href: "/category/v",
    },
    {
      label: "W",
      href: "/category/w",
    },
    {
      label: "X",
      href: "/category/x",
    },
    {
      label: "Y",
      href: "/category/y",
    },
    {
      label: "Z",
      href: "/category/z",
    },
  ];
  return (
    <div className="py-24">
      <ul className="grid grid-cols-3 gap-5 text-center ">
        {list.map(({ label, href }: any) => (
          <LinkItem key={href} href={href} label={label} />
        ))}
      </ul>
    </div>
  );
}
