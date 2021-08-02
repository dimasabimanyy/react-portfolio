import React from "react";
import html from "../../images/html.png";
import css from "../../images/css.png";
import scss from "../../images/scss.jpg";
import javascript from "../../images/javascript.svg";
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
  const myTech = [
    { icon: html, aosDelay: "300" },
    { icon: css, aosDelay: "400" },
    { icon: scss, aosDelay: "500" },
    { icon: javascript, aosDelay: "600" },
    { icon: react, aosDelay: "700" },
    { icon: gatsby, aosDelay: "800" },
    { icon: php, aosDelay: "900" },
    { icon: laravel, aosDelay: "1000" },
    { icon: wordpress, aosDelay: "1100" },
    { icon: figma, aosDelay: "1200" },
    { icon: git, aosDelay: "1300" },
    { icon: github, aosDelay: "1400" },
    { icon: postman, aosDelay: "1500" },
  ];
  return (
    <div id="skillSet">
      <div className="skillSet-bottom">
        <SkillSetSlider tech={myTech} />
      </div>
    </div>
  );
};

export default SkillSetContainer;
