import React, { useState, useEffect } from 'react';
import "./HomeHero.css";
import HomeTools from "../HomeTools/HomeTools"; 

const HomeHero = ({ isDarkMode }) => {
  const [selected, setSelected] = useState('lawyers');
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showHomeTools, setShowHomeTools] = useState(false); 

  const lawyersText = "Simplifying the law documents with advanced AI technologies";
  const consumersText = "Know your legal rights with tecosys anytime";

  const handleToggle = (type) => {
    setSelected(type);
    setDisplayedText('');
    setIndex(0);
  };

  const currentText = selected === 'lawyers' ? lawyersText : consumersText;

  useEffect(() => {
    if (index < currentText.split(' ').length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + ' ' + currentText.split(' ')[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [index, currentText]);

 
  const handleExploreClick = () => {
 
    setShowHomeTools((prevShow) => !prevShow); 
  };

  return (
    <div className={`homehero max-w-[1300px] h-auto mx-auto ${isDarkMode ? "dark" : ""} bg-red-600`}>
      <div className="flex flex-col lg:flex lg:flex-row mt-36 items-start gap-6">
        
        {/* Left Side Content */}
        <div className="homehero_content space-y-5 flex-1 -mt-32  lg:w-[600px] w-[400px]">
          <div className="mt-0  h-[200px] flex flex-col items-center justify-start overflow-hidden whitespace-pre-wrap border border-gray-300 rounded-lg shadow-md bg-gradient-to-r from-sky-950 to-white">
            <p className="text-white font-bold text-2xl lg:text-3xl tracking-wider pl-5">
              {displayedText}
            </p>
          </div>

          {/* Toggle button for consumers and lawyers */}
          <div className="flex justify-center items-center ">
            <div className="relative inline-flex rounded-lg shadow-md lg:mb-10 mb-5 ">
              <button
                onClick={() => handleToggle('lawyers')}
                className={`w-36 py-4 text-lg font-semibold rounded-l-lg focus:outline-none transition duration-300 ease-in-out ${selected === 'lawyers' ? 'hover:bg-sky-950 text-black' : 'bg-gray-300 text-gray-700'}`}
              >
                For Lawyers
              </button>
              <button
                onClick={() => handleToggle('consumers')}
                className={`w-36 py-4 text-lg font-semibold rounded-r-lg focus:outline-none transition duration-300 ease-in-out ${selected === 'consumers' ? 'hover:bg-sky-950 text-black' : 'bg-gray-300 text-gray-700'} `}
              >
                For Consumers
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Video */}
        <div className="mt-[30px] mr-14 lg:-mt-24 sm:w-[300px] sm:h-[400px] md:w-[600px] md:h-[400px] lg:w-[600px] lg:h-[400px]">
          {/*<video className="w-full h-full object-cover rounded-lg" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>*/}
        </div>
      </div>

      {/* Explore Button */}
      <div className="homehero_bot flex flex-col items-start mt-20">
        <button
          className="homehero_bot_button mb-80 md:px-6 md:py-28 lg:w-[237px] lg:h-[66px]"
          onClick={handleExploreClick} 
        >
          Explore All Services
        </button>
      </div>

      {/* Render HomeTools only when showHomeTools is true */}
      {showHomeTools && (
        <HomeTools isDarkMode={isDarkMode} />
      )}
    </div>
  );
};

export default HomeHero;