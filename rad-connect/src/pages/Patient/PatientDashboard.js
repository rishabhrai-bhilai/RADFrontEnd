import React from "react";
import "../Patient/PatientDashboard.css";

function PatientDashboard() {
  return (
    <section class="home">
      

      <div className="container">
        <div className="box">
          
        <div className="dashboard-heading">
          Patient
        </div>
        
          <div className="personal-info"></div>

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
