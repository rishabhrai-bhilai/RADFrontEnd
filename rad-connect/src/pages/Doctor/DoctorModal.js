import React, { useEffect, useState } from "react";
import "../../components/ui/Modal.css";
import SearchBar from "../../components/ui/SearchBar.js";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import patientImage from "../../assets/patientbox.png";
import Toggle from "../../components/ui/Toggle";
import Tooltip from "../../components/ui/Tooltip.js";

import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  HttpGet,
  HttpPost
} from "../../constants";

const DoctorModal = ({ closeModal, reportId, patientId, receiverId }) => {
  const [radiologists, setRadiologists] = useState([]);
  const [filteredRadiologistsList, setFilteredRadiologistsList] = useState([]);
  const [reportViewers, setReportViewers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { data, token, setIsUserLoggedIn, roleId } = useUserIdContext();

  const askForConsent = async (radId) => {

    const responseData = await HttpPost(0, "/addNotification", token, {
      patientId: patientId,
      doctorId: roleId,
      reciverId: receiverId,
      radiologistId: radId,
      reportId: reportId
    });
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData == null) {
      throw new Error("Failed to ask for consent");
    }    
  };

  const handleSearch = (searchTerm) => {
    const filteredNames = radiologists.filter((rad) =>
      rad.firstName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredRadiologistsList(filteredNames);
  };

  useEffect(() => {
    getAllRadiologists(reportId);
  }, [data]);

  
  const getAllRadiologists = async () => {    
    const responseData = await HttpGet(0, "/getRadiologists/"+reportId, token);

    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData == null) {
      throw new Error("Failed to fetch radiologists");
    }      
      console.log(responseData);
      setRadiologists(responseData);
      setFilteredRadiologistsList(responseData);
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
                      <div className="danger">
                        {radiologist.consent == 0 && "No Consent"}
                        {radiologist.consent == 1 && "Having Consent"}
                        {radiologist.consent == 2 && "Pending Consent"}
                        {/* {radiologist.consent} */}
                      </div>
                      </div>  

                      {radiologist.consent === 0 && (
                      

                      <div className="list-toggle-btn">
                      <div>
                        <button className="doct-btn doct-btn-7">
                          <i className="bx bx-mail-send" onClick={() => askForConsent(radiologist.id)}></i>
                        </button>
                      </div>
                      </div>

                    )}      
                    {radiologist.consent === 1 && (
                      <div className="list-toggle-btn">
                        <div>
                        <button className="doct-btn doct-btn-7 cursor-not-allowed bg-dark" disabled>
                        <i class='bx bx-check'></i>
                          </button>
                        </div>
                      </div>
                      
                    )}               
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