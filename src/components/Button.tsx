import Link from "next/link";

interface ButtonProps {
  text: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  href,
  target,
  rel,
  onClick,
}) => {
  const baseStyles =
    "px-4 py-2 text-sm md:max-lg:text-xs shadow font-montserrat font-semibold flex items-center gap-2";

  if (href) {
    const isExternal = href.startsWith("http");
    const linkProps = isExternal ? { target, rel } : {};
    return (
      <Link href={href} {...linkProps}>
        <span className={`${baseStyles} ${className}`}>{text}</span>
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
