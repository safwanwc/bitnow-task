import { FEATURES } from "@/contants/FEATURES";
import React from "react";
import FeatureCard from "../feature/feature-card";

const Features = () => {
  return (
    <section id="features">
      <div className="wrapper pt-28 pb-20">
        <div className="top text-center text-[#E9EDF8]">
          <h3 className="text-[40px] monomaniac-one-regular">
            Most Trusted Cryptocurrency Platform
          </h3>
          <p className="text-[20px] max-w-[70%] mx-auto mt-5 text-[#E9EDF8] font-poppins">
            Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
            arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed
            purus
          </p>
        </div>
        <ul className="flex mt-16 items-center justify-between gap-10 ">
          {FEATURES.map((feature, index) => (
            <li key={index}>
              <FeatureCard
                title={feature.title}
                image={feature.image}
                description={feature.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
