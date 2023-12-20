import React from "react";

const Button = ({ text, fill, outlined, lg, md, sm }) => {
  return (
    <button
      className={`btn ${fill && "bg-primary text-[#FFF]"} ${
        outlined &&
        "bg-white shadow-primary shadow-[inset_0_0_0px_2px] text-primary"
      } rounded-full font-bold ${
        lg && "px-[20px] py-[10px] lg:px-[40px] lg:py-[18px]"
      } ${md && "px-[30.4px] py-[15.2px]"} ${sm && "px-[20px] py-[10px]"}`}
    >
      {text}
    </button>
  );
};

export default Button;
