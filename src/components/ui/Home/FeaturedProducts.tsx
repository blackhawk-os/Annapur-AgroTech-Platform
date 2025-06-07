// components/FeaturedProducts.tsx
import FeaturedProductsCard from "@/components/ui/Cards/FeaturedProductsCard";
import products from "@/data/featured-products.json";
import HeaderText from "@/components/HeaderText";

export default function FeaturedProducts() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <HeaderText text="Customer's Choice" text2="Featured Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <FeaturedProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
