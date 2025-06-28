"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordInput,
} from "@/lib/validation/PasswordReset/PasswordResetSchema";
import { LoginButton } from "@/components/ui/Buttons/LoginButton";
import Link from "next/link";
import TextInput from "@/components/TextInput";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [showOTP, setShowOTP] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordInput) => {
    if (!showOTP) {
      setSubmittedEmail(data.email);
      setShowOTP(true);
    } else {
      const enteredOtp = otp.join("");
      console.log("Verifying OTP:", enteredOtp);

      router.push("/forgot-password/reset-password");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-white p-4">
      <div className="w-full max-w-md bg-gray-50 p-8 rounded-lg border border-gray-300 shadow-sm mt-20">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {showOTP ? "Enter OTP" : "Forgot Password"}
            </h1>
            {showOTP && (
              <p className="text-sm text-gray-600 mt-2">
                We have sent you an OTP to your mail at:{" "}
                <span className="font-medium text-black">{submittedEmail}</span>
              </p>
            )}
          </div>

          {!showOTP && (
            <>
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
            </>
          )}

          {showOTP && (
            <div className="flex justify-between gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  className="w-12 h-12 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#88B04B]"
                />
              ))}
            </div>
          )}

          <LoginButton
            variant="primary"
            type="submit"
            label={showOTP ? "Verify OTP" : "Send OTP"}
            className="w-full py-3 text-lg font-semibold bg-[#88B04B] hover:bg-[#78a03f]"
          />

          <p className="text-center text-sm text-gray-600">
            <Link
              href="/login"
              className="font-medium text-[#88B04B] hover:underline"
            >
              Go back to Login Page
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
