/* eslint-disable @next/next/no-img-element */
import React from "react";
import FeatureCard from "./FeatureCard";
import Button from "./Button";
import Link from "next/link";
import HeaderText from "./HeaderText";
import { FaCheckCircle } from "react-icons/fa";

const Explore = () => {
  return (
    <div className="md:py-20">
      {/*Why Choose Agrios Market Section */}
      <section className="w-full h-[700px] mx-auto px-10 py-12 mb-16 md:mb-24">
        <div className="w-full flex flex-row justify-center">
          <div className="w-1\2 h-[450px]">
            <img
              src="/image/elements.jpg"
              alt="Why Choose Agrios Market"
              className="w-[600px] h-[600px] object-contain"
            />
          </div>
          <div className="w-[450px]">
            <HeaderText text="Our Benefits" text2="Why Choose Agrios Market" />
            <p className=" text-[16px] font-medium text-[#878680] text-left  mx-auto mb-3">
              There are many variations of passenger of available but the
              majority have suffered alteration in some form by injected hutter
              or random weed which don&apos;t look even.
            </p>

            <div className="flex flex-col justify-center items-start gap-5">
              {/* Feature 1*/}

              <FeatureCard
                icon={<FaCheckCircle className="text-[#88B04B] mt-7 h-7 w-7" />}
                text="Quality Organic Food"
                text2="There are variation You need to be sure there is anything hidden
              in the middle of text."
              />

              {/* Feature 2 */}
              <FeatureCard
                icon={<FaCheckCircle className="text-[#C5CE38] mt-7 h-7 w-7" />}
                text="Quality Products"
                text2="There are variation You need to be sure there is anything hidden
              in the middle of text."
              />

              {/* Feature 3 */}
              <FeatureCard
                icon={
                  <FaCheckCircle className="text-[#EEC044] mt-7 h-7 w-7 " />
                }
                text="Professional Farmers"
                text2="These are variation You need to be sure there is anything hidden
              in the middle of text."
              />
            </div>
            <div>
              <Link href="/">
                <Button
                  text="Explore More"
                  className="text-white bg-gradient-to-r from-[#88B04B] to-[#4BAF47] opacity-80 hover:opacity-100 rounded-md px-4 py-2 mt-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
