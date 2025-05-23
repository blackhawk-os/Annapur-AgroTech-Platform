interface ButtonProps {
  text: string;
  text2: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, text2, className = "" }) => {
  return (
    <div>
 {/* <div className={`text-center ${className}`}> this line can be written instead of above as it centers the content.  */}
      <p
        style={{ fontFamily: "var(--font-covered)" }}
        className={`text-[24px]  font-normal text-[#EEC044] ${className}`}
      >
        {text}
      </p>
      <h2
        className={`text-[40px] font-manrope font-bold text-gray-800 mb-3 text-center ${className}`}
        // className={`text-[40px] font-manrope font-bold text-gray-800 mb-3  ${className}`} {/* This can be written instead of above code */}   
      >
        {text2}
      </h2>
    </div>
  );
};

export default Button;
