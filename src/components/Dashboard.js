import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import image from "../images/logo1.png";

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        // console.log("toggle menu here")
        setMenuOpen(!menuOpen);
      };


  return (
    <div className="dashboard">
      {/* <header>
        <div className="logo">
          <img src={image} alt="logo" />
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>&#9776;</button>
        <nav className={`navigation ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header> */}
      {/* <main> */}
        {/* <div className="lead-space">Lead Space</div> */}
        {/* <div className="content">
          Dummy data is mock data generated at random as a substitute for live
          data in testing environments. In other words, dummy data acts as a
          placeholder for live data, the latter of which testers only introduce
          once it’s determined that the trail program does not have any
          unintended, negative impact on the underlying data. For example, a
          company implementing a new accounting system uses dummy data to ensure
          its bookings are stored correctly before inputting live accounts. You
          can think of dummy data like a car crash dummy — you hope nothing bad
          happens to it while testing, but if something bad does happen, you can
          fix the problem with no negative impact on your valuable data assets.
        </div>
      </main>
      <footer>Footer</footer> */}
    </div>
  );
};

export default Dashboard;
