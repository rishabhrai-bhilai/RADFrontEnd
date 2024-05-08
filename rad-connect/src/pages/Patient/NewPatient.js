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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {    
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
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

    if(!isValidPassword(password)) {
      alert("Password is not strong");
      return;
    }

    setTermsCond(true);

    if(acceptTermsCond) {

    const formData = {
      email: userName,
      password: password,
      role: "ROLE_PATIENT",
    };

    try {
      const response = await fetch(
        "https://" +
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
        {/* <div class="flex flex-col items-center justify-center h-screen">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Login</h2>
    <form class="flex flex-col">
      <input type="email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address"/>
      <input type="password" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password"/>
      <div class="flex items-center justify-between flex-wrap">
        <label for="remember-me" class="text-sm text-gray-900 cursor-pointer">
          <input type="checkbox" id="remember-me" class="mr-2"/>
          Remember me
        </label>
        <a href="#" class="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
        <p class="text-gray-900 mt-4"> Don't have an account? <a href="#" class="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
      </div>
      <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
    </form>
  </div>
</div> */}


    
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