import Image from "next/image";
import "./main.css";

export default function Home() {
  return (
    <main>
      <div className="main-grid">
        <div className="left-column">
          <div className="left-column-flex">
            <p>
              Hi! I'm Ariya, <br /> A Software
              <br /> Engineer
            </p>
            <div className="project-experience-buttons">
              <button>Experience</button>
              <button>Projects</button>
            </div>
          </div>
        </div>
        <div className="right-column">
          <Image
            src="/mywebsite.png"
            alt="Picture of the author"
            width={724}
            height={724}
          />
        </div>
      </div>
    </main>
  );
}
