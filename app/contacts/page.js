import React from "react";
import "../components/css/Contact.css";
import NewTabSVG from "../components/NewTabSVG";
export const metadata = {
  title: "Contact",
  description: "Contact page with my resume",
};
export default function Contacts() {
  return (
    <div className="contact-parent">
      <div className="contact-container">
        <a
          className="Resume"
          href="./Resume/Ariya_Nazari_resume_copy_3.pdf"
          target="_blank"
        >
          Resume
        </a>
        <NewTabSVG className="new_tab_icon" color="#dddddd" />
      </div>
    </div>
  );
}
