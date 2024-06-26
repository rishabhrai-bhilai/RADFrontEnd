// ExpandingDiv.js

import React, { useState, useEffect } from "react";
import "./ReportPopup.css"; // Import CSS file for styling
import mriImg from "../../assets/mri_img.png";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  HttpPost,
} from "../../constants";

var stompClient = null;
const ReportPopup = ({
  chatReports,
  messageSetter,
  userId,
  setParticularId,
  oldMessages,
  onRepClick,
  removeChat,
}) => {
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });
  const [expanded, setExpanded] = useState(false);
  const [reports, setReports] = useState([]);
  const { data, token, setIsUserLoggedIn } = useUserIdContext();
  const [selectedId, setSelectedId] = useState();
  const [reportLoading, setReportLoading] = useState(true);

  const toggleDiv = () => {
    setExpanded(!expanded);
    if (expanded) removeChat(-1);
  };

  useEffect(() => {
    const fetchImageData = async () => {
      setReportLoading(false);
      const responseData = await HttpPost(1, "/getAllReports", token, {
        reportIds: chatReports,
      });
      if (responseData == "Unauthorized") {
        setIsUserLoggedIn(false);
      }
      if (responseData == null) {
        throw new Error("Failed to fetch doctors list");
      }
      setReports(responseData.reports);
    };
    fetchImageData();
  }, [chatReports]);

  useEffect(() => {
    setReportLoading(true);
  }, [reports]);

  const handleReportClick = (reportId) => {
    onRepClick(reportId);
    setSelectedId(reportId);
    setParticularId(reportId);
  };
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
      
      {reportLoading && (
        <div
          id="expandingDiv"
          className={expanded ? "report-expanded" : "reportdiv"}
        >
          <div className="report-images-container">
            {reports.map((report) => (
              <div
                className="report-img-box"
                onClick={() => {
                  handleReportClick(report.reportId);
                }}
              >
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
      )}
    </div>
  );
};

export default ReportPopup;
