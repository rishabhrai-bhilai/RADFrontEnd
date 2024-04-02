import React, { useState, useEffect } from "react";
import "../Patient/PatientDashboard.css";
import patientImg from "../../assets/patientImg.png";
import PatientInformationCard from "../../components/ui/PatientInformationCard";
import Navbar from "../../components/navbar/Navbar";
import { useUserIdContext } from "../Common/UserIdContext";
import { usePatientIdContext } from "./PatientIdContext";

function PatientDashboard() {
  const [patient, setPatient] = useState(() => {
    // Initialize patient state from localStorage if available
    const storedPatient = localStorage.getItem("patient");
    return storedPatient ? JSON.parse(storedPatient) : {};
  });

  const [loading, setLoading] = useState(true);

  const { data } = useUserIdContext();

  const { getPatientId } = usePatientIdContext();

  useEffect(() => {
    fetchPatient(data);
  }, []);

  const fetchPatient = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:8081/teleRadiology/getPatient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: parseInt(data) }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch patient");
      }
      const patientData = await response.json();
      console.log(patientData);
      setPatient(patientData);
      getPatientId(patientData.id);
      console.log(data);
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
                <PatientInformationCard></PatientInformationCard>

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
                              Allergies
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
                              Allergies
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
                              Allergies
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
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>{" "}
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>{" "}
                          </div>
                        </div>
                      </li>

                      <li className="lifestyle-list-item">
                        <div className="topic">
                          <i className="bx bx-home-alt"></i>{" "}
                          <span className="fw-bold">Smoking Habits</span>{" "}
                        </div>
                        <div className="values">
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>{" "}
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>{" "}
                          </div>
                        </div>
                      </li>

                      <li className="lifestyle-list-item">
                        <div className="topic">
                          <i className="bx bx-home-alt"></i>{" "}
                          <span className="fw-bold">Smoking Habits</span>{" "}
                        </div>
                        <div className="values">
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>{" "}
                          </div>
                          <div className="value fw-bold">
                            <span>Never</span>{" "}
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
    </>
  );
}

export default PatientDashboard;
