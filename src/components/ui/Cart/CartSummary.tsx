"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/lib/context/useCart";
import { LoginButton } from "@/components/ui/Buttons/LoginButton";

export default function CartSummary() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = total >= 1000 ? 0 : 50; // Free shipping over NPR 1000
  const taxRate = 0.1; // 10% Tax
  const taxAmount = total * taxRate;
  const finalTotal = total + shippingCost + taxAmount;

  return (
    <div className="mt-8 bg-gray-100 p-4 rounded-md w-full ml-auto space-y-3 shadow-sm">
      <div className="flex justify-between">
        <span>Subtotal ({cart.length} items)</span>
        <span>NPR {total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping</span>
        <span>NPR {shippingCost.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax (10%)</span>
        <span>NPR {taxAmount.toFixed(2)}</span>
      </div>

      <hr />

      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>NPR {finalTotal.toFixed(2)}</span>
      </div>

      <Link href="/checkout">
        <LoginButton
          label="PROCEED TO CHECKOUT"
          variant="primary"
          className="w-full mt-4 cursor-pointer"
        />
      </Link>
    </div>
  );
}
