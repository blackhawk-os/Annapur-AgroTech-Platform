"use client";
import React, { useState, useMemo } from "react";
import HeaderText from "@/components/HeaderText";
import { Filter } from "@/components/ui/Market/Filter";
import { SearchBar } from "@/components/ui/Market/SearchBar";
import { ProductCard } from "@/components/ui/Market/ProductCard";
import { Pagination } from "@/components/ui/Market/Pagination";
import products from "@/data/market-products.json";

const ITEMS_PER_PAGE = 12;
const MAX_PRICE = 5000;

export default function Market() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([
    "All Products",
  ]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: MAX_PRICE });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const inPriceRange =
        Number(product.price) >= priceRange.min &&
        Number(product.price) <= priceRange.max;
      const inCategory =
        selectedCategory.includes("All Products") ||
        selectedCategory.includes(product.category);
      return inPriceRange && inCategory;
    });
  }, [selectedCategory, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const [query, setQuery] = React.useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="min-h-screen">
      <div className="top-0 z-20 p-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4">
          <HeaderText
            text="Buy Products Directly From Farmers"
            text2="MarketPlace"
          />
        </div>
      </div>

        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <Filter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              maxPrice={MAX_PRICE}
            />
          </aside>
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <Filter />
        </aside>

        <main className="md:col-span-3">
          <div className="mb-6 flex justify-between items-center">
            <SearchBar query={query} setQuery={setQuery} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                if (page < 1 || page > totalPages || page === currentPage) return;
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        </main>
      </div>
    </section>
  );
}
