import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div className="course-progress">{course.progress}% Progress</div>
      <Link to={"/Teacher/Course_content"} state={{ courseId: course._id }}>
        <button>Click Here</button>
      </Link>
    </div>
  );
}

export default CourseCard;
