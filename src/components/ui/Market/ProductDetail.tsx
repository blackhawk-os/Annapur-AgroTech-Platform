// components/ProductDetail.tsx
"use client";

import Image from "next/image";
import { Product } from "@/lib/types/Product";

interface Props {
  product: Product;
}

const ProductDetail: React.FC<Props> = ({ product }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded shadow"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-500 mb-4">{product.category}</p>
        <p className="text-lg font-semibold text-green-700 mb-4">
          NPR {product.price}
        </p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
