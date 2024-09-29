import React, { useEffect, useState } from "react";
import tecosyslogo from '../assets/tecosysLogo.png';
import { Link } from "react-router-dom";
import "./HomeNavbar.css";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navItems } from "../../../constants/constant";


const HomeNavbar = ({ onToggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // State to track active li
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNightlightToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    onToggleDarkMode(!isDarkMode); // Notify parent component about the change
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    if (mobileDrawerOpen) toggleNavbar();
  };

  const handleCalendlyRedirect = () => {
    window.location.href = 'https://calendly.com/your-username';
  };

//   const handleRedirect = (href) => {
//     if (href.startsWith('http')) {
//         window.open(href, '_blank');
//     } else {
//         window.location.href = href;
//     }
// };

  return (
    <div className={`homenav_bar ${isScrolled ? "scrolled" : ""} ${isDarkMode ? "dark" : ""}`}>
      <div className="homenavbar_left flex gap-2 ">
        <img src={isDarkMode ? tecosyslogo : tecosyslogo} alt="logo" />
        <Link to={"/"}>
          <h1 className="text-2xl lg:text-4xl satisfy-regular">TecosysLaw</h1>
        </Link>
      </div>

      <div className="homenavbar_mid  justify-between items-center hidden lg:flex mx-auto">
        <ul className="hidden lg:flex ">
          {navItems.map((item, index) => (
            <li key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleClick(item.href)}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>


      </div>
      {/* Toggle button for mobile view */}
      <div className="lg:hidden flex flex-col justify-end absolute right-5">
        <button onClick={toggleNavbar}>
          {
            mobileDrawerOpen ? <CloseIcon /> : <MenuIcon />
          }
        </button>
      </div>



      <div className="homenavbar_right  lg:justify-end lg:flex hidden  items-center bg">
        <button className="nightlight " onClick={handleNightlightToggle}>
          {isDarkMode ? <LightModeOutlinedIcon sx={{ color: "white" }} /> : <DarkModeIcon />}
        </button>

        <button className="login" style={{ padding: "5px" }} onClick={handleCalendlyRedirect}>
          <Link style={{ color: isDarkMode ? "#000" : "#fff", fontSize: "15px" }}>
            Book a Demo
          </Link>
        </button>
        <button className="login">
          <Link to="/auth-user" style={{ color: isDarkMode ? "#000" : "#fff" }}>
            Login
          </Link>
        </button>



      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed right-0 top-16 z-20 bg-white p-12 flex flex-col justify-center items-center lg:hidden rounded-md  shadow-lg">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={`${activeIndex === index ? "active" : ""} py-2 `}
                onClick={() => handleClick(index)}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomeNavbar;
