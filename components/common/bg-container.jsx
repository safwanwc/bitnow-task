import Image from "next/image";
import React from "react";

const BackgroundContainer = ({ children }) => {
  return (
    <div className="bg-[#091C23] relative overflow-hidden">
      <div className="globe-1 absolute -left-[140px] top-[200px]  opacity-5">
        <Image
          className="w-[900px]"
          src="/images/globe.png"
          alt="Globe image"
          width={500}
          height={500}
        />
      </div>
      <div className="globe-1 absolute -right-[140px] top-[160vh]  opacity-5">
        <Image
          className="w-[900px]"
          src="/images/globe.png"
          alt="Globe image"
          width={500}
          height={500}
        />
      </div>
      <div className="globe-1 absolute -left-[140px] -bottom-[500px]  opacity-5">
        <Image
          className="w-[900px]"
          src="/images/globe.png"
          alt="Globe image"
          width={500}
          height={500}
        />
      </div>
      <div className="z-2">{children}</div>
    </div>
  );
};

export default BackgroundContainer;
