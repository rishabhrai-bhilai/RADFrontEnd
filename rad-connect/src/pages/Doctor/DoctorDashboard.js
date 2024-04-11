import React from "react";
import "../Doctor/DoctorDashboard.css";
import patientImg from "../../assets/patientImg.png";
function DoctorDashboard() {
  return (
    <section className="home">
      <div className="parent-container">
        <div className="all-items">
          <div className="static-dashboard-heading | text-blue-extradark">
            Dashboard
          </div>

          {/* fixed part end here */}

          <div className="doctor-dashboard-containers-top">
            <div className="doctor-dashboard-badge">
              <div className="doctor-dashboard-icon-holder">
                <i class="bx bx-child | icon-button"></i>
              </div>
              <div className="doctor-dashboard-stat-holder">
                <div className="doctor-dashboard-stats-head">Treatment</div>
                <div className="doctor-dashboard-stats-para | text-blue-extradark">
                  <span>600</span>
                </div>
              </div>
            </div>

            <div className="doctor-dashboard-badge">
              <div className="doctor-dashboard-icon-holder">
                <i class="bx bxs-calendar | icon-button"></i>
              </div>
              <div className="doctor-dashboard-stat-holder">
                <div className="doctor-dashboard-stats-head">
                  Current Treatment
                </div>
                <div className="doctor-dashboard-stats-para | text-blue-extradark">
                  <span>600</span>
                </div>
              </div>
            </div>

            <div className="doctor-dashboard-badge">
              <div className="doctor-dashboard-icon-holder">
                <i class="bx bx-heart | icon-button"></i>
              </div>
              <div className="doctor-dashboard-stat-holder">
                <div className="doctor-dashboard-stats-head">Cured</div>
                <div className="doctor-dashboard-stats-para | text-blue-extradark">
                  <span>600</span>
                </div>
              </div>
            </div>
          </div>

          <div className="doctor-dashboard-containers-bottom ">
            <div className="doctor-dashboard-left">
              <div className="doctor-dashboard-left-heading">
                <p>Ongoing Diagnosis</p>
              </div>
              <div className="doctor-dashboard-left-item-box">
                <ul role="list" className="doctor-dashboard-ongoing-diagnosis">
                  <li>
                    <div className="list-item">
                      <div className="ongoing-diagnosis-image">
                        <div className="ongoing-diagnosis-img-holder">
                          <img src={patientImg} alt="" srcset="" />
                        </div>
                      </div>
                      <div className="ongoing-diagnosis-details">
                        <div className="ongoing-diagnosis-details-data">
                          <div>
                            <span>Patient 1</span>
                          </div>
                          <div>
                            <p>High Fever</p>
                            <p>
                              29 Feb <span>10:00pm</span>
                            </p>
                          </div>
                        </div>
                        <div className="ongoing-diagnosis-details-arrow">
                          {" "}
                          <i class="bx bxs-chevron-right | ongoing-diagnosis-left-icon"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="list-item">
                      <div className="ongoing-diagnosis-image">
                        <div className="ongoing-diagnosis-img-holder">
                          <img src={patientImg} alt="" srcset="" />
                        </div>
                      </div>
                      <div className="ongoing-diagnosis-details">
                        <div className="ongoing-diagnosis-details-data">
                          <div>
                            <span>Patient 2</span>
                          </div>
                          <div>
                            <p>High Fever</p>
                            <p>
                              29 Feb <span>10:00pm</span>
                            </p>
                          </div>
                        </div>
                        <div className="ongoing-diagnosis-details-arrow">
                          {" "}
                          <i class="bx bxs-chevron-right | ongoing-diagnosis-left-icon"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="list-item">
                      <div className="ongoing-diagnosis-image">
                        <div className="ongoing-diagnosis-img-holder">
                          <img src={patientImg} alt="" srcset="" />
                        </div>
                      </div>
                      <div className="ongoing-diagnosis-details">
                        <div className="ongoing-diagnosis-details-data">
                          <div>
                            <span>Patient 3</span>
                          </div>
                          <div>
                            <p>High Fever</p>
                            <p>
                              29 Feb <span>10:00pm</span>
                            </p>
                          </div>
                        </div>
                        <div className="ongoing-diagnosis-details-arrow">
                          {" "}
                          <i class="bx bxs-chevron-right | ongoing-diagnosis-left-icon"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="list-item">
                      <div className="ongoing-diagnosis-image">
                        <div className="ongoing-diagnosis-img-holder">
                          <img src={patientImg} alt="" srcset="" />
                        </div>
                      </div>
                      <div className="ongoing-diagnosis-details">
                        <div className="ongoing-diagnosis-details-data">
                          <div>
                            <span>Patient 4</span>
                          </div>
                          <div>
                            <p>High Fever</p>
                            <p>
                              29 Feb <span>10:00pm</span>
                            </p>
                          </div>
                        </div>
                        <div className="ongoing-diagnosis-details-arrow">
                          {" "}
                          <i class="bx bxs-chevron-right | ongoing-diagnosis-left-icon"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="list-item">
                      <div className="ongoing-diagnosis-image">
                        <div className="ongoing-diagnosis-img-holder">
                          <img src={patientImg} alt="" srcset="" />
                        </div>
                      </div>
                      <div className="ongoing-diagnosis-details">
                        <div className="ongoing-diagnosis-details-data">
                          <div>
                            <span>Patient 5</span>
                          </div>
                          <div>
                            <p>High Fever</p>
                            <p>
                              29 Feb <span>10:00pm</span>
                            </p>
                          </div>
                        </div>
                        <div className="ongoing-diagnosis-details-arrow">
                          {" "}
                          <i class="bx bxs-chevron-right | ongoing-diagnosis-left-icon"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="list-item">
                      <div className="ongoing-diagnosis-image">
                        <div className="ongoing-diagnosis-img-holder">
                          <img src={patientImg} alt="" srcset="" />
                        </div>
                      </div>
                      <div className="ongoing-diagnosis-details">
                        <div className="ongoing-diagnosis-details-data">
                          <div>
                            <span>Patient 6</span>
                          </div>
                          <div>
                            <p>High Fever</p>
                            <p>
                              29 Feb <span>10:00pm</span>
                            </p>
                          </div>
                        </div>
                        <div className="ongoing-diagnosis-details-arrow">
                          {" "}
                          <i class="bx bxs-chevron-right | ongoing-diagnosis-left-icon"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="doctor-dashboard-right">
              <div className="doctor-dashboard-right-heading">
                <p>Patient Details</p>
              </div>
              <div className="doctor-dashboard-right-item-box">

                <div className="doctor-dashboard-right-Common-info">



                  <div className="patient-list-item">
                    <div className="ongoing-patient-image">
                      <div className="ongoing-patient-img-holder">
                        <img src={patientImg} alt="" srcset="" />
                      </div>
                    </div>
                    <div className="ongoing-patient-details">
                      <div className="ongoing-patient-details-data">
                        <div>
                          <span className="fw-bold">Patient 1</span>
                        </div>
                        <div>
                          <p>30/9 Radhika Nagar ,Bhilai</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>



                <div className="doctor-dashboard-right-details">

                  <div className="doctor-dashboard-right-details-data1">
                    <p>D.O.B</p>
                    <p><span>29 February ,1999</span></p>
                  </div>

                  <div className="doctor-dashboard-right-details-data1">
                  <p>Sex</p>
                  <p><span>Male</span></p>
                  </div>
                  <div className="doctor-dashboard-right-details-data1">
                  <p>Height</p>
                    <p><span>151cm</span></p>
                  </div>
                  <div className="doctor-dashboard-right-details-data1">
                  <p>Last Appointment</p>
                    <p><span>23 Jan 2023</span></p>
                  </div>
                  <div className="doctor-dashboard-right-details-data1">
                  <p>Weight</p>
                    <p><span>19 Kg</span></p>
                  </div>
                  <div className="doctor-dashboard-right-details-data1">
                  <p>Register Date</p>
                    <p><span>23 Feb 1999</span></p>
                  </div>
                </div>




                <div className="doctor-dashboard-right-others">
                   
                    <div className="tags-container">
                      <div>Ashtama</div>
                      <div>Hypertension</div>
                    </div>


                    <div className="button-container">
                      <div><i class='bx bx-folder'></i><span>Documents</span></div>
                      <div><i class='bx bx-chat'></i><span>Chat</span></div>
                    </div>                    


                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDashboard;