import React, { useState } from "react";
import "./AdminPageRegistrationForm.css";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
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

const DoctorRegistrationForm = ({ role }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [hospitalCity, setHospitalCity] = useState("");
  const [hospitalState, setHospitalState] = useState("");
  const [hospitalPincode, setHospitalPincode] = useState("");
  const [hospitalPhoneNumber, setHospitalPhoneNumber] = useState("");
  const [expirence, setExperience] = useState("");
  const [highestEducation, setHighestEducation] = useState("");
  const [type, setType] = useState("");
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
      gender: gender,
      hospitalAddress: hospitalAddress,
      hospitalCity: hospitalCity,
      hospitalState: hospitalState,
      hospitalPinCode: hospitalPincode,
      hospitalEmail: email,
      hospitalPhoneNumber: hospitalPhoneNumber,
      experience: expirence,
      highestEducation: highestEducation,
      type: type,
      profilePhoto: profilePhoto,
    };
    // console.log(formData);

    const responseData = await HttpPost(0, "/addDoctor", token, formData);
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData != null) {
      setResponseMessage("Doctor Added");
    }
  };

  return (
    <>
      <div class="admin-form-container px-4 ">
        {/* <div class="logo-container">New Doctor Registration</div> */}

        <form class="form" onSubmit={handleSubmit}>
          <div class="form-group">
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

              <select
                name="gender"
                className="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">-Gender-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div class="flex">
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
                className="input"
              />

              <input
                type="text"
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder="Middle Name"
              />

              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex">
              <input
                type="text"
                id="hospitalAddress"
                value={hospitalAddress}
                onChange={(e) => setHospitalAddress(e.target.value)}
                placeholder="Hospital Address"
                required
              />

              <input
                type="text"
                id="hospitalPhoneNumber"
                value={hospitalPhoneNumber}
                onChange={(e) => setHospitalPhoneNumber(e.target.value)}
                placeholder="Hospital Phone Number"
                required
              />
            </div>

            <div class="flex">
              <input
                type="text"
                id="hospitalCity"
                value={hospitalCity}
                onChange={(e) => setHospitalCity(e.target.value)}
                placeholder="Hospital City"
                required
              />
              <input
                type="text"
                id="hospitalState"
                value={hospitalState}
                onChange={(e) => setHospitalState(e.target.value)}
                placeholder="Hospital State"
                required
              />
              <input
                type="text"
                id="hospitalPincode"
                value={hospitalPincode}
                onChange={(e) => setHospitalPincode(e.target.value)}
                placeholder="Hospital Pincode"
                required
              />
            </div>

            <div className="flex">
              <input
                type="text"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Type"
                required
              />

              {/* <input
            type="text"
            id="hospitalEmail"
            // value={hospitalEmail}
            // onChange={(e) => setHospitalEmail(e.target.value)}
            placeholder='Hospital Email'
            required
          /> */}

              <input
                type="number"
                id="expirence"
                value={expirence}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Expirence"
                required
              />
              <input
                type="text"
                id="highestEducation"
                value={highestEducation}
                onChange={(e) => setHighestEducation(e.target.value)}
                placeholder="Highest Education"
                required
              />
            </div>

            {/* <div class="grid w-full max-w-xs items-center gap-1.5">
              <label class="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Picture
              </label> */}
              <input
                id="profilePhoto"
                type="file"
                value={profilePhoto}
              onChange={(e) => setProfilePhoto(e.target.value)}
              placeholder="Profile Photo"
                class="flex  rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              />
            {/* </div> */}

            
            <button class="form-submit-btn" type="submit">
              Register
            </button>
            {responseMessage.length > 0 && <div>{responseMessage}</div>}
          </div>
        </form>
      </div>
    </>
  );
};

export default DoctorRegistrationForm;
