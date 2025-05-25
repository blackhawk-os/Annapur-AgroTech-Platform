"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  avatar?: string; // URL to an image
  rating?: number; // Rating from 1 to 5
}

interface SliderProps {
  testimonials: Testimonial[];
}
const Slider: React.FC<SliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swiped left
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      // Swiped right
      prevSlide();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!testimonials || testimonials.length === 0) {
    return (
      <p className="text-center text-gray-500">No testimonials to display.</p>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`sm:text-3xl text-xl ${
            i <= rating ? "text-[#F79E45]" : "text-gray-300"
          }`}
        >
          <FaStar />
        </span>
      );
    }
    return (
      <div className="flex justify-center sm:mb-4 mb-6 gap-2 ">{stars}</div>
    );
  };

  return (
    <div className="relative w-full max-w-3xl md:max-lg:w-2xl sm:max-md:w-xl mx-auto my-8">
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className=" sm:bg-white sm:px-8 sm:py-4 sm:mx-6 my-[-50px] sm:my-0 rounded-3xl sm:shadow-lg shadow-none text-center sm:border sm:border-gray-200 border-none min-h-[310px] flex flex-col justify-center"
      >
        <FaQuoteLeft
          className="absolute sm:-top-3 top-12 left-12 text-[#FC8B45] opacity-50 w-8 h-8 sm:w-10 sm:h-10"
          size={48}
          strokeWidth={1.5}
          aria-hidden="true"
        />
        {typeof currentTestimonial.rating === "number" &&
          renderStars(currentTestimonial.rating)}
        <p className="sm:text-lg text-xs font-normal mb-6 px-6 sm:px-0">
          {currentTestimonial.quote}
        </p>
        <hr className={`border-t border-gray-200 mt-4 w-3/4 mx-auto`} />
        <div className="flex flex-row gap-4 w-full mx-auto pt-7 items-center align-center justify-center ">
          {currentTestimonial.avatar && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.author}
              className="w- h-8 sm:w-11 sm:h-11 rounded-full border-2 border-none object-cover items-center align-center justify-center"
            />
          )}
          <p className="font-normal text-xs sm:text-xl">
            {currentTestimonial.author}
          </p>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 sm:left-[-30px] lg:left-[-80px] transform -translate-y-1/2 bg-[#F9F9F980] hover:bg-[#EEDc87] p-3 rounded-full   transition-colors focus:outline-none sm:block hidden"
        aria-label="Previous testimonial"
      >
        <ChevronLeft
          size={24}
          className="text-gray-600 hover:text-white transform transition-transform duration-300 ease-in-out"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 sm:right-[-30px] lg:right-[-80px] transform -translate-y-1/2 bg-[#F9F9F980] hover:bg-[#EEDc87] text-black p-3 rounded-full   transition-colors focus:outline-none sm:block hidden"
        aria-label="Next testimonial"
      >
        <ChevronRight
          size={24}
          className="text-gray-600 hover:text-white transform transition-transform duration-300 ease-in-out"
        />
      </button>

      <div className="flex justify-center sm:mt-6 mt-0 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              currentIndex === index
                ? "bg-[#F79E45] scale-150 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
