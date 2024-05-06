import React, { useState } from "react";
import TermsAndConditions from "../../components/ui/TermsAndConditions";
import "./NewPatient.css";
import { Link, useNavigate } from "react-router-dom";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
} from "../../constants";

const NewPatient = ({ onSubmitEmail, onSubmitCred }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [termsCond, setTermsCond] = useState(false);
  const [acceptTermsCond, setAcceptTermsCond] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBackToLogin = () => {
      navigate("/");
  }

  const handleSubmit = async (e) => {

    if (!isValidEmail(userName)) {
      alert("Please enter a valid email address");
      return;
    }

    onSubmitEmail(userName);

    e.preventDefault();

    if (password !== password2) {
      alert("Different Password");
      return;
    }

    console.log("Hi");

    setTermsCond(true);

    if(acceptTermsCond) {

    const formData = {
      email: userName,
      password: password,
      role: "ROLE_PATIENT",
    };

    try {
      const response = await fetch(
        "http://" +
          DATA_HOST +
          ":" +
          DATA_PORT +
          "/teleRadiology/createPatientCred",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      onSubmitCred(responseData.user);
      navigate("/patientregistration");
    } catch (error) {
      console.error("There was a problem saving the data:", error);
    }
  }  
  };

  return (
    <>
      <div className="pageHeading">
        <div className="sideheadings"></div>
        <div className="mainHeading">Patient Registration</div>
        <div className="sideheadings">Contact Us</div>
      </div>
      <div className="signUpContainer">
        <div className="formHeadings">
          <div className="headings-true">Sign Up Details</div>
        </div>
        <form className="signUpDetails" onSubmit={handleSubmit}>
          <div className="signUpInfo">
            <div className="infoRow">
              <label htmlFor="username">Username*</label>
              <input
                type="email"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="infoRow">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="infoRow">
              <label htmlFor="password">Retype Password*</label>
              <input
                type="password"
                id="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="footer">
            <button className="footButtons" type="submit" onClick={handleBackToLogin}>
              Back To Login
            </button>
            {/* <Link to="/patientregistration"> */}
            <button className="footButtons" type="submit">
              Submit
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
      {termsCond && <TermsAndConditions setTermsCondComp={setTermsCond} setTermsAndCond={setAcceptTermsCond}/>}
    </>
  );
};

export default NewPatient;