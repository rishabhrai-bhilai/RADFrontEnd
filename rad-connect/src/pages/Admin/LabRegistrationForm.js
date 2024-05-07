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

const LabRegistrationForm = ({role}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const { token, setIsUserLoggedIn } = useUserIdContext();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
      role: role,
      name: name,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      phoneNumber: phoneNumber
    };
    // console.log(formData);
    
    const responseData = await HttpPost(
      0,
      "/addLab",
      token,
      formData
    );
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData != null) {
      setResponseMessage("Lab Added");
    }

  };

  return (
    <>
    <div class="admin-form-container mx-8 shadow-md">
      <div class="logo-container">
        New Lab Registration
      </div>

      <form class="form" onSubmit={handleSubmit}>
        <div class="form-group">
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
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required
          />
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Address'
            required
          />
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='City'
            required
          />
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder='State'
            required
          />
          <input
            type="text"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder='Pincode'
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
        <button class="form-submit-btn" type="submit">Register</button>
        {responseMessage.length > 0 && <div>{responseMessage}</div>}
      </form>

      
    </div>
    </>
  )
}

export default LabRegistrationForm