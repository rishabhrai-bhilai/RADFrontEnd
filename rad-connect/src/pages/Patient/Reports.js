import React, { useState, useEffect } from 'react';
import { useUserIdContext } from '../Common/UserIdContext';
import "./Reports.css";
import Navbar from '../../components/navbar/Navbar';
import imgg from "../../assets/mri_img.png";

function Reports() {
  const [patient, setPatient] = useState(null);
    const [reports, setReports] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [reportId, setReportId] = useState();
    const { data } = useUserIdContext();

    useEffect(() => {
        if (data) {
            fetchPatient(data);
        }
    }, [data]);

    const fetchPatient = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/teleRadiology/getPatient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: data })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch patient');
            }
            const patientData = await response.json();
            setPatient(patientData);            
            fetchReports(patientData.userId);
            
        } catch (error) {
            console.error('Error fetching patient:', error);
        }
    };
     
    const fetchReports = async (patientId) => {
        try {
            const response = await fetch('http://localhost:8080/teleRadiology/getPatientReports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: patientId })
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch reports');
            }
            const responseData = await response.json();
            setReports(responseData || []); // Ensure reports is always an array
        } catch (error) {
            console.error('Error fetching reports:', error);
        }
    };

    const handleButtonClick = (rid) => {
        setReportId(rid);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleConfirmPopup = async (doctorId) => {
        try {
            const requestBody = {
              doctorId: doctorId,
              patientId: patient.id,
              reportId: reportId
            };
            
            const response = await fetch('http://localhost:8080/teleRadiology/giveConsent', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestBody),
            });
      
            if (response.ok) {
              const consentResult = await response.json();
              console.log(consentResult);
            }
          } catch (error) {
            console.error('Error giving consent:', error.message);
          }
    };

    return (        
            <section className="home">
              <Navbar/>
              <div className="patient-report-container">
                <div className="all-items">
                  <div className="element-name-heading | text-blue-extradark">
                    Reports
                  </div>
        
                  <div className="element-name-sub-navigation | text-grey-dark">
                    <div className="nav-1">Medical</div>
                    <div className="nav-2">Accesses</div>
                    <div className="nav-3">History</div>
                  </div>
        
                  <div className="element-name-filter">
                    <div className="filter-type-dropdown">DropDown</div>
                    <div className="filter-type-search">Search</div>
                    <div className="filter-type-filter-by">Filter by</div>
                  </div>
        
                  <div className="element-name-report-list">
                    <div className="report-heading"> </div>
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
        
                      {reports.map(report => (
                                <li>
                                <div className="report-list-box | report-data">
                                  <div className="report-image">
                                    <div className="image-box">
                                      <img src='D:/HAD/teleradio/public/logo192.png' alt="logo" />
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
                                        <i class="bx bxs-show"></i>
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
                            ))}
        
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        }
        
export default Reports;