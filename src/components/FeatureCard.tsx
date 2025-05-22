import { ReactNode } from "react";
interface FeatureCardProps {
  icon?: ReactNode;
  text: string;
  text2: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  text,
  text2,
  className = "",
}) => {
  return (
    <div
      className={`bg-white flex flex-row gap-3 justify-center items-start w-full ${className}`}
    >
      {icon && <div className="mb-4 text-2xl text-gray-600">{icon}</div>}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{text}</h3>
        <p className="text-gray-600 text-left">{text2}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
