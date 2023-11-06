import React, { useState, useRef, useEffect } from "react";
import "./Chat.scss";

import { Link } from "wouter";

import Icon from "../images/Icons/robot-icon.svg";
import RobotIcon from "../images/Icons/chat-robot-icon.svg";
import UserIcon from "../images/Icons/chat-user-icon.svg";
import Robot from "../images/robot-figure.svg";
import SendIcon from "../images/Icons/send-icon.svg";
import LogoutICon from "../images/Icons/logout-icon.svg";

function Chat() {
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm Adda, how can I help you?",
      isUser: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const chatInputRef = useRef(null);
  const chatLogRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const userMessage = { text: newMessage, isUser: true };
      setMessages([...messages, userMessage]);
      setNewMessage("");
      chatInputRef.current.focus();
      scrollToBottom();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
  };

  const handleLogout = () => {
    // Perform the logout logic here.
    // You can clear the user's session or token, redirect to the login page, etc.
    // For demonstration purposes, we'll simply refresh the page.
    window.location.reload();
  };

  useEffect(() => {
    chatInputRef.current.focus();
    scrollToBottom();
  }, []);

  return (
    <div className="chat">
      <nav className="nav-chat">
        <Link to="/" className="navbar-brand menu-title">
          <img
            style={{ marginLeft: "10px", width: "30px" }}
            src={Icon}
            className="robot-icon"
            alt="robot-icon"
          />
          Adda Chat
        </Link>

        <button className="new-chat">Beta Version</button>
      </nav>

      <aside className="sideMenu">
        <div className="side-menu-icon mb-3">
          <Link to="/" className="navbar-brand menu-title">
            <img
              style={{ marginLeft: "10px", width: "30px" }}
              src={Icon}
              className="robot-icon"
              alt="robot-icon"
            />
            Adda Chat
          </Link>

          <button className="new-chat">Beta Version</button>
        </div>

        <img src={Robot} alt="robot-figure" className="robot-figure floating" />

        <div className="side-menu-logout">
          <button className="logout-button" onClick={handleLogout}>
            {" "}
            Logout
            <img src={LogoutICon} alt="logoutIcon" />
          </button>
        </div>
      </aside>

      <section className="chatbox" ref={chatLogRef}>
        <div className="chat-log">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.isUser ? "user" : "chatbot"}`}
            >
              <div className="chat-message-center">
                <div className="avatar">
                  <img
                    src={message.isUser ? UserIcon : RobotIcon}
                    className={message.isUser ? "user-icon" : "robot-icon"}
                    alt={message.isUser ? "user-icon" : "robot-icon"}
                  />
                </div>
                <div
                  className={`message-container ${
                    message.isUser ? "user" : "chatbot"
                  }`}
                >
                  <div
                    className={`message ${
                      message.isUser
                        ? "user chat-message"
                        : "chatbot chatbot-scale-in"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="chat-input-holder">
          <div className="chat-input-holder-fixed">
            <input
              rows="1"
              className="chat-input-textarea"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              ref={chatInputRef}
            ></input>
            <button
              className="send-button"
              onClick={handleSendMessage}
              style={{ marginLeft: "12px" }}
            >
              <img src={SendIcon} alt="sendIcon" />
            </button>
          </div>
          <span className="span-input-text">
            Adda Chat isn't flawless, so verify vital details.
          </span>
        </div>
      </section>
    </div>
  );
}

export default Chat;
