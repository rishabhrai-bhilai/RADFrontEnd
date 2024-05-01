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
}) => {
  const [otp, setOtp] = useState("");
  const { token, setIsUserLoggedIn, roleId } = useUserIdContext();

  useEffect(() => {
    getOtp(roleId);
  }, []);

  {/* commented by Rishabh  */}
  // const handleOtpChange = (e) => {
  //   setOtp(e.target.value);
  // };

  const handleSubmit = async (e) => {

    {/* commented by Rishabh  */}
    // e.preventDefault();

    setShowOTPComponent(false);

    let intOtp = parseInt(otp);

    if (toggleValue === 1 || toggleValue === 4) {
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
          setResponseMessage("Request Acceoted");
        } else {
          setResponseMessage("Could not delete notification");
        }
      }
    } else if (toggleValue === 0) {
      const requestBody = {
        reportId: reportId,
        doctorId: doctorId,
        patientId: roleId,
        radiologistId: radiologistId,
        otp: intOtp,
      };
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
    } else {
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

  const getOtp = async (roleId) => {
    console.log(roleId);
    const responseData = await HttpGet(0, "/otpVerification/" + roleId, token);
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
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
        />
        <button type="submit">Submit</button>
      </form> */}

<OTPInput handleSubmit={handleSubmit} setOtpValue={setOtp} />
   


    </div>
  );
};

export default OTP;
