import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import image from "../images/logo1.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    // console.log("toggle menu here")
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src={image} alt="logo" />
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </button>
        <nav className={`navigation ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
