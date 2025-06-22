// components/ProductDetail.tsx
"use client";

import Image from "next/image";
import { Product } from "@/lib/types/Product";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "../Buttons/AddToCartButton";
import BuyNowButton from "../Buttons/BuyNowButtons";
import { useCart } from "@/lib/context/useCart";

interface Props {
  product: Product;
}

const ProductDetail: React.FC<Props> = ({ product }) => {
  const handleQuantityChange = (qty: number) => {
    // Handle quantity change (e.g. update cart, etc.)
    console.log("Selected quantity:", qty);
  };
  return (
    <div className="max-w-5xl ml-20 py-8 flex flex-row gap-10">
      <div className="">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-lg shadow-lg object-cover w-[600px] h-[400px]"
        />
      </div>
      <div>
        <h1 className="text-2xl text-[#88B04B] font-bold mb-2">
          {product.name}
        </h1>
        <p className="text-gray-700 mb-4">
          {product.short_description || "No description available."}
        </p>
        <p className="text-[#88B04B] font-semibold mb-4">
          Category:{" "}
          <span className="font-semibold text-[#151515]">
            {product.category}
          </span>{" "}
        </p>
        <p className="text-lg font-semibold text-[#88B04B] mb-4">
          Price: <span className="text-[#151515]">NPR {product.price}</span> /kg
        </p>
        <QuantitySelector
          min={1}
          max={10}
          initial={1}
          onChange={handleQuantityChange}
        />

        <div className="mt-6">
          <AddToCartButton onClick={() => {}} />
          <BuyNowButton onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
