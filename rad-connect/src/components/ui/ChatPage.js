// ChatPage.js
import React, { useState } from "react";
import "./ChatPage.css";
import Message from "./Message";
import MessageInput from "./MessageInput";
import patientChatImg from '../../assets/patientbox.png'

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text: text,
      sender: "user", // You can set the sender dynamically based on user authentication
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };


  const handleSearchClick = () => {
    // const body = document.querySelector("body"); // Define 'body'
    // const searchBtn = body.querySelector(".search-box");
    // const sidebar = body.querySelector(".sidebar");
    // sidebar.classList.remove("close");
};

  return (
    <div className="chat-container">
      <div className="chat-head">Chat</div>
      <div className="chat-box">

        <div className="leftside-chat">

          <div className="chat-search-container">

          <li  className="search-box" onClick={handleSearchClick}>
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>

          </div>
          
          <div className="leftside-chat-container">

            <ul role="list">
              <li>
              <div className="person-message-container">

                <div className="person-msg-img-holder"><div className="person-msg-img-div"><img src={patientChatImg} alt="" /></div></div>
                <div className="person-msg">
                  <div className="person-msg-head"><div className="person-msg-name ">Rishabh Rai</div><div className="person-msg-time">10:30pm</div></div>
                  <div className="person-msg-highlight">Lorem ipsum dolor sit amet ccvvtetur, adipisicing elit. In, ipsam dolorum ad consectetur eveniet earum?</div>
                </div>
              

              </div>
              </li>


              <li>
              <div className="person-message-container">

                <div className="person-msg-img-holder"><div className="person-msg-img-div"><img src={patientChatImg} alt="" /></div></div>
                <div className="person-msg">
                  <div className="person-msg-head"><div className="person-msg-name ">Rishabh Rai</div><div className="person-msg-time">10:30pm</div></div>
                  <div className="person-msg-highlight">Lorem ipsum dolor sit amet ccvvtetur, adipisicing elit. In, ipsam dolorum ad consectetur eveniet earum?</div>
                </div>
              

              </div>
              </li>

              <li>
              <div className="person-message-container">

                <div className="person-msg-img-holder"><div className="person-msg-img-div"><img src={patientChatImg} alt="" /></div></div>
                <div className="person-msg">
                  <div className="person-msg-head"><div className="person-msg-name ">Rishabh Rai</div><div className="person-msg-time">10:30pm</div></div>
                  <div className="person-msg-highlight">Lorem ipsum dolor sit amet ccvvtetur, adipisicing elit. In, ipsam dolorum ad consectetur eveniet earum?</div>
                </div>
              

              </div>
              </li>

              <li>
              <div className="person-message-container">

                <div className="person-msg-img-holder"><div className="person-msg-img-div"><img src={patientChatImg} alt="" /></div></div>
                <div className="person-msg">
                  <div className="person-msg-head"><div className="person-msg-name ">Rishabh Rai</div><div className="person-msg-time">10:30pm</div></div>
                  <div className="person-msg-highlight">Lorem ipsum dolor sit amet ccvvtetur, adipisicing elit. In, ipsam dolorum ad consectetur eveniet earum?</div>
                </div>
              

              </div>
              </li>


              
              

            </ul>

          </div>

        </div>

        <div className="rightside-chat">
          <div className="rightside-header">
            <div className="right-side-image-div"><div className="right-side-image"><img src={patientChatImg} alt="" /></div></div>
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
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
