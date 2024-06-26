import React, { useEffect, useState } from "react";
import "../Doctor/DoctorDashboard.css";
import patientImg from "../../assets/patientImg.png";
import ChatPopup from "../../components/ui/ChatPopup";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import PatientDetails from "./PatientDetails";

// import Navbar from "../../components/navbar/Navbar";

import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  HttpPost
} from "../../constants";
import Navbar from "../../components/navbar/Navbar";
import DoctorInformationCard from "./DoctorInformationCard";

function DoctorDashboard({ onClickPat }) {
  const [show, setShow] = useState(false);
  const { data, token, setIsUserLoggedIn, setRoleId } = useUserIdContext();
  const [doctor, setDoctor] =useState(null);
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetchDoctor(data);
    fetchConsentPatients(data);
  }, []);

  const fetchDoctor = async (data) => {
    const doctorData = await HttpPost(0, "/getDoctor", token, {
      id: parseInt(data),
    });
    if (doctorData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (doctorData == null) {
      throw new Error("Failed to fetch Doctor");
    }
    setDoctor(doctorData);
    setRoleId(doctorData.id);
  };

  const fetchConsentPatients = async (data) => {
    try {
      const response = await fetch(
        "https://" +
          DATA_HOST +
          ":" +
          DATA_PORT +
          "/teleRadiology/getConsentPatients/" +
          data,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch patient");
      }
      const responseData = await response.json();
      setPatients(responseData);
    } catch (error) {
      console.error("Error fetching patient:", error);
    }
  };

  const handleArrowClick = (patient) => {
    setPatient(patient);
    onClickPat(patient);
    setShow(true);
  };

  return (
    <>
      <Navbar 
      options={[
        { name: "Dashboard", icon: "bx bxs-dashboard" },
        { name: "Setting", icon: "bx bx-cog" },
      ]}
      ></Navbar>
      <section className="home">
        <div className="parent-container">
          <div className="all-items">
            <div className="static-dashboard-heading | text-blue-extradark">
              Dashboard
            </div>

            <div className="doctor-dashboard-containers-top">
              {doctor && (
              <div className="doctor-dashboard-badge">
                <DoctorInformationCard doctor={doctor} />
              </div>
              )}
            </div>

            <div className="doctor-dashboard-containers-bottom">
              <div className="doctor-dashboard-left">
                <div className="doctor-dashboard-left-heading mb-2">
                  <p>Ongoing Diagnosis</p>
                </div>
                <div className="doctor-dashboard-left-item-box">
                  <ul
                    role="list"
                    className="doctor-dashboard-ongoing-diagnosis"
                  >
                    {patients.map((patient, index) => (
                      <li key={index}>
                        <div className="list-item">
                          <div className="ongoing-diagnosis-image">
                            <div className="ongoing-diagnosis-img-holder">
                              <img src={patientImg} alt="" srcset="" />
                            </div>
                          </div>
                          <div className="ongoing-diagnosis-details">
                            <div className="ongoing-diagnosis-details-data">
                              <div>
                                <span>
                                  {patient.firstName}{" "}
                                  {patient.middleName !== null
                                    ? patient.middleName
                                    : ""}{" "}
                                  {patient.lastName}
                                </span>
                              </div>
                              <div></div>
                            </div>
                            <div
                              className="ongoing-diagnosis-details-arrow"
                              onClick={() => handleArrowClick(patient)}
                            >
                              <i className="bx bxs-chevron-right | ongoing-diagnosis-left-icon"></i>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="doctor-dashboard-right">
                {show && <PatientDetails patient={patient} />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChatPopup></ChatPopup>
    </>
  );
}

export default DoctorDashboard;