"use client";

import React from "react";
import { useCart } from "@/lib/context/useCart";
import SummaryItem from "./SummaryItem";
import SummaryTotal from "./SummaryTotal";

export default function Summary() {
  const { cart } = useCart();

  return (
    <section className="w-full md:w-1/2 bg-gray-100 p-6 space-y-6">
      <h2 className="text-xl font-semibold">Order Summary</h2>

      <div className="space-y-4">
        {cart.length > 0 ? (
          cart.map((item) => <SummaryItem key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>

      <SummaryTotal cart={cart} />
    </section>
  );
}
