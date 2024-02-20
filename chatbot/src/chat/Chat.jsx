import React, { useState, useRef, useEffect } from "react";
import "./Chat.scss";
import Navbar from "./navbar/Navbar";
import SideMenu from "./sideMenu/SideMenu";
import ChatLog from "./chatLog/ChatLog";
import ChatInput from "./chatInput/ChatInput";

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
    window.location.reload();
  };

  useEffect(() => {
    chatInputRef.current.focus();
    scrollToBottom();
  }, []);

  return (
    <>
      <div className="background"></div>

      <div className="chat">
        <Navbar />
        <SideMenu handleLogout={handleLogout} />
        <section className="chatbox" ref={chatLogRef}>
          <ChatLog messages={messages} />
          <ChatInput
            newMessage={newMessage}
            handleSendMessage={handleSendMessage}
            handleChange={(e) => setNewMessage(e.target.value)}
            handleKeyPress={handleKeyPress}
            chatInputRef={chatInputRef}
          />
        </section>
      </div>
    </>
  );
}

export default Chat;
