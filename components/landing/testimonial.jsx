"use client";

import TESTIMONIAL from "@/contants/TESTIMONIAL";
import React from "react";
import TestimonialCard from "../testimonial/testimonial-card";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <div className="py-24 overflow-hidden">
        <motion.ul
          animate={{
            x: [-200, -1600, -200],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="animation-container flex items-center gap-5 w-max"
        >
          {TESTIMONIAL?.map((testimonial, i) => (
            <li key={i}>
              <TestimonialCard {...testimonial} index={i + 1} />
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Testimonial;
