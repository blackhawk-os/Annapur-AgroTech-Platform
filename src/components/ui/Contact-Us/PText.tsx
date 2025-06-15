"use client";
import React from "react";

interface PTextProps {
  text: string;
  className?: string;
}

const PText: React.FC<PTextProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`font-dm-sans font-normal text-[14px] text-[#757575] tracking-[0.03em] ${className}`}
    >
      {text}
    </p>
  );
};

export default PText;
