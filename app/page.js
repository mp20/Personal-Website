"use client";
import Head from "next/head";
import React, { useRef } from "react";
import Image from "next/image";
import "./main.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToExperience = () => {
    const yOffset = -110;
    const y =
      experienceRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  const scrollToProject = () => {
    const yOffset = -110;
    const y =
      projectRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main>
      <Head>
        <title>Ariya Nazari | Software Engineer</title>
      </Head>

      <div className="main-grid">
        <div className="left-column">
          <div className="left-column-flex">
            <p>
              Hi! I&apos;m Ariya, <br /> A Software
              <br /> <span className="Engineer-text">Engineer</span>
            </p>
            <div className="project-experience-buttons">
              <button onClick={scrollToExperience}>Experience</button>
              <button onClick={scrollToProject}>Projects</button>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="image-wrapper">
            <div className="image-container">
              <img src="./mywebsite.png" className="my-image" />
            </div>
            <img className="bee" src="./beees.png" alt="" />
          </div>
        </div>
      </div>
      <About />
      <Experience ref={experienceRef} />
      <Projects ref={projectRef} />
    </main>
  );
}
