import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const { courseId } = location.state;
  // console.log("first page: " + courseId);

  return (
    <nav className="navbar">
      <h1>Edusphere</h1>
      <div className="menu">
        <Link to="/Teacher">Courses</Link>
        <Link to="/Teacher_Attendance" className="active">
          Attendance
        </Link>
        <Link to="/FileSubmission" state={{ id: courseId }}>
          Upload
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
