// // Navbar.js
// import React, { useState } from "react";
// import "../navbar/navbar.css"; // Import your CSS file
// import "../../../src/index.css";
// import logo from "../../assets/final1.png";
// import { useNavigate } from "react-router-dom";
// import { useUserIdContext } from "../../pages/Common/UserIdContext";
// import { HttpPost } from "../../constants";

// function Navbar({ options, functions }) {
//   const [sidebarClosed, setSidebarClosed] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();
//   const { token, setIsUserLoggedIn } = useUserIdContext();
//   const toggleSidebar = () => {
//     setSidebarClosed(!sidebarClosed);
//   };

//   const navigateToNewComponent = () => {
//     navigate("/patientreports");
//   };

//   const navigateToChat = () => {
//     navigate("/patientchat");
//   };

//   const handleSearchClick = () => {
//     const body = document.querySelector("body"); // Define 'body'
//     const searchBtn = body.querySelector(".search-box");
//     const sidebar = body.querySelector(".sidebar");
//     sidebar.classList.remove("close");
//   };

//   const handleLogout = () => {
//     HttpPost(0, "/logout", token, { token: token });
//     setIsUserLoggedIn(false);
//   };
//   const handleModeSwitch = () => {
//     const body = document.querySelector("body");
//     const modeText = document.querySelector(".mode-text");

//     body.classList.toggle("dark");

//     if (body.classList.contains("dark")) {
//       modeText.innerText = "Light Mode";
//     } else {
//       modeText.innerText = "Dark Mode";
//     }
//   };

//   return (
//     <nav className={`sidebar ${sidebarClosed ? "close" : ""} `}>
//       <header>
//         <div className="image-text">
//           <span className="image">
//             {" "}
//             <img src={logo} alt="logo" />{" "}
//           </span>

//           <div className="text header-text">
//             <span className="name">CodingLab</span>
//             <span className="profession">Web developer</span>
//           </div>
//         </div>

//         <i
//           className="bx bx-chevron-right toggle bg-blue-dark"
//           onClick={toggleSidebar}
//         >
//           {" "}
//         </i>
//       </header>

//       <div className="menu-bar">
//         <div className="menu">
//           <li className="search-box" onClick={handleSearchClick}>
//             <i className="bx bx-search icon"></i>
//             <input type="text" placeholder="Search..." />
//           </li>
//           <ul className="menu-links">
//             <li className="nav-link">
//               <a href="#">
//                 <i className="bx bx-home-alt icon"></i>
//                 <span className="text nav-text">Dashboard</span>
//               </a>
//             </li>
//             <li className="nav-link" onClick={navigateToNewComponent}>
//               <a href="#">
//                 <i className="bx bx-chart icon"></i>
//                 <span className="text nav-text">Reports</span>
//               </a>
//             </li>
//             <li className="nav-link" onClick={navigateToChat}>
//               <a href="#">
//                 <i className="bx bx-bell icon"></i>
//                 <span className="text nav-text">Chats</span>
//               </a>
//             </li>
//             <li className="nav-link">
//               <a href="#">
//                 <i className="bx bx-pie-chart-alt icon"></i>
//                 <span className="text nav-text">Analytics</span>
//               </a>
//             </li>
//             <li className="nav-link">
//               <a href="#">
//                 <i className="bx bx-heart icon"></i>
//                 <span className="text nav-text">Likes</span>
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="bottom-content">
//           <li onClick={handleLogout}>
//             <a href="#">
//               <i className="bx bx-log-out icon"></i>
//               <span className="text nav-text">Logout</span>
//             </a>
//           </li>
//           <li className="mode" onClick={handleModeSwitch}>
//             <div className="moon-sun">
//               <i className="bx bx-moon icon moon"></i>
//               <i className="bx bx-sun icon sun"></i>
//             </div>
//             <span className="mode-text text">Dark Mode</span>
//             <div className="toggle-switch">
//               <span className="switch"></span>
//             </div>
//           </li>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import "../navbar/navbar.css"; // Import your CSS file
import "../../../src/index.css";
import logo from "../../assets/final1.png";
import { useNavigate } from "react-router-dom";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import { HttpPost } from "../../constants";
import Tooltip from "../ui/Tooltip";

function Navbar({ options, functions, logicalBool=true }) {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { token, setIsUserLoggedIn } = useUserIdContext();

  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  useEffect(() => {
    // This code block will execute only once when the component mounts
    if (logicalBool) {
      setSidebarClosed(!sidebarClosed);
    }
  }, []);

  // const navigateToNewComponent = () => {
  //   navigate("/patientreports");
  // };

  // const navigateToChat = () => {
  //   navigate("/patientchat");
  // };

  // const handleSearchClick = () => {
  //   const body = document.querySelector("body"); // Define 'body'
  //   const searchBtn = body.querySelector(".search-box");
  //   const sidebar = body.querySelector(".sidebar");
  //   sidebar.classList.remove("close");
  // };

  const handleLogout = () => {
    HttpPost(0, "/logout", token, { token: token });
    setIsUserLoggedIn(false);
  };

  const handleModeSwitch = () => {
    const body = document.querySelector("body");
    const modeText = document.querySelector(".mode-text");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      modeText.innerText = "Light Mode";
    } else {
      modeText.innerText = "Dark Mode";
    }
  };

  const handleOptionClick = (index) => {
    if (functions && functions[index]) {
      functions[index]();
    }
  };

  return (
    <nav className={`sidebar ${sidebarClosed ? "close" : ""} `}>
      <header>
        <div className="image-text">
          <span className="image">
            {" "}
            <img src={logo} alt="logo" />{" "}
          </span>

          <div className="text header-text">
            <span className="name">RadConnect</span>
          </div>
        </div>

        <i
          className="bx bx-chevron-right toggle bg-blue-dark"
          onClick={toggleSidebar}
        >
          {" "}
        </i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          {/* <li className="search-box" onClick={handleSearchClick}>
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li> */}
          {options && (
            <ul className="menu-links">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="nav-link tooltip-container"
                  onClick={() => handleOptionClick(index)}
                >
                  <a href="#">
                    {option.icon && !sidebarClosed && (
                      <i className={`bx ${option.icon} icon`}></i>
                    )}

                    {option.icon && sidebarClosed && (
                      <Tooltip content={option.name} key={index}>
                        <i className={`bx ${option.icon} icon`}></i>
                      </Tooltip>
                    )}
                    <span className="text nav-text">{option.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bottom-content">
          {logicalBool && (
            <li onClick={handleLogout}>
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
          )}
          <li className="mode" onClick={handleModeSwitch}>
            <div className="moon-sun">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">Dark Mode</span>
            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
