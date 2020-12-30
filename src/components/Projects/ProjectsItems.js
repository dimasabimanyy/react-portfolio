import React from "react";

const ProjectsItems = ({ image, title, description }) => {
  return (
    <div className="project projects-grid">
      <div className="project-image">
        {/* <img src={image} alt={title} /> */}
      </div>
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectsItems;
