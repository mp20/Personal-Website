"use client";
// import React, { useRef } from "react";
import Image from "next/image";
import "./main.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <div className="main-grid">
        <div className="left-column">
          <div className="left-column-flex">
            <p>
              Hi! I'm Ariya, <br /> A Software
              <br /> <span className="Engineer-text">Engineer</span>
            </p>
            <div className="project-experience-buttons">
              <button>Experience</button>
              <button>Projects</button>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="image-wrapper">
            <div className="image-container">
              <Image
                className="my-image"
                src="/mywebsite.png"
                alt="Picture of the author"
                priority={true}
                width={724}
                height={724}
              />
            </div>
            <img className="bee" src="/beees.png" alt="" />
          </div>
        </div>
      </div>
      <About />
      {/* <Skills /> */}
      <Projects />
    </main>
  );
}
