import BackgroundContainer from "@/components/common/bg-container";
import Footer from "@/components/common/footer";
import FAQ from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Spotlight from "@/components/landing/spotlight";
import Testimonial from "@/components/landing/testimonial";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Spotlight />
      <BackgroundContainer>
        <Features />
        <Testimonial />
        <FAQ />
        <Footer />
      </BackgroundContainer>
    </>
  );
};

export default LandingPage;
