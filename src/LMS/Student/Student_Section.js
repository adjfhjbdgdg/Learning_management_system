//================================IMPORTS=================================//
import React, { useState, useRef, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import "./Student.css";
import {
  GiMaterialsScience,
  GiChemicalDrop,
  GiBookmark,
  GiHeartOrgan,
  GiOpenBook,
  GiHomeGarage,
  GiReactor,
  GiCalendar,
  GiTakeMyMoney,
} from "react-icons/gi";
import { ImCalculator } from "react-icons/im";
import { HiDesktopComputer } from "react-icons/hi";
import { BiLogOut, BiCalendarCheck } from "react-icons/bi";
import { GoChecklist } from "react-icons/go";
import SuHome from "./Su_Home";
import SuResult from "./Su_Result";
import SuAttend from "./Su_Attendance";
import SuMarks from "./Su_Marks";
import SuTimetable from "./Su_Timetable";
import SuFee from "./Su_Fee";
import SuCourse from "./Su_Course";
//================================IMPORTS=================================//

const Student_Section = () => {
  const [scheight, setscheight] = useState("100px");
  const [sidebarWidth, setSidebarWidth] = useState(250); // Initial sidebar width
  const resizing = useRef(false); // To track if resizing is active

  function settop() {
    setscheight(ht.current.scrollHeight);
  }

  useEffect(() => {
    settop();
  }, [sidebarWidth]);

  const ht = useRef(null);

  // Mouse movement event for resizing
  const handleMouseMove = (e) => {
    if (resizing.current) {
      setSidebarWidth(Math.max(150, e.clientX)); // Set min width to 150px
    }
  };

  // Mouse up event to stop resizing
  const handleMouseUp = () => {
    resizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Mouse down event to start resizing
  const handleMouseDown = () => {
    resizing.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="Student-Section">
      {/*=================================NavBar========================================*/}
      <Navbar ref={ht} expand="lg" className="w-100 d-flex Navbar">
        <Navbar.Brand className="d-flex">
          <img
            src="./Media/lms_logo.png"
            alt="Logo"
            className="logoimg mx-2 mb-sm-3"
          />
          <h1 className="my-3 p-1 px-2">Hello Bilal !</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="courses row">
            <li className="my-1">
              <Link className="course px-2 mx-2" to="/Student/Course">
                <GiMaterialsScience /> Physics
              </Link>
            </li>
            <li>
              <Link className="course px-2 mx-2" to="/Student/Course">
                <GiChemicalDrop /> Chemistry
              </Link>
            </li>
            <li>
              <Link className="course px-2 mx-2" to="/Student/Course">
                <ImCalculator /> Math
              </Link>
            </li>
            <li>
              <Link className="course px-2 mx-2" to="/Student/Course">
                <HiDesktopComputer /> Computer
              </Link>
            </li>
            <li>
              <Link className="course px-2 mx-2" to="/Student/Course">
                <GiHeartOrgan /> Biology
              </Link>
            </li>
            <li>
              <Link className="course px-2 mx-2" to="/Student/Course">
                <GiOpenBook /> English
              </Link>
            </li>

            <li>
              <Link className="course px-2 mx-2" to="/Student/Course">
                <GiMaterialsScience />
                Science
              </Link>
            </li>
            <li>
              <Link className="course px-2 mx-2" to="/Student/Course">
                <ImCalculator /> Art
              </Link>
            </li>
          </ul>

          <div className="mr-auto prof">
            <div className="nameroll">
              Bil
              <br />
              st123
              <br />
              Medical
            </div>
            <DropdownButton
              menuAlign="right"
              title={<img src="./Media/person.jpg" alt="profile" />}
              id="dropdown-menu-align-right"
            >
              <div className="dropdown">
                <Dropdown.Item style={{ color: "green" }}>
                  Update Profile Picture
                </Dropdown.Item>
                <Dropdown.Item style={{ color: "green" }}>
                  Edit Personal Info
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link style={{ color: "green" }} to="/">
                    <BiLogOut /> Log Out
                  </Link>
                </Dropdown.Item>
              </div>
            </DropdownButton>
          </div>
        </Navbar.Collapse>
      </Navbar>
      {/*=================================NavBar========================================*/}

      {/*=================================Left SideBar========================================*/}
      <section
        className="SideBar"
        style={{ width: `${sidebarWidth}px`, top: `${scheight}px` }}
      >
        <div className="SitemCon">
          <Link className="Sitems" to="/Student/">
            <GiHomeGarage />
            <h3>Home</h3>
          </Link>
          <Link className="Sitems" to="/Student/Result">
            <GiReactor />
            <h3>Result Card</h3>
          </Link>
          <Link className="Sitems" to="/Student/Attendance">
            <GoChecklist />
            <h3>Attendance</h3>
          </Link>
          <Link className="Sitems" to="/Student/Marks">
            <BiCalendarCheck />
            <h3>Marks</h3>
          </Link>
          <Link className="Sitems" to="/Student/Timetable">
            <GiCalendar />
            <h3>Time Table</h3>
          </Link>
          <Link className="Sitems" to="/Student/Fee">
            <GiTakeMyMoney />
            <h3>Fee Challan</h3>
          </Link>
          <span className="resize-handle" onMouseDown={handleMouseDown}></span>
        </div>
      </section>
      {/*=================================Left SideBar========================================*/}

      {/*=================================Content Area========================================*/}
      <div
        className="content"
        style={{
          transform: `translateX(${sidebarWidth}px) translateY(${scheight}px)`,
          width: `calc(100% - ${sidebarWidth}px)`,
        }}
      >
        <div className="content-contain p-1 pb-5 mb-5">
          <Switch>
            <Route exact path="/Student/">
              <SuHome />
            </Route>
            <Route path="/Student/Result">
              <SuResult />
            </Route>
            <Route path="/Student/Attendance">
              <SuAttend />
            </Route>
            <Route path="/Student/Marks">
              <SuMarks />
            </Route>
            <Route path="/Student/Timetable">
              <SuTimetable />
            </Route>
            <Route path="/Student/Fee">
              <SuFee />
            </Route>
            <Route path="/Student/Course">
              <SuCourse />
            </Route>
          </Switch>
        </div>
      </div>
      {/*=================================Content Area========================================*/}
    </div>
  );
};

export default Student_Section;
