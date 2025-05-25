"use client";

import React from 'react';

interface MarqueeCardProps{
    icon: React.ReactNode;
    title: string;
    tagline?: string;
}

export const MarqueeCard = ({ icon, title, tagline }: MarqueeCardProps) => {
    return (
        <div className="flex items-center gap-4 px-8 py-4 bg-white rounded-lg shadow-md mx-4 min-w-[300px]">
      <div className="text-[#88B04B] text-3xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {tagline && <p className="text-sm text-gray-500 mt-1">{tagline}</p>}
      </div>
    </div>
  );
};
