"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

const FAQInstance = ({ item }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div onClick={(e) => setActive(!isActive)} className="cursor-pointer">
      <span className="quest text-[22px] font-opensans font-semibold flex items-center gap-10">
        <span className="w-10">{isActive ? "-" : "+"}</span>
        {item.question}
      </span>
      <motion.p
        initial={{ height: "0px", overflow: "hidden" }}
        animate={{
          height: isActive ? "60px" : "0px",
          overflow: "hidden",
        }}
        className="ans text-[18px] text-[#252525] mt-4 font-opensans"
      >
        {item.answer}
      </motion.p>
    </div>
  );
};

export default FAQInstance;
