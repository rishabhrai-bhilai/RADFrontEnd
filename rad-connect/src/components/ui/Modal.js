import React, { useEffect, useState } from "react";
import "./Modal.css";
import SearchBar from "./SearchBar";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import Toggle from "./Toggle";
import patientImage from "../../assets/patientbox.png";
import OTP from "./OTP";

const Modal = ({ closeModal, reportId }) => {
  console.log(reportId);

  const { data } = useUserIdContext();

  const [doctors, setDoctors] = useState([]);
  const [filteredDoctorsList, setFilteredDoctorsList] = useState([]);
  const [showOTPComponent, setShowOTPComponent] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [reportViewers, setReportViewers] = useState(null);
  const [toggleValue, setToggleValue] = useState();
  const [show, setShow] = useState(false);

  const handleSearch = (searchTerm) => {
    const filteredNames = doctors.filter((doc) =>
      doc.firstName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredDoctorsList(filteredNames);
  };

  const handleToggle = (isToggled, doctorId) => {
    console.log("Toggle state:", isToggled ? "On" : "Off");
    // if(isToggled){
    isToggled?setToggleValue(1):setToggleValue(0);
    setSelectedDoctorId(doctorId);
    setShowOTPComponent(true);
    // }else{
    //setShowOTPComponent(false);
    //}
  };

  useEffect(() => {
    getAllDoctors();
  }, [data]);

  useEffect(() => {
    getReportViewers(reportId);
  }, [reportId]);

  useEffect(() => {
    if (filteredDoctorsList.length > 0 && reportViewers !== null) {
      updateFilteredDoctorsList();
    }
  }, [filteredDoctorsList, reportViewers]);

  const getAllDoctors = async () => {
    try {
      const response = await fetch(
        "http://192.168.0.100:8081/teleRadiology/getAllDoctors",
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

      const updatedList = responseData.map((doctor) => {
        return { ...doctor, consent: 0 };
      });

      //console.log(updatedList);
      setDoctors(updatedList || []);
      setFilteredDoctorsList(updatedList || []);
    } catch (error) {
      console.log("Error Fetching Doctors list:", error);
    }
  };

  const getReportViewers = async (reportId) => {
    try {
      const response = await fetch(
        `http://192.168.0.100:8081/teleRadiology/getReportViewers/${reportId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch report Viewers");
      }
      const responseData = await response.json();
      setReportViewers(responseData || []);
    } catch (error) {
      console.error("Error fetching Report Viewers:", error);
    }
  };

  const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midVal = arr[mid].userId;

      if (midVal === target) {
        return mid; // Found the target
      } else if (midVal < target) {
        low = mid + 1; // Search the right half
      } else {
        high = mid - 1; // Search the left half
      }
    }

    return -1;
  };

  const updateFilteredDoctorsList = () => {
    for (let i = 0; i < reportViewers.length; i++) {
      const viewerId = reportViewers[i].viewerId;
      const index = binarySearch(filteredDoctorsList, viewerId);
      if (index !== -1) {
        filteredDoctorsList[index].consent = 1;
      }
    }

    setShow(true);

    console.log(filteredDoctorsList);
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
                        {doctor.firstName}{" "}
                        {doctor.middleName !== null ? doctor.middleName : ""}{" "}
                        {doctor.lastName}
                      </div>
                      <div className="list-date">{doctor.gender}</div>
                      <div className="list-toggle-btn">
                        <div>
                          <Toggle
                            onToggle={(isToggled) =>
                              handleToggle(isToggled, doctor.id)
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
              {showOTPComponent && (
                <OTP reportId={reportId} doctorId={selectedDoctorId} toggleValue={toggleValue}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;