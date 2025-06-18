"use client";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

export const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-green-500"
    />
  );
};
