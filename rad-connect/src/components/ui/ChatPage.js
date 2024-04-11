// ChatPage.js
import React, { useEffect, useState } from "react";
import patientChatImg from "../../assets/patientbox.png";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import "./ChatPage.css";
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
} from "../../constants";

import ReportPopup from "./ReportPopup";
import ChatComponent from "./ChatComponent";

const ChatPage = () => {
  const [userId, setUserId] = useState([]);
  const { data, token } = useUserIdContext();

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
      try {
        const response = await fetch(
          "http://" +
            DATA_HOST +
            ":" +
            DATA_PORT +
            "/teleRadiology/getChats/" +
            data,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch chats");
        }
        const responseData = await response.json();
        // setChats1(responseData);
        settingChats(responseData);
        // console.log(responseData.docs);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };
    fetchData();
  }, []);

  const settingChats = (chats1) => {
    let newChats = [];
    // console.log(chats1);
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
    // console.log(newChats);
    setChats(newChats);
  };

  const handleClick = (chatReports, id, chatName) => {
    setLoading(true);
    setReports(chatReports);
    // console.log(chatReports);
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
      <Navbar />
      <div className="chat-container">
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
          <div className="leftside-chat">
            <div className="chat-search-container">
              <li className="search-box" onClick={handleSearchClick}>
                <i className="bx bx-search icon"></i>
                <input type="text" placeholder="Search..." />
              </li>
            </div>

            <div className="leftside-chat-container">
              <ul role="list">
                {chats == null
                  ? {}
                  : chats.map((chat) => (
                      <li>
                        <div
                          className="person-message-container"
                          onClick={() => {
                            handleClick(chat.reports, chat.id, chat.name);
                          }}
                        >
                          <div className="person-msg-img-holder">
                            <div className="person-msg-img-div">
                              <img src={patientChatImg} alt="" />
                            </div>
                          </div>
                          <div className="person-msg">
                            <div className="person-msg-head">
                              <div className="person-msg-name ">
                                {chat.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
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

export default ChatPage;
