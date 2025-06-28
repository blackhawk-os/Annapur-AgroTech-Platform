import React from "react";
import { FaCartShopping } from "react-icons/fa6";

type AddToCartButtonProps = {
  onClick: () => void;
  isLoading?: boolean;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onClick,
  isLoading = false,
}) => (
  <button
    className="flex flex-row items-center bg-[#88B04B] hover:opacity-60 text-white px-6 py-2 rounded-lg text-sm font-semibold"
    onClick={onClick}
    disabled={isLoading}
  >
    <FaCartShopping className="mr-1 items-center" />{" "}
    {isLoading ? "Adding..." : "Add to Cart"}
  </button>
);

export default AddToCartButton;
