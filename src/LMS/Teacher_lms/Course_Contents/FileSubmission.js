import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./FileSubmission.css";
import axios from "axios";

function FileSubmission() {
  // Pass courseId as a prop
  const location = useLocation();
  const { id } = location.state;
  console.log(id);

  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;
    setFiles([...files, ...uploadedFiles]); // Adds all selected files to the state
  };

  const handleDelete = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleSave = async () => {
    // Create a FormData object to send files to the backend
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file); // Add files to FormData object
    });

    try {
      const response = await axios.post(
        `http://localhost:5000/api/courses/${id}/files`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important header for file uploads
          },
        }
      );
      alert("Files saved successfully!");
    } catch (error) {
      console.error("Error saving files:", error);
      alert("Failed to save files.");
    }
  };

  return (
    <div className="file-submission">
      <h2>File Submissions</h2>
      <div className="file-table">
        <div className="file-header">
          <div>Name</div>
          <div>Last Modified</div>
          <div>Size</div>
          <div>Actions</div>
        </div>
        {files.map((file, index) => (
          <div key={index} className="file-row">
            <div>{file.name}</div>
            <div>{new Date(file.lastModified).toLocaleString()}</div>
            <div>{(file.size / 1024).toFixed(2)} KB</div>
            <div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="file-actions">
        <input type="file" onChange={handleFileUpload} multiple />
        <button onClick={handleSave}>Save Changes</button>
        <button onClick={() => setFiles([])}>Cancel</button>
      </div>
    </div>
  );
}

export default FileSubmission;
