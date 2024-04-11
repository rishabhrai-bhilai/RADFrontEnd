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

function DocReportComponent() {
  
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
            {/* {show &&
              (loading ? (
                <div>Loading...</div> // Display loading indicator
              ) : (
                reports.map((report) => ( */}
                  <li>
                    <div className="report-list-box | report-data">
                      <div className="report-image">
                        <div className="image-box">
                          <img src="" alt="Report" />
                        </div>
                      </div>
                      {/* <div className="">{report.id}</div> */}
                      {/* <div className="">{report.reportType}</div> */}
                      <div className="">ECG</div>
                      <div className="">23/04/24</div>
                      <div className="report-button-container">
                        <div className="icon-buttons">
                            {/* <div className="icon-box">
                            <i className="bx bxs-bell-ring"></i>
                            </div> */}
                            <div className="icon-box">
                            {/* <ButtonComponent
                                openModal={() => openModal(report.id)}
                            />
                            {showModal &&
                                reportIdInModal === report.id && ( 
                                <Modal
                                    closeModal={closeModal}
                                    reportId={reportIdInModal}
                                /> // Pass report id to Modal
                                )} */}
                            </div>
                            <button>
                                Chat with Patient
                            </button>
                            <button>
                                Chat with Radiologist
                            </button>
                        </div>
                      </div>
                    </div>
                  </li>
                {/* ))
              ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DocReportComponent;