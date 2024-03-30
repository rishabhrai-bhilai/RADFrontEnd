// Message.js
import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender}`}>
      <div className="message-content">
        <p>{message.text}</p>
        <span className="timestamp">{message.timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
