import React, { useState, useEffect } from "react";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  HttpPost,
  HttpGet,
} from "../../constants";

import OTPInput from "../form/OTPInput";

const OTP = ({
  reportId,
  doctorId,
  toggleValue,
  radiologistId,
  setShowOTPComponent,
  setResponseMessage,
  notificationId,
  setChangePass
}) => {
  const [otp, setOtp] = useState("");
  const { data, token, setIsUserLoggedIn, roleId } = useUserIdContext();

  useEffect(() => {
    getOtp(data);
  }, []);

  {/* commented by Rishabh  */}
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {

    {/* commented by Rishabh  */}
    e.preventDefault();    

    let intOtp = parseInt(otp);

    console.log(intOtp);

    if (toggleValue === 1 || toggleValue === 4) {
      setShowOTPComponent(false);
      const requestBody = {
        doctorId: doctorId,
        patientId: roleId,
        reportId: reportId,
        otp: intOtp,
        radiologistId: radiologistId,
      };

      const responseData = await HttpPost(
        0,
        "/giveConsent",
        token,
        requestBody
      );
      if (responseData == "Unauthorized") {
        setIsUserLoggedIn(false);
      }
      if (responseData != null) {
        setResponseMessage("Consent Given");
      } else {
        setResponseMessage("Unable to give Consent");
      }

      if (toggleValue === 4) {      
        const responseData = HttpGet(
          0,
          "/deleteNotification/" + notificationId,
          token
        );
        if (responseData == "Unauthorized") {
          setIsUserLoggedIn(false);
        }
        if (responseData != null) {
          setResponseMessage("Request Accepted");
        } else {
          setResponseMessage("Could not delete notification");
        }
      }
    } else if (toggleValue === 0) {
      setShowOTPComponent(false);
      const requestBody = {
        reportId: reportId,
        doctorId: doctorId,
        patientId: roleId,
        radiologistId: radiologistId,
        otp: intOtp,
      };

      console.log(requestBody);
      const responseData = await HttpPost(
        0,
        "/removeConsent",
        token,
        requestBody
      );
      if (responseData == "Unauthorized") {
        setIsUserLoggedIn(false);
      }
      if (responseData != null) {
        setResponseMessage("Consent Removed");
      } else {
        setResponseMessage("Unable to remove Consent");
      }
    } else if (toggleValue === 5) {

      try {
        const requestBody = {
          credId: data,
          otp: intOtp
        };

        const response = await fetch(
            "https://" +
            DATA_HOST +
            ":" +
            DATA_PORT +
            "/teleRadiology/verifyOtp",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            }
        );

        if (response.ok) {          
            setChangePass(2);
        }

      } catch (error) {
        console.error("Error verifying OTP", error.message);
      }      
    
    } else {
      setShowOTPComponent(false);
      const responseData = HttpGet(
        0,
        "/deleteNotification/" + notificationId,
        token
      );
      if (responseData == "Unauthorized") {
        setIsUserLoggedIn(false);
      }
      if (responseData != null) {
        setResponseMessage("Request Rejected");
      } else {
        setResponseMessage("Unable to reject request");
      }
    }

    setOtp("");
  };

  const getOtp = async (credId) => {
    console.log(roleId);
    const responseData = await HttpGet(0, "/otpVerification/" + credId, token);
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData == null) {
      throw new Error("Failed to get OTP");
    }
  };

  return (
    <div className="otp-container">
      <h3>Enter OTP:</h3>

      {/* commented by Rishabh  */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
        />
        <button type="submit">Submit</button>
      </form>

{/* <OTPInput handleSub={handleSubmit} setOtpValue={setOtp} /> */}
   


    </div>
  );
};

export default OTP;