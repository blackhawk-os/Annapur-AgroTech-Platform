/* eslint-disable @next/next/no-img-element */
import React from "react";
import FeatureCard from "./FeatureCard";
import HeaderText from "./HeaderText";
import { FaCheckCircle } from "react-icons/fa";

const Explore = () => {
  return (
    <div className="">
      {/*Why Choose Agrios Market Section */}
      <section className="w-full h-[900px] mx-auto px-10 py-12">
        <HeaderText
          text="Our Benefits"
          text2="Why Choose Agrios Market"
          className="text-center items-center"
        />
        <div className="w-full flex flex-row justify-center gap-4">
          <div className="w-1\2 h-[450px]">
            <img
              src="/image/explore-image-1.jpg"
              alt="Why Choose Agrios Market"
              className="w-[400px] h-[628px] object-contain"
            />
          </div>
          <div className="w-[480px]">
            {/*           <p className=" text-[16px] font-medium text-[#878680] text-left  mx-auto mb-3">
              There are many variations of passenger of available but the
              majority have suffered alteration in some form by injected hutter
              or random weed which don&apos;t look even.
            </p> */}

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
              {/* Feature 3 */}
              <FeatureCard
                icon={
                  <FaCheckCircle className="text-[#EEC044] mt-7 h-7 w-7 " />
                }
                text="Professional Farmers"
                text2="These are variation You need to be sure there is anything hidden
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
