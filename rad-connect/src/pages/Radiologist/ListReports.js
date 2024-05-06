import React from "react";
// import patientImg from "../../assets/patientImg.png";
import { useNavigate } from "react-router-dom";

function ListReports({ reports }) {
  const navigate = useNavigate();

  // const handleShowReport = (patient) => {
  //   navigate("/patient/reports");
  // };

  return (    
    <div className="doctor-dashboard-right-heading">
      <p>Reports</p>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
           <div>
            <span>
                {report}                          
            </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListReports;