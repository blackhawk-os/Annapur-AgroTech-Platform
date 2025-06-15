"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import HeaderText from "../../HeaderText";

export const Filter = () => {
  const MAX_PRICE = 5000;
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All Products",
  ]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: MAX_PRICE });
  const [minSliderActive, setMinSliderActive] = useState(false);
  const [maxSliderActive, setMaxSliderActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Category data with icons
  const categories = [
    {
      title: "All Products",
      icon: "",
    },
    {
      icon: "/image/Marquee-icons/vegetable.png",
      title: "Vegetables",
    },
    {
      icon: "/image/Marquee-icons/fruit.png",
      title: "Fruits",
    },
    {
      icon: "/image/Marquee-icons/grain.png",
      title: "Grains",
    },
    {
      icon: "/image/Marquee-icons/red-beans.png",
      title: "Pulses",
    },
    {
      icon: "/image/Marquee-icons/milk.png",
      title: "Dairy",
    },
    {
      icon: "/image/Marquee-icons/lettuce.png",
      title: "Greens",
    },
    {
      icon: "/image/Marquee-icons/sprout.png",
      title: "Sprouts",
    },
    {
      icon: "/image/Marquee-icons/eggs.png",
      title: "Eggs",
    },
    {
      icon: "/image/Marquee-icons/spice.png",
      title: "Spices",
    },
  ];

  const toggleCategory = (title: string) => {
    if (title === "All Products") {
      setSelectedCategories(["All Products"]);
    } else {
      setSelectedCategories((prev) => {
        const newSelected = prev.filter((c) => c !== "All Products");
        return newSelected.includes(title)
          ? newSelected.filter((c) => c !== title)
          : [...newSelected, title];
      });
    }
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max"
  ) => {
    let value = parseInt(e.target.value) || 0;

    if (value > MAX_PRICE) value = MAX_PRICE;

    if (type === "min") {
      if (value > priceRange.max) value = priceRange.max;
      setPriceRange((prev) => ({ ...prev, min: value }));
    } else {
      if (value < priceRange.min) value = priceRange.min;
      setPriceRange((prev) => ({ ...prev, max: value }));
    }
  };

  // Handle slider thumb dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return;

      // Get the container dimensions and position
      const rect = containerRef.current.getBoundingClientRect();
      const containerWidth = rect.width;
      const containerLeft = rect.left;

      // Calculate the position relative to the container
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      let position = (clientX - containerLeft) / containerWidth;
      position = Math.max(0, Math.min(1, position)); // Clamp between 0-1
      const newValue = Math.round(position * MAX_PRICE);

      // Update the corresponding price based on which thumb is active
      if (minSliderActive) {
        setPriceRange((prev) => ({
          min: Math.min(newValue, prev.max),
          max: prev.max,
        }));
      } else if (maxSliderActive) {
        setPriceRange((prev) => ({
          min: prev.min,
          max: Math.max(newValue, prev.min),
        }));
      }
    };

    const handleMouseUp = () => {
      setMinSliderActive(false);
      setMaxSliderActive(false);
    };

    if (minSliderActive || maxSliderActive) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [minSliderActive, maxSliderActive, MAX_PRICE]);

  const applyFilters = () => {
    const filters = {
      categories: selectedCategories.includes("All Products")
        ? categories.slice(1).map((c) => c.title)
        : selectedCategories,
      priceRange,
    };
    console.log("Applying filters:", filters);
  };

  return (
    <>
      <div
        className="min-h-screen px-8 bg-cover bg-center"
        // style={{
        //   backgroundImage: "url('/image/banner/banner-bg.png')",
        //   backgroundRepeat: "repeat",
        // }}
      >
        <div className="flex justify-start gap-8">
          {/* Filter Sidebar */}
          <div className="w-64 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Filters</h2>

            {/* Categories Filter */}
            <div className="mb-5">
              <h3 className="text-md font-semibold text-gray-800 mb-2">
                Categories
              </h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <div key={category.title} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category.title}
                      checked={selectedCategories.includes(category.title)}
                      onChange={() => toggleCategory(category.title)}
                      className="h-4 w-4 accent-[#88B04B] border-gray-300 rounded focus:ring-2 focus:ring-[#88B04B]"
                    />
                    <label
                      htmlFor={category.title}
                      className="ml-2 text-sm text-gray-700 flex items-center"
                    >
                      {category.icon && (
                        <Image
                          src={category.icon}
                          alt={category.title}
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                      )}
                      {category.title}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-4 border-t border-gray-200" />

            {/* Price Range Filter */}
            <div className="mb-5">
              <h3 className="text-md font-semibold text-gray-800 mb-2">
                Price Range (NPR)
              </h3>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-xs text-gray-600 mr-1">NPR</span>
                  <input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange(e, "min")}
                    className="w-16 p-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#88B04B] focus:border-[#88B04B]"
                    min="0"
                    max={MAX_PRICE}
                  />
                </div>
                <span className="text-xs text-gray-500 mx-1">to</span>
                <div className="flex items-center">
                  <span className="text-xs text-gray-600 mr-1">NPR</span>
                  <input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange(e, "max")}
                    className="w-16 p-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#88B04B] focus:border-[#88B04B]"
                    min={priceRange.min}
                    max={MAX_PRICE}
                  />
                </div>
              </div>

              {/* Dual Range Slider */}
              <div className="relative h-8 py-3" ref={containerRef}>
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
                <div
                  className="absolute top-1/2 h-1 bg-[#88B04B] rounded-full transform -translate-y-1/2"
                  style={{
                    left: `${(priceRange.min / MAX_PRICE) * 100}%`,
                    right: `${100 - (priceRange.max / MAX_PRICE) * 100}%`,
                  }}
                ></div>
                <div
                  className={`absolute w-4 h-4 bg-[#88B04B] rounded-full border-2 border-white shadow-md transform -translate-y-1/2 cursor-grab ${
                    minSliderActive
                      ? "ring-2 ring-[#88B04B] ring-opacity-50 scale-125 cursor-grabbing"
                      : ""
                  }`}
                  style={{
                    left: `${(priceRange.min / MAX_PRICE) * 100}%`,
                    top: "50%",
                    zIndex: minSliderActive ? 20 : 10,
                  }}
                  onMouseDown={() => setMinSliderActive(true)}
                  onTouchStart={() => setMinSliderActive(true)}
                ></div>
                <div
                  className={`absolute w-4 h-4 bg-[#88B04B] rounded-full border-2 border-white shadow-md transform -translate-y-1/2 cursor-grab ${
                    maxSliderActive
                      ? "ring-2 ring-[#88B04B] ring-opacity-50 scale-125 cursor-grabbing"
                      : ""
                  }`}
                  style={{
                    left: `${(priceRange.max / MAX_PRICE) * 100}%`,
                    top: "50%",
                    zIndex: maxSliderActive ? 20 : 10,
                  }}
                  onMouseDown={() => setMaxSliderActive(true)}
                  onTouchStart={() => setMaxSliderActive(true)}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0</span>
                <span>{MAX_PRICE}</span>
              </div>
            </div>

            <hr className="my-4 border-t border-gray-200" />

            <button
              onClick={applyFilters}
              className="w-full bg-[#88B04B] hover:bg-[#7A9F44] text-white font-medium py-2 px-4 rounded-md transition shadow text-sm"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
