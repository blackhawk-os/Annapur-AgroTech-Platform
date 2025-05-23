"use client";

import React, { useState } from 'react';
import { FaChevronRight} from 'react-icons/fa';

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

                <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>

                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#88B04B]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg> */}
                    <FaChevronRight strokeWidth={1} className="w-5 h-5 text-gray-800"
                    />
                </span>
                <span className="text-lg font-medium text-gray-800">
                    {question}
                </span>

            </button>

            <div 
            className={`overflow-hidden transition-all duration-200 pl-9 ${
                isOpen ? 'max-h-96 mt-3' : 'max-h-0' }`}
             >
                <p className=" text-gray-600 pb-2">{answer}</p>
             </div>
        </div>
    );
};
