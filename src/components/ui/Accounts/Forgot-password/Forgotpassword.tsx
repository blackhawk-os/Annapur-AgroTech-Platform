"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordInput,
} from "@/lib/validation/PasswordReset/PasswordResetSchema";
import { LoginButton } from "@/components/ui/Buttons/LoginButton";
import Link from "next/link";
import TextInput from "@/components/TextInput";

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordInput) => {
    console.log("Reset password for:", data.email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-white p-4">
      <div className="w-full max-w-md bg-gray-50 p-8 rounded-lg border border-gray-300 shadow-sm mt-20">
        {/* Forgot Password Content */}
        {isSubmitted ? (
          <div className="text-center py-4">
            <svg
              className="w-16 h-16 text-[#88B04B] mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <h2 className="text-2xl font-semibold mb-2">
              Reset Instructions Sent
            </h2>
            <p className="text-gray-600 mb-6">
              If an account exists for this email, you'll receive password reset
              instructions shortly.
            </p>
            <LoginButton
              variant="primary"
              onClick={() => setIsSubmitted(false)}
              label="Resend Instructions"
              className="w-full py-3 text-lg font-semibold bg-[#88B04B] hover:bg-[#78a03f]"
            />
            <p className="mt-4 text-center text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/acccount/login"
                className="font-medium text-[#88B04B] hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Forgot Password
              </h1>
            </div>

            <div className="">
              <TextInput
                label="Email"
                placeholder="Enter your email"
                {...register("email")}
                error={errors.email?.message}
              />
              <p className="font-normal text-xs text-[#565656] mt-2">
                You will receive an email with a one-time password (OTP) from us
                to reset your password.
              </p>
            </div>
            <LoginButton
              variant="primary"
              type="submit"
              label="Reset Password"
              className="w-full py-3 text-lg font-semibold bg-[#88B04B] hover:bg-[#78a03f]"
            />

            <p className="text-center text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/acccount/login"
                className="font-medium text-[#88B04B] hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
