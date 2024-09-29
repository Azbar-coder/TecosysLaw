import {React,useState} from "react";
import "./HomeTools.css";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaSearch, FaFileSignature,FaArrowLeft } from "react-icons/fa";


const Hometools = ({ isDarkMode }) => {

  const navigate = useNavigate();
  const handleLCBRediret = () => {
    navigate("/law-chat-bot");
  };

  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };
  const handleBackClick = () => {
    setIsSearchClicked(false);
  };


  return (
    <div className={`hometools-section ${isDarkMode ? "dark-mode" : ""} lg:-mt-[100px] -mt-[300px]`}>
      <div className="hometools-background">
        <div className="hometools-content ">
          <div className="hometools-header">
            <h3 className="header-title">What We Do</h3>
            <h2 className="header-subtitle">We Assign Tools For Clients</h2>
          </div>
          <div className="hometools-cards flex justify-center items-center space-x-6 mt-8">
  
      {!isSearchClicked && (
        <div
          className="cursor-pointer flex flex-col items-center justify-center bg-black px-5 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300"
          onClick={handleSearchClick}
        >
          <FaSearch size={30} color="#FFA500" />
          <h4 className="text-white text-lg mt-2">Case Searching</h4>
        </div>
      )}

      {/* Display Law ChatBot and Case Summarizer cards when the search icon is clicked */}
      {isSearchClicked && (
        <div className="flex flex-col items-center space-y-4">
          {/* Cards Container */}
          <div className="flex justify-center items-center space-x-8">
            {/* Law ChatBot Card */}
            <div className="card2 cursor-pointer flex flex-col items-center justify-center p-4 bg-black border-2 border-orange-500 rounded-lg transition-transform transform hover:scale-105">
              <FaRobot size={50} color="#FFFFFF" />
              <h4 className="card-title text-white mt-4">Law ChatBot</h4>
            </div>

            {/* Case Summarizer Card */}
            <div className="card2 cursor-pointer flex flex-col items-center justify-center p-4 bg-black border-2 border-orange-500 rounded-lg transition-transform transform hover:scale-105">
              <FaFileSignature size={50} color="#FFFFFF" />
              <h4 className="card-title text-white mt-4">Case Summarizer</h4>
            </div>
          </div>

          {/* Back Button positioned between both cards and at the end */}
          <div className="mt-4">
            <button
              className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300"
              onClick={handleBackClick}
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
          </div>
        </div>
      )}
    </div>

          <button className="more-services-button">More Services</button>
        </div>
      </div>
    </div>
  );
};

export default Hometools;
