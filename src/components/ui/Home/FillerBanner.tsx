import React from "react";
import FillerBannerCard from "@/components/ui/Cards/FillerBannerCard";
import { url } from "inspector";

export default function FillerBanner() {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-7 py-10 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url('/image/banner/banner-bg.png')` }}
    >
      <FillerBannerCard
        text="WELLNESS FIRST"
        text2="Organic Teas and Healing Herbs"
        imageUrl="/image/fillers/fillerimage-1.jpg"
      />
      <FillerBannerCard
        text="FRESH AND PURE"
        text2="Locally Grown Organic Vegetables"
        imageUrl="/image/fillers/fillerimage-2.webp"
      />
    </div>
  );
}
