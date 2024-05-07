import React, { useEffect, useState } from "react";
import PatientDetails from '../Doctor/PatientDetails';
import Navbar from '../../components/navbar/Navbar';
import patientImg from "../../assets/patientImg.png";
import { useUserIdContext } from "../../pages/Common/UserIdContext";
import "../Doctor/DoctorDashboard.css";
import ListReports from "./ListReports";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  HttpPost,
  HttpGet
} from "../../constants";


function RadiologistDashboard() {
  const { data, token, setIsUserLoggedIn, setRoleId } = useUserIdContext();
  const [radiologist, setRadiologist] = useState(null);
  const [chats, setChats] = useState(null);
  const [show, setShow] = useState(false);
  const [reports, setReports] = useState([]);
  const [doctorName, setDoctorName] = useState("");
  const [doctorCredId, setDoctorCredId] = useState(0);
  
  useEffect(() => {
    fetchRadiologist(data);
    fetchChats(data);     
  }, []);

  const fetchRadiologist = async (data) => {
    const radiologistData = await HttpPost(0, "/getRadiologist", token, {
      id: parseInt(data),
    });
    if (radiologistData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (radiologistData == null) {
      throw new Error("Failed to fetch Radiologist");
    }
    setRadiologist(radiologistData);
    setRoleId(radiologistData.id);
  };

  const fetchChats = async (data) => {    
      const responseData = await HttpGet(0, "/getChats/"+data, token);
      if (responseData == "Unauthorized") {
        setIsUserLoggedIn(false);
      }
      if (responseData == null) {
        throw new Error("Failed to get chats");
      }

       setChats(responseData.docs);
       console.log(responseData.docs);
    };

    const handleArrowClick = (chat) => {
       setShow(true);
       setReports(chat.reportsWithDetails);
       setDoctorName(chat.name);
       setDoctorCredId(chat.userId);
    };

  return (
    <>
      <Navbar
      options={[
        { name: "Dashboard", icon: "bx bxs-dashboard" },
        { name: "Setting", icon: "bx bx-cog" },
      ]}
      ></Navbar>

      <section className="home">
        <div className="parent-container">
          <div className="all-items">
            <div className="static-dashboard-heading | text-blue-extradark">
              Dashboard
            </div>
            
            <div className="doctor-dashboard-containers-bottom ">
              <div className="doctor-dashboard-left">
                <div className="doctor-dashboard-left-heading my-2">
                  <p>Doctors List</p>
                </div>
                <div className="doctor-dashboard-left-item-box">
                  {chats && chats.length > 0 && (
                    <ul
                      role="list"
                      className="doctor-dashboard-ongoing-diagnosis"
                    >
                     {chats.map((chat, index) => (
                        <li key={index}>
                          <div className="list-item">
                            <div className="ongoing-diagnosis-image">
                              <div className="ongoing-diagnosis-img-holder">
                                <img src={patientImg} alt="" srcset="" />
                              </div>
                            </div>
                            <div className="ongoing-diagnosis-details">
                              <div className="ongoing-diagnosis-details-data">
                                <div>
                                  <span>
                                    {chat.name}
                                  </span>
                                </div>
                                <div></div>
                              </div>
                              <div
                                className="ongoing-diagnosis-details-arrow"
                                onClick={() => handleArrowClick(chat)}
                              >
                                <i className="bx bxs-chevron-right | ongoing-diagnosis-left-icon"></i>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="doctor-dashboard-right">
                {show && <ListReports reports={reports} doctorName={doctorName} doctorCredId={doctorCredId}/>}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ChatPopup></ChatPopup> */}
    </>
  );
}

export default RadiologistDashboard;