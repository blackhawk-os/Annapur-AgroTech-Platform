// components/ProductCard.tsx
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  farmer: string;
  location: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-sm text-gray-500">
          By {product.farmer} ({product.location})
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-[#88B04B] font-bold text-lg">
            Rs. {product.price}/kg
          </span>
          <button className="flex items-center gap-2 bg-[#88B04B] text-white px-4 py-1 rounded-md hover:bg-green-600">
            <FaCartShopping className="mr-1" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
