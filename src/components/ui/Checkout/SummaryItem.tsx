import React from "react";
import Image from "next/image";
import { CartItem } from "@/lib/context/CartContext";
import { useCart } from "@/lib/context/useCart";
import { Trash2 } from "lucide-react";

type Props = {
  item: CartItem;
};

export default function SummaryItem({ item }: Props) {
  const { removeItem } = useCart();

  const handleDelete = () => {
    removeItem(item.id);
  };
  return (
    <div className="flex items-center justify-between border-b pb-3">
      <div className="flex gap-4 justify-between items-center">
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            width={60}
            height={60}
            className="rounded object-cover"
          />
        )}
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 transition"
          title="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
      <p className="font-semibold">Rs. {item.price * item.quantity}</p>
    </div>
  );
}
