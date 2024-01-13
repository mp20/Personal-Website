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
              <div className="experience-title">CS Tutor - Takavi Tutors</div>
              <div className="experience-description">
                <p>
                  I have over 3 years experience in tutoring students one-on-one
                  from High school through college. Subjects include Data
                  Structures and advanced Algorithms, AP Computer Science
                  A/Principles.
                </p>
              </div>
              <div className="experience-skills">
                <ul className="skill-flex">
                  <li>
                    <div className="skill-bubble">Algorithms</div>
                  </li>
                  <li>
                    <div className="skill-bubble">Data Structures</div>
                  </li>
                  <li>
                    <div className="skill-bubble">Math</div>
                  </li>
                  <li>
                    <div className="skill-bubble">AP Computer Science</div>
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

export default Experience;
