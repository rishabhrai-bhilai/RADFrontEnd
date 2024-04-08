import { React, useState, useEffect } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import "./ChatPage.css";
import patientChatImg from "../../assets/patientbox.png";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
} from "../../constants";

var stompClient = null;
const ChatComponent = ({ rId, uId, myId, chatName }) => {
  let subs = null;
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });
  const [messagesLoaded, setMessagesLoaded] = useState(false);
  useEffect(() => {
    setMessages([]);
    fetchMessages();

    if (subs != null) subs.unsubscribe();
    stompClient = null;
    const connectToSocket = async () => {
      let id = myId;
      setUserData({ ...userData, username: id.toString() });
      connect();
    };
    connectToSocket();

    return () => {
      if (subs != null) {
        subs.unsubscribe(); // Unsubscribe from previous subscription on component unmount
      }
    };
  }, [rId, uId, myId]);

  const connect = () => {
    let Sock = new SockJS("http://" + DATA_HOST + ":" + CHAT_PORT + "/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    // stompClient.subscribe("/chatroom/public", onMessageReceived);
    subs = stompClient.subscribe(
      "/user/" + myId + "@" + uId + "@" + rId + "/private",
      onPrivateMessage
    );
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

  const handleSendMessage = (text) => {
    // const newMessage = {
    //   chatId: messages.length + 1,
    //   text: text,
    //   sender: "user", // You can set the sender dynamically based on user authentication
    //   timestamp: new Date().toLocaleTimeString(),
    // };
    // setMessages([...messages, newMessage]);
    const newMessage = {
      sender: myId,
      receiver: uId,
      message: text,
      report: rId,
    };
    sendPrivateValue(text);
    sendMessage(text);
    setMessages([...messages, newMessage]);
  };

  const fetchMessages = async () => {
    console.log("req body");

    try {
      const response = await fetch(
        "http://" + DATA_HOST + ":" + DATA_PORT + "/teleRadiology/getMessages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user1Id: myId,
            user2Id: uId,
            reportId: rId,
          }),
        }
      );

      console.log(
        JSON.stringify({
          user1Id: myId,
          user2Id: uId,
          reportId: rId,
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
      setMessages(responseData.messages);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  const onPrivateMessage = (payload) => {
    console.log("reciever");
    var payloadData = JSON.parse(payload.body);
    // fetchMessages(parseInt(payloadData.message, 10));
    let newMessage = {
      message: payloadData.message,
      sender: payloadData.sender,
    };
    var parts = payloadData.receiverName.split("@");
    var repRec = parseInt(parts[2]);
    console.log(repRec);
    console.log(rId);
    if (repRec == rId) setMessages((messages) => [...messages, newMessage]);
  };

  useEffect(() => {
    const displayMessages = () => {
      setMessagesLoaded(true);
    };
    displayMessages();
  }, [messages]);
  const sendMessage = async (text) => {
    try {
      const response = await fetch(
        "http://" + DATA_HOST + ":" + DATA_PORT + "/teleRadiology/addMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: myId,
            reciever: uId,
            message: text,
            report: rId,
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

  const sendPrivateValue = (text) => {
    if (stompClient) {
      var chatMessage = {
        senderName: myId.toString(),
        receiverName:
          uId.toString() + "@" + myId.toString() + "@" + rId.toString(),
        message: text,
        status: "MESSAGE",
      };
      console.log("sender");
      console.log(chatMessage);
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div className="rightside-chat">
      <div className="rightside-header">
        <div className="right-side-image-div">
          <div className="right-side-image">
            {/* <p>Chat Component</p> */}
            <img src={patientChatImg} alt="" />
          </div>
        </div>
        <div className="rightside-header-data">
          <div className="rightside-header-name">{chatName}</div>
          {/* <div className="rightside-header-status">Active Now</div> */}
        </div>
      </div>
      {messagesLoaded && (
        <div className="message-container">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      )}

      <div className="msg-input-taker">
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatComponent;
