import React, { ReactNode } from "react";

interface FilterCardProps {
    title: string;
    children: ReactNode;
}

export const FilterCard = ({ title, children }: FilterCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
};