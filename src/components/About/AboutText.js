import React from "react";
import dotPattern from "../../images/dot pattern.png";

const AboutText = () => {
  return (
    <div className="about-text">
      <img src={dotPattern} alt="background" className="pattern" />
      <h1 className="section-title">About Me</h1>
      <p>
        There are many variations of passages of Lorem Ipsum. ariations of
        passages of Lorem Ipsum has been a freelancer, worked for a company and
        has run his own business, but he discovered that his real passion.
      </p>
      <p>
        There are many variations of passages of Lorem Ipsum. ariations of
        passages of Lorem Ipsum has been a freelancer, worked for a company and
        has run his own business, but he discovered that his real passion.
      </p>
      <button className="btn btn-channel">Visit Channel</button>
    </div>
  );
};

export default AboutText;
