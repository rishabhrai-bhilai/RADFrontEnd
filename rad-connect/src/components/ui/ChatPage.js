// ChatPage.js
import React, { useEffect, useState } from "react";
import patientChatImg from "../../assets/patientbox.png";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import "./ChatPage.css";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Navbar from "../navbar/Navbar";
import { over } from "stompjs";
import SockJS from "sockjs-client";

import ReportPopup from "./ReportPopup";
import ChatComponent from "./ChatComponent";

var stompClient = null;
const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState([]);
  const { data, token } = useUserIdContext();
  const [messagesLoaded, setMessagesLoaded] = useState(false);
  const [selectedId, setSelectedId] = useState();
  // const { data } = usePatientIdContext();
  // const [chats1, setChats1] = useState(null);
  // const chats = [
  //   { id: 1, name: "John" },
  //   { id: 2, name: "Richard" },
  // ];
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });
  const [chats, setChats] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [repId,setRepId]=useState(-1);

  const handleReportClick = (repId) => {    
        setRepId(repId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/teleRadiology/getChats/${data}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/teleRadiology/getChats/${data}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
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

  useEffect(() => {
    const connectToSocket = async () => {
      let id = data;
      setUserData({ ...userData, username: id.toString() });
      connect();
    };

    connectToSocket();
  }, []);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8082/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    // stompClient.subscribe("/chatroom/public", onMessageReceived);
    // stompClient.subscribe(
    //   "/user/" + userData.username + "/private",
    //   onPrivateMessage
    // );
    userJoin();
  };
  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onError = (err) => {
    console.log(err);
  };

  // const onPrivateMessage = (payload) => {
  //   // console.log(payload);
  // };

  const sendPrivateValue = (text) => {
    if (stompClient) {
      var chatMessage = {
        senderName: data.toString(),
        receiverName: userId.toString(),
        message: text,
        report: selectedId,
        status: "MESSAGE",
      };
      console.log("sender");
      console.log(chatMessage);
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

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
  const sendMessage = async (text) => {
    // console.log(
    //   JSON.stringify({
    //     sender: data,
    //     receiver: userId,
    //     message: text,
    //     report: selectedId,
    //   })
    // );
    try {
      const response = await fetch(
        "http://localhost:8081/teleRadiology/addMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            sender: data,
            reciever: userId,
            message: text,
            report: selectedId,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch patient");
      }
    } catch (error) {
      console.error("Error fetching patient:", error);
    }
  };
  const handleSendMessage = (text) => {
    // const newMessage = {
    //   chatId: messages.length + 1,
    //   text: text,
    //   sender: "user", // You can set the sender dynamically based on user authentication
    //   timestamp: new Date().toLocaleTimeString(),
    // };
    // setMessages([...messages, newMessage]);
    const newMessage = {
      sender: data,
      receiver: userId,
      message: text,
      report: selectedId,
    };
    sendPrivateValue(text);
    sendMessage(text);
    setMessages([...messages, newMessage]);
  };

  const handleClick = (chatReports, id) => {
    setReports(chatReports);
    setUserId(id);
    setLoading(false);
  };
  const handleSearchClick = () => {
    // const body = document.querySelector("body"); // Define 'body'
    // const searchBtn = body.querySelector(".search-box");
    // const sidebar = body.querySelector(".sidebar");
    // sidebar.classList.remove("close");
  };

  useEffect(() => {
    const displayMessages = () => {
      setMessagesLoaded(true);
      // console.log(messages);
    };
    displayMessages();
  }, [messages]);

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
                messageSetter={setMessages}
                userId={userId}
                setParticularId={setSelectedId}
                oldMessages={messages}
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
                            handleClick(chat.reports, chat.id);
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
          {repId==-1 ? (<div className="rightside-chat"></div>) :(
        
          <ChatComponent rId={repId}/>
        
      )}
          </div>
      </div>
      
      <div>
        
      </div>
    </>
  );
};

export default ChatPage;