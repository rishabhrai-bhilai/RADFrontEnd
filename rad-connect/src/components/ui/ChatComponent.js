import { React, useState, useEffect } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import "./ChatPage.css";
import patientChatImg from "../../assets/patientbox.png";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
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
  const { data, token, setIsUserLoggedIn } = useUserIdContext();
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
    console.error(err);
  };

  const handleSendMessage = (text) => {
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
    const responseData = await HttpPost(0, "/getMessages", token, {
      user1Id: myId,
      user2Id: uId,
      reportId: rId,
    });
    if (responseData == null) {
      throw new Error("Failed to fetch chats");
    }
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    setMessages(responseData.messages);
  };

  const onPrivateMessage = (payload) => {
    var payloadData = JSON.parse(payload.body);
    let newMessage = {
      message: payloadData.message,
      sender: payloadData.sender,
    };
    var parts = payloadData.receiverName.split("@");
    var repRec = parseInt(parts[2]);
    if (repRec == rId) setMessages((messages) => [...messages, newMessage]);
  };

  useEffect(() => {
    const displayMessages = () => {
      setMessagesLoaded(true);
    };
    displayMessages();
  }, [messages]);
  const sendMessage = async (text) => {
    const responseData = await HttpPost(0, "/addMessage", token, {
      sender: myId,
      reciever: uId,
      message: text,
      report: rId,
    });
    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData == null) {
      throw new Error("Failed to add message");
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
