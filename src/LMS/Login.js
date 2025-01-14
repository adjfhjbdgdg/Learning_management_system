//================================IMPORTS=================================//
import React, { useState, useEffect } from "react";
import "./LMS_style.css";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
//================================IMPORTS=================================//

const Login_Page = () => {
  const [login, setlogin] = useState("Xyz");
  const [pass, setpass] = useState("111");
  const [messege, setmessege] = useState("");
  const [page, setpage] = useState("");
  const [iswrong, setiswrong] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="Login_Page img-fluid pb-5">
      {/*=================================LOGIN FORM========================================*/}
      <Form className="Form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="text-white">Login ID</Form.Label>
          <Form.Control
            className="text"
            placeholder="Login"
            onChange={(e) => setlogin(e.target.value)}
          />
          <FaUserAlt className="icons" />
          <Form.Text className="text-muted txmu">
            {iswrong ? messege : ""}
          </Form.Text>
          <Form.Text className="text-muted">
            We'll never share your Info with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            className="text"
            type="password"
            placeholder="Password"
            onChange={(e) => setpass(e.target.value)}
          />
          <RiLockPasswordFill className="icons" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            className="text-white"
            type="checkbox"
            label="Remeber Me"
          />
        </Form.Group>
        <Link to={`/${page}`}>
          <Button
            variant="success"
            onMouseOver={async () => {
              if (login.substring(0, 2) === "st") {
                setmessege("You are Student but No");
                try {
                  // Make API call to backend
                  const response = await axios.post(
                    "http://localhost:5000/login",
                    {
                      login,
                      password: pass,
                    }
                  );
                  console.log(response);
                  // Check the response and navigate accordingly

                  if (response.status == 200) {
                    setpage("Student");
                    setiswrong(false);
                  } else {
                    setmessege("Wrong User Id or Password");
                  }
                } catch (error) {
                  setmessege("Wrong UserId or Password");
                  setiswrong(true);
                }
              } else if (login.substring(0, 2) === "tr") {
                setmessege("You are Teacher but No");
                try {
                  // Make API call to backend
                  const response = await axios.post(
                    "http://localhost:5000/login",
                    {
                      login,
                      password: pass,
                    }
                  );
                  console.log(response);
                  // Check the response and navigate accordingly

                  if (response.status == 200) {
                    setpage("Teacher");
                    setiswrong(false);
                  } else {
                    f;
                    setmessege("Wrong User Id or Password");
                  }
                } catch (error) {
                  setmessege("Wrong UserId or Password");
                  setiswrong(true);
                }
              } else if (login.substring(0, 2) === "ad" && pass === "3333") {
                setmessege("You are Admin but No");
                if (login === "ad123" && pass === "3333") {
                  setpage("Admin");
                  setiswrong(false);
                }
              } else {
                setmessege("Invalid ID or PASSWORD");
              }
            }}
            onClick={() => {
              setiswrong(true);
            }}
          >
            <BiLogIn /> Sign In
          </Button>
        </Link>
      </Form>
      {/*=================================LOGIN FORM========================================*/}
    </div>
  );
};
export default Login_Page;
