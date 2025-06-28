"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckoutFormSchema,
  CheckoutFormData,
} from "@/lib/validation/CheckoutForm/CheckoutFormSchema";
import ContactInfo from "@/components/ui/Checkout/ContactInfo";
import ShippingAddress from "@/components/ui/Checkout/ShippingAddress";
import Payment from "@/components/ui/Checkout/Payment";
import { LoginButton } from "../Buttons/LoginButton";
import { showAuthToast } from "../Toasts/ToastMessage";

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormSchema),
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Form submitted:", data);
    showAuthToast("order-success");
    // Here you would typically handle the form submission, e.g., send data to an API
  };

  return (
    <section className="w-full md:w-1/2 p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <ContactInfo register={register} errors={errors} />
        <ShippingAddress register={register} errors={errors} />
        <Payment
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />
        <LoginButton label="Place Order" variant="primary" type="submit" />
      </form>
    </section>
  );
}
