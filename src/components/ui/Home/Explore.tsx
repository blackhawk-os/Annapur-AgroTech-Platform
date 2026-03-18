/* eslint-disable @next/next/no-img-element */
import React from "react";
import FeatureCard from "@/components/ui/Cards/FeatureCard";
import HeaderText from "@/components/HeaderText";
import { FaHandshake, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { PiGavelFill } from "react-icons/pi";

const Explore = () => {
  return (
    <div className="">
      {/*Why Choose Annapur Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <HeaderText
          text="Our Benefits"
          text2="Why Choose Annapur Marketplace"
          className="text-center items-center"
        />
        <div className="w-full mt-8 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/image/explore-image-1.jpg"
              alt="Why Choose Agrios Market"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 max-w-xl mt-8 lg:mt-0">
            <div className="flex flex-col justify-center items-start gap-5">
              {/* Feature 1*/}

              <FeatureCard
                icon={<GiFarmer className="text-[#6f963a] mt-7 h-7 w-7" />}
                text="Direct From Farmers"
                text2="Skip the middlemen and get fresh produce straight from the source - your
                local farmers."
              />

              {/* Feature 2 */}
              <FeatureCard
                icon={
                  <FaShoppingCart className="text-[#88B04B] mt-7 h-7 w-7" />
                }
                text="Fair prices for Everyone"
                text2="Farmers earn what they truly deserve and buyers enjoy honest,
                transparent pricing."
              />

              {/* Feature 3 */}
              <FeatureCard
                icon={
                  <FaLocationDot className="text-[#A9BA56] mt-7 h-7 w-7 " />
                }
                text="Location-Based Access"
                text2="Use smart maps to discover and buy from nearby farmers with ease 
                and confidence."
              />
              {/* Feature 4 */}
              <FeatureCard
                icon={
                  <FaShoppingBasket className="text-[#C5CE38] mt-7 h-7 w-7 " />
                }
                text="Organic and Logically grown"
                text2="Find safe, natural and organic products that support your health
                and local economy."
              />
              {/* Feature 5 */}
              <FeatureCard
                icon={<PiGavelFill className="text-[#D8D665] mt-7 h-7 w-7 " />}
                text="Smart Bidding System"
                text2="Competitive yet fair- Bid on the produce you want while farmers
                pick the best offer."
              />
              {/* Feature 6 */}
              <FeatureCard
                icon={<FaHandshake className="text-[#EEDC87] mt-7 h-7 w-7 " />}
                text="Trusted Community Network"
                text2="Annapur connects concious buyers and hardworking farmers in a
                reliable, growing marketplace."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
