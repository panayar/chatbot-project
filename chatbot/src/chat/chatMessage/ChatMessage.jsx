import React from "react";
import UserIcon from "../../images/Icons/chat-user-icon.svg";
import RobotIcon from "../../images/Icons/chat-robot-icon.svg";
import ReactMarkdown from "react-markdown";

function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.isUser ? "user" : "chatbot"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.isUser ? "d-none" : "robot"}`}>
          <img
            src={!message.isUser ? RobotIcon : "d-none"}
            className={"robot-icon"}
            alt={"robot-icon"}
          />
        </div>
        <div
          className={`message-container ${message.isUser ? "user" : "chatbot"}`}
        >
          <div
            className={`message ${
              message.isUser ? "user chat-message" : "chatbot chatbot-scale-in"
            }`}
          >
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>
        </div>

        <div className={`avatar ${!message.isUser ? "d-none" : "user"}`}>
          <img
            src={message.isUser ? UserIcon : "d-none"}
            className={"user-icon"}
            alt={"user-icon"}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
