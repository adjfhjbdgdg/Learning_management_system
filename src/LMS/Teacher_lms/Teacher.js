import React, { useState, useEffect } from "react";
import "./App1.css";
import Navbar from "./Navbar";
import ActivityCard from "./ActivityCard";
import ProgressStatsCard from "./ProgressStatsCard";
import CourseCard from "./CourseCard";
import ScheduleCard from "./ScheduleCard";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <div className="left-panel">
          <ActivityCard />
          <ProgressStatsCard />
          <ScheduleCard />
        </div>
        <div className="right-panel">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
