import React, { useState } from "react";
import project1 from "../../images/projects/Github Profiler.png";
import project3 from "../../images/projects/Hotel Resort.png";
import project4 from "../../images/projects/Portfolio v3.png";
import project2 from "../../images/projects/Covid Tracker.png";
import ProjectsItems from "./ProjectsItems";

const ProjectsContainer = () => {
  const [itemsToShow, setItemsToShow] = useState(4);
  const [expanded, setExpanded] = useState(false);

  const projects = [
    {
      id: 1,
      image: project1,
      github: "/",
      preview: "/",
      title: "Web Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
      stack: ["react", "vue", "materialize"],
    },
    {
      id: 2,
      image: project2,
      github: "/",
      preview: "/",
      title: "Web Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
      stack: ["react", "vue", "materialize"],
    },
    {
      id: 3,
      image: project3,
      github: "/",
      preview: "/",
      title: "Wordpress Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
      stack: ["react", "vue", "materialize"],
    },
    {
      id: 4,
      image: project4,
      github: "/",
      preview: "/",
      title: "Wordpress Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
      stack: ["react", "vue", "materialize"],
    },
    {
      id: 5,
      image: project4,
      github: "/",
      preview: "/",
      title: "Wordpress Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
      stack: ["react", "vue", "materialize"],
    },
    {
      id: 6,
      image: project4,
      github: "/",
      preview: "/",
      title: "Wordpress Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have good.",
      stack: ["react", "vue", "materialize"],
    },
  ];

  const showMore = () => {
    itemsToShow === 4 ? setItemsToShow(projects.length) : setItemsToShow(4);

    if (expanded === false ? setExpanded(true) : setExpanded(false));
  };

  return (
    <div id="projects">
      <div className="projects container">
        <div className="projects-heading projects-grid">
          <p data-aos="fade-up" data-aos-duration="600">
            My Projects
          </p>
          <h1 data-aos="fade-up" data-aos-duration="600">
            Some work that i've done for the past few years
          </h1>
        </div>
        {projects.slice(0, itemsToShow).map((project, index) => (
          <ProjectsItems
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            github={project.github}
            preview={project.preview}
            stack={project.stack}
          />
        ))}
        <div
          className="projects-grid projects-btn"
          data-aos="fade-in"
          data-aos-duration="600"
        >
          <div className="btn" onClick={showMore}>
            {expanded ? <span>Show Less</span> : <span>Show More</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
