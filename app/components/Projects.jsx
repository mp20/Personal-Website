import React from "react";
import { EmblaCarousel } from "../components/EmblaCarousel";
import "../components/css/Project.css";
export default function () {
  return (
    <div>
      <div className="grid-container">
        <h1 className="projects-header">PROJECTS</h1>
        <div className="grid">
          <div className="project-photo">
            <EmblaCarousel />
          </div>
          <div className="project-description-flex">
            <div className="project-title">
              <p>Campus Discovery Web App</p>
            </div>
            <div className="project-description">
              Campus Discovery is a versatile web application enabling students,
              clubs, and organizations at Georgia Tech to create and attend
              campus events, fostering a vibrant academic community. It allows
              for innovative features to RSVP even,locate events through an
              interactive map of GA Tech, and a personalized event filter based
              on user interests. Any student is welcome to create/attend events!
            </div>
            <div className="project-skills">
              <ul className="skill-flex">
                <li>
                  <div className="skill-bubble">JavaScript</div>
                </li>
                <li>
                  <div className="skill-bubble">React</div>
                </li>
                <li>
                  <div className="skill-bubble">java</div>
                </li>
                <li>
                  <div className="skill-bubble">Spring Boot</div>
                </li>
                <li>
                  <div className="skill-bubble">SQL</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
