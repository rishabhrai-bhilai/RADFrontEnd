import React, { useState,useEffect } from "react";
import Modal from "./Modal";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import imgg from "../../assets/mri_img.png";
import ButtonComponent from "./ButtonComponent";
import "./ReportComponent.css";

function ReportComponent() {
  const [showModal, setShowModal] = useState(false);
  const [patient, setPatient] = useState(null);
  const { data } = useUserIdContext();
  
  const openModal = () => {
    setShowModal(true);
    // console.log("hh");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [reports, setReports] = useState([]);
  useEffect(() => {
    if (data) {
      fetchPatient(data);
    }
  }, [data]);

  const fetchPatient = async (data) => {
    try {
      const response = await fetch(
        "http://192.168.0.108:8080/teleRadiology/getPatient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: data }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch patient");
      }
      const patientData = await response.json();
      setPatient(patientData);
      fetchReports(patientData.userId);
    } catch (error) {
      console.error("Error fetching patient:", error);
    }
  };

  const fetchReports = async (patientId) => {
    try {
      const response = await fetch(
        "http://192.168.0.108:8080/teleRadiology/getPatientReports",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: patientId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch reports");
      }
      const responseData = await response.json();
      setReports(responseData || []); // Ensure reports is always an array
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  return (
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
                <div>Report Id</div>
                <div>Name</div>
                <div>Type</div>
                <div>Upload Date</div>
                <div>buttons</div>
              </div>
            </li>
            {reports.map((report) => (
              <li>
                <div className="report-list-box | report-data">
                  <div className="report-image">
                    <div className="image-box">
                      <img
                        src="D:/HAD/teleradio/public/logo192.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="">{report.id}</div>
                  <div className="">{report.reportType}</div>
                  <div className="">{report.reportType}</div>
                  <div className="">{report.dateOfIssue}</div>
                  <div className="report-button-container">
                    <div className="icon-buttons">
                      <div className="icon-box">
                        <i class="bx bxs-bell-ring"></i>
                      </div>
                      <div className="icon-box">
                        <ButtonComponent openModal={openModal} />
                        {showModal && <Modal closeModal={closeModal} />}
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-download"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReportComponent;
