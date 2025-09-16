import Image from "next/image";
import React from "react";

const FeatureCard = ({ image = "", title = "", description = "" }) => {
  return (
    <div className="group w-[350px] h-[500px] relative rounded-4xl overflow-hidden">
      <div className="image w-full h-full relative">
        <Image
          src={image}
          className="w-full h-full object-cover"
          alt={title}
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
      <div className="content absolute bottom-[-100%] left-0 group-hover:bottom-0 transition-all duration-800">
        <div className="p-8">
          <h3 className="text-[24px] text-white font-poppins font-semibold">
            {title}
          </h3>
          <p className="text-[16px] text-[#E9EDF8] font-poppins mt-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
