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
  HttpGet,
  HttpPost
} from "../../constants";

const DoctorModal = ({ closeModal, reportId, patientId, receiverId }) => {
  const [radiologists, setRadiologists] = useState([]);
  const [filteredRadiologistsList, setFilteredRadiologistsList] = useState([]);

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
    getAllRadiologists();
  }, [data]);

  const getAllRadiologists = async () => {
    const responseData = await HttpGet(0, "/getAllRadiologists", token);

    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData == null) {
      throw new Error("Failed to fetch radiologists");
    }

      const updatedList = responseData.map((radiologist) => {
        return { ...radiologist, consent: 0 };
      });
            
      setRadiologists(updatedList || []);
      setFilteredRadiologistsList(updatedList || []);
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
                            < i class = "bx bx-mail-send" onClick={()=>askForConsent(radiologist.id)}> </i>
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