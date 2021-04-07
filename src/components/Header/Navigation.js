import React, { useState } from "react";
import logo from "../../images/logo.svg";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <nav className="nav">
      <div className="nav-wrapper container">
        <div
          className="logo"
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-delay="150"
        >
          <a href="/" alt="logo">
            <img src={logo} alt="Dimas Abimanyu" />
          </a>
        </div>

        <div className={toggle ? "main-nav active" : "main-nav"}>
          <ul className="nav-links">
            <li
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <a href="#services">Services</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <a href="#about">About</a>
            </li>

            <li
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <a href="#projects">Portfolio</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <a href="#youtube">Youtube</a>
            </li>
            <li
              className="nav-contact"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className={toggle ? "open" : ""}
          id="hamburger"
          onClick={toggleNav}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
