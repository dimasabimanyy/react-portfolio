import React, { useState } from "react";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log(toggle);
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
          Abimanyu
        </div>

        <div className={toggle ? "main-nav active" : "main-nav"}>
          <ul className="nav-links">
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
              data-aos-delay="300"
            >
              <a href="#services">Services</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <a href="#study-cases">Study Cases</a>
            </li>
            <li
              className="nav-contact"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hamburger" id="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
