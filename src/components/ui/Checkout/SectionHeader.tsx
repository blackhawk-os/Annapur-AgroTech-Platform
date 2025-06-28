import React from "react";

type Props = {
  title: string;
  className?: string;
};

export default function SectionHeader({ title, className = "" }: Props) {
  return (
    <h2 className={`text-2xl font-semibold text-[#88B04B] mb-4 ${className}`}>
      {title}
    </h2>
  );
}
