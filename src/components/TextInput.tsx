import React, { forwardRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, name, error, ...rest }, ref) => {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
        <input
          ref={ref}
          name={name}
          id={name}
          {...rest}
          className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#88B04B] focus:ring-2 focus:ring-[#88B04B]/50 ${
            error ? "border-red-500" : ""
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
