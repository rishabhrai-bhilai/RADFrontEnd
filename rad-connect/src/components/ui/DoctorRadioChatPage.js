// ChatPage.js
import React, { useEffect, useState } from "react";
import patientChatImg from "../../assets/patientbox.png";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import "./DoctorRadioChatPage.css";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Navbar from "../navbar/Navbar";

import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  HttpPost,
  HttpGet,
} from "../../constants";
import DicomViewer from "../dicom/DicomViewer";
import ReportPopup from "./ReportPopup";
import ChatComponent from "./ChatComponent";
import { useLocation } from "react-router-dom";

const DoctorRadioChatPage = () => {
  const location = useLocation();

  const { repId, userId, chatName } = location.state;

  const { data, token, setIsUserLoggedIn } = useUserIdContext();

  const [selectedId, setSelectedId] = useState();

  const [chats, setChats] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* <Navbar /> */}
      <div className="dicom-chat-container">
        <div className="chat-head">
          <div className="chat-heading-name">
            {loading === true ? null : ( // Use null instead of an empty object
              <div className="chat-report-container">
                {/* <ReportPopup
                  chatReports={reports}
                  userId={userId}
                  setParticularId={setSelectedId}
                  onRepClick={handleReportClick}
                  removeChat={setRepId}
                ></ReportPopup> */}
              </div>
            )}
          </div>
        </div>

        <div className="chat-box">
          {/* DICOM IMAGE WORKING    */}
          <div className="dicom__container border-solid border-4 border-violet-400 p-2 shadow-white shadow-sm">
            <DicomViewer id={1} role="doctor" />
          </div>

          <ChatComponent
            rId={repId}
            uId={userId}
            myId={data}
            chatName={chatName}
          />
        </div>
      </div>

      <div></div>
    </>
  );
};

export default DoctorRadioChatPage;
