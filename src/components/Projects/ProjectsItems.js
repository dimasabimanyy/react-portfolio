import React from "react";

const ProjectsItems = ({
  image,
  title,
  description,
  github,
  preview,
  stack,
}) => {
  return (
    <div className="project projects-grid">
      <div className="project-image">
        {/* <img src={image} alt={title} /> */}
      </div>
      <div className="project-info">
        <h2>{title}</h2>
        <div class="project-info-stack">
          {stack.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <p>{description}</p>
        <div className="project-info-links">
          <a href={github} alt={title}>
            <i class="fab fa-github"></i>
          </a>
          <a href={preview} alt={title}>
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItems;
