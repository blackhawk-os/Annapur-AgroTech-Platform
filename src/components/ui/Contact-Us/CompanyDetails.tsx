"use client";

import React from "react";

interface CompanyDetailsProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  text,
  icon,
  className = "",
}) => {
  return (
    <div className={`flex flex-row gap-4 items-center ${className}`}>
      <span
        aria-hidden="true"
        className="flex justify-center items-center h-[36px] w-[36px] rounded-full border border-[#DEDEDE]"
      >
        {icon}
      </span>
      <p className="font-dm-sans font-normal text-[16px] text-[#4D4D4D] tracking-[0.03em] text-left">
        {text}
      </p>
    </div>
  );
};

export default CompanyDetails;
