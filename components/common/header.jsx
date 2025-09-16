"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./button";
import NAVS from "@/contants/NAVIGATIONS";

const Header = () => {
  const [isNavActive, setNavActive] = useState(false);

  return (
    <header className="wrapper py-8 flex items-center justify-between relative">
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
      <nav className="hidden items-center gap-4 lg:flex">
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
      <nav className="lg:hidden ">
        <span
          className="hamburger cursor-pointer"
          onClick={() => setNavActive(true)}
        >
          <Image src="/hamburger.svg" alt="hamburger" width={32} height={32} />
        </span>
        <div
          className={`fixed top-0 p-[32px] w-[320px] h-[100vh] bg-[#091C23] ${
            isNavActive ? "right-0" : "-right-[400px]"
          } transition-all duration-500`}
        >
          <div className="top flex justify-end">
            <span
              className="close cursor-pointer"
              onClick={() => setNavActive(false)}
            >
              <Image
                src="/close-icon.svg"
                alt="close icon"
                width={32}
                height={32}
              />
            </span>
          </div>
          <ul className="flex flex-col gap-6 text-white text-[16px] font-[500]">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
