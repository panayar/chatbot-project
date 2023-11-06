import React from "react";
import UserIcon from "../../images/Icons/chat-user-icon.svg";
import RobotIcon from "../../images/Icons/chat-robot-icon.svg";

function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.isUser ? "user" : "chatbot"}`}>
      <div className="chat-message-center">
        <div className="avatar">
          <img
            src={message.isUser ? UserIcon : RobotIcon}
            className={message.isUser ? "user-icon" : "robot-icon"}
            alt={message.isUser ? "user-icon" : "robot-icon"}
          />
        </div>
        <div className={`message-container ${message.isUser ? "user" : "chatbot"}`}>
          <div className={`message ${message.isUser ? "user chat-message" : "chatbot chatbot-scale-in"}`}>
            {message.text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
