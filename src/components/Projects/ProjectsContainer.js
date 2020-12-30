import React from "react";
import project1 from "../../images/project-1.png";
import project2 from "../../images/project-2.png";
import project3 from "../../images/project-3.png";
import project4 from "../../images/project-4.png";
import ProjectsItems from "./ProjectsItems";

const ProjectsContainer = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Web Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
    {
      id: 2,
      image: project2,
      title: "Web Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
    {
      id: 3,
      image: project3,
      title: "Wordpress Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
    {
      id: 4,
      image: project4,
      title: "Wordpress Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
    },
  ];
  return (
    <div id="projects">
      <div className="projects container">
        <div className="projects-heading projects-grid">
          <p>My Projects</p>
          <h1>Some work that i've done for the past few years</h1>
        </div>
        {projects.map((project, index) => (
          <ProjectsItems
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
        <div className="projects-grid projects-btn">
          <a href="/" className="btn">
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
