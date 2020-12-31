import React from "react";
import Carousel from "react-elastic-carousel";

const SkillSetSlider = ({ tech }) => {
  const breakpoints = [
    { width: 500, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 768, itemsToShow: 6 },
    { width: 900, itemsToShow: 7 },
    { width: 1200, itemsToShow: 8 },
  ];

  return (
    <>
      <Carousel breakPoints={breakpoints} itemPadding={[0, 0]}>
        {tech.map((slide, index) => (
          <div className="slide-tech" key={index}>
            <img
              src={slide.icon}
              alt="skillset"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={slide.aosDelay}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SkillSetSlider;
