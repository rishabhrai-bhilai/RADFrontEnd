// CredentialForm.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../Common/CredentialForm.css";
import { useLoginRoleContext } from "./LoginRoleContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserIdContext } from "./UserIdContext";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
} from "../../constants";

const CredentialForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorData, setErrorData] = useState("");
  // const [userValue, setUserValue] = useState(0);
  const { getUserId, getUserToken, setIsUserLoggedIn } = useUserIdContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let roleVal = 0;

      if (role === "Patient") roleVal = "ROLE_PATIENT";
      if (role === "Doctor") roleVal = "ROLE_DOC";
      if (role === "Radiologist") roleVal = "ROLE_RADIOLOGIST";
      if (role === "Lab") roleVal = "ROLE_LAB";
      if (role === "Admin") roleVal = "ROLE_ADMIN";

      const requestBody = {
        email: username,
        password: password,
        role: roleVal,
      };

      const response = await fetch(
        "http://" +
          DATA_HOST +
          ":" +
          DATA_PORT +
          "/teleRadiology/loginCredentials",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        const userId = responseData.user;        
        getUserId(userId);
        getUserToken(responseData.token);
        setIsUserLoggedIn(true);

        if (role === "Patient") navigate("/patientdashboard");
        if (role === "Lab") navigate("/labdashboard");
        if (role === "Doctor") navigate("/doctordashboard");
        if (role === "Radiologist") navigate("/radiologistdashboard");
        if (role === "Admin") navigate("/admindashboard");
      } else {
        // Handle errors
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
        setErrorData(await response.text());
      }
    } catch (error) {
      console.error("Error posting credentials:", error.message);
    }
  };
  
  const { role } = useLoginRoleContext();

  return (
    <div className="form-container shadow-md">
      <form className="form-group" onSubmit={handleSubmit}>
        <p className="loginrole">Login As {role}</p>
        <br />
        <p className="paragraph">Username / Email</p>
        <p />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p />

        <p className="paragraph mt-4">Password</p>
        <p />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p />
        <p>
          <Link
            to="/forgotpassword"
            className="link"            
          >
            Forgot Password?
          </Link>
        </p>
        {showError && (
          <div style={{ color: "red", margin: "10px 0" }}>{errorData}</div>
        )}
        <button type="submit" className="submit-btn">
          Login
        </button>
        {role === "Patient" && (
          <div>
            <div className="or-Container">
              <hr className="horizontal-line" />
              <p className="or">&nbsp;&nbsp;Or&nbsp;&nbsp;</p>
              <hr className="horizontal-line" />
            </div>
            {/* <Link to="/patientregistration" className="signup-btn"> */}
            <Link to="/newpatient" className="signup-btn">
              Sign Up
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default CredentialForm;