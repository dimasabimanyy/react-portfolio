import React from "react";
import Carousel from "react-elastic-carousel";

const SkillSetSlider = ({ tech }) => {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 8 },
  ];

  return (
    <>
      <Carousel breakPoints={breakpoints} itemPadding={[0, 0]}>
        {tech.map((slide, index) => (
          <div className="slide-tech" key={index}>
            <img src={slide.icon} alt="skillset" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SkillSetSlider;
