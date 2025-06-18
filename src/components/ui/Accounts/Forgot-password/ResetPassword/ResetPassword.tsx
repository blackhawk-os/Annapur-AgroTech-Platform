"use client";

import { useState } from "react";
import TextInput from "@/components/TextInput";
import { LoginButton } from "@/components/ui/Buttons/LoginButton";
import Link from "next/link";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Resetting password to:", password);
    // Add password reset logic here
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-white p-4">
      <div className="w-full max-w-md bg-gray-50 p-8 rounded-lg border border-gray-300 shadow-sm mt-20">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Reset Password</h1>
            <p className="text-sm text-gray-600 mt-2">
              Enter your new password below.
            </p>
          </div>

          <TextInput
            name="newPassword"
            label="New Password"
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <LoginButton
            variant="primary"
            type="submit"
            label="Reset Password"
            className="w-full py-3 text-lg font-semibold bg-[#88B04B] hover:bg-[#78a03f]"
          />

          <p className="text-center text-sm text-gray-600">
            <Link
              href="/acccount/login"
              className="font-medium text-[#88B04B] hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
