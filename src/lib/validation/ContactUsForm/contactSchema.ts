import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number must be at most 15 digits"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
