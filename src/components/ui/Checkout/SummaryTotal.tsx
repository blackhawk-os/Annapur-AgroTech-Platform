import React from "react";
import { CartItem } from "@/lib/context/CartContext";

type Props = {
  cart: CartItem[];
};

export default function SummaryTotal({ cart }: Props) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountCharge = subtotal >= 1000 ? 100 : 0; // Rs. 100 discount for orders above Rs. 1000
  const discountedSubtotal = subtotal - discountCharge;
  const total = discountedSubtotal >= 0 ? discountedSubtotal : 0; // Ensure total is not negative

  return (
    <div className="space-y-2 border-t pt-4">
      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>Rs. {subtotal}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Discount</span>
        <span>Rs. {discountCharge}</span>
      </div>
      <div></div>
      <div className="flex justify-between text-lg font-bold pt-2">
        <span>Total</span>
        <span>Rs. {total}</span>
      </div>
    </div>
  );
}
