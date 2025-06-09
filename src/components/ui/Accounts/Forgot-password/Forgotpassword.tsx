"use client";

import { useState } from "react";
import { LoginButton } from "@/components/ui/Buttons/LoginButton";
import Link from "next/link";
import TextInput from "@/components/TextInput";

export default function ForgotPassword() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(98|97)\d{8}$/;

    if (!emailOrPhone) {
      newErrors.emailOrPhone = "Email or phone is required";
    } else if (
      !emailRegex.test(emailOrPhone) &&
      !phoneRegex.test(emailOrPhone)
    ) {
      newErrors.emailOrPhone = "Invalid email or phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Reset password for:", emailOrPhone);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300 shadow-sm">

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
              If an account exists for {emailOrPhone}, you'll receive password
              reset instructions shortly.
            </p>
            <LoginButton
              variant="primary"
              onClick={() => setIsSubmitted(false)}
              label="Resend Instructions"
              className="w-full py-3 text-lg font-semibold bg-[#88B04B] hover:bg-[#78a03f]"
            />
            <p className="mt-4 text-center text-sm text-gray-600">
              Remembered your password?{" "}
              <Link
                href="/acccount/login"
                className="font-medium text-[#88B04B] hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
              <p className="text-gray-600 mt-2">
                Enter your email or phone number to reset your password
              </p>
            </div>

            <TextInput
              label="Email or Phone Number"
              name="emailOrPhone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Enter email or phone"
              error={errors.emailOrPhone}
            />

            <LoginButton
              variant="primary"
              type="submit"
              label="Reset Password"
              className="w-full py-3 text-lg font-semibold bg-[#88B04B] hover:bg-[#78a03f]"
            />

            <p className="text-center text-sm text-gray-600">
              Remembered your password?{" "}
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