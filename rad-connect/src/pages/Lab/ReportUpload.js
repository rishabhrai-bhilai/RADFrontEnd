import React from "react";

import LabUploadForm from "../../components/form/LabUploadForm";
function ReportUpload() {
  return (
    <section class="home">
      <div className="parent-container">
        <div className="all-items">
          <div className="static-dashboard-heading | text-blue-extradark">
            Upload Report
          </div>

          <LabUploadForm></LabUploadForm>
        </div>
      </div>
    </section>
  );
}

export default ReportUpload;
