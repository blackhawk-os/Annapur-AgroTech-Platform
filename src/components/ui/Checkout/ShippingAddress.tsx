import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CheckoutFormData } from "@/lib/validation/CheckoutForm/CheckoutFormSchema";
import TextInput from "@/components/TextInput";
import SectionHeader from "./SectionHeader";

type Props = {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
};

export default function ShippingAddress({ register, errors }: Props) {
  return (
    <div>
      <SectionHeader title="Shipping Address" />
      <div className="flex flex-col gap-4">
        <TextInput
          label="Full Name *"
          placeholder="Enter your full name"
          {...register("fullName")}
          error={errors.fullName?.message}
        />
        <TextInput
          label="Address *"
          placeholder="Enter your address"
          {...register("address")}
          error={errors.address?.message}
        />
        <TextInput
          label="Landmark *"
          placeholder="Optional landmark"
          {...register("landmark")}
          error={errors.landmark?.message}
        />
        <TextInput
          label="City *"
          placeholder="Enter your city"
          {...register("city")}
          error={errors.city?.message}
        />
        <TextInput
          label="State *"
          placeholder="Enter your state"
          {...register("state")}
          error={errors.state?.message}
        />
      </div>
    </div>
  );
}
