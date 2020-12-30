import React from "react";

const SkillSetItem = ({ icon, title, description }) => {
  return (
    <div className="skillSet-item">
      <img src={icon} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SkillSetItem;
