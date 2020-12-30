import React from "react";
import MyImage from "../../images/sapiens.svg";

const HeroImage = () => {
  return (
    <div className="hero-image">
      <img
        src={MyImage}
        alt="Dimas Abimanyu"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="950"
      />
    </div>
  );
};

export default HeroImage;
