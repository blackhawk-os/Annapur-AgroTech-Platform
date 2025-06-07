import Banner from "@/components/ui/Home/Banner";
import Explore from "@/components/ui/Home/Explore";
import { Marquee } from "@/components/Marquee";
import { Article } from "@/components/ui/Home/Article";
import { Faq } from "@/components/ui/Home/Faq";
import Testimonials from "@/components/ui/Home/Testimonials";
import FeaturedProducts from "@/components/ui/Home/FeaturedProducts";
import FillerBanner from "@/components/ui/Home/FillerBanner";
export default function Home() {
  return (
    <>
      {/* Components yesko muni*/}
      <Banner />
      <FeaturedProducts />
      <FillerBanner />
      <Explore />
      <Marquee />
      <Article />
      <Testimonials />
      <Faq />
      {/* Components yesko maathi*/}
    </>
  );
}
