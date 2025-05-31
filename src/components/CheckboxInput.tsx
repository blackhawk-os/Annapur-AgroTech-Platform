import React from "react";

interface CheckboxInputProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-600">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
      />
      {label}
    </label>
  );
};

export default CheckboxInput;
