import React from "react";

const ProjectModal = ({ image, title, projectModal, setProjectModal }) => {
  return (
    <>
      <div className="project-modal">
        <div
          className="close-modal"
          onClick={() => {
            setProjectModal(!projectModal);
            document.body.classList.remove("hide-scroll");
          }}
        >
          <div></div>
          <div></div>
        </div>
        <img src={image} alt={title} />
      </div>
    </>
  );
};

export default ProjectModal;
