import React from 'react'
import patientImg from "../../assets/patientImg.png";
import { useNavigate } from "react-router-dom";

function PatientDetails({ patient }) {
    const navigate = useNavigate();
    
    const handleShowReport = (patient) => {
        console.log("Clicked Reports for patient:", patient);
        navigate("/patient/reports");
    };
  return (
    <>
            <div className="doctor-dashboard-right-heading">
                <p>Patient Details</p>
            </div>
            <div className="doctor-dashboard-right-item-box">
                <div className="doctor-dashboard-right-Common-info">
                <div className="patient-list-item">
                    <div className="ongoing-patient-image">
                    <div className="ongoing-patient-img-holder">
                        <img src={patientImg} alt="" srcset="" />
                    </div>
                    </div>
                    <div className="ongoing-patient-details">
                    <div className="ongoing-patient-details-data">
                        <div>
                        <span className="fw-bold">{patient.firstName}{" "}
                        {patient.middleName !== null ? patient.middleName : ""}{" "}
                        {patient.lastName}</span>
                        </div>
                        <div>
                        <p>{patient.address}, {patient.city}, {patient.state}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="doctor-dashboard-right-details">
                <div className="doctor-dashboard-right-details-data1">
                    <p>D.O.B</p>
                    <p>
                    <span>{patient.dateOfBirth}</span>
                    </p>
                </div>

                <div className="doctor-dashboard-right-details-data1">
                    <p>Sex</p>
                    <p>
                    <span>{patient.gender}</span>
                    </p>
                </div>
                <div className="doctor-dashboard-right-details-data1">
                    <p>Height</p>
                    <p>
                    <span>{patient.height}</span>
                    </p>
                </div>
                {/* <div className="doctor-dashboard-right-details-data1">
                    <p>Last Appointment</p>
                    <p>
                    <span>23 Jan 2023</span>
                    </p>
                </div> */}
                <div className="doctor-dashboard-right-details-data1">
                    <p>Weight</p>
                    <p>
                    <span>{patient.weight}</span>
                    </p>
                </div>
                {/* <div className="doctor-dashboard-right-details-data1">
                    <p>Register Date</p>
                    <p>
                    <span>23 Feb 1999</span>
                    </p>
                </div> */}
                </div>

                <div className="doctor-dashboard-right-others">
                {/* <div className="tags-container">
                    <div>Ashtama</div>
                    <div>Hypertension</div>
                </div> */}

                <div className="button-container">
                    <div onClick={() => handleShowReport(patient)}>
                        <i class="bx bx-folder"></i>
                        <span>Reports</span>
                        </div>
                        {/* <div>
                        <i class="bx bx-chat"></i>
                        <span>Chat</span>
                        </div> */}
                    </div>
                </div>
        </div>
    </>
  )
}

export default PatientDetails