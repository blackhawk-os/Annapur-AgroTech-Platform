import React from 'react'
import  FillerBannerCard  from "./ui/FillerBannerCard";
import { url } from 'inspector';

export default function FillerBanner() {
  return (
    <div className='flex flex-row justify-center items-center gap-7 py-10' style={{ backgroundImage: `url('/image/banner/banner-bg.png')`}}>
      <FillerBannerCard text="WELLNESS FIRST" text2="Organic Teas and Healing Herbs" imageUrl="/image/fillers/fillerimage-1.jpg" />
      <FillerBannerCard text="FRESH AND PURE" text2="Locally Grown Organic Vegetables" imageUrl="/image/fillers/fillerimage-2.webp" />
    </div>
  )
}
