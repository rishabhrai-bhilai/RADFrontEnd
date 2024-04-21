import React from 'react'
import './Snackbar.css'
import { useState, useEffect } from 'react';
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import {
  httpGet,
} from "../../constants";

const Snackbar = () => {
  const { data, token } = useUserIdContext();  
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetchNotifications(data);
  }, [data]);

const fetchNotifications = async (data) => {
  const response = await httpGet(0, "/getNotifications/"+data, token);
  if (response == null) {
    throw new Error("Failed to fetch notifications");
  }
   setNotifications(response.notifications);   
};


return (
  <>
    <div className='permission-head'>Pending Requests</div>
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