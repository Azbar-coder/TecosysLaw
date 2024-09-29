import React from "react";
import "./HomeFooter.css";

const HomeFooter = ({ isDarkMode }) => {
  return (
    <div className={`footer ${isDarkMode ? "dark" : ""}`}>
      <div className="footer_top">
        <div className="flex flex-col">
          <div className="left_footer hidden lg:block">
            <div className="lo">
              {/* <img src={image2} alt="" /> */}
              <p>Tecosys</p>
            </div>
            <div className="form">
              <p>Subscribe to Our Newsletter</p>
              <div className="form1">
                <input type="text" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
            </div>


          </div>

          <div className="flex flex-col">

            <div className="icons flex ">
              <h2 className="text-xl tracking-[5%] -ml-20 font-bold">Social Media</h2>
              <div className="face">
                <a href="https://github.com/Tecosys" className="icon-a">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="face">
                <a href="https://www.linkedin.com/company/tecosysin/" className="icon-a">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="face">
                <a href="https://x.com/tecosys" className="icon-a">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="face">
                <a href="/" className="icon-a">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right_footer">
          <div>
            <h4>Navigation</h4>
            <a href="/">Home</a>
            {/* <a href="/">Shop</a> */}
            <a href="/">Collections</a>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of service</a>
            <a href="/">Return Policy</a>
            <a href="/">Cookie Policy</a>
          </div>
          <div className="div4">
            <h4>Contact</h4>
            <a href="/">
              <i className="fa-solid fa-phone"></i>+(123) 456-789
            </a>
            <a href="/">
              <i className="fa-regular fa-envelope"></i>support@Lawcrats.com
            </a>
            <a href="/">
              <i className="fa-solid fa-location-dot"></i>sdfghgfds
            </a>
          </div>

        </div>
      </div>
      <div className="footer_bottom2">
        <p>
          We empower technology to bridge the gap between law and innovation.
          Please note, we are not a law firm.
        </p>
      </div>
      <div className="footer_bottom">
        <p>© 2024 LawCrats. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default HomeFooter;
