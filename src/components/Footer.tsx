import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhoneOutgoing } from "react-icons/fi";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlt = Montserrat_Alternates({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-montserratAlt", // Optional: Define a CSS variable
});

export default function Footer() {
  return (
    <footer className="w-full lg:h-[430px] md:h-[460px] flex flex-col items-center align-center bg-[#24231D] text-[#A5A49A] pt-[52px] pb-0">
      <div className="h-full flex flex-col sm:flex-row flex-wrap lg:gap-12 md:gap-6 sm:gap-4 gap-8 justify-between ">
        {/* Logo & Description */}
        <div className="flex-2 min-w-[250px]">
          <Image
            src="/image/LogoF.svg"
            width={180}
            height={50}
            alt="Logo"
            className="mb-4"
          />
          <p className="md:text-[16px] sm:text-sm font-normal">
            All-in-one ecommerce platform to manage, sell, and grow—without code
          </p>

          {/* Follow Us */}
          <div className="mt-15 gap-2 sm:block hidden">
            <h2
              className={`font-semibold  text-lg mb-2 ${montserratAlt.className} text-white`}
            >
              Follow Us
            </h2>
            <div className="flex gap-4">
              <a href="#">
                <button className="w-12 h-12 flex items-center justify-center bg-transparent rounded-full border border-white">
                  <FaInstagram className="text-xl" />
                </button>
              </a>
              <a href="#">
                <button className="w-12 h-12 flex items-center justify-center bg-transparent rounded-full border border-white">
                  <FaFacebookF className="text-xl" />
                </button>
              </a>
              <a href="#">
                <button className="w-12 h-12 flex items-center justify-center bg-transparent rounded-full border border-white">
                  <FaGithub className="text-xl" />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className=" lg:w-[40%] md:w-[48%] sm:w-[50%] flex flex-col sm:flex-row sm:gap-0 gap-8">
          <div className="flex-1 min-w-[150px]">
            <h2
              className={`font-semibold sm:text-lg text-2xl mb-4 ${montserratAlt.className} text-white`}
            >
              Quick Links
            </h2>{" "}
            <div className=""></div>
            <ul className="space-y-5 sm:text-xs md:text-sm ">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          {/* Get in Touch */}
          <div className="flex-1 min-w-[200px]">
            <h2
              className={`font-semibold sm:text-lg text-2xl mb-4 ${montserratAlt.className} text-white`}
            >
              Get in Touch
            </h2>
            <div className="flex items-start gap-3 mb-5 md:text-sm sm:text-xs">
              <FaRegEnvelope className="text-xl mt-[2px]" />
              <span>support@loopscart.com</span>
            </div>
            <div className="flex items-start gap-3 md:text-sm sm:text-xs">
              <FiPhoneOutgoing className="text-xl mt-[2px]" />
              <span>+977 982-3821451</span>
            </div>
          </div>

          {/* Follow Us */}
          <div className="gap-2 sm:hidden block">
            <h2
              className={`font-semibold  sm:text-lg text-2xl mb-2 ${montserratAlt.className}`}
            >
              Follow Us
            </h2>
            <div className="flex gap-4">
              <a href="#">
                <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-transparent rounded-full border border-white">
                  <FaInstagram className="sm:text-2xl text:xl" />
                </button>
              </a>
              <a href="#">
                <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-transparent rounded-full border border-white">
                  <FaFacebookF className="sm:text-2xl text:xl" />
                </button>
              </a>
              <a href="#">
                <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-transparent rounded-full border border-white">
                  <FaGithub className="sm:text-2xl text:xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around w-full h-15 mt-10 text-center text-sm bg-[#1F1E17]">
        <div>
          <p>COPYRIGHT © 2025 LoopsCart E-commerce | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
