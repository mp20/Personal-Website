"use client";
import Link from "next/link";
import { useState, React } from "react";
import "../components/css/Navbar.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <h1 className="logo-title">Ariya</h1>
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleNavbar}>
          <img src="/google_hamburger.svg" alt="FUCK" />
        </div>
        <div className={`nav-links  ${showNavbar && "active"}`}>
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
