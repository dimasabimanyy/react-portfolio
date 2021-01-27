import React from "react";

const AboutText = () => {
  return (
    <div className="about-text">
      <h1 data-aos="fade-up-right" data-aos-duration="600">
        About Me
      </h1>
      <div className="about-text-desc">
        <p data-aos="fade-up-right" data-aos-duration="600">
          Over the past 5 years, coding has developed into a passion of mine,
          specifically, in the realm of web development. I've dedicated my time
          to gaining proficiency in all intricacies of web development in order
          to better myself as a developer and problem solver.
        </p>
        <p data-aos="fade-up-right" data-aos-duration="600">
          Here are a few technologies I've been working with recently :
        </p>
      </div>
      <div
        className="about-text-skill"
        data-aos="fade-up-right"
        data-aos-duration="600"
      >
        <ul className="list-1">
          <li>
            <i class="fas fa-angle-right"></i> React js
          </li>
          <li>
            <i class="fas fa-angle-right"></i> Gatsby
          </li>
          <li>
            <i class="fas fa-angle-right"></i> Javascript
          </li>
          <li>
            <i class="fas fa-angle-right"></i> HTML & S(CSS)
          </li>
        </ul>
        <ul>
          <li>
            <i class="fas fa-angle-right"></i> Vue js
          </li>
          <li>
            <i class="fas fa-angle-right"></i> Laravel
          </li>
          <li>
            <i class="fas fa-angle-right"></i> Wordpress
          </li>
          <li>
            <i class="fas fa-angle-right"></i> MySql
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutText;
