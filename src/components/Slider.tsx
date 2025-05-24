"use client";
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide from "./Slide";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    id: 1,
    image: "/image/banner/banner1.jpg",
    heading: "Empowering Nepali Farmers",
    paragraph:
      " Eliminate the middleman. We connect farmers directly with consumers to ensure better prices, transparency, and trust.",
    buttons: ["Get Started", "Learn More"],
  },
  {
    id: 2,
    image: "/image/banner/banner2.jpg",
    heading: "Buy Fresh, Buy Local",
    paragraph:
      "Buy fresh produce directly from Nepali farmers. Help support rural livelihoods while getting the freshest goods.",
    buttons: ["Browse Products", "Join as Consumer"],
  },
  {
    id: 3,
    image: "/image/banner/banner3.jpg",
    heading: "Simple Selling for farmers",
    paragraph:
      "Farmers can easily list their crops and goods. No technical skills needed- just upload, set price, and connect with buyers.",
    buttons: ["Start Selling", "Farmer Login"],
  },
  {
    id: 4,
    image: "/image/banner/banner4.avif",
    heading: "Growing Together",
    paragraph:
      "We’re building a transparent agricultural marketplace that benefits everyone from small farmers to urban consumers.",
    buttons: ["Join the Movement", "How it works"],
  },
];

const AUTOPLAY_INTERVAL = 5000;

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div
      className="relative w-full  overflow-hidden py-16 px-4"
      style={{
        backgroundImage: `url('/image/banner/banner-bg.png')`, // Replace with your image
      }}
      {...swipeHandlers}
    >
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="relative w-full h-[500px] flex items-center justify-center">
        {slides.map((slide, index) => {
          const isCurrent = index === current;
          const isPrev =
            index === (current - 1 + slides.length) % slides.length;
          const isNext = index === (current + 1) % slides.length;

          let position = "absolute opacity-0 scale-90 z-0";
          if (isCurrent) {
            position = "absolute opacity-100 scale-100 translate-x-0 z-20";
          } else if (isPrev) {
            position = "absolute opacity-70 scale-90 -translate-x-[80%] z-10";
          } else if (isNext) {
            position = "absolute opacity-70 scale-90 translate-x-[80%] z-10";
          } else {
            position =
              "absolute opacity-0 scale-90 translate-x-0 z-0 pointer-events-none";
          }

          return (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-in-out w-[90%] ${position}`}
            >
              <Slide slide={slide} isActive={isCurrent} />
            </div>
          );
        })}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Slider;
