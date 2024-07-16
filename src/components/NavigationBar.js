import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  const navRef = React.useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <Link to={"/"} onClick={showNavbar}>Home</Link>
        <Link to={"/headlines"} onClick={showNavbar}>Heaadlines</Link>
        <Link to={"/all-News"} onClick={showNavbar}>All News</Link>
        <Link to={"/login"} onClick={showNavbar}>Login</Link>
        <Link to={"/sign-up"} onClick={showNavbar}>Register</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
