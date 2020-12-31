import React from "react";

const SkillSetItem = ({ icon, title, description, aosDelay }) => {
  return (
    <div className="skillSet-item">
      <img src={icon} alt={title} data-aos="fade-up" data-aos-duration="600" />
      <h4 data-aos="fade-up" data-aos-duration="600">
        {title}
      </h4>
      <p data-aos="fade-up" data-aos-duration="600">
        {description}
      </p>
    </div>
  );
};

export default SkillSetItem;
