import React, { useState, useEffect } from "react";
// import Modal from "./Modal";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import imgg from "../../assets/mri_img.png";
// import ButtonComponent from "./ButtonComponent";
import "./DocReportComponent.css";

import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
} from "../../constants";

function DocReportComponent({ patientId }) {
  const { data, token } = useUserIdContext();
  const [report, setReport] = useState([]);

  useEffect(() => {
    getConsentedReports(patientId, data);
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
                {/* <div>Report Id</div> */}
                {/* <div>Name</div> */}
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
                      <img src={reportItem.imageUrl} alt="Report" />
                    </div>
                  </div>
                  <div className="">{reportItem.reportType}</div>
                  <div className="">{reportItem.dateOfIssue}</div>
                  <div className="report-button-container">
                    <div className="icon-buttons">
                      <button>Chat with Patient</button>
                      <button>Chat with Radiologist</button>
                    </div>
                  </div>
                </div>
              </li>
              //  ))
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DocReportComponent;
