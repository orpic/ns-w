import React, { useState } from "react";
import "./AppBody.css";
import { images } from "../../constants";

const AppBody = () => {
  //input states
  const [numInput, setNumInput] = useState("");
  const [countryCodeInput, setCountryCodeInput] = useState("+91");

  //error states ui changing classes
  const [errorClassBorder, setErrorClassBorder] = useState(
    "numTextbox-input input-mobile-num"
  );
  const [errorClassClear, setErrorClassClear] = useState(
    "numTextbox-input clear-input-mobile-num gen-center"
  );

  const oncountryCodeInput = (event) => {
    //error free when user starts typing
    setErrorClassBorder("numTextbox-input input-mobile-num");
    setErrorClassClear("numTextbox-input clear-input-mobile-num gen-center");
    const limit = 4;
    const val1 = event.target.value.slice(0, limit);
    setCountryCodeInput(val1);
  };

  const onNumInputChangeHandler = (event) => {
    //error free when user starts typing
    setErrorClassBorder("numTextbox-input input-mobile-num");
    setErrorClassClear("numTextbox-input clear-input-mobile-num gen-center");
    const limit = 10;
    const val = event.target.value.slice(0, limit);
    setNumInput(val);
  };

  const onNumInputClearHandler = () => {
    //error free when user clears the input field
    setErrorClassBorder("numTextbox-input input-mobile-num");
    setErrorClassClear("numTextbox-input clear-input-mobile-num gen-center");
    setNumInput("");
  };

  const openChatScreenButtonHandler = () => {
    const fullNum = countryCodeInput + numInput;
    if (numInput.length !== 10) {
      setErrorClassBorder(
        "numTextbox-input input-mobile-num error-state-input"
      );
      setErrorClassClear(
        "numTextbox-input clear-input-mobile-num gen-center error-state-clear"
      );
    } else {
      const url = "https://wa.me/" + fullNum + "?text=Hello";
      window.open(url, "_blank");
    }
  };

  return (
    <div className="gen-col-container">
      <h1 className="numTextbox-heading">
        Chat on WhatsApp without saving number
      </h1>
      <p className="numTextbox-heading">
        ( WhatsApp <span>पे मैसेज भेजे बिना नंबर सेव किए</span> )
      </p>
      <label className="numTextbox-enter-number">
        Enter Number <span>( नीचे दिए स्थान पर नंबर डालें )</span>
      </label>
      <div className="numTextbox-inputs">
        <input
          value={countryCodeInput}
          onChange={oncountryCodeInput}
          className="numTextbox-input input-country-code"
          type="text"
        />
        <input
          value={numInput}
          onChange={onNumInputChangeHandler}
          className={errorClassBorder}
          type="number"
        />
        <button onClick={onNumInputClearHandler} className={errorClassClear}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div onClick={openChatScreenButtonHandler}>
        <img src={images.whatsAppLogoSvg} alt="whats app logo" />
      </div>
    </div>
  );
};

export default AppBody;
