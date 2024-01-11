import React from "react";
import "../components/css/About.css";

export default function About() {
  return (
    <div className="about-background">
      <div className="about-container">
        <h1 className="about-me-heading">ABOUT</h1>
        <p className="about-me-p">
          Why, hello there! I'm a software engineer, currently studying computer
          science at <span className="ga-tech">Georgia Tech</span> . My journey
          is all about merging my love for tech with a desire to make a real
          difference in society. It's not just about coding for me; it's about
          creating solutions that people truly need and appreciate. I've been in
          the the deep ends of both frontend and backend development, thanks to
          a couple of cool projects I got to lead. Namely, "Spasli", a peer to
          peer rental marketplace which I cofounded, and a campus event app that
          really brought our school community together.
        </p>
      </div>
    </div>
  );
}
