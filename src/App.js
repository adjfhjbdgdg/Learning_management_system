import "./styles.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Login from "./LMS/Login.js";
import Studentsection from "./LMS/Student_lms/st";
import Adminsection from "./LMS/Admin/Admin_Section";
import Teachersection from "./LMS/Teacher/Teacher_Section";
import Course_contents from "./LMS/Course_Contents/App";
import ChatBot from "./LMS/ChatBot/App";
import StAttendance from "./LMS/Student_lms/Attendence/App";
import TeacherAttendance from "./LMS/Teacher_lms/Attendance";
import Teacher_Courses from "./LMS/Teacher_lms/Course_Contents/App";
import Teacher from "./LMS/Teacher_lms/Teacher";
import FileSubmission from "./LMS/Teacher_lms/Course_Contents/FileSubmission";

export default function App() {
  useEffect(() => {});
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Use element prop */}
          <Route path="/Admin" element={<Adminsection />} />
          <Route path="/Teacher_Attendance" element={<TeacherAttendance />} />
          <Route path="/Teacher/Course_content" element={<Teacher_Courses />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Student" element={<Studentsection />} />
          <Route path="/Course_content" element={<Course_contents />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/StAttendance" element={<StAttendance />} />
          <Route path="/FileSubmission" element={<FileSubmission />} />
        </Routes>
      </div>
    </Router>
  );
}
