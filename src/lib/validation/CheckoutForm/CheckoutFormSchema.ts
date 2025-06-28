import { z } from "zod";

export const CheckoutFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(7, { message: "Phone number too short" }),
  fullName: z.string().min(2, { message: "Full name is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  landmark: z.string().optional(),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  paymentMethod: z.enum(["esewa", "cod"]),
});

export type CheckoutFormData = z.infer<typeof CheckoutFormSchema>;
