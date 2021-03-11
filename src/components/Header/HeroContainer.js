import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section id="hero" class="hero">
      <div className="hero-wrapper container">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
