import React from "react";
// import patientImg from "../../assets/patientImg.png";
import { useNavigate } from "react-router-dom";
import "./ListReport.css";

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
    <>
      <div className="doctor-dashboard-right-heading my-2">
        <p>Reports</p>
      </div>

      <div className="list__reports__container shadow-xl">
        {reports.map((report, index) => (
          <div key={index} class="card work mt-4 mx-4"
           onClick={() => handleArrowClick(report.id)}>
            <div class="img-section"></div>
            <div class="card-desc">
              <div class="card-header">
                <div class="card-title">AB-</div>
                <div class="card-menu">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
              <div class="card-time">City Scan</div>
              <p class="recent">Age : 36years</p>
            </div>
          </div>
        ))}

        
      </div>

      {/* <div className="doctor-dashboard-left-item-box">
        <ul role="list" className="doctor-dashboard-ongoing-diagnosis">
          {reports.map((report, index) => (
            <li key={index}>
              <div className="list-item">
                <div className="ongoing-diagnosis-details">
                  <div className="ongoing-diagnosis-details-data">
                    <div>
                      <span>REPORT{report.id}</span>
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
      </div> */}
    </>
  );
}

export default ListReports;
