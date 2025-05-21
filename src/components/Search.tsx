"use client";
// Comp
import SearchIcon from "@/components/icons/SearchIcon";

interface Props {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

export default function Search({ searchQuery, setSearchQuery }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="pb-10">
      <div className="flex items-center border rounded-md  border-neutral-200 dark:border-neutral-800 h-12 focus-within:border-neutral-300 dark:focus-within:border-neutral-700">
        <SearchIcon />
        <input
          type="search"
          id="searchQuery"
          name="searchQuery"
          placeholder="Search by pl name"
          className="outline-none block w-full border-l border-dashed border-neutral-200 dark:border-neutral-800 h-full pl-2 mr-2"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
