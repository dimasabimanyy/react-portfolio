import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">D Abimanyu</div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#study-cases">Study Cases</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
