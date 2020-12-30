import React from "react";
import SkillSetItem from "./SkillSetItem";
import image1 from "../../images/skill-1.svg";
import image2 from "../../images/skill-2.svg";
import image3 from "../../images/skill-3.svg";
import image4 from "../../images/skill-4.svg";
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
  const skills = [
    {
      id: 1,
      icon: image1,
      title: "Product Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
    {
      id: 2,
      icon: image2,
      title: "Visual Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
    {
      id: 3,
      icon: image3,
      title: "Motion Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
    {
      id: 4,
      icon: image4,
      title: "Photography",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
  ];

  const myTech = [
    { icon: html },
    { icon: css },
    { icon: scss },
    { icon: javascript },
    { icon: react },
    { icon: gatsby },
    { icon: vue },
    { icon: php },
    { icon: laravel },
    { icon: wordpress },
    { icon: git },
    { icon: github },
    { icon: postman },
  ];
  return (
    <div id="skillSet">
      <div className="skillSet container">
        <div className="skillSet-heading">
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
            />
          ))}
        </div>
      </div>
      <div className="skillSet-bottom">
        {/* {myTech.map((tech, index) => (
          <div key={index}>
            <img src={tech.icon} alt="skillset" />
          </div>
        ))} */}
        <SkillSetSlider tech={myTech} />
      </div>
    </div>
  );
};

export default SkillSetContainer;
