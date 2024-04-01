import React, { useState } from 'react';
import './NewPatient.css';
import { Link } from 'react-router-dom';
import PersonalInformation from "./PersonalInformation";
import MedicalInformation from "./MedicalInformation";
import LifestyleInformation from "./LifestyleInformation";

const NewPatient = () => {
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
        <div className="signUpContainer">
            <div className='formHeadings'>
                <div className='headings-true'>Sign Up Details</div>
            </div>
            <form className='signUpDetails'>
                <div className='signUpInfo'>
                    <div className='infoRow'>
                        <label htmlFor="username">Username*</label>
                        <input type="email" id="username" required />
                    </div>
                    <div className='infoRow'>
                        <label htmlFor="password">Password*</label>
                        <input type="password" id="password" required />
                    </div>
                    <div className='infoRow'>
                    <label htmlFor="password">Retype Password*</label>
                        <input type="password" id="password" required />
                    </div>


                    {/* <div className='col1'>
                        <label htmlFor="username">Username*</label>
                        <label htmlFor="password">Password*</label>
                        <label htmlFor="password">Retype Password*</label>
                    </div>
                    <div className='col2'>
                        <input type="email" id="username" required />
                        <input type="password" id="password" required />
                        <input type="password" id="password" required />
                    </div> */}
                </div>                
            </form>
        </div>
        
        <div className='footer'>
            <button className='footButtons' type="submit">Back To Login</button>
            <Link to="/patientregistration">
                <button className='footButtons' type="submit">Submit</button>
            </Link>
        </div>

    
    </>
  );
};

export default NewPatient;
