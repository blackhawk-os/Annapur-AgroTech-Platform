import React from "react";

type AddToCartButtonProps = {
  onClick: () => void;
  isLoading?: boolean;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onClick,
  isLoading = false,
}) => (
  <button
    className="bg-[#88B04B] hover:opacity-60 text-white px-6 py-2 rounded-lg text-sm font-semibold"
    onClick={onClick}
    disabled={isLoading}
  >
    {isLoading ? "Adding..." : "Add to Cart"}
  </button>
);

export default AddToCartButton;
