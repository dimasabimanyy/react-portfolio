import React from "react";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const AboutContainer = () => {
  return (
    <section id="about">
      <div className="about container">
        <AboutText />
        <AboutImage />
      </div>
    </section>
  );
};

export default AboutContainer;
