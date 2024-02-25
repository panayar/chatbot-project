import React from "react";
import SendIcon from "../../images/Icons/send-icon.svg";

function ChatInput({ newMessage, handleSendMessage, handleChange, handleKeyPress, chatInputRef, disabled }) {
  return (
    <div className="chat-input-holder">
      <div className="chat-input-holder-fixed">
        <input
          disabled={disabled}
          rows="1"
          className="chat-input-textarea"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          ref={chatInputRef}
        ></input>
        <button className="send-button" onClick={handleSendMessage} style={{ marginLeft: "12px" }}>
          <img src={SendIcon} alt="sendIcon" />
        </button>
      </div>
      <span className="span-input-text">Adda Chat no es perfecto, así que verifica detalles importantes.</span>
    </div>
  );
}

export default ChatInput;
