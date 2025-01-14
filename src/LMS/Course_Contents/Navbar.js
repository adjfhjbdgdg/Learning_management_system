import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Edusphere</h1>
      <div className="menu">
        <Link to="/Student">Courses</Link>
        <Link to="/StAttendance" className="active">
          Attendance
        </Link>
        <Link to="/chatbot">ChatBot</Link>
      </div>
    </nav>
  );
}

export default Navbar;
