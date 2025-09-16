"use client";

import { motion } from "framer-motion";
import React from "react";

const TextAnimation = ({ titles = [] }) => {
  return (
    <div className="inline-block text-[#5F82FF] font-semibold animate-text-slide h-[82px] overflow-hidden leading-[64px] ml-2">
      <motion.div
        className="h-[246px]"
        animate={{
          y: [0, -82, -82, -164, -164, 0, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "anticipate" }}
      >
        {titles.map((title, index) => (
          <span key={index} className="block h-[82px]">
            {title}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
