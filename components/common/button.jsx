import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`rounded-xl bg-[#5F82FF] text-[16px] text-white py-2 px-4 font-semibold cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
