import React from "react";
// import patientImg from "../../assets/patientImg.png";
import { useNavigate } from "react-router-dom";

function ListReports({ reports, doctorName, doctorCredId }) {
  const navigate = useNavigate();

  const handleArrowClick = (reportId) => {    
    navigate("/doctor/radioChat", {
        state: {
          repId: reportId,
          // repId: 1,
          userId: doctorCredId,
          chatName: doctorName,
        },
      });
  };

  return (    
    <div className="doctor-dashboard-right-heading">
      <p>Reports</p>
        <div className="doctor-dashboard-left-item-box">
            <ul
                role="list"
                className="doctor-dashboard-ongoing-diagnosis"
            >
                {reports.map((report, index) => (
                <li key={index}>
                    <div className="list-item">
                    <div className="ongoing-diagnosis-details">
                        <div className="ongoing-diagnosis-details-data">
                        <div>
                            <span>
                            REPORT{report.id}
                            </span>
                        </div>
                        <div></div>
                        </div>
                        <div
                        className="ongoing-diagnosis-details-arrow"
                        onClick={() => handleArrowClick(report.id)}
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
  );
}

export default ListReports;