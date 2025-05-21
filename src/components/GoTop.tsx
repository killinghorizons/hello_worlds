"use client";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

export default function GoTop() {
  function handleClick() {
    scroll(0, 0);
  }

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer size-8 flex items-center justify-center"
    >
      <ArrowUpIcon />
    </button>
  );
}
