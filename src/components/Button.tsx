interface ButtonProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  highlight?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  icon,
  iconPosition = "right",
}) => {
  return (
    <button
      className={`px-4 py-2 text-sm md:max-lg:text-xs shadow font-montserrat font-semibold flex items-center text-center gap-2 ${className}`}
    >
      {icon && iconPosition === "left" && icon}
      {text}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
