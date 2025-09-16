import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLink = ({ title = "", link = "" }) => {
  return (
    <Link href={link} className="text-white flex items-center gap-1">
      <span className="icon text-[#5F82FF]">
        <Image
          src="/down-arrow.svg"
          className="-rotate-90"
          alt="right arrow"
          width={20}
          height={20}
          style={{
            filter:
              "invert(41%) sepia(97%) saturate(749%) hue-rotate(196deg) brightness(97%) contrast(101%)",
          }}
        />
      </span>
      <span>{title}</span>
    </Link>
  );
};

export default FooterLink;
