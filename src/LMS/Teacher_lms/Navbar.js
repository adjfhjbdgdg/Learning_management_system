import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Edusphere</h1>
      <div className="menu">
        <a href="#">Courses</a>
        <a href="#" className="active">
          Dashboard
        </a>
        <a href="#">Schedule</a>
        <a href="#">Message</a>
        <a href="#">Support</a>
      </div>
      <div className="profile">
        <img src="/Media/profile.jpg" alt="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;
