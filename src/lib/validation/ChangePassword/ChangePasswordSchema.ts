import { z } from "zod";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const ChangePasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "Must have at least 1 character" })
      .regex(passwordValidation, {
        message:
          "Your password must contain uppercase, lowercase, number, and special characters",
      }),
    confirm_password: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type TChangePasswordData = z.infer<typeof ChangePasswordSchema>;
