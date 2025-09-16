import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  image = "",
  name = "",
  position = "",
  title = "",
  quote = "",
  index,
}) => {
  return (
    <div className="bg-[#1F54644D] p-6 w-[300px] rounded-2xl relative overflow-hidden">
      <div className="text-center">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-[120px] h-[120px] rounded-full object-cover mx-auto"
        />
        <h3 className="text-white text-[20px] font-poppins font-semibold mt-4">
          {name}
        </h3>
        <p className="text-[#A1B2BD] text-[16px] font-poppins">{position}</p>
      </div>
      <div className="content mt-4">
        <span className="title text-white">{title}</span>
        <p className="text-[#F1F1F1] text-[16px] font-poppins mt-2">
          "{quote}"
        </p>
      </div>
      {index % 2 === 0 ? (
        <span className="ellipse absolute -right-[80px] -top-[80px] block w-[180px] h-[180px] rounded-full border-[#fd9c001b] border-[28px]"></span>
      ) : (
        <span className="ellipse absolute -left-[80px] -bottom-[80px] block w-[140px] h-[140px] rounded-full border-[#fd9c001b] border-[20px]"></span>
      )}
    </div>
  );
};

export default TestimonialCard;
