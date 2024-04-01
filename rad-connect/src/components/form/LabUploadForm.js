import React, { useState } from "react";

import DragDropFiles from "./DragDropFiles";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import "./LabUploadForm.css";

function LabUploadForm() {
  const [email, setEmail] = useState("");
  const [remarks, setRemarks] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [rid, setRid] = useState();
  const { data } = useUserIdContext();

  // console.log(data);

  let responseData;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Get today's date
    const today = new Date();
    const formattedDate = today.toLocaleDateString();

    console.log(formattedDate);
    console.log(remarks);
    console.log(type);
    console.log(data);
    console.log(email);

    const formData = {
      dateOfIssue: "2024-03-29",
      initialRemarks: remarks,
      reportType: type,
      lid: data,
      patEmail: email,
    };

    try {
      const response = await fetch(
        "http://localhost:8081/teleRadiology/uploadReport",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        responseData = await response.json();
        console.log("API Response:", responseData);
        setRid(responseData.rid);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error occurred while submitting form:", error);
      // Handle errors appropriately
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUri = reader.result;
      // Now you can send the imageUri to your backend
      const rand = Math.random();
      sendImageToBackend(imageUri, rand, responseData.rid);
      console.log(rand);
    };
    reader.readAsDataURL(image);
  };

  const sendImageToBackend = async (imageUri, rand, val) => {
    console.log(val);
    try {
      const response = await fetch(
        "http://192.168.0.102:8081/images/uploadReport",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ report: imageUri, reportId: val }),
        }
      );
      if (!response.ok) {
        alert("Unable to Load Details");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
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
    </form>
  );
}

export default LabUploadForm;
