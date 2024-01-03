import Link from "next/link";
import React from "react";
import "../components/css/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <h1 className="logo-title">Ariya</h1>
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <button className="contact-button">
                <Link href="contacts">Contacts</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
