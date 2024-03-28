import React from "react";
import "../Patient/PatientDashboard.css";
import Navbar from "../../components/navbar/Navbar";

function PatientDashboard() {  
  return (
    <section className="home">
      <Navbar/>
      <div className="container">
        <div className="box">
          
        <div className="dashboard-heading | text-blue-extradark">
          Patient
        </div>
        
          <div className="personal-info">

            <div className="patient-image">
              <div className="image-circle-box"></div>
              <div className="edit-option">Edit</div>
            </div>
            <div className="patient-info">
              <p><span className="text-blue-extradark">Dr Albert Einstein</span></p>
              <p>Email <span className="text-blue-extradark">ttt@gmail.com</span></p>
              <p>Phone No <span className="text-blue-extradark">9340677493</span></p>
              <p>Age <span className="text-blue-extradark">23</span></p>
              <p>Height <span className="text-blue-extradark">5'4</span></p>
              <p>Weight <span className="text-blue-extradark">65</span></p>
              <p>Blood Group <span className="text-blue-extradark">B-</span></p>
              <p>Gender <span className="text-blue-extradark">Male</span></p>
            </div>
          </div>

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