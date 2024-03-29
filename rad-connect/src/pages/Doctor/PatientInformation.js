import React from "react";
import PatientInformationCard from "../../components/ui/PatientInformationCard";
import ReportComponent from "../../components/ui/ReportComponent";
import './PatientInformation.css';
function PatientInformation() {
  return (
    <section className="home">
      <div className="parent-container">
        <div className="all-items">

        <div className="static-dashboard-heading | text-blue-extradark">
            Patient Information
          </div>


          <div className="patient-data-holder">
          <PatientInformationCard></PatientInformationCard>
          </div>
          <div className="patient-report-holder">
          <ReportComponent></ReportComponent>
          </div>




          


        </div>
      </div>
    </section>
  );
}

export default PatientInformation;
