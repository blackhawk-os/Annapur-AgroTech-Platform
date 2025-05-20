"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Button from "./Button";
import Link from "next/link";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm sm:flex hidden flex-col sm:flex-row justify-between items-center  sm:px-16 py-2 border-b border-white">
        <div className="flex items-center gap-1 text-gray-700 text-[14px] font-montserrat mb-1 md:mb-0">
          <FaPhoneAlt size={12} />
          <span>Call Us: +977 982-3821451</span>
        </div>
        <div className="flex items-center gap-2">
          {/* <FaWhatsapp className="text-purple-500" /> */}
          <FaWhatsapp
            className="text-green-500"
            onClick={() => window.open("https://wa.me/9779823821451", "_blank")}
          />
        </div>
      </div>

      {/* Main Header Bar */}
      <nav className="flex flex-row justify-between items-center w-full py-4 px-4 sm:px-8 border-b border-white gap-4 sm:gap-0">
        {/* Logo */}
        <div>
          <Image src="/image/logo.svg" width={150} height={40} alt="Logo" />
        </div>

        {/* Nav Items */}
        <div className="sm:flex hidden flex-col sm:flex-row gap-4 md:gap-12 sm:gap-6 text-sm font-montserrat text-center">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link
            onClick={() => window.open("https://wa.me/9779823821451", "_blank")}
            href={""}
          >
            Get Support
          </Link>
        </div>

        {/* Create Account */}
        <Button
          text="Create Account"
          className=" sm:block hidden text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 rounded-md px-4 py-2"
        />

        {/* Hamburger Menu */}
        <div className={`sm:hidden block `}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Mobile Menu */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className={`fixed top-0 right-0 w-[60%] h-screen bg-[#F8F8F8] border-l border-gray-200 rounded-l-3xl z-50 shadow-xl flex flex-col items-start justify-start p-6 gap-9  transform transition-transform duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button onClick={() => setIsOpen(!isOpen)} className="">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-gray-700 text-[14px] font-montserrat mb-1 sm:mb-0">
                <FaPhoneAlt size={12} />
                <span>Call Us: +977 982-3821451</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <FaWhatsapp className="text-purple-500" />
                <FaWhatsapp className="text-green-500" />
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <Link
                href="/"
                className="hover:underline hover:text-[#38B6FF] transform ease-in-out duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/"
                className="hover:underline hover:text-[#38B6FF] transform ease-in-out duration-200"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/"
                className="hover:underline hover:text-[#38B6FF] transform ease-in-out duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get Support
              </Link>
            </div>
            <div>
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Button
                  text="Create Account"
                  className="text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 rounded-md px-4 py-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
