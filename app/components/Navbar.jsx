"use client";
import Link from "next/link";
import { useState, React } from "react";
import "../components/css/Navbar.css";
import Hamburger from "../components/hamburger";

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
            <h1 className="logo-title">AN</h1>
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleNavbar}>
          <Hamburger className="ham-menu" color="#dddddd" />
        </div>
        <div className={`nav-links  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              {showNavbar ? (
                <Link href="contacts">Contacts</Link>
              ) : (
                <>
                  <button className="contact-button">
                    <Link href="contacts">Contacts</Link>
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
