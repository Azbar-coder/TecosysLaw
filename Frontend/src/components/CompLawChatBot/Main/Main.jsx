import React, { useState, useEffect, useContext, useRef } from "react";
import "../Main/Main.css";
import { assets } from "../assets/assets.js";
import { Context } from "../../../LawChatBot/context/Context.jsx";
import Popup from "../Popup/Popup.jsx";
import LCLogoBlack from "../assets/LCLogoBlack.png"
import FormattedContent from "../../../CommonFiles/FormattedContent.jsx";
import ProfileIconDropDown from "../../../CommonFiles/ProfileIconDropdown.jsx"
import run from '../../../LawChatBot/config/LCBConnector.js';

const Main = () => {

  const { chatHistory, setChatHistory } = useContext(Context);

  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const [showPIDropdown, setShowPIDropdown] = useState(false);
  const [input, setInput] = useState("");

  
  

  const navRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && input.trim()) {
      handleSendQuestion(input);
    }
  };

  const handleSendQuestion = async () => {
      const currentPrompt = input;
      setChatHistory([
        ...chatHistory,
        {question: currentPrompt, isBot: false}
      ]);
      setInput("");
      const resultData = await run(currentPrompt);
      setChatHistory([
        ...chatHistory,
        {question: currentPrompt, isBot: false},
        {answer: resultData, isBot: true}
      ]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current && !navRef.current.contains(event.target) && !event.target.matches(".nav-img")) {
        if (showPIDropdown) {
          setShowPIDropdown(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPIDropdown]);

  const toggleDropdown = () => {
    setShowPIDropdown(!showPIDropdown);
  };

  return (
      <div className="main">
        <div className="nav">
          <img
            src={assets.user_icon}
            alt="profile-img"
            onClick={toggleDropdown}
            className="nav-img"
          />
        </div>
        <div ref={navRef}>
          <ProfileIconDropDown showProfileIconDropdown={showPIDropdown} /> 
        </div>  
        <div className="main-container">
          <div className="greet">
            {/* <img src={img} alt="" /> */}
            <p className="intro1">LawChatBot</p>
            <p className="intro2">Legal Issues? Ask Me!</p>
          </div>
          <>
            {chatHistory.map((history, index) => (
              <div key={index} className="result">
                {history.isBot === false &&
                  <div className="result-title">
                    <img className="imgClassUser" src={assets.user_icon} alt="" />
                    <p className="promptClass">{history.question}</p>
                  </div>
                }
                {history.isBot === true &&
                  <div className="result-response-part">
                    <div className="botImgContainer">
                      <img className="imgClassBot" src={LCLogoBlack} alt="" />
                    </div>
                    <div className="formatted-content-wrapper">
                      <FormattedContent text={history.answer} />
                    </div>
                  </div>
                  }
              </div>
            ))}
          </>
          <div className="main-bottom">
            <div className="search-box">
              <input
                name="input"
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                value={input}
                type="text"
                placeholder="Ask Me..."
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input ? (
                  <img onClick={() => handleSendQuestion(input)} src={assets.send_icon} alt="" />
                ) : null}
              </div>
            </div>
            <div className="bottom-info">
              <button onClick={() => setShowPremiumPopup(true)}>
                {/* Save Chat on Premium */}
              </button>
            </div>
          </div>
        </div>
        <Popup show={showPremiumPopup} onClose={() => setShowPremiumPopup(false)} />
      </div>
  );
};

export default Main;
