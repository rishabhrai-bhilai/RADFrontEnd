// ChatPage.js
import React, { useEffect, useState } from "react";
import patientChatImg from "../../assets/patientbox.png";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import { useLoginRoleContext } from "../../pages/Common/LoginRoleContext";
import "./DoctorRadioChatPage.css";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Navbar from "../navbar/Navbar";
import AnnotationList from "./AnnotationList";

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
  const [reports, setReports] = useState([
    {
      annotationId: -1,
      annotatedImage:
        "https://www.google.com/imgres?q=report%20cartoon%20image%20link&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20190617%2Foriginal%2Fpngtree-report-white-simple-cartoon-png-image_3854812.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffreepng%2Freport-white-simple-cartoon_3854812.html&docid=uT9HcDpXyNYNzM&tbnid=jMg5_fC0bo8qDM&vet=12ahUKEwjsh9eknP2FAxXlUGwGHYKFCygQM3oECFwQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjsh9eknP2FAxXlUGwGHYKFCygQM3oECFwQAA",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const { role } = useLoginRoleContext();
  const [annotation, setAnnotation] = useState(-1);
  const [showAnnotation, setShowAnnotation] = useState(false);

  // console.log(reqBody);
  useEffect(async () => {
    const fetchAnnotation = async () => {
      let reqBody = null;
      if (role == "Doctor") {
        reqBody = { docUserId: data, radUserId: userId, reportId: repId };
      } else {
        reqBody = { docUserId: userId, radUserId: data, reportId: repId };
      }
      const responseData = await HttpPost(
        0,
        "/getAllAnnotations",
        token,
        reqBody
      );
      if (responseData == "Unauthorized") {
        setIsUserLoggedIn(false);
      }
      if (responseData == null) {
        throw new Error("Failed to fetch annotations");
      }
      setReports((prevReports) => [
        ...prevReports,
        ...responseData.annotations,
      ]);
    };
    fetchAnnotation();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="dicom-chat-container px-2">
        <div className="chat-head">
          <div className="chat-heading-name">
            {loading === true ? null : ( // Use null instead of an empty object
              // <div className="chat-report-container">
                <AnnotationList
                  chatReports={reports}
                  setParticularId={setAnnotation}
                ></AnnotationList>
              // </div>
            )}
          </div>
        </div>

        <div className="chat-box">
          {/* DICOM IMAGE WORKING    */}
          {annotation == -1 && (
            <div className="dicom__container border-solid border-4 border-violet-400  shadow-white shadow-sm">
              {role === "Doctor" && (
                <DicomViewer
                  repId={repId}
                  role="doctor"
                  jwt={token}
                  docId={data}
                  radId={userId}
                  logout={setIsUserLoggedIn}
                />
              )}
              {role === "Radiologist" && (
                <DicomViewer
                  repId={repId}
                  role="radiologist"
                  jwt={token}
                  docId={userId}
                  radId={data}
                  logout={setIsUserLoggedIn}
                />
              )}
            </div>
          )}
          {annotation != -1 && (
            <div className="dicom__container border-solid border-4 border-violet-400 p-2 shadow-white shadow-sm">
              {reports.map((report, index) => {
                if (annotation === report.annotationId) {
                  return <img src={report.annotatedImage} alt="" />;
                }
                return null;
              })}
            </div>
          )}

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
