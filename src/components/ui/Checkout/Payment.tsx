import React from "react";
import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { CheckoutFormData } from "@/lib/validation/CheckoutForm/CheckoutFormSchema";
import Image from "next/image";
import SectiomnHeader from "./SectionHeader";

type Props = {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  setValue: UseFormSetValue<CheckoutFormData>;
  watch: UseFormWatch<CheckoutFormData>;
};

export default function Payment({ register, errors, setValue, watch }: Props) {
  const selected = watch("paymentMethod");

  return (
    <div>
      <SectiomnHeader title="Payment Method" />

      <div className="space-y-4">
        {/* Esewa */}
        <label className="flex items-start gap-3 p-4 border border-gray-300 cursor-pointer rounded-md">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/image/checkout-icons/esewa.webp"
                alt="Esewa"
                height={40}
                width={40}
                className="w-10 h-10"
              />
              <div>
                <span className="font-medium">Esewa</span>
                <p className="text-sm text-gray-500">
                  Pay instantly with your Esewa account.
                </p>
              </div>
            </div>
            <input
              type="radio"
              value="esewa"
              {...register("paymentMethod")}
              checked={selected === "esewa"}
              onChange={() => setValue("paymentMethod", "esewa")}
            />
          </div>
        </label>

        {/* COD */}
        <label className="flex items-start gap-3 p-4 border border-gray-300 cursor-pointer rounded-md">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/image/checkout-icons/cod.svg"
                alt="Cash on Delivery"
                height={40}
                width={40}
                className="w-10 h-10"
              />
              <div>
                <span className="font-medium">Cash on Delivery</span>
                <p className="text-sm text-gray-500">
                  Pay when the product is delivered to your door.
                </p>
              </div>
            </div>
            <input
              type="radio"
              value="cod"
              {...register("paymentMethod")}
              checked={selected === "cod"}
              onChange={() => setValue("paymentMethod", "cod")}
            />
          </div>
        </label>

        {errors.paymentMethod && (
          <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>
        )}
      </div>
    </div>
  );
}
