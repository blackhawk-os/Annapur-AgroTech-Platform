// components/Market/ProductCard.tsx
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-green-700">{product.name}</h3>
        <p className="text-gray-500  text-sm line-clamp-2">
          {product.description}
        </p>
        <p className="text-[#88B04B] text-sm font-medium">
          Category:{" "}
          <span className=" text-gray-500 text-xs font-normal">
            {product.category}
          </span>
        </p>
        <div className="flex justify-between items-center">
          <span className="text-md font-bold text-green-600">
            NRs. {product.price}
          </span>
          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
