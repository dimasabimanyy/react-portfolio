import React from "react";
// import SkillSetItem from "./SkillSetItem";
// import image1 from "../../images/Web.svg";
// import image2 from "../../images/Search.svg";
// import image3 from "../../images/Design.svg";
// import image4 from "../../images/Phone.svg";
import html from "../../images/html.png";
import css from "../../images/css.png";
import scss from "../../images/scss.jpg";
import javascript from "../../images/javascript.svg";
import vue from "../../images/vue.png";
import react from "../../images/react.png";
import laravel from "../../images/laravel.png";
import gatsby from "../../images/gatsby.png";
import php from "../../images/php-icon.svg";
import wordpress from "../../images/wordpress-icon.png";  
import figma from "../../images/figma-icon.png";
import postman from "../../images/postman.png";
import git from "../../images/git.png";
import github from "../../images/github.png";
import SkillSetSlider from "./SkillSetSlider";

const SkillSetContainer = () => {
  // const skills = [
  //   {
  //     id: 1,
  //     icon: image1,
  //     title: "Web development",
  //     description:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
  //   },
  //   {
  //     id: 2,
  //     icon: image2,
  //     title: "Search Engine Optimization",
  //     description:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
  //   },
  //   {
  //     id: 3,
  //     icon: image3,
  //     title: "Web Design",
  //     description:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
  //   },
  //   {
  //     id: 4,
  //     icon: image4,
  //     title: "Modern and Mobile Ready",
  //     description:
  //       "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
  //   },
  // ];

  const myTech = [
    { icon: html, aosDelay: "300" },
    { icon: css, aosDelay: "400" },
    { icon: scss, aosDelay: "500" },
    { icon: javascript, aosDelay: "600" },
    { icon: react, aosDelay: "700" },
    { icon: gatsby, aosDelay: "800" },
    { icon: vue, aosDelay: "900" },
    { icon: php, aosDelay: "1000" },
    { icon: laravel, aosDelay: "1100" },
    { icon: wordpress, aosDelay: "1200" },
    { icon: figma, aosDelay: "1300" },
    { icon: git, aosDelay: "1400" },
    { icon: github, aosDelay: "1500" },
    { icon: postman, aosDelay: "1600" },
  ];
  return (
    <div id="skillSet">
      {/* <div className="skillSet container">
        <div
          className="skillSet-heading"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h1>Skillset</h1>
          <p>
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div className="skillSet-items">
          {skills.map((skill, index) => (
            <SkillSetItem
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              aosDelay={skill.aosDelay}
            />
          ))}
        </div>
      </div> */}
      <div className="skillSet-bottom">
        <SkillSetSlider tech={myTech} />
      </div>
    </div>
  );
};

export default SkillSetContainer;
