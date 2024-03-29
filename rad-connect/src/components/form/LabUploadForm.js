import React, { useState } from "react";

import DragDropFiles from "./DragDropFiles";
import "./LabUploadForm.css";

const LabUploadForm = () => {
  const [email, setEmail] = useState("");
  const [remarks, setRemarks] = useState("");
  const [files, setFiles] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  };

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setFiles(fileList);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const fileList = Array.from(e.dataTransfer.files);
    setFiles(fileList);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, remarks, files });
    // You can add your submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="lab-upload-form-container">
        <div className="lab-upload-form-box">
          <div className="lab-upload-form-item">
            <label className="lab-upload-form-email" htmlFor="email">
              Patient Email:
            </label>
            <input
              className="lab-upload-form-email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="lab-upload-form-item">
            <label className="lab-upload-form-remarks" htmlFor="remarks">
              Remarks:
            </label>

            <textarea
              className="lab-upload-form-remarks"
              id="remarks"
              name="remarks"
              value={remarks}
              onChange={handleRemarksChange}
              rows="4"
              cols="50"
              required
            ></textarea>
          </div>

          <div className="lab-upload-form-item">
            <div>
              <DragDropFiles></DragDropFiles>
            </div>
          </div>

          <div className="lab-upload-form-item">
            <button className="lab-upload-form-btn-submit" type="submit">Submit</button>
          </div>

        </div>
      </div>
    </form>
  );
};

export default LabUploadForm;
