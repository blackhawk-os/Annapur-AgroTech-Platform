interface FeatureCardProps {
  text: string;
  text2: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  text,
  text2,
  className = "",
}) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{text}</h3>
      <p className="text-gray-600">{text2}</p>
    </div>
  );
};

export default FeatureCard;
