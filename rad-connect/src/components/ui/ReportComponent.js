import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import imgg from "../../assets/mri_img.png";
import ButtonComponent from "./ButtonComponent";
import "./ReportComponent.css";

function ReportComponent() {
  const [showModal, setShowModal] = useState(false);
  const { data } = useUserIdContext();
  const [reports, setReports] = useState([]);
  const [patient, setPatient] = useState(-1);
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true); // Loading 
  const [reportIdInModal,setReportIdInModal]=useState(null);
  

  const openModal = (reportId) => {
    setShowModal(true);
    setReportIdInModal(reportId);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchPatient = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:8080/teleRadiology/getPatient",
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
    } catch (error) {
      console.error("Error fetching patient:", error);
    }
  };

  const fetchReports = async (patientId) => {
    try {
      const response = await fetch(
        "http://localhost:8080/teleRadiology/getPatientReports",
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
      setReports(responseData.reports || []);
      console.log(responseData.reports);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  const getReportImages = async (ids) => {
    let arr = [];
    try {
      const fetchPromises = ids.map(async (id) => {
        const response = await fetch(
          `http://192.168.0.107:8080/images/getReport/${id}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch image for report ID ${id}`);
        }
        const imageData = await response.json();
        arr.push(imageData.report);
      });
      await Promise.all(fetchPromises); // Wait for all fetches to complete
      setImages(arr);
      setLoading(false); // Set loading to false after images are fetched
    } catch (error) {
      console.error("Error fetching report images:", error);
    }
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
                <div>Report Id</div>
                <div>Name</div>
                <div>Type</div>
                <div>Upload Date</div>
                <div>buttons</div>
              </div>
            </li>
            {show &&
              (loading ? (
                <div>Loading...</div> // Display loading indicator
              ) : (
                images.map((image, index) => (
                  <li key={reports[index].id}>
                    <div className="report-list-box | report-data">
                      <div className="report-image">
                        <div className="image-box">
                          <img src={image} alt="Report" />
                        </div>
                      </div>
                      <div className="">{reports[index].id}</div>
                      <div className="">{reports[index].reportType}</div>
                      <div className="">{reports[index].reportType}</div>
                      <div className="">{reports[index].dateOfIssue}</div>
                      <div className="report-button-container">
                        <div className="icon-buttons">
                          <div className="icon-box">
                            <i className="bx bxs-bell-ring"></i>
                          </div>
                          <div className="icon-box">
                            <ButtonComponent openModal={() => openModal(reports[index].id)} />
                            {showModal && reportIdInModal === reports[index].id && ( // Check if showModal is true and the report id matches
              <Modal closeModal={closeModal} reportId={reportIdInModal} /> // Pass report id to Modal
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