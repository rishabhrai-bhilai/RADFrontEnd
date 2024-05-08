import React, { useState } from "react";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  HttpPost,
} from "../../constants";
import DragDropFiles from "./DragDropFiles";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import "./LabUploadForm.css";
import axios from "axios";

function LabUploadForm() {
  const [email, setEmail] = useState("");
  const [remarks, setRemarks] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [rid, setRid] = useState();
  const { data, token, setIsUserLoggedIn } = useUserIdContext();
  const [responseMessage, setResponseMessage] = useState("");

  function formatDate(dateString) {
    const [day, month, year] = dateString.split('/');
  // Reassemble the date parts in the format "YYYY-MM-DD"
    const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    return formattedDate;
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Get today's date
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    const todayDate = formatDate(formattedDate);

    const formData = {
      dateOfIssue: todayDate,
      initialRemarks: remarks,
      reportType: type,
      lid: data,
      patEmail: email,
    };
    let responseData = null;
    responseData = await HttpPost(0, "/uploadReport", token, formData);
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    setRid(responseData.rid);
    // setResponseMessage("Report Uploaded");

    let success = await sendImageToBackend(responseData.rid);
    if (success) {
      setResponseMessage("Report Uploaded");
    } else {
      setResponseMessage("Report Upload Failed");
    }
  };

  const sendImageToBackend = async (val) => {
    // event.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    let responseData = null;
    let response = null;
    try {
      response = await axios.post(
        "https://localhost:8081/teleRadiology/upload/" + val,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 403 || response.status == 401) {
        setIsUserLoggedIn(false);
      }
      // console.log(response.ok);
      if (response.status == 200) {
        return true;
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Failed to upload file");
      return false;
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setRemarks(e.target.value)}
              rows="4"
              cols="50"
              required
            ></textarea>
          </div>

          <div className="lab-upload-form-item">
            <label className="lab-upload-form-type" htmlFor="type">
              Report Type:
            </label>
            <select
              name="type"
              id="type"
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Choose</option>
              <option value="CT Scan">CT Scan</option>
              <option value="ECG">ECG</option>
              <option value="MRI">MRI</option>
              <option value="Ultrasound">Ultrasound</option>
              <option value="X Ray">X Ray</option>
            </select>
          </div>

          <div className="lab-upload-form-item">
            {/* <div>
              <DragDropFiles></DragDropFiles>
            </div> */}
            <label htmlFor="file">Upload File:</label>
            <input
              className="lab-upload-form-email"
              type="file"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <div className="lab-upload-form-item">
            <button className="lab-upload-form-btn-submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
      {responseMessage.length > 0 && <div>{responseMessage}</div>}
    </form>
  );
}

export default LabUploadForm;