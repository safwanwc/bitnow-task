import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./button";
import NAVS from "@/contants/NAVIGATIONS";

const Header = () => {
  return (
    <header className="wrapper py-8 flex items-center justify-between">
      <Link href="/">
        <h1 className="flex items-center gap-3">
          <span className="img ">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </span>
          <span className="text-white text-[22px] --font-monomaniac monomaniac-one-regular">
            BitNow
          </span>
        </h1>
      </Link>
      <nav className="flex items-center gap-4">
        <ul className="flex items-center gap-10 text-white text-[16px] font-[500]">
          {NAVS.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.link}
                className={`text-white font-poppins font-semibold ${
                  nav.isActive ? "!text-[#5F82FF]" : ""
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button>Get Started</Button>
      </nav>
    </header>
  );
};

export default Header;
