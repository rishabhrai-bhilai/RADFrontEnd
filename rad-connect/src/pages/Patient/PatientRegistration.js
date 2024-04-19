import React, { useState } from "react";
import "./PatientRegistration.css";
import PersonalInformation from "./PersonalInformation";
import MedicalInformation from "./MedicalInformation";
import LifestyleInformation from "./LifestyleInformation";

const PatientRegistration = ({ email, credId }) => {
  return (
    <>
      <div className="pageHeading">
        <div className="sideheadings"></div>
        <div className="mainHeading">Patient Registration</div>
        <div className="sideheadings">Contact Us</div>
      </div>
      <div className="registrationContainer">
        <PersonalInformation username={email} uid={credId} />
      </div>
      {/* <div className="registrationContainer">
            <MedicalInformation />
        </div> */}
      {/* <div className="registrationContainer">
            <LifestyleInformation />
        </div> */}
      {/* <div className='footer'>
            <button className='footButtons' type="submit">Back To Login</button>
            <button className='footButtons' type="submit">Submit</button>
        </div> */}
    </>
  );
};

export default PatientRegistration;