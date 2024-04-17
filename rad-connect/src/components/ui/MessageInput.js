// MessageInput.js

import React, { useState } from "react";
// import EmojiPicker from './EmojiPicker'; // Import the EmojiPicker component
import "./MessageInput.css";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    // Handle file upload logic here
    const file = e.target.files[0];
  };

  const insertEmoji = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
  };

  const sendMessage = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="message-input-container">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
        className="message-input"
      />
      {/* <input
        type="file"
        accept="image/*, .pdf, .doc, .docx"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      /> */}
      {/* <button onClick={() => document.getElementById('fileInput').click()} className="file-input-button">
        Upload File
      </button> */}
      {/* <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="emoji-button">😊</button>
      {showEmojiPicker && <EmojiPicker onSelect={insertEmoji} />} */}
      <button onClick={sendMessage} className="send-button">
        <i class="bx bxs-send"></i>
      </button>
    </div>
  );
};

export default MessageInput;
