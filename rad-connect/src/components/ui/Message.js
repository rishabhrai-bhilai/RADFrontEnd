// Message.js
import React from "react";
import "./Message.css";
import { useUserIdContext } from "../../pages/Common/UserIdContext";

const Message = ({ message }) => {
  const { data } = useUserIdContext();
  return (
    <>
      {data == message.sender ? (
        <div className="message user">
          <div className="message-content">
            <p>{message.message}</p>
            <span className="timestamp">{message.timeStamp}</span>
          </div>
        </div>
      ) : (
        <div className="message sender">
          <div className="message-content">
            <p>{message.message}</p>
            <span className="timestamp">{message.timeStamp}</span>
          </div>
        </div>
      )}

      {/* <div className={`message ${message.sender}`}>
        <div className="message-content">
          <p>{message.text}</p>
          <span className="timestamp">{message.timestamp}</span>
        </div>
      </div> */}
    </>
  );
};

export default Message;
