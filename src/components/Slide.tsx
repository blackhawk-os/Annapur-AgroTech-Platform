"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type SlideProps = {
  slide: {
    id: number;
    image: string;
    heading: string;
    paragraph: string;
    buttons: string[];
  };
  isActive: boolean;
};

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [isActive]);

  return (
    <div
      className={`relative w-[950px] h-[550px] rounded-xl overflow-hidden shadow-xl transition-transform duration-700 ease-in-out ${
        isActive ? "scale-100" : "scale-95"
      }`}
    >
      <Image
        src={slide.image}
        alt={slide.heading}
        fill
        className="object-cover absolute inset-0 z-0"
      />
      <div className="relative z-10 bg-black/50 text-white h-full flex flex-col justify-center p-8">
        <div ref={textRef}>
          <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
          <p className="mb-6 text-lg">{slide.paragraph}</p>
          <div className="flex gap-4">
            {slide.buttons.map((btn, idx) => (
              <button
                key={idx}
                className="bg-[#88B04B] text-white px-4 py-2 rounded-xl hover:bg-gray-200 transition"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
