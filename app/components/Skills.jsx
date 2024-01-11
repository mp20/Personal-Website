import React from "react";
import "../components/css/Skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills">Skills</h1>
      <div className="grid-container">
        <div className="skills-grid">
          <div className="lang-card react-card">
            <div className="img-flex-container">
              <img src="/card-logos/react.svg" alt="" />
            </div>
            <p>React</p>
          </div>
          <div className="lang-card Java-card">
            <div className="img-flex-container">
              <img src="/card-logos/java.svg" alt="" />
            </div>
            <p>Java</p>
          </div>
          <div className="lang-card Python-card">
            <div className="img-flex-container">
              <img src="/card-logos/python.svg" alt="" />
            </div>
            <p>Python</p>
          </div>
          <div className="lang-card C-card">
            <div className="img-flex-container">
              <img src="/card-logos/c.svg" alt="" />
            </div>
            <p>C</p>
          </div>
          <div className="lang-card JavaScript-card">
            <div className="img-flex-container">
              <img src="/card-logos/javascript.svg" alt="" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className="lang-card Spring-Boot-card">
            <div className="img-flex-container">
              <img src="/card-logos/springio-icon.svg" alt="" />
            </div>
            <p>Spring</p>
          </div>
          <div className="lang-card Swift-card">
            <div className="img-flex-container">
              <img src="/card-logos/swift-icon.svg" alt="" />
            </div>
            <p>Swift</p>
          </div>
          <div className="lang-card SQL-card">
            <div className="img-flex-container">
              <img src="/card-logos/mysql.svg" alt="" />
            </div>
            <p>SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
