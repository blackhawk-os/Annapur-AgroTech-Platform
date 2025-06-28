import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CheckoutFormData } from "@/lib/validation/CheckoutForm/CheckoutFormSchema";
import TextInput from "@/components/TextInput";
import SectionHeader from "./SectionHeader";

type Props = {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
};

export default function ContactInfo({ register, errors }: Props) {
  return (
    <div>
      <SectionHeader title="Contact Info" />
      <div className="flex flex-col gap-4">
        <TextInput
          label="Email *"
          placeholder="Enter your email"
          {...register("email")}
          error={errors.email?.message}
        />
        <TextInput
          label="Phone *"
          placeholder="Enter your phone number"
          {...register("phone")}
          error={errors.phone?.message}
        />
      </div>
    </div>
  );
}
