import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import imgg from "../../assets/mri_img.png";
import ButtonComponent from "./ButtonComponent";
import "./ReportComponent.css";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  httpPost,
} from "../../constants";

function ReportComponent() {
  const [showModal, setShowModal] = useState(false);
  const { data, token } = useUserIdContext();
  const [reports, setReports] = useState([]);
  const [patient, setPatient] = useState(-1);
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true); // Loading
  const [reportIdInModal, setReportIdInModal] = useState(null);

  const openModal = (reportId) => {
    setShowModal(true);
    setReportIdInModal(reportId);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchPatient = async (data) => {
    const patientData = await httpPost(0, "/getPatient", token, { id: data });
    if (patientData == null) {
      throw new Error("Failed to fetch patient");
    }
    setPatient(patientData);
  };

  const fetchReports = async (patientId) => {
    const responseData = await httpPost(0, "/getPatientReports", token, {
      id: patientId,
    });
    if (responseData == null) {
      throw new Error("Failed to fetch reports");
    }
    setReports(responseData.reports || []);
  };

  const getReportImages = async (ids) => {
    let arr = [];
    const imageData = await httpPost(1, "/getAllReports", token, {
      reportIds: ids,
    });
    arr = imageData.reports;
    setImages(arr);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < reports.length; j++) {
        if (arr[i].reportId === reports[j].id) {
          reports[i].imageUrl = arr[i].report;
        }
      }
    }

    setReports(reports);

    setLoading(false); // Set loading to false after images are fetched
  };

  useEffect(() => {
    fetchPatient(data);
  }, []);

  useEffect(() => {
    fetchReports(patient.id);
  }, [patient]);

  useEffect(() => {
    let ids = [];
    reports.forEach((element) => {
      ids.push(element.id);
    });
    getReportImages(ids);
  }, [reports]);

  useEffect(() => {
    setShow(true);
  }, [images]);

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
            {show &&
              (loading ? (
                <div>Loading...</div> // Display loading indicator
              ) : (
                reports.map((report) => (
                  <li key={report.id}>
                    <div className="report-list-box | report-data">
                      <div className="report-image">
                        <div className="image-box">
                          <img src={report.imageUrl} alt="Report" />
                        </div>
                      </div>
                      {/* <div className="">{report.id}</div> */}
                      {/* <div className="">{report.reportType}</div> */}
                      <div className="">{report.reportType}</div>
                      <div className="">{report.dateOfIssue}</div>
                      <div className="report-button-container">
                        <div className="icon-buttons">
                          <div className="icon-box">
                            <i className="bx bxs-bell-ring"></i>
                          </div>
                          <div className="icon-box">
                            <ButtonComponent
                              openModal={() => openModal(report.id)}
                            />
                            {showModal &&
                              reportIdInModal === report.id && ( // Check if showModal is true and the report id matches
                                <Modal
                                  closeModal={closeModal}
                                  reportId={reportIdInModal}
                                /> // Pass report id to Modal
                              )}
                          </div>
                          <div className="icon-box">
                            <i className="bx bxs-download"></i>
                          </div>
                          <div className="icon-box">
                            <i className="bx bx-trash"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReportComponent;
