import React, { useState } from 'react';
import './PatientRegistration.css';
import PersonalInformation from "./PersonalInformation";
import MedicalInformation from "./MedicalInformation";
import LifestyleInformation from "./LifestyleInformation";

const PatientRegistration = () => {
//   const [firstName, setFirstName] = useState('');
//   const [middleName, setMiddleName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [dob, setDob] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement your form submission logic here
//     console.log('Form submitted:', {
//       firstName,
//       middleName,
//       lastName,
//       email,
//       phone,
//       dob,
//       // Add other form fields here
//     });
//   };

  return (
    <>
        <div className='pageHeading'>
            <div className='sideheadings'></div>
            <div className='mainHeading'>Patient Registration</div>
            <div className='sideheadings'>Contact Us</div>
        </div>
        <div className="registrationContainer">
            <PersonalInformation />
        </div>
        <div className="registrationContainer">
            <MedicalInformation />
        </div>
        <div className="registrationContainer">
            <LifestyleInformation />
        </div>
        <div className='footer'>
            <button className='footButtons' type="submit">Back To Login</button>
            <button className='footButtons' type="submit">Submit</button>
        </div>

    
    </>
  );
};

export default PatientRegistration;
