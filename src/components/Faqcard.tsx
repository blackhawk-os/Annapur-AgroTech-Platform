"use client";

import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

interface FAQCardProps {
  question: string;
  answer: string;
}

export const FAQCard = ({ question, answer }: FAQCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-200 pb-4 mb-4 last:border-0 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" flex items-center w-full text-left focus:outline-none"
      >
        <div className="flex flex-row justify-center align-center items-center gap-3 text-gray-800 hover:text-[#88b04b]">
          <span
            className={`transition-transform duration-300   ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            <FaChevronRight strokeWidth={1} className="w-5 h-5" />
          </span>
          <span className="text-lg font-medium ">{question}</span>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 pl-9 ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <p className=" text-gray-400 pb-2 font-normal">{answer}</p>
      </div>
    </div>
  );
};
