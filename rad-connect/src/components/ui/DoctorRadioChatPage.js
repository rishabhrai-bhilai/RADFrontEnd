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

import ReportPopup from "./ReportPopup";
import ChatComponent from "./ChatComponent";

const DoctorRadioChatPage = () => {
  const [userId, setUserId] = useState([]);
  const { data, token, setIsUserLoggedIn } = useUserIdContext();

  const [selectedId, setSelectedId] = useState();

  const [chats, setChats] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [repId, setRepId] = useState(-1);
  const [chatName, setChatName] = useState("");

  const handleReportClick = (repId) => {
    setRepId(repId);
  };

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await HttpGet(0, "/getChats/" + data, token);
      if (responseData == "Unauthorized") {
        setIsUserLoggedIn(false);
      }
      if (responseData == null) {
        throw new Error("Failed to fetch chats");
      }
      settingChats(responseData);
    };
    fetchData();
  }, []);

  const settingChats = (chats1) => {
    let newChats = [];
    if (chats1.pats != null) {
      chats1.pats.forEach((element) => {
        let json = {
          id: element.userId,
          name: element.name,
          reports: element.reports,
        };

        newChats.push(json);
      });
    }
    if (chats1.docs != null) {
      chats1.docs.forEach((element) => {
        let json = {
          id: element.userId,
          name: element.name,
          reports: element.reports,
        };
        newChats.push(json);
      });
    }
    if (chats1.rads != null) {
      chats1.rads.forEach((element) => {
        let json = {
          id: element.userId,
          name: element.name,
          reports: element.reports,
        };
        newChats.push(json);
      });
    }

    setChats(newChats);
  };

  const handleClick = (chatReports, id, chatName) => {
    setLoading(true);
    setReports(chatReports);
    setUserId(id);
    setLoading(false);
    setChatName(chatName);
  };
  const handleSearchClick = () => {
    // const body = document.querySelector("body"); // Define 'body'
    // const searchBtn = body.querySelector(".search-box");
    // const sidebar = body.querySelector(".sidebar");
    // sidebar.classList.remove("close");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="dicom-chat-container">
        <div className="chat-head">
          <div className="chat-heading-name">Chat</div>
          {loading === true ? null : ( // Use null instead of an empty object
            <div className="chat-report-container">
              <ReportPopup
                chatReports={reports}
                userId={userId}
                setParticularId={setSelectedId}
                onRepClick={handleReportClick}
                removeChat={setRepId}
              ></ReportPopup>
            </div>
          )}
        </div>

        <div className="chat-box">


          {/* DICOM IMAGE WORKING    */}
          <div className="dicom__container border-solid border-4 border-violet-400 p-2 shadow-white shadow-sm">
            <div className="dicom_img">
              {/* <img src="https://www.vladsiv.com/assets/images/posts/dicom-basics/dicom-basics-header.jpg" alt="" /> */}
              <img
                src="https://www.peco602.com/post/0090-python-dicom/featured.jpg"
                alt=""
              />
            </div>
          </div>

          {/* DICOM IMAGE WORKING  CLOSED */}


          {repId == -1 ? (
            <div className="rightside-chat"></div>
          ) : (
            <ChatComponent
              rId={repId}
              uId={userId}
              myId={data}
              chatName={chatName}
            />
          )}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default DoctorRadioChatPage;
