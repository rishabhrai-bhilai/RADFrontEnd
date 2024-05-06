import React from "react";
import { useNavigate } from "react-router-dom";
import "./RadiologistList.css";
export const RadiologistList = ({ radiologists, repId }) => {
  const navigate = useNavigate();
  const handleRadiologistClick = (userId, name) => {
    // Handle radiologist click
    navigate("/doctor/radioChat", {
      state: {
        repId: repId,
        userId: userId,
        chatName: name,
      },
    });
  };
  return (
    <div className="radiologist-list">
      {radiologists.map((radiologist, index) => (
        <div
          key={index}
          className="radiologist-tile"
          onClick={() => {
            handleRadiologistClick(radiologist.userId, radiologist.name);
          }}
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
