import React from "react";
import MyImage from "../../images/dimas.jpg";

const AboutVideo = () => {
  return (
    <div
      className="about-image"
      data-aos="fade-up-left"
      data-aos-duration="600"
    >
      <img src={MyImage} alt="Dimas Abimanyu" />
    </div>
  );
};

export default AboutVideo;
