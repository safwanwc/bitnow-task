"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const CursorAnimations = () => {
  return (
    <section className="w-dvw h-dvh absolute top-0 left-0 pointer-events-none">
      <motion.div
        className="cursor-one flex items-center"
        animate={{
          x: ["50vw", "80vw", "80vw", "50vw"],
          y: ["50vh", "50vh", "80vh", "50vh"],
        }}
        initial={{ x: "50vw", y: "50vh" }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img
          style={{ y: -18, x: 32 }}
          animate={{
            visibility: ["hidden", "hidden", "visible", "hidden", "hidden"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "anticipate" }}
          src="/cursor.svg"
          alt="cursor"
          width={24}
          height={24}
        />
        <motion.img
          style={{ y: 18, rotate: -90, x: 10 }}
          animate={{
            visibility: ["visible", "visible", "hidden", "hidden", "visible"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "anticipate" }}
          src="/cursor.svg"
          alt="cursor"
          width={24}
          height={24}
        />
        <motion.span
          animate={{
            borderTopLeftRadius: ["12px", "12px", "0", "12px"],
            borderBottomLeftRadius: ["0", "0", "12px", "0"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-[#5F82FF] rounded-[12px] px-3 py-1 text-white text-[14px] font-semibold"
        >
          Comprehensive Support
        </motion.span>
      </motion.div>
      <motion.div
        className="cursor-two flex items-center relative"
        animate={{
          x: ["28vw", "50vw", "40vw", "28vw"],
          y: ["75vh", "75vh", "85vh", "75vh"],
        }}
        initial={{ x: "28vw", y: "75vh" }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/cursor.svg"
          alt="cursor"
          width={24}
          height={24}
          className="absolute -left-4 -top-4"
        />
        <span
          style={{ borderTopLeftRadius: "0" }}
          className="bg-[#5F82FF] rounded-[12px] px-3 py-1 text-white text-[14px] font-semibold "
        >
          Comprehensive Support
        </span>
      </motion.div>
    </section>
  );
};

export default CursorAnimations;
