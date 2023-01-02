import React from "react";
import "./ChatButton.css";

const ChatButton = () => {
  return (
    <div className="gen-col-container">
      <button className="numTextbox-btn">
        <p className="chatButton-text">Open chat screen</p>
        <p className="chatButton-text">( चैट स्क्रीन पे जाएं )</p>
      </button>
    </div>
  );
};

export default ChatButton;
