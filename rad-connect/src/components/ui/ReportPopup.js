// ExpandingDiv.js

import React, { useState, useEffect } from "react";
import "./ReportPopup.css"; // Import CSS file for styling
import mriImg from "../../assets/mri_img.png";

const ReportPopup = ({ chatReports }) => {
  const [expanded, setExpanded] = useState(false);
  const [reports, setReports] = useState([]);

  const toggleDiv = () => {
    setExpanded(!expanded);
    // console.log(expanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/images/getAllReports`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ reportIds: chatReports }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch chats");
        }
        const responseData = await response.json();
        setReports(responseData.reports);
        // setChats1(responseData);
        // settingChats(responseData);
        // console.log(responseData);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="report-position">
      <div className="chat-report-button">
        {!expanded ? (
          <button onClick={toggleDiv} className="chat-report-button">
            <i class="bx bx-file-blank bx-tada"></i>
          </button>
        ) : (
          <button onClick={toggleDiv} className="chat-report-button">
            <i class="bx bx-x bx-flip-horizontal"></i>
          </button>
        )}
      </div>
      <div
        id="expandingDiv"
        className={expanded ? "report-expanded" : "reportdiv"}
      >
        <div className="report-images-container">
          {reports.map((report) => (
            <div className="report-img-box">
              <div className="report-img-holder">
                <img src={mriImg} alt="" />
              </div>
              <div className="report-img-name">
                <p>Report {report.reportId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportPopup;
