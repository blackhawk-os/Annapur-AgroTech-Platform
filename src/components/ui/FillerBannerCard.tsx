import { ReactNode } from "react";
import Button from "../Button";
interface FillerBannerCardProps {
  text: string;
  text2: string;
  className?: string;
  imageUrl: string;
}

const FillerBannerCard: React.FC<FillerBannerCardProps> = ({
  text,
  text2,
  imageUrl,
  className = "",
}) => {
  return (
    <div className="flex flex-col items-left justify-center rounded-md w-[470px] h-[280px] p-7" style={{ backgroundImage: `url(${imageUrl})`,  }}>
        <div className="pb-5">
            <p className="text-left text-[14px] text-white tracking-[2px] font-manrope font-medium">{text}</p>
            <p className="w-[85%] text-left text-[50px] leading-[52px] text-white font-semibold mt-4" style={{ fontFamily: "var(--font-covered)" }}>{text2}</p>
        </div>
        <div className="mt-4">
            <Button text="Shop Now" className="bg-white text-[#88B04B] rounded-md hover:bg-[#88B04B]  hover:text-white transform ease-in-out duration-300"/>
        </div>

    </div>
  );
};

export default FillerBannerCard;
