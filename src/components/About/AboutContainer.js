import React from "react";
import AboutVideo from "./AboutVideo";
import AboutText from "./AboutText";

const AboutContainer = () => {
  return (
    <section id="about">
      <div className="about-wrapper container">
        <AboutVideo />
        <AboutText />
      </div>
    </section>
  );
};

export default AboutContainer;
