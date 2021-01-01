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
    <div
      className="project projects-grid"
      data-aos="fade-up-right"
      data-aos-duration="600"
      data-aos-delay="300"
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h4 className="bold">{title}</h4>
        <div className="project-info-stack">
          {stack.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <p>{description}</p>
        <div className="project-info-links">
          <a href={github} alt={title}>
            <i className="fab fa-github"></i>
          </a>
          <a href={preview} alt={title}>
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItems;
