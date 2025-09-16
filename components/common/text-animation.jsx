"use client";

import { motion } from "framer-motion";
import React from "react";

const TextAnimation = ({ titles = [] }) => {
  return (
    <div className="inline-block text-[#5F82FF] font-semibold animate-text-slide h-[68px] overflow-hidden leading-[64px] ml-2">
      <motion.div
        className="h-[204px]"
        animate={{
          y: [0, -68, -68, -136, -136, 0, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "anticipate" }}
      >
        {titles.map((title, index) => (
          <span key={index} className="block h-[68px]">
            {title}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
