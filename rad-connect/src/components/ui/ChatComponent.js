import {React,useState,useEffect} from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import "./ChatPage.css";
import patientChatImg from "../../assets/patientbox.png";

const ChatComponent = ({rId}) => {
    console.log(rId);
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
                <div className="rightside-header-name">Rishabh Rai</div>
                <div className="rightside-header-status">Active Now</div>
              </div>
            </div>
            {/* {messagesLoaded && (
              <div className="message-container">
                {messages.map((message) => (
                  <Message key={message.id} message={message} />
                ))}
              </div>
            )} */}

            <div className="msg-input-taker">
              <MessageInput/>
              {/* <MessageInput onSendMessage={handleSendMessage} /> */}
            </div>
          </div>
        
  )
}

export default ChatComponent;