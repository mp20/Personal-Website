import React from "react";
import { EmblaCarousel } from "../components/EmblaCarousel";
import "../components/css/Project.css";
import ProjectDisplay from "./ProjectDisplay";
const Projects = React.forwardRef((props, ref) => {
  const project = [
    {
      images: [
        "./my-project/sc1.png",
        "./my-project/sc2.png",
        "./my-project/sc3.png",
        "./my-project/sc4.png",
        "./my-project/sc5.png",
      ],
      title: "Campus Discovery",
      github: "https://github.com/mp20/CampusEventDiscovery",
      Description:
        "Campus Discovery is a versatile web application enabling students, clubs, and organizations at Georgia Tech to create and attend campus events, fostering a vibrant academic community. It allows for innovative features to RSVP even,locate events through an interactive map of GA Tech, and a personalized event filter based on user interests. Any student is welcome to create/attend events!",
      skills: ["JavaScript", "React", "java", "Spring Boot", "SQL"],
    },
    {
      video: "https://www.youtube.com/watch?v=evTtKJKR1rQ",
      title: "Graffiti IOS App",
      Description:
        "Graffiti is a project developed during Hack GT of Spring 2023. It is a real time, collaborative, augmented reality application centered around mural paintings with friends. It transforms physical walls in real life into interactive, shared canvases in a virtual space, enhancing social connection through creative expression. It also enabling users to simultaneously draw and view others' artworks, fostering a dynamic community-driven art experience in various locations.",
      skills: ["Swift", "ARKit", "SceneKit", "FireBase"],
      github: "https://github.com/mp20/HexGT-Graffity",
    },
    {
      images: ["./VIP-art/sc1.png", "./VIP-art/sc2.png", "./VIP-art/sc3.png"],
      title: "Getting To Know U",
      Description:
        "Conducted a comprehensive analysis of Georgia Tech's extensive course history database to identify critical connections among various academic factors such as GPA, credit hours, majors, semesters, and courses. Then Leveraged Tableau to create interactive dashboards, providing students with visualized trends and insights. This is a now a Georgia Tech web site using Tableau’s REST API, offering full functionality and a seamless browsing experience with filtering and search functions.",
      skills: ["JavaScript", "React", "CSS", "Tableau REST API", "Tableau"],
    },
  ];
  return (
    <div>
      <div className="grid-container" ref={ref}>
        <div className="new-container">
          <h1 className="projects-header">PROJECTS</h1>
          {project.map((project, index) => (
            <ProjectDisplay project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
});
Projects.displayName = "Projects"; // Set the displayName explicitly
export default Projects;
