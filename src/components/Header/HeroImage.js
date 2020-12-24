import React from "react";
import MyImage from "../../images/dimas.jpg";
import dotPattern from "../../images/dot pattern.png";

const HeroImage = () => {
  return (
    <div className="hero-image">
      <div className="hero-image-shape">
        <img src={MyImage} alt="Dimas Abimanyu" />
        <div></div>
      </div>
      <img src={dotPattern} alt="background" className="hero-image-dot" />
      <img src={dotPattern} alt="background" className="hero-image-dot-stand" />
      <img
        src={dotPattern}
        alt="background"
        className="hero-image-dot-stand-2"
      />
      <button className="btn lets-talk">LET'S TALK</button>
    </div>
  );
};

export default HeroImage;
