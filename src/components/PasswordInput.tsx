import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  passwordStrength?:number;
  showStrength?:boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  passwordStrength,
  showStrength = false,

  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const getStrengthLabel = (strength: number) => {
    if (strength < 2) return "Weak";
    if (strength < 3) return "Moderate";
    return "Strong";
  };

  const getStrengthColor = (strength: number) => {
    if (strength < 2) return "text-red-500";
    if (strength < 3) return "text-yellow-500";
    return "text-[#88B04B]";
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 pr-10 focus:border-[#88B04B] focus:ring-2 focus:ring-[#88B04B]/50"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {showStrength && value && (
        <div className="mt-2 text-sm">
          <span className={getStrengthColor(passwordStrength || 0)}>
            {getStrengthLabel(passwordStrength || 0)}
          </span>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
