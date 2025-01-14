import React from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi"; // Correct import
import { FiMap } from "react-icons/fi"; // Correct import
import { BsPencilSquare, BsBook, BsPerson } from "react-icons/bs"; // Correct import
import { AiOutlineFundProjectionScreen } from "react-icons/ai"; // Correct import
import { ImClipboard } from "react-icons/im"; // Correct import

const TuCourse = () => {
  return (
    <div className="SuCourse row w-100">
      <section className="TSidebar-2 Sidebar-2 py-5">
        <div className="w-100 TBarItems BarItems p-1 py-2">
          <h3 className="hd1">Announcements</h3>
          <HiOutlineSpeakerphone className="bar_ico1" />
        </div>
        <div className="w-100 TBarItems BarItems p-1 py-2">
          <h3 className="hd2">Syllabus</h3>
          <FiMap className="bar_ico2" />
        </div>
        <div className="w-100 TBarItems BarItems p-1 py-2">
          <h3 className="hd3">Lectures</h3>
          <AiOutlineFundProjectionScreen className="bar_ico3" />
        </div>
        <div className="w-100 TBarItems BarItems p-1 py-2">
          <h3 className="hd4">Assignments</h3>
          <BsPencilSquare className="bar_ico4" />
        </div>
        <div className="w-100 TBarItems BarItems p-1 py-2">
          <h3 className="hd5">Tests & Quizzes</h3>
          <ImClipboard className="bar_ico5" />
        </div>
        <div className="w-100 TBarItems BarItems p-1 py-2">
          <h3 className="hd6">Notes & Books</h3>
          <BsBook className="bar_ico6" />
        </div>
        <div className="w-100 TBarItems BarItems p-1 py-2">
          <h3 className="hd7">Section Info</h3>
          <BsPerson className="bar_ico7" />
        </div>
        <span className="sglitch"></span>
      </section>

      <div className="Coursedata d-flex flex-column">
        <h className="my-5">Good Course</h>
      </div>
    </div>
  );
};

export default TuCourse;
