// ExpandingDiv.js

import React, { useState, useEffect } from "react";
import "./ReportPopup.css"; // Import CSS file for styling
import mriImg from "../../assets/mri_img.png";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import { over } from "stompjs";
import SockJS from "sockjs-client";

var stompClient = null;
const ReportPopup = ({
  chatReports,
  messageSetter,
  userId,
  setParticularId,
  oldMessages,
}) => {
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });
  const [expanded, setExpanded] = useState(false);
  const [reports, setReports] = useState([]);
  const { data } = useUserIdContext();
  const [selectedId, setSelectedId] = useState();

  const toggleDiv = () => {
    setExpanded(!expanded);
    // console.log(expanded);
  };

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
    // setUserData({ ...userData, connected: true });
    // stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe("/user/" + data + "/private", onPrivateMessage);
    // console.log("connected to server!");
    // console.log(data);
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

  const onPrivateMessage = (payload) => {
    console.log("reciever");
    // console.log( + "pay?");
    var payloadData = JSON.parse(payload.body);
    console.log(parseInt(payloadData.report, 10) == selectedId);
    // fetchMessages(parseInt(payloadData.message, 10));
    let newMessage = {
      message: payloadData.message,
      sender: payloadData.sender,
    };
    messageSetter((oldMessages) => [...oldMessages, newMessage]);
  };

  useEffect(() => {
    const fetchImageData = async () => {
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

    fetchImageData();
  }, []);

  const fetchMessages = async (reportId) => {
    console.log("req body");

    try {
      const response = await fetch(
        `http://localhost:8081/teleRadiology/getMessages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user1Id: data,
            user2Id: userId,
            reportId: reportId,
          }),
        }
      );

      console.log(
        JSON.stringify({
          user1Id: data,
          user2Id: userId,
          reportId: reportId,
        })
      );

      if (!response.ok) {
        throw new Error("Failed to fetch chats");
      }
      const responseData = await response.json();
      // console.log(responseData);
      // console.log(
      //   JSON.stringify({
      //     user1Id: data,
      //     user2Id: userId,
      //     reportId: reportId,
      //   })
      // // );
      // console.log("fetchedMessages");
      console.log(responseData.messages);
      messageSetter(responseData.messages);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  const handleReportClick = (reportId) => {
    setSelectedId(reportId);
    console.log("reportId");
    console.log(reportId);
    setParticularId(reportId);
    fetchMessages(reportId);
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
    </div>
  );
};

export default ReportPopup;
