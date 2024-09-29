// import React from "react";
// import { FaGavel, FaThumbsUp, FaTools } from "react-icons/fa";
// import img from "../assets/Group76.png";
// import img2 from "../assets/gavel_svgrepo.com.png";
// import img3 from "../assets/Group 5.png";
// import vs from "../assets/video.mp4";
// import "./HomeAbout.css";

// const HomeAbout = ({ isDarkMode }) => {
//   const iconColor = isDarkMode ? "#FFFFFF" : "#FFFFFF";
//   const hoverIconColor = "#000000";

//   const cards = [
//     {
//       image: img,
//       icon: <FaGavel size={50} color={iconColor} />,
//       title: "Highly ethical standard",
//       description:
//         "In the legal profession, upholding the highest ethical standards is paramount to maintaining the integrity of the justice system and ensuring public trust.",
//     },
//     {
//       image: img2,
//       icon: <FaThumbsUp size={50} color={iconColor} />,
//       title: "Highly Recommend",
//       description:
//         "When seeking legal representation, finding a lawyer who stands out in their field can make a world of difference, and certain qualities make some attorneys highly recommendable.",
//     },
//     {
//       image: img3,
//       icon: <FaTools size={50} color={iconColor} />,
//       title: "Specialized AI Tools",
//       description:
//         "When navigating complex legal issues, hiring a specialized lawyer can be crucial for achieving the best possible outcome.",
//     },
//   ];

//   return (
//     <div className={`card-container ${isDarkMode ? "dark-mode" : ""}mt-36`}>
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`card2 card ${isDarkMode ? "dark-card" : ""}`}
//         >
//           <div
//             className={`icon-wrapper ${
//               isDarkMode ? "dark-icon-wrapper" : "light-icon-wrapper"
//             }`}
//           >
//             {React.cloneElement(card.icon, {
//               style: { color: iconColor },
//               className: `icon ${isDarkMode ? "dark-icon" : ""}`
//             })}
//           </div>
//           <h3 className={`title ${isDarkMode ? "dark-title" : ""}`}>
//             {card.title}
//           </h3>
//           <div
//             className={`card-description ${
//               isDarkMode ? "dark-description" : ""
//             }`}
//           >
//             <div
//               className={`card_description_heading ${
//                 isDarkMode ? "dark-description-heading" : ""
//               }`}
//             >
//               <h1>{card.title}</h1>
//               <div
//                 className={`icon ${
//                   isDarkMode ? "dark-icon" : ""
//                 }`}
//               >
//                 {React.cloneElement(card.icon, { color: hoverIconColor })}
//               </div>
//             </div>
//             <p
//               className={`description ${
//                 isDarkMode ? "dark-description-text" : ""
//               }`}
//             >
//               {card.description}
//             </p>
//           </div>
//         </div>
//       ))}

//       {/* <div className="video-section">
//         <video
//           src={vs}
//           width="600"
//           height="400"
//           controls
//           autoPlay
//           loop
//           muted
//           playsInline
//           controlsList="nodownload noremoteplayback"
//           disablePictureInPicture={false}
//         >
//           Your browser does not support the video tag.
//         </video>
//       </div> */}
//     </div>
//   );
// };

// export default HomeAbout;
