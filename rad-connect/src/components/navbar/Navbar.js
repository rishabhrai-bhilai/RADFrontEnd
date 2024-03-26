// Navbar.js
import React, { useState } from 'react';
import '../navbar/navbar.css'; // Import your CSS file
import '../../../src/index.css';
import logo from '../../assets/final1.png';

function Navbar() {
  const [sidebarClosed, setSidebarClosed] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  const handleSearchClick = () => {
    const body = document.querySelector("body"); // Define 'body'
    const searchBtn = body.querySelector(".search-box");
    const sidebar = body.querySelector(".sidebar");
    sidebar.classList.remove("close");
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


  return (
    <nav className={`sidebar ${sidebarClosed ? 'close' : ''} `}>
      <header>
        <div className="image-text">
          <span className="image"> <img src={logo} alt="logo" /> </span>

          <div className="text header-text">
            <span className="name">CodingLab</span>
            <span className="profession">Web developer</span>
          </div>
        </div>

        <i className="bx bx-chevron-right toggle bg-blue-dark" onClick={toggleSidebar}> </i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box" onClick={handleSearchClick}>
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-chart icon"></i>
                <span className="text nav-text">Revenue</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bell icon"></i>
                <span className="text nav-text">Notification</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-pie-chart-alt icon"></i>
                <span className="text nav-text">Analytics</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-heart icon"></i>
                <span className="text nav-text">Likes</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li>
            <a href="#">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
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
