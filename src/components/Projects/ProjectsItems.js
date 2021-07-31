import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectsItems = ({
  image,
  title,
  description,
  github,
  preview,
  stack,
}) => {
  const [projectModal, setProjectModal] = useState(false);
  return (
    <>
      <div
        className="project projects-grid"
        data-aos="fade-up-right"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <div
          className="project-image"
          onClick={() => {
            setProjectModal(!projectModal);
            document.body.classList.add("hide-scroll");
          }}
        >
          <img src={image} alt={title} />
          <i className="far fa-eye"></i>
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
            <a href={github} alt={title} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={preview} alt={title} target="_blank" rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
      {projectModal ? (
        <ProjectModal
          image={image}
          title={title}
          projectModal={projectModal}
          setProjectModal={setProjectModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ProjectsItems;
