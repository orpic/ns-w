import React from "react";
import "./NumTextbox.css";

const NumTextbox = () => {
  return (
    <div className="numTextbox-container">
      <h1 className="numTextbox-heading">
        Send message on WhatsApp without saving number
      </h1>
      <p className="numTextbox-heading">
        ( WhatsApp <span>पे मैसेज भेजे बिना नंबर सेव किए</span> )
      </p>
      <label className="numTextbox-enter-number">
        Enter Number <span>(नीचे दिए स्थान पर नंबर डालें)</span>
      </label>
    </div>
  );
};

export default NumTextbox;
