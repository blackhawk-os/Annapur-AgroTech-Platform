
'use client';

import { useState } from 'react';
import { LoginButton } from '@/components/ui/LoginButton';
import HeaderText from '@/components/HeaderText';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        emailOrPhone: '',
        password: '',
        rememberMe: false,
    });

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Image Section */}
            <div className="hidden lg:flex w-1/2 relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/image/explore-image.jpg')" }}>

                </div>

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
                            href="/account/create-account"
                            className="flex-1 text-2xl font-semibold text-center text-[#88B04B] border-b-2 border-[#88B04B] pb-1"
                        >
                        
                            Login
                        </Link>
                        <Link
                            href="/account/login"
                            className={`flex-1 text-2xl font-medium text-center transition-all border-b-2 pb-1 ${false
                                    ? 'text-[#88B04B] border-[#88B04B]'
                                    : 'text-gray-400 border-transparent hover:text-[#88B04B]'
                                }`}
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-5 mt-10">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email or Phone Number
                            </label>
                            <input
                                type="text"
                                value={credentials.emailOrPhone}
                                onChange={(e) => setCredentials({ ...credentials, emailOrPhone: e.target.value })}
                                placeholder="Enter email or phone"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#88B04B] focus:ring-2 focus:ring-[#88B04B]/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 pr-10 focus:border-[#88B04B] focus:ring-2 focus:ring-[#88B04B]/50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={credentials.rememberMe}
                                    onChange={(e) => setCredentials({ ...credentials, rememberMe: e.target.checked })}
                                    className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                                />
                                Remember me
                            </label>
                            <Link
                                href="/account/forgot-password"
                                className="text-sm font-medium text-accent hover:underline hover:text-[#88B04B]"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <LoginButton
                            variant="primary"
                            type="submit"
                            label="Login"
                            className="w-full py-3 text-lg font-semibold bg-[#88B04B] hover:bg=[#78a03f]"
                        />

                        <p className=" text-center text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link href="/account/create-account" className="text-sm font-medium text-accent hover:underline text-[#88B04B]">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}