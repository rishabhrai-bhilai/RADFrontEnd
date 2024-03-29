import React from "react";
import "../Patient/PatientDashboard.css";
import patientImg from '../../assets/patientImg.png';
import PatientInformationCard from "../../components/ui/PatientInformationCard";

function PatientDashboard() {
  return (
    <section className="home">



<div className="parent-container">
        <div className="all-items">



          <div className="static-dashboard-heading | text-blue-extradark">
            Patient Dashboard
          </div>




          <div className="Patient-dashboard-container">
        <div className="box">

          <PatientInformationCard></PatientInformationCard>
          

        
          

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
                      <p className="heading text-blue-extradark fw-bold">Allergies</p>
                      <span className=" subheading  text-grey-dark">
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
                      <p className="heading  text-blue-extradark fw-bold">Allergies</p>
                      <span className=" subheading  text-grey-dark">
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
                      <p className="heading text-blue-extradark fw-bold">Allergies</p>
                      <span className=" subheading text-grey-dark">
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
                      <p className="heading text-blue-extradark fw-bold">Allergies</p>
                      <span className=" subheading text-grey-dark">
                        Butterflyaphobia, Raindropitis, Cotton Candy Intolerance
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









        </div>
</div>          
      










      
    </section>
  );
}

export default PatientDashboard;
