import React, { useState, useRef, useEffect } from "react";
import "./Chat.scss";

import { Link } from "wouter";

import Icon from "../../images/Icons/chat-robot.svg";
import UserIcon from "../../images/Icons/user-icon.svg";
import SendIcon from "../../images/Icons/send-icon.svg";

function Chat() {
  const [messages, setMessages] = useState([
    {
      text: "Hello world",
      isUser: true,
    },
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

  useEffect(() => {
    chatInputRef.current.focus();
    scrollToBottom();
  }, []);

  return (
    <div className="chat">
      <aside className="sideMenu">
        <div className="side-menu-icon mb-3">
          <Link to="/" className="navbar-brand menu-title">
            ADDA CHAT
            <img
              style={{ marginLeft: "12px", width: "30px" }}
              src={Icon}
              className="robot-icon"
              alt="robot-icon"
            />
          </Link>
        </div>
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>

      <section className="chatbox">
        <div className="chat-log" ref={chatLogRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.isUser ? "user" : "chatbot"}`}
            >
              <div className="chat-message-center">
                <div className="avatar">
                  <img
                    src={message.isUser ? UserIcon : Icon}
                    className={message.isUser ? "user-icon" : "robot-icon"}
                    alt={message.isUser ? "user-icon" : "robot-icon"}
                  />
                </div>
                <div
                  className={`message ${message.isUser ? "user" : "chatbot"}`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="chat-input-holder">
          <textarea
            rows="1"
            className="chat-input-textarea"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            ref={chatInputRef}
          ></textarea>
          <button
            className="send-button"
            onClick={handleSendMessage}
            style={{ marginLeft: "12px" }}
          >
            <img src={SendIcon} alt="sendIcon" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Chat;
