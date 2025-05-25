import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import { Marquee } from '@/components/Marquee';
import { Article } from "@/components/Article";
import { Faq } from "@/components/Faq";
export default function Home() {
  return (
    <>
      {/* Components yesko muni*/}
      <Banner />
      <Explore />
      <Marquee />
      <Article />
      <Faq />
      {/* Components yesko maathi*/}
    </>
  );
}
