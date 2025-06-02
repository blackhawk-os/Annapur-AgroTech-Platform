import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import { Marquee } from "@/components/Marquee";
import { Article } from "@/components/Article";
import { Faq } from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import FeaturedProducts from "@/components/FeaturedProducts";
import FillerBanner from "@/components/FillerBanner";
import { Filter } from "@/components/Filter";
export default function Home() {
  return (
    <>
      {/* Components yesko muni*/}
      <Banner />
      <FeaturedProducts />
      <FillerBanner />
      <Filter />
      <Explore />
      <Marquee />
      <Article />
      <Testimonials />
      <Faq />
      {/* Components yesko maathi*/}
    </>
  );
}
