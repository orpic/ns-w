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
      <label id="mob-num" className="numTextbox-enter-number">
        Enter Number <span>( नीचे दिए स्थान पर नंबर डालें )</span>
      </label>
      <div className="numTextbox-inputs">
        <button className="numTextbox-input input-country-code">+91</button>
        <input
          id="mob-num"
          className="numTextbox-input input-mobile-num"
          type="number"
        />
        <button className="numTextbox-input clear-input-mobile-num gen-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NumTextbox;
