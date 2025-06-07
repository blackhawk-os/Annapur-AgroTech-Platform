import HeaderText from "@/components/HeaderText";
import TestimonialSlider from "@/components/TestimonialSlider";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  avatar?: string; // URL to an image
  rating?: number; // Rating from 1 to 5
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "This platform changed my life. I now sell my vegetables directly to customers and get fair prices without any middlemen!",
    author: "Kamal Thapa",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Buying fresh products from local farmers has never been this easy. The quality is amazing, and I feel good supporting our farmers.",
    author: "Rashmi Shrestha",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Before this platform, I had to rely on traders who paid us very little. Now I can manage my prices and talk to buyers directly.",
    author: "Suman Gurung",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 4,
  },
  {
    id: 4,
    quote:
      "As a shop owner, I now get farm-fresh produce directly from the source. It’s cost-effective, reliable, and the farmers are happy too!",
    author: "Pawan Bhattarai",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "I added my farm's products in just a few clicks. The dashboard is easy to use, and I love getting direct feedback from my customers.",
    author: "Anita Bhandari",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 4,
  },
  {
    id: 6,
    quote:
      "This is the future of agriculture in Nepal. It's transparent, fair, and makes life easier for both farmers and consumers.",
    author: "Ramesh Karki",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "Thanks to this platform, I’ve stopped using middlemen altogether. I earn more and have built relationships with repeat customers.",
    author: "Mina KC",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-16 text-center"
      style={{ backgroundImage: "url(/image/banner/testimonial-bg.png)" }}
    >
      <HeaderText text="What Our Customers Say" text2="TESTIMONIALS" />

      {/* Testimonial Slider */}
      <div className="mt-10 mb-16 sm:px-4">
        <TestimonialSlider testimonials={testimonialsData} />
      </div>
    </section>
  );
}
