import React, { useEffect, useState } from "react";
import "./Modal.css";
import SearchBar from "./SearchBar";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import Toggle from "./Toggle";
import patientImage from "../../assets/patientbox.png";
import OTP from "./OTP";

const Modal = ({ closeModal,reportId }) => {

  console.log(reportId);

  const { data } = useUserIdContext();

  const [doctors,setDoctors]=useState([]);
  const [filteredDoctorsList,setFilteredDoctorsList]=useState([]);
  const [showOTPComponent,setShowOTPComponent]=useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const handleSearch = (searchTerm) => {
    const filteredNames = doctors.filter(doc => doc.firstName.toLowerCase().startsWith(searchTerm.toLowerCase()));
    setFilteredDoctorsList(filteredNames);
  };

  const handleToggle = (isToggled,doctorId) => {
    console.log("Toggle state:", isToggled ? "On" : "Off");
    if(isToggled){
      setSelectedDoctorId(doctorId);
      setShowOTPComponent(true);
    }else{
      setShowOTPComponent(false);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, [data]);

  const getAllDoctors=async()=>{
    try{
      const response = await fetch(
        "http://localhost:8081/teleRadiology/getAllDoctors",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },          
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch doctors list");
      }
       const responseData = await response.json();
       console.log(responseData);
       setDoctors(responseData || []);
       setFilteredDoctorsList(responseData || []);
    }catch(error){
      console.log("Error Fetching Doctors list:",error);
    }
  };

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
          {filteredDoctorsList.length === 0 ? (
              <div>No users found</div>
            ) : (
            <ul role="list" className="modal-doctor-list">
             {filteredDoctorsList.map((doctor) => (
              <li className="modal-doctor-list-item">
                <div className="list-item-box">
                  <div className="list-image-holder">
                    <div className="image">
                      <img src={patientImage} alt="" />
                    </div>
                  </div>
                  <div className="list-name">
                  {doctor.firstName} {doctor.middleName !== null ? doctor.middleName : ''} {doctor.lastName}
                  </div>
                  <div className="list-date">{doctor.gender}</div>
                    <div className="list-toggle-btn">
                      <div>
                      <Toggle onToggle={(isToggled) => handleToggle(isToggled, doctor.id)} />
                    </div>
                  </div>
                </div>
              </li>              
             ))}
            </ul>
            )}
            <div>
            {showOTPComponent && <OTP reportId={reportId} doctorId={selectedDoctorId} />}
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default Modal;