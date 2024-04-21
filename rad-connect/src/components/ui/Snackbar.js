import React from "react";
import "./Snackbar.css";
import { useState, useEffect } from "react";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import {
  HttpGet,
  HttpPost,
} from "../../constants";

const Snackbar = ({repId}) => {
  const { data, token, setIsUserLoggedIn } = useUserIdContext();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications(data);
  }, [data]);

const fetchNotifications = async (data) => {
  const response = await HttpPost(0, "/getNotifications", token, {
    credId: data,
    reportId: repId
  });
  if (response == "Unauthorized") {
    setIsUserLoggedIn(false);
  }
  if (response == null) {
    throw new Error("Failed to fetch notifications");
  }
   setNotifications(response.notifications);   
};


  return (
    <>
      <div className="permission-head">Pending Requests</div>
      <div className="request-list-container">
        {notifications.map((notification, index) => (
          <div key={index} className="request-list-item">
            <div className="request-list-column permission-dat">
              {`Dr. ${notification.doctor} needs consent for Radiologist ${notification.radiologist}`}
            </div>
            <div className="request-list-column permission-accept">
              <button className="action-button accept-btn">Accept</button>
            </div>
            <div className="request-list-column permission-reject">
              <button className="action-button reject-btn">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Snackbar;
