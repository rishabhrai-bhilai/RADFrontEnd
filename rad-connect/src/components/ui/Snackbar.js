import React from "react";
import "./Snackbar.css";
import { useState, useEffect } from "react";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import { HttpGet, HttpPost } from "../../constants";
import OTP from "./OTP";

const Snackbar = ({ repId }) => {
  const { data, token, setIsUserLoggedIn } = useUserIdContext();
  const [notifications, setNotifications] = useState([]);
  const [showOtp, setShowOtp] = useState(false);
  const [docId, setDocId] = useState(0);
  const [radId, setRadId] = useState(0);
  const [notId, setNotId] = useState(0);
  const [responseMessage, setResponseMessage] = useState("");
  const [toggleVal, setToggleVal] = useState(-1);
  useEffect(() => {
    fetchNotifications(data);
  }, [data]);

  const fetchNotifications = async (data) => {
    const response = await HttpPost(0, "/getNotifications", token, {
      credId: data,
      reportId: repId,
    });
    if (response == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (response == null) {
      throw new Error("Failed to fetch notifications");
    }
    setNotifications(response.notifications);
  };

  useEffect(() => {
    if (responseMessage.length > 0) {
      const timer = setTimeout(() => {
        setResponseMessage("");
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [responseMessage]);
  const handleAccept = (doctorId, radioId, notifiId) => {
    setDocId(-1);
    setRadId(radioId);
    setToggleVal(4);
    setNotId(notifiId);
    // console.log(notifiId)
    setShowOtp(true);
  };
  const handleReject = (id) => {
    setNotId(id);
    setShowOtp(true);
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
              <button
                className="action-button accept-btn"
                onClick={() => {
                  handleAccept(
                    notification.doctorId,
                    notification.radiologistId,
                    notification.id
                  );
                }}
              >
                Accept
              </button>
            </div>
            <div className="request-list-column permission-reject">
              <button
                className="action-button reject-btn"
                onClick={() => {
                  handleReject(notification.id);
                }}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
        {showOtp && (
          <OTP
            doctorId={-1}
            reportId={repId}
            radiologistId={radId}
            toggleValue={toggleVal}
            setShowOTPComponent={setShowOtp}
            setResponseMessage={setResponseMessage}
            notificationId={notId}
          ></OTP>
        )}
        {responseMessage.length > 0 && <div>{responseMessage}</div>}
      </div>
    </>
  );
};

export default Snackbar;
