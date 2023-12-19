import React from "react";
import { SubHeading, ProjectItem } from "../../components";
import { data } from "../../constants";
import "./Project.css";
const Projects = () => {
  return (
    <div
      className="portfolio__projects app__bg section__padding info__wrapper"
      id="projects"
    >
      <SubHeading title="Projects" />
      <div className="portfolio__projects-inclass-projects">
        <h1 className="headtext__cormorant">In Class Projects</h1>
        <div className="portfolio__projects-inclass-projects_content">
          {data.projects.map((project, index) => (
            <ProjectItem
              className="portfolio__projects-inclass-projects_project"
              title={project.title}
              skills={project.skills}
              description={project.description}
              imgUrl={project.imgUrl}
              key={project.title + index}
            />
          ))}
        </div>
      </div>
      <div className="portfolio__projects-myprojects_content">
        <h1 className="headtext__cormorant">My Projects</h1>
        {data.myProject.map((project, index) => (
          <ProjectItem
            className="portfolio__projects-inclass-projects_project"
            title={project.title}
            skills={project.skills}
            description={project.description}
            imgUrl={project.imgUrl}
            key={project.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
