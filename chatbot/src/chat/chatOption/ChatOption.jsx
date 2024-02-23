import React from 'react';

function ChatOption({ option, title, description, selectedOption, handleChatOption }) {
  return (
    
    <div
      data-toggle="tooltip" data-placement="bottom" title="Tooltip on top"
      className={`chatbot-${option}-opt ${
        selectedOption === option ? "selected-option disable-option" : selectedOption === "" ? "" : "unselected-option"
      }`}
      onClick={() => handleChatOption({ option })}
    >
      <h3 className="chat-opt-title">{title}</h3>
    </div>
  );
}

export default ChatOption;