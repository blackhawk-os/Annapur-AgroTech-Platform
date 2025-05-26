'use client';

import { useState, useMemo } from 'react';
import { LoginButton } from '@/components/ui/LoginButton';
import HeaderText from '@/components/HeaderText';
import Link from 'next/link';
import { FaEye, FaEyeSlash, FaSeedling, FaUserTie } from 'react-icons/fa';

const checkPasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score++;
    return score;
};

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [userType, setUserType] = useState<'farmer' | 'buyer' | null>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const passwordStrength = useMemo(
        () => checkPasswordStrength(formData.password),
        [formData.password]
    );

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Full Image Section with Overlay Text */}
            <div className="hidden lg:flex w-1/2 relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/image/explore-image-1.jpg')" }}>

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
                    <div className="flex gap-4 mb-8 justify-between">
                        <Link
                            href="/account/login"
                            className={`flex-1 text-2xl font-medium text-center transition-all border-b-2 pb-1 ${false
                                ? 'text-[#88B04B] border-[#88B04B]'
                                : 'text-gray-400 border-transparent hover:text-[#88B04B]'
                                }`}
                        >
                            Login
                        </Link>
                        <Link
                            href="/account/create-account"
                            className="flex-1 text-2xl font-semibold text-center text-[#88B04B] border-b-2 border-[#88B04B] pb-1"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* User Type Selection */}
                    <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-700 mb-4">I am a</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setUserType('farmer')}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all relative overflow-hidden
                                    ${userType === 'farmer'
                                    ? 'border-[#88B04B] bg-[#88B04B]/10'
                                    : 'border-gray-200 hover:border-[#88B04B]/50'
                                    }`}
                                    style={{ backgroundImage: "url('/image/banner/banner-bg.png')",
                                         backgroundSize:'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center', }}
                          >
                                <FaSeedling className={`w-8 h-8 ${userType === 'farmer' ? 'text-[#88B04B]' : 'text-gray-400'
                                    }`} />
                                <span className={`font-medium ${userType === 'farmer' ? 'text-[#88B04B]' : 'text-gray-600'
                                    }`}>Farmer</span>
                            </button>



                            <button
                                type="button"
                                onClick={() => setUserType('buyer')}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all relative overflow-hidden
                                    ${userType === 'buyer'
                                    ? 'border-[#88B04B] bg-[#88B04B]/10'
                                    : 'border-gray-200 hover:border-[#88B04B]/50'
                                    }`}
                                    style={{ backgroundImage: "url('/image/banner/banner-bg.png')",
                                         backgroundSize:'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center', }}
                                     
                            >
                                <FaUserTie className={`w-8 h-8 ${userType === 'buyer' ? 'text-[#88B04B]' : 'text-gray-400'
                                    }`} />
                                <span className={`font-medium ${userType === 'buyer' ? 'text-[#88B04B]' : 'text-gray-600'
                                    }`}>Buyer</span>
                            </button>
                        </div>
                    </div>

                    {/* Signup Form */}
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#88B04B] focus:ring-2 focus:ring-[#88B04B]/50"
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#88B04B] focus:ring-2 focus:ring-[#88B04B]/50"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#88B04B] focus:ring-2 focus:ring-[#88B04B]/50"
                                />
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Create a password"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 pr-10 focus:border-[#88B04B] focus:ring-2 focus:ring-[#88B04B]/50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                            {formData.password && (
                                <div className="mt-2 text-sm">
                                    <span className={`${passwordStrength < 2 ? 'text-red-500' :
                                        passwordStrength < 3 ? 'text-yellow-500' : 'text-[#88B04B]'
                                        }`}>
                                        {passwordStrength < 2 ? 'Weak' :
                                            passwordStrength < 3 ? 'Moderate' : 'Strong'}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirm your password"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 pr-10 focus:border-[#88B04B] focus:ring-2 focus:ring-[#88B04B]/50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>

                        {/* Terms & Conditions Checkbox */}
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                            <input type="checkbox" required className="mt-1 accent-[#88B04B]" />
                            <label>
                                I agree to the{' '}
                                <a href="/terms" className="text-[#88B04B] underline">Terms and Conditions</a>{' '}
                                and{' '}
                                <a href="/privacy" className="text-[#88B04B] underline">Privacy Policy</a>.
                            </label>
                        </div>

                        <LoginButton
                            variant="primary"
                            type="submit"
                            label="Create Account"
                            className="w-full py-3 text-lg font-semibold bg-[#88B04B] hover:bg-[#78a03f]"
                        />

                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link href="/account/login" className="font-medium text-[#88B04B] hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
