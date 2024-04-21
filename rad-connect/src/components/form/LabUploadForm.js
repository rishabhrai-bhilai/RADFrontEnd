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

function LabUploadForm() {
  const [email, setEmail] = useState("");
  const [remarks, setRemarks] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [rid, setRid] = useState();
  const { data, token, setIsUserLoggedIn } = useUserIdContext();
  const [responseMessage, setResponseMessage] = useState("");

  let responseData;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Get today's date
    const today = new Date();
    const formattedDate = today.toLocaleDateString();

    const formData = {
      dateOfIssue: "2024-04-05",
      initialRemarks: remarks,
      reportType: type,
      lid: data,
      patEmail: email,
    };

    responseData = await HttpPost(0, "/uploadReport", token, formData);
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    setRid(responseData.rid);
    setResponseMessage("Report Uploaded");

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUri = reader.result;
      const rand = Math.random();
      sendImageToBackend(imageUri, rand, responseData.rid);
    };
    reader.readAsDataURL(image);
  };

  const sendImageToBackend = async (imageUri, rand, val) => {
    const responseData = await HttpPost(1, "/uploadReport", token, {
      report: imageUri,
      reportId: val,
    });
    if (responseData == null) {
      alert("Unable to Load Details");
    }
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    setResponseMessage("Report Uploaded");
    setResponseMessage("Report Uploaded");
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
          {responseMessage.length > 0 && <div>{responseMessage}</div>}
          {responseMessage.length > 0 && <div>{responseMessage}</div>}
        </div>
      </div>
      {responseMessage.length > 0 && <div>{responseMessage}</div>}
    </form>
  );
}

export default LabUploadForm;
