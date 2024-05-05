import React, { useState, useEffect } from "react";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import imgg from "../../assets/mri_img.png";
import DoctorModal from "./DoctorModal";
import ButtonComponent from "../../components/ui/ButtonComponent";
import "./DocReportComponent.css";
import ChatComponent from "../../components/ui/ChatComponent";
import patientImg from "../../assets/patientImg.png";
import ChatPopup from "../../components/ui/ChatPopup";
import PatientDetails from "./PatientDetails";
import Navbar from "../../components/navbar/Navbar";
import PatientInformationCard from "../../components/ui/PatientInformationCard";
import { RadiologistList } from "./RadiologistList";

import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
} from "../../constants";

function DocReportComponent({ patient }) {
  const { data, token, setIsUserLoggedIn } = useUserIdContext();
  const [report, setReport] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [reportIdInModal, setReportIdInModal] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [radiologists, setRadiologists] = useState([]);
  const [showRadiologistPopup, setShowRadiologistPopup] = useState(false);

  const openModal = (reportId) => {
    setShowModal(true);
    setReportIdInModal(reportId);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const togglePopup = (content) => {
    setShowPopup(!showPopup);
    setPopupContent(content);
  };

  const toggleRadiologistList = () => {
    setShowRadiologistPopup(!showRadiologistPopup);
    // Fetch radiologists list from the backend when toggling the list
    fetchRadiologists();
  };

  const fetchRadiologists = async () => {
    try {
      const response = await fetch(
        "http://" +
          DATA_HOST +
          ":" +
          DATA_PORT +
          "/teleRadiology/getRadiologists",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        setRadiologists(responseData);
      } else {
        // If API fetch fails, set a dummy list
        setRadiologists([
          { name: "Dr. John Doe" },
          { name: "Dr. Jane Smith" },
          { name: "Dr. Michael Johnson" },
        ]);
      }
    } catch (error) {
      console.error("Error fetching radiologists:", error);
      // If an error occurs, set a dummy list
      setRadiologists([
        { name: "Dr. John Doe" },
        { name: "Dr. Jane Smith" },
        { name: "Dr. Michael Johnson" },
      ]);
    }
  };

  useEffect(() => {
    getConsentedReports(patient.id, data);
  }, []);

  const getConsentedReports = async (patientId, data) => {
    try {
      const response = await fetch(
        "http://" +
          DATA_HOST +
          ":" +
          DATA_PORT +
          "/teleRadiology/getConsentReports",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ patientID: patientId, doctorID: data }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch patient");
      }
      const responseData = await response.json();
      setReport(responseData);
    } catch (error) {
      console.error("Error fetching Reports:", error);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="home">
        <div className="parent-container">
          <div className="all-items">
            <div className="static-dashboard-heading | text-blue-extradark">
              Patient Report
            </div>

            {/* fixed part end here */}

            <div className="patient-data-holder">
              <PatientInformationCard patient={patient} />
            </div>

            <div className="patient-report-holder">
              <div>
                <div className="element-name-filter">
                  <div className="filter-type-dropdown">DropDown</div>
                  <div className="filter-type-search">Search</div>
                  <div className="filter-type-filter-by">Filter by</div>
                </div>

                <div className="element-name-report-list">
                  <div className="report-heading"> </div>
                  <div className="ul-container">
                    <ul role="list" className="patient-reports-list">
                      <li>
                        <div className="report-list-box | report-data">
                          <div>Image</div>
                          <div>Type</div>
                          <div>Upload Date</div>
                          <div>buttons</div>
                        </div>
                      </li>
                      {report.map((reportItem, index) => (
                        <li key={index}>
                          <div className="report-list-box | report-data">
                            <div className="report-image">
                              <div className="image-box">
                                <img src={reportItem.report} alt="Report" />
                              </div>
                            </div>
                            <div className="">{reportItem.reportType}</div>
                            <div className="">{reportItem.dateOfIssue}</div>
                            <div className="report-button-container">
                              <div className="icon-buttons">
                                <div className="icon-box">
                                  <ButtonComponent
                                    openModal={() => openModal(reportItem.id)}
                                  />
                                  {showModal &&
                                    reportIdInModal === reportItem.id && (
                                      <DoctorModal
                                        closeModal={closeModal}
                                        reportId={reportIdInModal}
                                        patientId={patient.id}
                                        receiverId={patient.userId}
                                      />
                                    )}
                                </div>
                                <div className="icon-box">
                                  <i
                                    className="bx bx-plus-medical"
                                    onClick={() =>
                                      togglePopup(
                                        <ChatComponent
                                          rId={reportItem.id}
                                          chatName={
                                            patient.firstName +
                                            " " +
                                            patient.middleName +
                                            " " +
                                            patient.lastName
                                          }
                                          myId={data}
                                          uId={patient.userId}
                                        />
                                      )
                                    }
                                  ></i>
                                </div>
                                <div className="icon-box">
                                  <i
                                    className="bx bx-chat"
                                    onClick={toggleRadiologistList}
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showRadiologistPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button
              className="close-button"
              onClick={() => setShowRadiologistPopup(false)}
            >
              X
            </button>
            <RadiologistList radiologists={radiologists} />
          </div>
        </div>
      )}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button
              className="close-button"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
            {popupContent}
          </div>
        </div>
      )}
    </>
  );
}

export default DocReportComponent;
