// ChatPage.js
import React, { useEffect, useState } from "react";
import "./ChatPage.css";
import Message from "./Message";
import MessageInput from "./MessageInput";
import patientChatImg from "../../assets/patientbox.png";
import { usePatientIdContext } from "../../pages/Patient/PatientIdContext";
import { useUserIdContext } from "../../pages/Common/UserIdContext";

import ReportPopup from "./ReportPopup";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useUserIdContext();
  // const { data } = usePatientIdContext();
  // const [chats1, setChats1] = useState(null);
  // const chats = [
  //   { id: 1, name: "John" },
  //   { id: 2, name: "Richard" },
  // ];
  const [chats, setChats] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/getChats/${data}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

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
  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text: text,
      sender: "user", // You can set the sender dynamically based on user authentication
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  const handleClick = (chatReports) => {
    setReports(chatReports);
    setLoading(false);
  };
  const handleSearchClick = () => {
    // const body = document.querySelector("body"); // Define 'body'
    // const searchBtn = body.querySelector(".search-box");
    // const sidebar = body.querySelector(".sidebar");
    // sidebar.classList.remove("close");
  };

  return (
    <div className="chat-container">
      <div className="chat-head">
        <div className="chat-heading-name">Chat</div>
        {loading === true ? null : ( // Use null instead of an empty object
          <div className="chat-report-container">
            <ReportPopup chatReports={reports}></ReportPopup>
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
                          handleClick(chat.reports);
                        }}
                      >
                        <div className="person-msg-img-holder">
                          <div className="person-msg-img-div">
                            <img src={patientChatImg} alt="" />
                          </div>
                        </div>
                        <div className="person-msg">
                          <div className="person-msg-head">
                            <div className="person-msg-name ">{chat.name}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
            </ul>
          </div>
        </div>

        <div className="rightside-chat">
          <div className="rightside-header">
            <div className="right-side-image-div">
              <div className="right-side-image">
                <img src={patientChatImg} alt="" />
              </div>
            </div>
            <div className="rightside-header-data">
              <div className="rightside-header-name">Rishabh Rai</div>
              <div className="rightside-header-status">Active Now</div>
            </div>
          </div>
          <div className="message-container">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>

          <div className="msg-input-taker">
            <MessageInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>hello</h1>
    // </div>
  );
};

export default ChatPage;
