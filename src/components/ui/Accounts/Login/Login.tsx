"use client";

import { useState } from "react";
import { LoginButton } from "@/components/ui/Buttons/LoginButton";
import HeaderText from "@/components/HeaderText";
import Link from "next/link";
import TextInput from "@/components/TextInput";
import PasswordInput from "@/components/PasswordInput";
import CheckboxInput from "@/components/CheckboxInput";

export default function Login() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [credentials, setCredentials] = useState({
    emailOrPhone: "",
    password: "",
    rememberMe: false,
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(98|97)\d{8}$/;

    if (!credentials.emailOrPhone) {
      newErrors.emailOrPhone = "Email or phone is required";
    } else if (
      !emailRegex.test(credentials.emailOrPhone) &&
      !phoneRegex.test(credentials.emailOrPhone)
    ) {
      newErrors.emailOrPhone = "Invalid email or phone number";
    }

    if (!credentials.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit login logic
      console.log("Login submitted:", credentials);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/explore-image.jpg')" }}
        ></div>

        <div className="relative z-10 max-w-2xl text-center m-auto p-12 bg-black/40 rounded-lg">
          <HeaderText
            text="Welcome to Annapur"
            text2="The marketplace connecting Nepali farmers directly with buyers"
            className="mb-8 text-white"
          />
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          {/* Auth Navigation */}
          <div className="flex gap-4 mv-8 justify-between">
            <Link
              href="/acccount/login"
              className="flex-1 text-2xl font-semibold text-center text-[#88B04B] border-b-2 border-[#88B04B] pb-1"
            >
              Login
            </Link>
            <Link
              href="/acccount/create-account"
              className={`flex-1 text-2xl font-medium text-center transition-all border-b-2 pb-1 ${
                false
                  ? "text-[#88B04B] border-[#88B04B]"
                  : "text-gray-400 border-transparent hover:text-[#88B04B]"
              }`}
            >
              Create Account
            </Link>
          </div>

          {/* Login Form */}
          <form className="space-y-5 mt-10" onSubmit={handleSubmit}>
            <TextInput
              label="Email or Phone Number"
              name="emailOrPhone"
              value={credentials.emailOrPhone}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  emailOrPhone: e.target.value,
                })
              }
              placeholder="Enter email or phone"
              error={errors.emailOrPhone}
            />

            <PasswordInput
              label="Password"
              name="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                })
              }
              placeholder="Enter your password"
              error={errors.password}
            />

            <div className="flex items-center justify-between">
              <CheckboxInput
                label="Remember me"
                name="rememberMe"
                checked={credentials.rememberMe}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    rememberMe: e.target.checked,
                  })
                }
              />
            </div>
            <LoginButton
              variant="primary"
              type="submit"
              label="Login"
              className="w-full py-3 text-lg font-semibold bg-[#88B04B] hover:bg=[#78a03f]"
            />

            <p className=" text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/acccount/create-account"
                className="text-sm font-medium text-accent hover:underline text-[#88B04B]"
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
