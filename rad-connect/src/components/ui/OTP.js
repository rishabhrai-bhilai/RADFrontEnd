import React, { useState, useEffect } from "react";
import { usePatientIdContext } from "../../pages/Patient/PatientIdContext";
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

const OTP = ({
  reportId,
  doctorId,
  toggleValue,
  setShowOTPComponent,
  setResponseMessage,
}) => {
  const [otp, setOtp] = useState("");
  const { data } = usePatientIdContext();
  const { token, setIsUserLoggedIn } = useUserIdContext();

  useEffect(() => {
    getOtp(data);
  }, []);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowOTPComponent(false);

    let intOtp = parseInt(otp);

    if (toggleValue === 1) {
      const requestBody = {
        doctorId: doctorId,
        patientId: data,
        reportId: reportId,
        otp: intOtp,
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
    } else {
      const requestBody = {
        reportId: reportId,
        doctorId: doctorId,
        patientId: data,
        otp: intOtp,
      };
      const responseData = await HttpPost(
        0,
        "/removeConsent",
        token,
        requestBody
      );
      if (responseData != null) {
        setResponseMessage("Consent Removed");
      } else {
        setResponseMessage("Unable to remove Consent");
      }
    }

    setOtp("");
  };

  const getOtp = async (data) => {
    const responseData = await HttpGet(0, "/otpVerification/" + data, token);
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OTP;
