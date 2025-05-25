"use client";

import React, { useState, useEffect, useRef } from "react";
import { MarqueeCard } from "./MarqueeCard";
import HeaderText from "./HeaderText";
import {
  FaCarrot,
  FaAppleAlt,
  FaLeaf,
  FaSeedling,
  FaEgg,
  FaPepperHot,
} from "react-icons/fa";
import { GiMilkCarton, GiGrainBundle, GiJellyBeans } from "react-icons/gi";

export const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>(0);
  const speed = useRef(2);

  const products = [
    {
      icon: <FaCarrot />,
      title: "Fresh Vegetables",
      tagline: "Farm-to-table goodness",
    },
    {
      icon: <FaAppleAlt />,
      title: "Seasonal Fruits",
      tagline: "Nature's sweet bounty",
    },
    {
      icon: <GiGrainBundle />,
      title: "Essential Grains",
      tagline: "The foundation of every meal",
    },
    {
      icon: <GiJellyBeans />,
      title: "Nutritious Pulses",
      tagline: "Protein rich and hearty",
    },
    {
      icon: <GiMilkCarton />,
      title: "Dairy Products",
      tagline: "Pure & nutritious",
    },
    {
      icon: <FaLeaf />,
      title: "Organic Greens",
      tagline: "Straight from the farm",
    },
    {
      icon: <FaSeedling />,
      title: "Sprouts",
      tagline: "Young and tender",
    },
    {
      icon: <FaEgg />,
      title: "Farm Eggs",
      tagline: "Daily freshness",
    },
    {
      icon: <FaPepperHot />,
      title: "Spices",
      tagline: "Flavorful harvest",
    },
  ];

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setOffset((prev) => {
          if (contentRef.current && containerRef.current) {
            const contentWidth = contentRef.current.scrollWidth;
            const resetPoint = contentWidth / 2;
            const currentSpeed = speed.current;
            return prev <= -resetPoint ? 0 : prev - currentSpeed;
          }
          return prev;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <HeaderText
          text="Products"
          text2="What's available Today"
          className="mb-8 text-center"
        />

        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={contentRef}
            className="flex"
            style={{
              transform: `translateX(${offset}px)`,
              width: "fit-content",
            }}
          >
            {[...products, ...products].map((product, index) => (
              <MarqueeCard
                key={index}
                icon={product.icon}
                title={product.title}
                tagline={product.tagline}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
