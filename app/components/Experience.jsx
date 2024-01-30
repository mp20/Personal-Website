import React from "react";
import "../components/css/Experience.css";

const Experience = React.forwardRef((props, ref) => {
  return (
    <div className="experience-parent" ref={ref}>
      <ol className="experience-container">
        <h1 className="experience-heading">Experience</h1>
        <li>
          <div className="experience-grid first-grid">
            <div className="time-line">2023 - Present</div>
            <div className="experience-flex">
              <div className="experience-title">Software Engineer - Spasli</div>
              <div className="experience-description">
                <p>
                  Founded and Lead the development of a peer-to-peer rental
                  marketplace, a cost-effective solution that empowers users to
                  list items for additional income and enables on-demand rentals
                  for diverse needs. I Designed the database schemas and
                  translated them into functional MySQL database. I completed
                  the entire front-end user interface along with the backend
                  API. This included the development of the authentication
                  processes through stateless JWT tokens with RSA encryption.
                  Implemented Amazon S3 storage solution for reliable and secure
                  management of user uploaded images.
                </p>
              </div>
              <div className="experience-skills">
                <ul className="skill-flex">
                  <li>
                    <div className="skill-bubble">Java</div>
                  </li>
                  <li>
                    <div className="skill-bubble">React</div>
                  </li>
                  <li>
                    <div className="skill-bubble">Redux</div>
                  </li>
                  <li>
                    <div className="skill-bubble">Spring Boot</div>
                  </li>
                  <li>
                    <div className="skill-bubble">Spring Security</div>
                  </li>
                  <li>
                    <div className="skill-bubble">CSS</div>
                  </li>
                  <li>
                    <div className="skill-bubble">SQL</div>
                  </li>
                  <li>
                    <div className="skill-bubble">AWS S3</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="experience-grid">
            <div className="time-line">2020 - Present</div>
            <div className="experience-flex">
              <div className="experience-title">
                Software Engineer Intern - Takavi Tutors
              </div>
              <div className="experience-description">
                <p>
                  Integrated advanced geolocation APIs, optimizing search
                  functionality for finding nearby tutors. Enhanced automated
                  Zoom session integration feature for seamless student-teacher
                  sessions. Development of comprehensive dashboard analytics,
                  including tutor’s yearly and quarterly income break downs.
                </p>
              </div>
              <div className="experience-skills">
                <ul className="skill-flex">
                  <li>
                    <div className="skill-bubble">JavaScript</div>
                  </li>
                  <li>
                    <div className="skill-bubble">React</div>
                  </li>
                  <li>
                    <div className="skill-bubble">AWS</div>
                  </li>
                  <li>
                    <div className="skill-bubble">PHP</div>
                  </li>
                  <li>
                    <div className="skill-bubble">Redux</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
});

Experience.displayName = "Experience"; // Set the displayName explicitly

export default Experience;
