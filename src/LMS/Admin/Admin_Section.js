//================================IMPORTS=================================//
import "./Admin.css";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import { GiHomeGarage, GiCalendar, GiTakeMyMoney } from "react-icons/gi"; // Correct import
import { BiLogOut } from "react-icons/bi"; // Correct import
import { HiSpeakerphone } from "react-icons/hi"; // Correct import
import { BiIntersect, BiBookAdd } from "react-icons/bi"; // Correct import
import { HiUserAdd } from "react-icons/hi"; // Correct import
import { IoIosPersonAdd } from "react-icons/io"; // Correct import
import { AiOutlineUsergroupAdd } from "react-icons/ai"; // Correct import
import { SiGoogleclassroom } from "react-icons/si"; // Correct import
import { FaCoins } from "react-icons/fa"; // Correct import
import AuHome from "./Au_Home";
import AuAnnounce from "./Au_Announce";
import AuClasses from "./Au_Classes";
import AuCourse from "./Au_Course";
import AuFee from "./Au_Fee";
import AuSalary from "./Au_Salary";
import AuSection from "./Au_Section";
import AuStudent from "./Au_Student";
import AuTeacher from "./Au_Teacher";
import AuTimetable from "./Au_Timetable";
import AuUser from "./Au_User";
//================================IMPORTS=================================//

const Admin_Section = () => {
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
    <div className="Admin-Section Student-Section">
      {/*=================================NavBar========================================*/}
      <Navbar ref={ht} expand="lg" className="w-100 d-flex Navbar Adnavbar">
        <Navbar.Brand className="d-flex">
          <img
            src="./Media/lms_logo.png"
            alt="Logo"
            className="Adlogo logoimg mx-2 mb-sm-3"
            onClick={() => {
              if (swidth === "10%") {
                setswidth("1px");
              } else {
                setswidth("10%");
              }
            }}
          />
          <h1 className="my-3 p-1 px-2 Ah1">Howdy Mr Arif !</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="Aditems courses row">
            <li className="my-1">
              <Link
                className="Adcourse course px-2 mx-2"
                to="/Admin/Announcements"
              >
                <HiSpeakerphone /> Make Announcements
              </Link>
            </li>
            <li className="my-1">
              <Link className="Adcourse course px-2 mx-2" to="/Admin/Sections">
                <BiIntersect /> Add/Remove Sections
              </Link>
            </li>
            <li className="my-1">
              <Link className="Adcourse course px-2 mx-2" to="/Admin/Courses">
                <BiBookAdd /> Add/Remove Courses
              </Link>
            </li>
          </ul>

          <div className="mr-auto prof">
            <div className="nameroll">
              Arif Lohar
              <br />
              ad123
              <br />
              Manag.Admin
            </div>
            <DropdownButton
              menuAlign="right"
              title={<img src="./Media/personc.jpg" alt="profile" />}
              id="dropdown-menu-align-right"
            >
              <div className="dropdown">
                <Dropdown.Item style={{ color: "#948300" }}>
                  Update Profile Picture
                </Dropdown.Item>
                <Dropdown.Item style={{ color: "#948300" }}>
                  Edit Personal Info
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link style={{ color: "#948300" }} to="/">
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
        className="AdSideBar SideBar"
        style={{ top: `${scheight}px`, width: swidth }}
      >
        <div className="SitemCon">
          <Link className="AdSitems Sitems" to="/Admin/">
            <GiHomeGarage />
            <h3>Home</h3>
          </Link>
          <Link className="AdSitems Sitems" to="/Admin/Teachers">
            <IoIosPersonAdd />
            <h3>Manage Teachers</h3>
          </Link>
          <Link className="AdSitems Sitems" to="/Admin/Students">
            <HiUserAdd />
            <h3>Manage Students</h3>
          </Link>
          <Link className="AdSitems Sitems" to="/Admin/Users">
            <AiOutlineUsergroupAdd />
            <h3>Manage Users</h3>
          </Link>
          <Link className="AdSitems Sitems" to="/Admin/Classes">
            <SiGoogleclassroom />
            <h3>Manage Classes</h3>
          </Link>
          <Link className="AdSitems Sitems" to="/Admin/TimeTables">
            <GiCalendar />
            <h3>Manage Time Tables</h3>
          </Link>
          <Link className="AdSitems Sitems" to="/Admin/Fees">
            <GiTakeMyMoney />
            <h3>Manage Fees</h3>
          </Link>
          <Link className="AdSitems Sitems" to="/Admin/Salaries">
            <FaCoins />
            <h3>Manage Salaries</h3>
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
          width: swidth === "10%" ? "91%" : "100%",
        }}
      >
        <div className="content-contain p-1 pb-5 mb-5">
          <Switch>
            <Route exact path="/Admin/">
              <AuHome />
            </Route>
            <Route path="/Admin/Announcements">
              <AuAnnounce />
            </Route>
            <Route path="/Admin/Classes">
              <AuClasses />
            </Route>
            <Route path="/Admin/Courses">
              <AuCourse />
            </Route>
            <Route path="/Admin/Fees">
              <AuFee />
            </Route>
            <Route path="/Admin/Salaries">
              <AuSalary />
            </Route>
            <Route path="/Admin/Sections">
              <AuSection />
            </Route>
            <Route path="/Admin/Students">
              <AuStudent />
            </Route>
            <Route path="/Admin/Teachers">
              <AuTeacher />
            </Route>
            <Route path="/Admin/TimeTables">
              <AuTimetable />
            </Route>
            <Route path="/Admin/Users">
              <AuUser />
            </Route>
          </Switch>
        </div>
      </div>
      {/*=================================Content Area========================================*/}
    </div>
  );
};

export default Admin_Section;
