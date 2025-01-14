//================================IMPORTS=================================//
import "./Teacher.css";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import {
  GiMaterialsScience,
  GiHomeGarage,
  GiCalendar,
  GiTakeMyMoney
} from "react-icons/gi";
import { ImCalculator } from "react-icons/im";
import { BiLogOut, BiCalendarCheck } from "react-icons/bi";
import TuHome from "./Tu_Home";
import TuExam from "./Tu_Exam";
import TuSalary from "./Tu_Salary";
import TuTimetable from "./Tu_Timetable";
import TuCourse from "./Tu_Course";
//================================IMPORTS=================================//

const Teacher_Section = () => {
  const [scheight, setscheight] = useState("100px");
  const [swidth, setswidth] = useState("10%");

  function settop() {
    setscheight(ht.current.scrollHeight);
  }

  useEffect(() => {
    settop();
  }, [swidth]);

  const ht = useRef(null);

  return (
    <div className="Teacher_Section Student-Section">
      {/*=================================NavBar========================================*/}
      <Navbar ref={ht} expand="lg" className="w-100 d-flex Navbar Tnavbar">
        <Navbar.Brand className="d-flex">
          <img
            src="./Media/lms_logo.png"
            alt="Logo"
            className="tlogo logoimg mx-2 mb-sm-3"
            onClick={() => {
              if (swidth === "10%") {
                setswidth("1px");
              } else {
                setswidth("10%");
              }
            }}
          />
          <h1 className="my-3 p-1 px-2 Th1">Welome Sir Srafraz !</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="Tcourses courses row" onClick={() => setswidth("1px")}>
            <li className="my-1">
              <Link className="Tcourse course px-2 mx-2" to="/Teacher/Course">
                <GiMaterialsScience /> Physics 10th-A
              </Link>
            </li>
            <li className="my-1">
              <Link className="Tcourse course px-2 mx-2" to="/Teacher/Course">
                <GiMaterialsScience /> Physics 10th-B
              </Link>
            </li>

            <li>
              <Link className="Tcourse course px-2 mx-2" to="/Teacher/Course">
                <ImCalculator /> Math 9th-C
              </Link>
            </li>
            <li>
              <Link className="Tcourse course px-2 mx-2" to="/Teacher/Course">
                <ImCalculator /> Math Fsc1-E
              </Link>
            </li>

            <li>
              <Link className="Tcourse course px-2 mx-2" to="/Teacher/Course">
                <GiMaterialsScience />
                Science 5th-A
              </Link>
            </li>
            <li>
              <Link className="Tcourse course px-2 mx-2" to="/Teacher/Course">
                <GiMaterialsScience />
                Science 6th-B
              </Link>
            </li>
          </ul>

          <div className="mr-auto prof">
            <div className="nameroll">
              Sarfraz Anwar
              <br />
              tr123
              <br />
              Ms(Math)
            </div>
            <DropdownButton
              menuAlign="right"
              title={<img src="./Media/personb.jpg" alt="profile" />}
              id="dropdown-menu-align-right"
              className="Tbtn"
            >
              <div className="dropdown">
                <Dropdown.Item style={{ color: "darkblue" }}>
                  Update Profile Picture
                </Dropdown.Item>
                <Dropdown.Item style={{ color: "darkblue" }}>
                  Edit Personal Info
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link style={{ color: "darkblue" }} to="/">
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
        className="SideBar Tsidebar"
        style={{ top: `${scheight}px`, width: swidth }}
      >
        <div className="SitemCon ">
          <Link className="Sitems TSitems" to="/Teacher/">
            <GiHomeGarage />
            <h3>Home</h3>
          </Link>
          <Link className="Sitems TSitems" to="/Teacher/Examination">
            <BiCalendarCheck />
            <h3>Examination</h3>
          </Link>
          <Link className="Sitems TSitems" to="/Teacher/TimeTable">
            <GiCalendar />
            <h3>Schedule</h3>
          </Link>
          <Link className="Sitems TSitems" to="/Teacher/Salary">
            <GiTakeMyMoney />
            <h3>Salary Slip</h3>
          </Link>
          <span className="sglitch"></span>
        </div>
      </section>
      {/*=================================Left SideBar========================================*/}

      {/*=================================Content Area========================================*/}
      <div
        className="content"
        style={{
          transform: `translateX(${
            swidth === "10%" ? 5.5 : 0
          }%) translateY(${scheight}px)`,
          width: swidth === "10%" ? "91%" : "100%"
        }}
      >
        <div className="content-contain p-1 pb-5 mb-5">
          <Switch>
            <Route exact path="/Teacher/">
              <TuHome />
            </Route>
            <Route path="/Teacher/Examination">
              <TuExam />
            </Route>
            <Route path="/Teacher/Salary">
              <TuSalary />
            </Route>
            <Route path="/Teacher/TimeTable">
              <TuTimetable />
            </Route>
            <Route path="/Teacher/Course">
              <TuCourse />
            </Route>
          </Switch>
        </div>
      </div>
      {/*=================================Content Area========================================*/}
    </div>
  );
};
export default Teacher_Section;
