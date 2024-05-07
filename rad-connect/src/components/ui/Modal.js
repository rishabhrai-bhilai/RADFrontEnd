import React, { useEffect, useState } from "react";
import "./Modal.css";
import SearchBar from "./SearchBar";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import Toggle from "./Toggle";
import patientImage from "../../assets/patientbox.png";
import OTP from "./OTP";

import OTPInput from '../form/OTPInput';
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

const Modal = ({ closeModal, reportId }) => {
  const { data, token, setIsUserLoggedIn } = useUserIdContext();

  const [doctorsAndRadiologists, setDoctorsAndRadiologists] = useState([]);
  const [filteredDoctorsAndRadiologists, setFilteredDoctorsAndRadiologists] = useState([]);
  const [showOTPComponent, setShowOTPComponent] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);  
  const [toggleValue, setToggleValue] = useState();  
  const [responseMessage, setResponseMessage] = useState("");
  const [roleVal, setRoleVal] = useState("");

  const handleSearch = (searchTerm) => {
    const filteredNames = doctorsAndRadiologists.filter((element) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
     
     setFilteredDoctorsAndRadiologists(filteredNames);
  };

  const handleToggle = (isToggled, doctorId, roleVal) => {
    isToggled ? setToggleValue(1) : setToggleValue(0);
    setSelectedDoctorId(doctorId);
    setShowOTPComponent(true);
    setRoleVal(roleVal);
  };

  useEffect(() => {
    getDocAndRadio(reportId);
  }, [data]);
  

  const getDocAndRadio = async (reportId) => {
    const responseData = await HttpGet(0, "/getAllDoctorsAndRadiologits/"+reportId, token);
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData == null) {
      throw new Error("Failed to fetch doctors list");
    }     
     
     setDoctorsAndRadiologists(responseData);
     setFilteredDoctorsAndRadiologists(responseData);     
  };

  useEffect(() => {
    if (responseMessage.length > 0) {
      const timer = setTimeout(() => {
        setResponseMessage("");
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  return (
    <div className="modal">
      <div className="modal-content">
        {/* <span className="close" onClick={closeModal}>&times;</span> */}
        <div className="close-icon-container">
          <i className="bx bx-x close" onClick={closeModal}></i>
        </div>

        <div className="modal-container">
          <div>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="modal-doctor-container">
            {filteredDoctorsAndRadiologists.length === 0 ? (
              <div>No users found</div>
            ) : (
              <ul role="list" className="modal-doctor-list">
                {filteredDoctorsAndRadiologists.map((doctor) => (
                  <li className="modal-doctor-list-item">
                    <div className="list-item-box">
                      <div className="list-image-holder">
                        <div className="image">
                          <img src={patientImage} alt="" />
                        </div>
                      </div>
                      <div className="list-name">
                        {doctor.name}                        
                      </div>
                      <div className="list-name">
                        {doctor.role}                         
                      </div>
                      <div className="list-date">{doctor.gender}</div>
                      <div className="list-toggle-btn">
                        <div>
                          <Toggle
                            onToggle={(isToggled) =>
                              handleToggle(isToggled, doctor.id, doctor.role)
                            }
                            isToggled={doctor.consent === 1}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div>              
              {/* {showOTPComponent && ( */}
                {showOTPComponent && roleVal === 'Doctor' && (
                  <OTP
                    reportId={reportId}
                    doctorId={selectedDoctorId}
                    toggleValue={toggleValue}
                    radiologistId={-1}
                    notificationId={-1}
                    setShowOTPComponent={setShowOTPComponent}
                    setResponseMessage={setResponseMessage}
                  />
                )}
                
                {showOTPComponent && roleVal === 'Radiologist' && (
                  <OTP
                    reportId={reportId}
                    doctorId={-1}
                    toggleValue={toggleValue}
                    radiologistId={selectedDoctorId}
                    notificationId={-1}
                    setShowOTPComponent={setShowOTPComponent}
                    setResponseMessage={setResponseMessage}
                  />
                )}
              {/* )}                          */}
            </div>
            {responseMessage.length > 0 && <div>{responseMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;