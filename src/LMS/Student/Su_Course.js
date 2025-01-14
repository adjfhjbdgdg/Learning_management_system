//==========================IMPORTS==========================//
import React from "react";
import "./Su_Course.css";
import {
  HiOutlineSpeakerphone,
  FiMap,
  BsPencilSquare,
  AiOutlineFundProjectionScreen,
  ImClipboard,
  BsBook,
  BsPerson,
} from "react-icons/all";

//==========================COMPONENT==========================//
const SuCourse = () => {
  return (
    <div className="SuCourse row w-100">
      <section className="Sidebar-2 py-5">
        <div className="BarItems p-3">
          <HiOutlineSpeakerphone className="bar_ico" />
          <h3>Announcements</h3>
        </div>
        <div className="BarItems p-3">
          <FiMap className="bar_ico" />
          <h3>Syllabus</h3>
        </div>
        <div className="BarItems p-3">
          <AiOutlineFundProjectionScreen className="bar_ico" />
          <h3>Lectures</h3>
        </div>
        <div className="BarItems p-3">
          <BsPencilSquare className="bar_ico" />
          <h3>Assignments</h3>
        </div>
        <div className="BarItems p-3">
          <ImClipboard className="bar_ico" />
          <h3>Tests & Quizzes</h3>
        </div>
        <div className="BarItems p-3">
          <BsBook className="bar_ico" />
          <h3>Notes & Books</h3>
        </div>
        <div className="BarItems p-3">
          <BsPerson className="bar_ico" />
          <h3>Section Info</h3>
        </div>
      </section>

      <div className="Coursedata d-flex flex-column">
        <h1 className="course-title my-5">Good Course</h1>
      </div>
    </div>
  );
};

export default SuCourse;
