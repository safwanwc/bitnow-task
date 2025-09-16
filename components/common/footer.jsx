import SOCIAL_LINKS from "@/contants/SOCIAL-LINKS";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterLink from "../footer/footer-link";
import NAVS from "@/contants/NAVIGATIONS";
import QUICK_LINKS from "@/contants/FOOTER-LINKS";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(360deg, #1F5464 0%, rgba(9, 28, 35, 0) 85.5%)",
      }}
    >
      <div className="wrapper pt-20 pb-10">
        <div className="top --flex justify-between grid grid-cols-3">
          <div className="left">
            <div className="top">
              <Link href="/">
                <h2 className="flex items-center gap-3">
                  <span className="img ">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                  </span>
                  <span className="text-white text-[22px] font-monomaniac">
                    BitNow
                  </span>
                </h2>
              </Link>
              <address className="text-white text-[16px] not-italic mt-4">
                ABC Street, New York, NY 10001
              </address>
            </div>
            <ul className="socials flex items-center gap-5 mt-20">
              {SOCIAL_LINKS.map((social, index) => (
                <li key={index} className="w-10 h-10 cursor-pointer">
                  <a
                    href={social.link}
                    target="_blank"
                    className="w-full h-full"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="w-full h-full"
                      src={social.icon}
                      alt={social.alt}
                      width={28}
                      height={28}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="middle flex gap-16">
            <div className="pages">
              <h4 className="text-[20px] text-[#D7F5FF] font-semibold">
                Other Pages
              </h4>
              <ul className="mt-5">
                {NAVS?.map((nav, index) => (
                  <li key={index} className="mt-2">
                    <FooterLink title={nav.title} link={nav.link} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="quick-links">
              <h4 className="text-[20px] text-[#D7F5FF] font-semibold">
                Quick Links
              </h4>
              <ul className="mt-5">
                {QUICK_LINKS?.map((nav, index) => (
                  <li key={index} className="mt-2">
                    <FooterLink title={nav.title} link={nav.link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right news-letter">
            <h4 className="text-[20px] text-[#D7F5FF] font-semibold">
              Newsletter
            </h4>
            <p className="text-white text-[16px] mt-5">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <form action="#" className="mt-5 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white rounded-md py-3 px-6 text-black placeholder:text-black/50 outline-0"
              />
              <button
                type="submit"
                className="w-full bg-[#5F82FF] hover:bg-[#3b5dcc] text-white text-[16px] font-semibold py-3 px-6 rounded-md mt-4"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="bottom border-t border-[#D7F5FF0A] mt-5 pt-5 flex items-center justify-between">
          <div className="language-select flex items-center gap-4 ">
            <span className="img">
              <Image src="/country.svg" alt="country" width={28} height={28} />
            </span>
            <select className="bg-transparent  text-white  rounded-md py-2 px-4 outline-0 border-0">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div className="legal flex items-center gap-5">
            <Link href="" className="text-white text-[16px]">
              Privacy Policy
            </Link>
            <Link href="" className="text-white text-[16px]">
              Notice at Collection
            </Link>
            <Link href="" className="text-white text-[16px]">
              Terms
            </Link>
            <p className="text-white text-[16px]">
              &copy; {new Date().getFullYear()} BitNow. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
