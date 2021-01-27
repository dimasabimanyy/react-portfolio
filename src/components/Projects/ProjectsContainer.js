import React, { useState } from "react";
import githubProfiler from "../../images/projects/Github Profiler.png";
import hotelResort from "../../images/projects/Hotel Resort.png";
import portfolioV4 from "../../images/projects/Portfolio v4.png";
import covidTracker from "../../images/projects/Covid Tracker.png";
import githubJobs from "../../images/projects/Github Jobs.png";
import laslesVpn from "../../images/projects/Lasles VPN.png";
import ProjectsItems from "./ProjectsItems";

const ProjectsContainer = () => {
  const [itemsToShow, setItemsToShow] = useState(4);
  const [expanded, setExpanded] = useState(false);

  const projects = [
    {
      id: 1,
      image: githubProfiler,
      github: "https://github.com/dimasabimanyy/react-github-profile",
      preview: "https://profilergithub.netlify.app/login",
      title: "Github Profile",
      description:
        "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars and forks.",
      stack: ["React js", "Fusion Charts", "Github API", "Styled Components"],
    },
    {
      id: 2,
      image: covidTracker,
      github: "https://github.com/dimasabimanyy/covid-19-tracker",
      preview: "https://globecovidtracker.netlify.app/",
      title: "Covid 19 Tracker",
      description:
        "A website that provides information about covid 19 cases around the world. The data sourced from disease.sh api and displayed in chart form with chart.js.",
      stack: ["React js", "Chart js", "Disease API"],
    },
    {
      id: 3,
      image: hotelResort,
      github: "https://github.com/dimasabimanyy/hotel-reservation",
      preview: "https://erios-hotel-f25ec.web.app/",
      title: "Hotel Reservation",
      description:
        "A website for booking hotel rooms online and by telephone. Built with React js and Contentful headless CMS to store the data. I also use styled component to style the front end.",
      stack: ["HTML & CSS", "React js", "Contentful CMS"],
    },
    {
      id: 4,
      image: laslesVpn,
      github: "/",
      preview: "/",
      title: "Lasles VPN",
      description:
        "Simple landing page built with classic HTML, S(CSS) & Javascript.",
      stack: ["HTML & S(CSS)", "Javascript"],
    },
    {
      id: 5,
      image: githubJobs,
      github: "/",
      preview: "/",
      title: "Github Jobs Finder",
      description:
        "A nicer look to find a job from github. A website that works with the GitHub Jobs API that includes search, filter, pagination, etc.",
      stack: ["React js", "Github API"],
    },
    {
      id: 6,
      image: portfolioV4,
      github: "https://github.com/dimasabimanyy/v4",
      preview: "https://dimasabimanyuv4.netlify.app/",
      title: "Portfolio v4",
      description:
        "Forth iteration of my personal portfolio website. Built with Gatsby and Strapi Headless CMS.",
      stack: ["Gatsby", "Strapi", "S(CSS)"],
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
          <div className="btn btn-purple" onClick={showMore}>
            {expanded ? <span>Show Less</span> : <span>Show More</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
