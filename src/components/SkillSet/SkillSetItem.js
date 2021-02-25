import React from "react";

const SkillSetItem = ({ icon, title, description, aosDelay }) => {
  return (
    <div className="skillSet-item" data-aos="fade-up" data-aos-duration="600">
      <img src={icon} alt={title} />
      <h4>{title}</h4>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default SkillSetItem;
