import React from "react";

const HeroText = () => {
  return (
    <div
      className="hero-text"
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-delay="950"
    >
      <h1>
        Hi, my name is Dimas Abimanyu. I build things <span>for the web.</span>
      </h1>
      <p>
        I'm a software engineer based in Indonesia, specializing in building
        (and occasionally designing) exceptional websites, application, and
        everything in between.
      </p>
      <div className="hero-text-links">
        <a href="/" className="btn btn-purple btn-cv">
          <i class="fas fa-download"></i> Download CV
        </a>
        <div className="hero-text-links-2">
          <a
            href="https://www.youtube.com/channel/UC9RHCbCEj0UxDhj0y__MIRA"
            className="hero-social"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            href="https://github.com/dimasabimanyy"
            className="hero-social"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://codepen.io/dimasabimanyu"
            className="hero-social"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-codepen"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
