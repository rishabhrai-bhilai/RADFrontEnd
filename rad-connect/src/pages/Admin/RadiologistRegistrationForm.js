import React, { useState } from 'react'
import './AdminPageRegistrationForm.css'
import { useUserIdContext } from '../../pages/Common/UserIdContext';
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  HttpGet,
  HttpPost,
} from "../../constants";


const RadiologistRegistrationForm = ({role}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [expirence, setExperience] = useState("");
  const [highestEducation, setHighestEducation] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const { token, setIsUserLoggedIn } = useUserIdContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      password: password,
      role: role,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      experience: expirence,
      highestEducation: highestEducation,
      profilePhoto: profilePhoto
    };
    
    const responseData = await HttpPost(
      0,
      "/addRadiologist",
      token,
      formData
    );
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData != null) {
      setResponseMessage("Radiologist Added");
    }
  };

  return (
    <>
    <div class="admin-form-container px-4">
      {/* <div class="logo-container">
        New Radiologist Registration
      </div> */}


      <form class="form" onSubmit={handleSubmit}>
        <div class="form-group">

        <div className="flex">

<input
    type="text"
    id="firstName"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    placeholder='First Name'
    required
  />
  <input
    type="text"
    id="middleName"
    value={middleName}
    onChange={(e) => setMiddleName(e.target.value)}
    placeholder='Middle Name'
  />
  <input
    type="text"
    id="lastName"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    placeholder='Last Name'
    required
  />

        </div>
  

        <div className="flex">
        <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            required 
          />
          <input 
            type="text" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" 
            required 
          />
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Phone Number'
            required
          />
  
        </div>
        <div className="flex">

        <input
            type="number"
            id="expirence"
            value={expirence}
            onChange={(e) => setExperience(e.target.value)}
            placeholder='Expirence'
            required
          />
          <input
            type="text"
            id="highestEducation"
            value={highestEducation}
            onChange={(e) => setHighestEducation(e.target.value)}
            placeholder='Highest Education'
            required
          />

        </div>

        
          
          
          
          <input
            type="file"
            id="profilePhoto"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
            placeholder='Profile Photo'
            class="flex  rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
             
          />
        </div>
        <button class="form-submit-btn" type="submit">Register</button>
        {responseMessage.length > 0 && <div>{responseMessage}</div>}
      </form>

      
    </div>
    </>
  )
}

export default RadiologistRegistrationForm