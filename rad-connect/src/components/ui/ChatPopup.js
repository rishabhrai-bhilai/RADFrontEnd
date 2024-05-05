// ChatPopup.js
import React, { useState } from 'react';
import './ChatPopup.css';
import ChatPage from './ChatPage';

import DoctorRadioChatPage from './DoctorRadioChatPage';

const ChatPopup = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChat = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`chat-popup ${isExpanded ? 'expanded' : ''}`}>
      {isExpanded && (
        <button className="close-button" onClick={toggleChat}>
          <i class='bx bx-x'></i>
        </button>
      )}
      {isExpanded ? (
        <div className="expanded-content">
          <ChatPage onClose={toggleChat} />
          {/* <DoctorRadioChatPage/> */}

        </div>
      ) : (
        <button className="minimize-button" onClick={toggleChat}>
          <i class='bx bx-message-square-dots'></i>
        </button>
      )}
    </div>
  );
};

export default ChatPopup;
