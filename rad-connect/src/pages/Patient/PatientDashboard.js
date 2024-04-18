import React, { useState, useEffect } from "react";
import "../Patient/PatientDashboard.css";
import patientImg from "../../assets/patientImg.png";
import PatientInformationCard from "../../components/ui/PatientInformationCard";
import Navbar from "../../components/navbar/Navbar";
import { useUserIdContext } from "../Common/UserIdContext";
import { usePatientIdContext } from "./PatientIdContext";
import ChatPopup from "../../components/ui/ChatPopup";
import axios from "axios";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
} from "../../constants";

function PatientDashboard() {
  const [patient, setPatient] = useState(() => {
    // Initialize patient state from localStorage if available
    const storedPatient = localStorage.getItem("patient");
    return storedPatient ? JSON.parse(storedPatient) : {};
  });

  const [loading, setLoading] = useState(true);

  const { data, token } = useUserIdContext();

  const { getPatientId } = usePatientIdContext();

  useEffect(() => {
    fetchPatient(data);
  }, []);

  const fetchPatient = async (data) => {
    const headers1 = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    console.log(headers1);
    try {
      const response = await fetch(
        "http://" + DATA_HOST + ":" + DATA_PORT + "/teleRadiology/getPatient",
        {
          method: "POST",
          headers: headers1,
          body: JSON.stringify({ id: parseInt(data) }),
        }
      );
      // const response = await axios.post(`http://` + DATA_HOST + `:` + DATA_PORT + `/teleRadiology/getPatient`, { id: parseInt(data) },
      // {headers:{
      //   Authorization: `Bearer ${token}`
      // }});
      if (!response.ok) {
        throw new Error("Failed to fetch patient");
      }
      const patientData = await response.json();
      setPatient(patientData);
      getPatientId(patientData.id);
    } catch (error) {
      console.error("Error fetching patient:", error);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="home">
        <div className="parent-container">
          <div className="all-items">
            <div className="static-dashboard-heading | text-blue-extradark">
              Patient Dashboard
            </div>

            <div className="Patient-dashboard-container">
              <div className="box">
                <PatientInformationCard patient={patient} />

                {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="personal-info">
              <div className="patient-image">
                <div className="image-circle-box"></div>
                <div className="edit-option">Edit</div>
              </div>
              <div className="patient-info">
                <p><span className="text-blue-extradark">{patient.firstName}&nbsp;{patient.lastName}</span></p>
                <p>Email: <span className="text-blue-extradark">{patient.email}</span></p>
                <p>Phone No: <span className="text-blue-extradark">{patient.phoneNumber}</span></p>
                <p>Age: <span className="text-blue-extradark">{patient.age}</span></p>
                <p>Height: <span className="text-blue-extradark">{patient.height}</span></p>
                <p>Weight: <span className="text-blue-extradark">{patient.weight}</span></p>
                <p>Blood Group: <span className="text-blue-extradark">{patient.bloodGroup}</span></p>
                <p>Gender: <span className="text-blue-extradark">{patient.gender}</span></p>
              </div>
            </div>
          )} */}

                <div className="other-info">
                  <div className="medical">
                    <p className="topic fw-bold">Medical</p>
                    <ul className="" role="list">
                      <li>
                        <div className="list-item">
                          <div className="icon">
                            <i className="bx bx-home-alt"></i>
                          </div>
                          <div className="medical-data |text-blue-extradark">
                            <p className="heading text-blue-extradark fw-bold">
                              Allergies
                            </p>
                            <span className=" subheading  text-grey-dark">
                              Butterflyaphobia, Raindropitis, Cotton Candy
                              Intolerance
                              {/* {patient.allergies} */}
                              {/* {patient.allergies} */}
                            </span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="list-item">
                          <div className="icon">
                            <i className="bx bx-home-alt"></i>
                          </div>
                          <div className="medical-data |text-blue-extradark">
                            <p className="heading  text-blue-extradark fw-bold">
                              Current Medication Current Medication
                            </p>
                            <span className=" subheading  text-grey-dark">
                              Butterflyaphobia, Raindropitis, Cotton Candy
                              Intolerance
                            </span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="list-item">
                          <div className="icon">
                            <i className="bx bx-home-alt"></i>
                          </div>
                          <div className="medical-data |text-blue-extradark">
                            <p className="heading text-blue-extradark fw-bold">
                              Past Medication Past Medication
                            </p>
                            <span className=" subheading text-grey-dark">
                              Butterflyaphobia, Raindropitis, Cotton Candy
                              Intolerance
                            </span>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="list-item">
                          <div className="icon">
                            <i className="bx bx-home-alt"></i>
                          </div>
                          <div className="medical-data |text-blue-extradark">
                            <p className="heading text-blue-extradark fw-bold">
                              Chronic Diseases Chronic Diseases
                            </p>
                            <span className=" subheading text-grey-dark">
                              Butterflyaphobia, Raindropitis, Cotton Candy
                              Intolerance
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="lifestyle">
                    <p className="lifestyle-topic fw-bold">Lifestyle</p>
                    <ul role="list">
                      <li className="lifestyle-list-item">
                        <div className="topic">
                          <i className="bx bx-home-alt"></i>
                          <span className="fw-bold">Smoking Habits</span>
                        </div>
                        <div className="values">
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>1-2/day</span>
                            <span>1-2/day</span>
                          </div>
                          <div className="value fw-bold">
                            <span>3-5/day</span>
                            <span>3-5/day</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Sometimes</span>
                            <span>Sometimes</span>
                          </div>
                          <div className="value fw-bold">
                            <span>More Than 5</span> <span>More Than 5</span>{" "}
                          </div>
                          <div className="value fw-bold">
                            <span>I've Quit</span> <span>I've Quit</span>{" "}
                          </div>
                        </div>
                      </li>

                      <li className="lifestyle-list-item">
                        <div className="topic">
                          <i className="bx bx-home-alt"></i>{" "}
                          <span className="fw-bold">Drinking Habits</span>{" "}
                          <span className="fw-bold">Drinking Habits</span>{" "}
                        </div>
                        <div className="values">
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Social</span>
                            <span>Social</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Regular</span>
                            <span>Regular</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Sometimes</span>
                            <span>Sometimes</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Heavy</span> <span>Heavy</span>{" "}
                          </div>
                          <div className="value fw-bold">
                            <span>I've Quit</span> <span>I've Quit</span>{" "}
                          </div>
                        </div>
                      </li>

                      <li className="lifestyle-list-item">
                        <div className="topic">
                          <i className="bx bx-home-alt"></i>{" "}
                          <span className="fw-bold">Food Preferences</span>{" "}
                          <span className="fw-bold">Food Preferences</span>{" "}
                        </div>
                        <div className="values">
                          <div className="value fw-bold">
                            <span>Vegan</span>
                            <span>Vegan</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Vegetarian</span>
                            <span>Vegetarian</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Eggetarian</span>
                            <span>Eggetarian</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Non-Veg</span>
                            <span>Non-Veg</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChatPopup></ChatPopup>
    </>
  );
}

export default PatientDashboard;
