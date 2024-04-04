// CredentialForm.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../Common/CredentialForm.css";
import { useLoginRoleContext } from "./LoginRoleContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserIdContext } from "./UserIdContext";

const CredentialForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorData, setErrorData] = useState("");
  // const [userValue, setUserValue] = useState(0);
  const { getUserId } = useUserIdContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let role = 0;

      if (data === "Patient") role = "ROLE_PATIENT";
      if (data === "Doctor") role = "ROLE_DOCTOR";
      if (data === "Radiologist") role = "ROLE_RADIOLOGIST";
      if (data === "Lab") role = "ROLE_LAB";

      const requestBody = {
        email: username,
        password: password,
        role: role,
      };

      const response = await fetch(
        "http://192.168.0.100:8081/teleRadiology/loginCredentials",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        // If the response is successful, you might want to handle it accordingly.
        const responseData = await response.json();
        const userId = responseData.user;

        console.log(userId); // Output: 1
        getUserId(userId);

        if (data === "Patient") navigate("/patientdashboard");
        if (data === "Lab") navigate("/labdashboard");
        if (data === "Doctor") navigate("/doctorprofile");
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

  const handleForgotPassword = () => {
    alert("Forgot Password clicked!");
  };

  const { data } = useLoginRoleContext();
  console.log(data);

  return (
    <div className="form-container">
      <form className="form-group" onSubmit={handleSubmit}>
        <p className="loginrole">Login As {data}</p>
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
        <p className="paragraph">Password</p>
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
            to="/forgot-password"
            className="link"
            onClick={handleForgotPassword}
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
        {data === "Patient" && (
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
