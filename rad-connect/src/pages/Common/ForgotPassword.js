import React, { useState } from "react";
import OTP from "../../components/ui/OTP";
import { useUserIdContext } from "./UserIdContext";
import { useNavigate } from "react-router-dom";
import "../Common/ForgotPassword.css";
import {
    DATA_HOST,
    DATA_PORT,
    IMAGES_HOST,
    IMAGES_PORT,
    CHAT_HOST,
    CHAT_PORT,
  } from "../../constants";

const ForgotPassword = () => {
    const [changePassword, setChangePassword] = useState(0);
    const [email, setEmail] = useState("");
    const [errorData, setErrorData] = useState("");
    const [successData, setSuccessData] = useState("");
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [credId, setCredId] = useState("");
    const { getUserId } = useUserIdContext();
    const navigate = useNavigate();
    
    const handleBackToLogin = () => {
        navigate("/");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (changePassword === 0) {
            try {
                const response = await fetch(
                    "http://" +
                    DATA_HOST +
                    ":" +
                    DATA_PORT +
                    "/teleRadiology/checkEmail/"+email,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.ok) {
                    const responseData = await response.json();
                    console.log(responseData);
                    getUserId(responseData.id);
                    setCredId(responseData.id);
                    setChangePassword(1); // Change to OTP component                    
                } else {
                    setShowError(true);
                    setTimeout(() => {
                        setShowError(false);
                    }, 2000);
                    setErrorData(await response.text());
                }
            } catch (error) {
                console.error("Error checking email:", error.message);
            }
        } else if (changePassword === 2) {
            if (newPassword !== confirmNewPassword) {
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 2000);
                setErrorData("New Password and Confirm New Password does not match");
            } else {
                try {
                    const requestBody = {
                        id: credId,
                        password: newPassword         
                      };

                    const response = await fetch(
                        "http://" +
                        DATA_HOST +
                        ":" +
                        DATA_PORT +
                        "/teleRadiology/changePassword",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(requestBody),
                        }
                    );
    
                    if (response.ok) {
                        setShowSuccess(true);
                        setTimeout(() => {
                            setShowSuccess(false);
                        }, 2000);
                        setSuccessData("Password Changed Successfully");
                    }

                } catch (error) {
                    console.error("Error changing password:", error.message);
                }                
            }
        }
    };

    return (
        <div className="forgot-form-container">
            {changePassword !== 1 && (
            <div className="logo-container">
                {changePassword === 0 ? "Forgot Password" : "Change Password"}
            </div>
            )}

            <form className="form" onSubmit={handleSubmit}>
                {changePassword === 0 && (
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                )}

                {changePassword === 2 && (
                    <div className="form-group">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            placeholder="Enter new password"
                            required=""
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                )}

                {changePassword === 2 && (
                    <div className="form-group">
                        <label htmlFor="confirmNewPassword">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmNewPassword"
                            name="confirmNewPassword"
                            placeholder="Confirm new password"
                            required=""
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                    </div>
                )}

                {showError && (
                    <div style={{ color: "red", margin: "10px 0" }}>{errorData}</div>
                )}

                {showSuccess && (
                    <div style={{ color: "green", margin: "10px 0" }}>{successData}</div>
                )}

                {changePassword !== 1 && (
                    <button className="form-submit-btn" type="submit">
                        {changePassword === 0 ? "Continue" : "Change Password"}
                    </button>
                )}

                <div className="back_login" onClick={handleBackToLogin}><i class='bx bx-chevrons-left'></i> Back to Login</div>
            </form>

            {changePassword === 1 && <OTP toggleValue = {5} setChangePass={setChangePassword}/>}
        </div>
    );
};

export default ForgotPassword;