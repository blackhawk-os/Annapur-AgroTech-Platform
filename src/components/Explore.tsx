import React from "react";
import FeatureCard from "./FeatureCard";

const Explore = () => {
  return (
    <div className="w-full max-w[1920px] mx-auto px-4 py-12 md:py-20">
      {/*Why Choose Agrios Market Section */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3x1 md:text-4x1 font-bold text-gray-800 mb-8 text-center">
          Why Choose Agrios Market
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          There are many variations of passenger of available but the majority
          have suffered alteration in some form by injected hutter or random
          weed which don&apos;t look even.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1*/}

          <FeatureCard
            text="Quality Organic Food"
            text2="There are variation You need to be sure there is anything hidden
              in the middle of text."
          />
          {/* 
          
                        
          */}
          {/* Feature 2 */}
          <FeatureCard
            text="Quality Products"
            text2="There are variation You need to be sure there is anything hidden
              in the middle of text."
          />

          {/* Feature 3 */}
          <FeatureCard
            text="Professional Farmers"
            text2="These are variation You need to be sure there is anything hidden
              in the middle of text."
          />
        </div>

        {/*Divider*/}
        <div className="border-t border-gray-200 my-12"></div>

        {/*News and articles section*/}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              News & Articles
            </h2>
            <span className="text-gray-500">From: No Blog</span>
          </div>
          {/* Article Card */}
          <div className=" bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Bringing Food Production Back To Cities
              </h3>
              <p className="text-gray-600 mb-4">
                The Future of Farming, Smart Irrigation Solutions
              </p>
              <button
                className="bg-[#88B04B] hover:bg-[#7a9e44] text-white font-medium py-2 px-6 rounded transition-colors"
                style={{ backgroundColor: "#88B04B)" }}
              >
                Read More
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Bringing Food Production Back To Cities
              </h3>
              <p className="text-gray-600 mb-4">
                The Future of Farming, Smart Irrigation Solutions
              </p>
              <button
                className="bg-[#88B04B] hover:bg-[#7a9e44] text-white font-medium py-2 px-6 rounded transition-colors"
                style={{ backgroundColor: "#88B04B)" }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
