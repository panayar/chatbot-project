import React from "react";
import ChatMessage from "../chatMessage/ChatMessage";

function ChatLog({ messages }) {
  return (
    <div className="chat-log">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
}

export default ChatLog;
