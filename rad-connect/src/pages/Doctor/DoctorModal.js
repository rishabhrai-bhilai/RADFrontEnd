import React, { useEffect, useState } from "react";
import "../../components/ui/Modal.css";
import SearchBar from "../../components/ui/SearchBar.js";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import patientImage from "../../assets/patientbox.png";
import Toggle from "../../components/ui/Toggle";

import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
} from "../../constants";

const DoctorModal = ({ closeModal, reportId }) => {
  const [radiologists, setRadiologists] = useState([]);
  const [filteredRadiologistsList, setFilteredRadiologistsList] = useState([]);

  const { data, token, setIsUserLoggedIn } = useUserIdContext();

  const handleSearch = (searchTerm) => {
    const filteredNames = radiologists.filter((rad) =>
      rad.firstName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredRadiologistsList(filteredNames);
  };

  const handleToggle = (isToggled, radId) => {
    console.log("Toggle state:", isToggled ? "On" : "Off");
    // if(isToggled){
    // }else{
    //setShowOTPComponent(false);
    //}
  };

  useEffect(() => {
    getAllRadiologists();
  }, [data]);

  const getAllRadiologists = async () => {
    try {
      const response = await fetch(
        "http://" +
          DATA_HOST +
          ":" +
          DATA_PORT +
          "/teleRadiology/getAllRadiologists",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch doctors list");
      }
      const responseData = await response.json();

      const updatedList = responseData.map((radiologist) => {
        return { ...radiologist, consent: 0 };
      });

      //console.log(updatedList);
      setRadiologists(updatedList || []);
      setFilteredRadiologistsList(updatedList || []);
    } catch (error) {
      console.log("Error Fetching Doctors list:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-icon-container">
          <i className="bx bx-x close" onClick={closeModal}></i>
        </div>

        <div className="modal-container">
          <div>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="modal-doctor-container">
            {filteredRadiologistsList.length === 0 ? (
              <div>No users found</div>
            ) : (
              <ul role="list" className="modal-doctor-list">
                {filteredRadiologistsList.map((radiologist) => (
                  <li className="modal-doctor-list-item">
                    <div className="list-item-box">
                      <div className="list-image-holder">
                        <div className="image">
                          <img src={patientImage} alt="" />
                        </div>
                      </div>
                      <div className="list-name">
                        {radiologist.firstName}{" "}
                        {radiologist.middleName !== null
                          ? radiologist.middleName
                          : ""}{" "}
                        {radiologist.lastName}
                      </div>

                      <div className="permission-status">
                        <div className="danger">No Permission Yet</div>
                      </div>
                      <div className="list-toggle-btn">
                        <div>
                          <button className="doct-btn doct-btn-7">
                            <i class="bx bx-mail-send"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;
