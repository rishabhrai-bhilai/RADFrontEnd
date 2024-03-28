import React, { useState, useEffect } from 'react';
import "../Patient/PatientDashboard.css";
import Navbar from "../../components/navbar/Navbar";
import { useUserIdContext } from '../Common/UserIdContext';

function PatientDashboard() {  

  const [patient, setPatient] = useState({});
  const [loading, setLoading] = useState(true);
  const [age, setAge] = useState(null);
  const { data } = useUserIdContext();

  console.log(data);

  useEffect(() => {
    const fetchPatient = async () => {
      console.log("Hi");
        try {
            const response = await fetch('http://localhost:8080/teleRadiology/getPatient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: data })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch patient');
            }
            const patientData = await response.json();
            setPatient(patientData);
            setLoading(false);
            console.log(patientData);

            const currentDate = new Date();
            const birthDate = new Date(patientData.dateOfBirth);
    
            let yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
            if (currentDate.getMonth() < birthDate.getMonth() || 
              (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
               yearsDiff--;
            }

             setAge(yearsDiff);                            
        } catch (error) {
            console.error('Error fetching patient:', error);
            setLoading(false);
        }
    };

    fetchPatient();
  },[data]);
    
    return (
    <section className="home">
      <Navbar/>
      <div className="container">
        <div className="box">
          
        <div className="dashboard-heading | text-blue-extradark">
          Patient
        </div>
        
        {loading ? (
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
                <p>Age: <span className="text-blue-extradark">{age}</span></p>
                <p>Height: <span className="text-blue-extradark">{patient.height}</span></p>
                <p>Weight: <span className="text-blue-extradark">{patient.weight}</span></p>
                <p>Blood Group: <span className="text-blue-extradark">{patient.bloodGroup}</span></p>
                <p>Gender: <span className="text-blue-extradark">{patient.gender}</span></p>
              </div>
            </div>
          )}

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
                      <p className="heading fs-500 text-blue-extradark fw-bold">Allergies</p>
                      <span className=" subheading fs-300 text-grey-dark">
                        Butterflyaphobia, Raindropitis, Cotton Candy Intolerance
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
                      <p className="heading fs-500 text-blue-extradark fw-bold">Allergies</p>
                      <span className=" subheading fs-300 text-grey-dark">
                        Butterflyaphobia, Raindropitis, Cotton Candy Intolerance
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
                      <p className="heading fs-500 text-blue-extradark fw-bold">Allergies</p>
                      <span className=" subheading fs-300 text-grey-dark">
                        Butterflyaphobia, Raindropitis, Cotton Candy Intolerance
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
                      <p className="heading fs-500 text-blue-extradark fw-bold">Allergies</p>
                      <span className=" subheading fs-300 text-grey-dark">
                        Butterflyaphobia, Raindropitis, Cotton Candy Intolerance
                      </span>
                    </div>
                  </div>
                </li>


              </ul>
            </div>

            <div className="lifestyle">
            <p className="topic fw-bold">Lifestyle</p>
            <ul role="list">
              <li className="lifestyle-list-item">
                <div className="topic"><i className="bx bx-home-alt"></i><span className="fw-bold">Smoking Habits</span></div>
                <div className="values">
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span> </div>
                <div className="value fw-bold"><span>Never</span> </div>
                </div>
              </li>

              <li className="lifestyle-list-item">
                <div className="topic"><i className="bx bx-home-alt"></i>  <span className="fw-bold">Smoking Habits</span> </div>
                <div className="values">
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span> </div>
                <div className="value fw-bold"><span>Never</span> </div>
                </div>
              </li>

              <li className="lifestyle-list-item">
                <div className="topic"><i className="bx bx-home-alt"></i>  <span className="fw-bold">Smoking Habits</span> </div>
                <div className="values">
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span></div>
                <div className="value fw-bold"><span>Never</span> </div>
                <div className="value fw-bold"><span>Never</span> </div>
                </div>
              </li>


            </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientDashboard;