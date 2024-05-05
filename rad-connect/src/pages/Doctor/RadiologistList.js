import React from "react";
import { useNavigate } from "react-router-dom";
import "./RadiologistList.css";
export const RadiologistList = ({ radiologists }) => {
  const navigate = useNavigate();
  const handleRadiologistClick = () => {
    // Handle radiologist click
    navigate("/doctor/radioChat");
  };
  return (
    <div className="radiologist-list">
      {radiologists.map((radiologist, index) => (
        <div
          key={index}
          className="radiologist-tile"
          onClick={handleRadiologistClick}
        >
          <div className="profile-pic">
            <img src="path/to/profile/picture.jpg" alt="Profile" />
          </div>
          <div className="radiologist-name">{radiologist.name}</div>
        </div>
      ))}
    </div>
  );
};
