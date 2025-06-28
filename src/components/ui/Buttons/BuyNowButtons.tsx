import React from "react";

type BuyNowButtonProps = {
  onClick: () => void;
  isLoading?: boolean;
};

const BuyNowButton: React.FC<BuyNowButtonProps> = ({
  onClick,
  isLoading = false,
}) => (
  <button
    className="bg-gray-200 hover:bg-gray-300 text-[#151515] px-6 py-2 ml-4 rounded-lg text-sm font-semibold"
    onClick={onClick}
    disabled={isLoading}
  >
    {isLoading ? "Processing..." : "Buy Now"}
  </button>
);

export default BuyNowButton;
