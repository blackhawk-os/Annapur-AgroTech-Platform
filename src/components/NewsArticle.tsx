import React from "react";
import HeaderText from "./HeaderText";

export default function NewsArticle() {
  return (
    <section>
      {/*News and articles section*/}
      <div className="items-center justify-center flex flex-col w-full">
        <div className="">
          <HeaderText
            text="From the Blog"
            text2="News & Articles"
            className="text-center"
          />
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
  );
}
