import React from "react";
import "./ChatButton.css";

import { useSelector } from "react-redux";

const ChatButton = () => {
  const number = useSelector((state) => state.numInput.numInputVal);
  return (
    <div className="gen-col-container">
      <button className="numTextbox-btn">
        <p className="chatButton-text gen-bold-text">Open chat screen</p>
        <p className="chatButton-text">( चैट स्क्रीन पे जाएं )</p>
      </button>
    </div>
  );
};

export default ChatButton;
