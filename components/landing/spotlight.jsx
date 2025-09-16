import React from "react";
import Header from "../common/header";
import TextAnimation from "../common/text-animation";
import Button from "../common/button";
import CursorAnimations from "../spotlight/cursor-animations";

const ANIMATED_TITLES = ["Spotlight", "Showcase", "Highlight"];

const Spotlight = () => {
  return (
    <div
      className="w-full min-h-screen relative"
      style={{
        background:
          "linear-gradient(180deg, #091D22 0%, rgba(9, 29, 34, 0) 49.49%, #091D22 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/spotlight-hero.jpg')",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <section id="spotlight">
        <div className="wrapper pb-10">
          <h2 className="text-white text-[78px] mt-[28%] monomaniac-one-regular">
            Ultrices ut etiam vulputate ante congue jokichn na
            <TextAnimation titles={ANIMATED_TITLES} />
          </h2>
          <div className="actions flex items-center gap-5 mt-5">
            <Button>Learn More</Button>
            <span className="watch text-white font-semibold text-[16px] cursor-pointer">
              Watch Video
            </span>
          </div>
        </div>
      </section>
      <CursorAnimations />
    </div>
  );
};

export default Spotlight;
