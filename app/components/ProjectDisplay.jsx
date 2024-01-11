import React from "react";
import { EmblaCarousel } from "./EmblaCarousel";
import "../components/css/Project.css";
import "../components/css/ProjectDisplay.css";

const ProjectDisplay = ({ project }) => {
  return (
    <div className="grid">
      <div className="project-photo">
        <EmblaCarousel images={project.images} video={project.video} />
      </div>
      <div className="project-description-flex">
        <div className="project-title">
          <p>{project.title}</p>
        </div>
        <div className="project-description">{project.Description}</div>
        <div className="project-skills">
          <ul className="skill-flex">
            {project.skills.map((skill, index) => (
              <li key={index}>
                <div className="skill-bubble">{skill}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
