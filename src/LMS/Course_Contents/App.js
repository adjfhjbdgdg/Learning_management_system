import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./CourseContent.css"; // Import CSS for styling

function CourseContent() {
  const location = useLocation();
  const { courseId } = location.state; // Get the courseId passed from the CourseCard
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch the course files using the courseId
    axios
      .get(`http://localhost:5000/api/courses/${courseId}/files`)
      .then((response) => {
        setFiles(response.data); // Assuming the response contains the files array
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, [courseId]);

  const handleDownload = (filePath) => {
    const fileName = filePath.split("/").pop(); // Extract file name from path
    const anchor = document.createElement("a");
    anchor.href = `http://localhost:5000/${filePath}`;
    anchor.download = fileName;
    anchor.click();
  };

  return (
    <div className="course-content">
      <Navbar />
      <div className="files-section">
        <h2>Course Files</h2>
        {files.length === 0 ? (
          <p>No files available for this course.</p>
        ) : (
          <div className="file-grid">
            {files.map((file, index) => (
              <div className="file-box" key={index}>
                <h3 className="file-name">{file.name}</h3>
                <p className="file-size">Size: {file.size} bytes</p>
                <p className="file-date">
                  Last Modified: {new Date(file.lastModified).toLocaleString()}
                </p>
                <button
                  className="download-button"
                  onClick={() => handleDownload(file.path)}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseContent;
