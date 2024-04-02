import React, { useState, useEffect } from "react";
import { usePatientIdContext } from "../../pages/Patient/PatientIdContext";

const OTP = ({ reportId, doctorId }) => {
  const [otp, setOtp] = useState("");
  const { data } = usePatientIdContext();

  console.log(data);
  console.log(reportId);
  console.log(doctorId);

  useEffect(() => {
    getOtp(data);
  }, []);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let intOtp = parseInt(otp);

    try {
      const requestBody = {
        doctorId: doctorId,
        patientId: data,
        reportId: reportId,
        otp: intOtp,
      };

      const response = await fetch(
        "http://localhost:8081/teleRadiology/giveConsent",
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
        console.log(responseData);
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error("OTP incorrect:", error.message);
    }

    setOtp("");
  };

  const getOtp = async (data) => {
    try {
      const response = await fetch(
        `http://localhost:8081/teleRadiology/otpVerification/${data}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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
