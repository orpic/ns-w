import React from "react";
import "./NumTextbox.css";

const NumTextbox = () => {
  return (
    <div className="gen-col-container">
      <h1 className="numTextbox-heading">
        Send message on WhatsApp without saving number
      </h1>
      <p className="numTextbox-heading">
        ( WhatsApp <span>पे मैसेज भेजे बिना नंबर सेव किए</span> )
      </p>
      <label className="numTextbox-enter-number">
        Enter Number <span>( नीचे दिए स्थान पर नंबर डालें )</span>
      </label>
      <div className="numTextbox-inputs">
        <input className="numTextbox-input input-country-code" type="number" />
        <input className="numTextbox-input input-mobile-num" type="number" />
      </div>
    </div>
  );
};

export default NumTextbox;
