// import React from "react";
// import "../Patient/Reports.css";

import { useUserIdContext } from '../Common/UserIdContext';
import "./Reports.css";
import Navbar from '../../components/navbar/Navbar';
import imgg from "../../assets/mri_img.png";
import React, { useState } from "react";
import ButtonComponent from "../../components/ui/ButtonComponent";
import Modal from "../../components/ui/Modal";
import ReportComponent from "../../components/ui/ReportComponent";

function Reports({handleRepId}) {
  return (
    <>
    <Navbar></Navbar>
     <section className="home">      
      <div className="patient-report-container">
        <div className="all-items">
          <div className="element-name-heading | text-blue-extradark">
            Reports
          </div>

          <div className="element-name-sub-navigation | text-grey-dark">
            <div className="nav-1">Medical</div>
            {/* <div className="nav-2">Accesses</div>
            <div className="nav-3">History</div> */}
          </div>
          <ReportComponent handleReportId={handleRepId}></ReportComponent>
        </div>
      </div>
    </section>
    </>
  );
}

export default Reports;