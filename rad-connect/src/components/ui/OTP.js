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
  const { token } = useUserIdContext();

  console.log(data);
  console.log(reportId);
  console.log(doctorId);
  console.log(toggleValue);

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
      try {
        const requestBody = {
          doctorId: doctorId,
          patientId: data,
          reportId: reportId,
          otp: intOtp,
        };

        const response = await fetch(
          "http://" +
            DATA_HOST +
            ":" +
            DATA_PORT +
            "/teleRadiology/giveConsent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setResponseMessage("Consent Given");
        } else {
          console.log("Unable to give Consent");
          setResponseMessage("Unable to give Consent");
        }
      } catch (error) {
        console.error("OTP incorrect:", error.message);
        setResponseMessage("OTP incorrect");
      }
    } else {
      try {
        const requestBody = {
          reportId: reportId,
          doctorId: doctorId,
          patientId: data,
          otp: intOtp,
        };

        const response = await fetch(
          "http://" +
            DATA_HOST +
            ":" +
            DATA_PORT +
            "/teleRadiology/removeConsent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setResponseMessage("Consent Removed");
        } else {
          console.log("Unable to remove Consent");
          setResponseMessage("Unable to remove Consent");
        }
      } catch (error) {
        console.error("OTP incorrect:", error.message);
        setResponseMessage("OTP incorrect");
      }
    }

    setOtp("");
  };

  const getOtp = async (data) => {
    try {
      const response = await fetch(
        "http://" +
          DATA_HOST +
          ":" +
          DATA_PORT +
          "/teleRadiology/otpVerification/${data}",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to get OTP");
      }

      console.log(response);
    } catch (error) {
      console.log("Error getting OTP:", error);
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
