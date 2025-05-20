"use client";
// React
import { useState } from "react";
// Comp
import SearchIcon from "@/components/SearchIcon";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  }

  return (
    <div className="pb-10">
      <div className="flex items-center border rounded-md  border-neutral-200 dark:border-neutral-800 h-12 focus-within:border-neutral-300 dark:focus-within:border-neutral-700">
        <SearchIcon />
        <input
          type="search"
          id="searchQuery"
          placeholder="Search by pl name"
          className="outline-none block w-full border-l border-dashed border-neutral-200 dark:border-neutral-800 h-full pl-2 mr-2"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
