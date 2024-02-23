import React from "react";
import UserIcon from "../../images/Icons/chat-user-icon.svg";
import RobotIcon from "../../images/Icons/chat-robot-icon.svg";
import ReactMarkdown from "react-markdown";

function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.isUser ? "user" : "chatbot"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.isUser ? "d-none" : "robot"}`}>
          {!message.isUser && (
            <img src={RobotIcon} className="robot-icon" alt="robot-icon" />
          )}
        </div>
        <div
          className={`message-container ${message.isUser ? "user" : "chatbot"}`}
        >
          <div
            className={`message ${
              message.isUser ? "user chat-message" : "chatbot chatbot-scale-in"
            }`}
          >
            <p>
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </p>
          </div>
        </div>

        <div className={`avatar ${!message.isUser ? "d-none" : "user"}`}>
          {message.isUser && (
            <img src={UserIcon} className="user-icon" alt="user-icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
