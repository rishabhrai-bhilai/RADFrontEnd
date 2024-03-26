import React from "react";
import "../Patient/Reports.css";
import imgg from "../../assets/mri_img.png";

function Reports() {
  return (
    <section className="home">
      <div className="patient-report-container">
        <div className="all-items">
          <div className="element-name-heading | text-blue-extradark">
            Reports
          </div>

          <div className="element-name-sub-navigation | text-grey-dark">
            <div className="nav-1">Medical</div>
            <div className="nav-2">Accesses</div>
            <div className="nav-3">History</div>
          </div>

          <div className="element-name-filter">
            <div className="filter-type-dropdown">DropDown</div>
            <div className="filter-type-search">Search</div>
            <div className="filter-type-filter-by">Filter by</div>
          </div>

          <div className="element-name-report-list">
            <div className="report-heading"> </div>
            <ul role="list" className="patient-reports-list">
              <li>
                <div className="report-list-box | report-data">
                  <div>Image</div>
                  <div>Report Id</div>
                  <div>Name</div>
                  <div>Type</div>
                  <div>Upload Date</div>
                  <div>buttons</div>
                </div>
              </li>
              <li>
                <div className="report-list-box | report-data">
                  <div className="report-image">
                    <div className="image-box">
                      <img src={imgg} alt="logo" />
                    </div>
                  </div>
                  <div className="">9345688</div>
                  <div className="">Full Body MRI</div>
                  <div className="">CT Scan</div>
                  <div className="">23/77/2024</div>

                  <div className="report-button-container">
                    <div className="icon-buttons">
                      <div className="icon-box">
                        <i class="bx bxs-bell-ring"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-show"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-download"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              

              <li>
                <div className="report-list-box | report-data">
                  <div className="report-image">
                    <div className="image-box">
                      <img src={imgg} alt="logo" />
                    </div>
                  </div>
                  <div className="">9345688</div>
                  <div className="">Full Body MRI</div>
                  <div className="">CT Scan</div>
                  <div className="">23/77/2024</div>

                  <div className="report-button-container">
                    <div className="icon-buttons">
                      <div className="icon-box">
                        <i class="bx bxs-bell-ring"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-show"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-download"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <div className="report-list-box | report-data">
                  <div className="report-image">
                    <div className="image-box">
                      <img src={imgg} alt="logo" />
                    </div>
                  </div>
                  <div className="">9345688</div>
                  <div className="">Full Body MRI</div>
                  <div className="">CT Scan</div>
                  <div className="">23/77/2024</div>

                  <div className="report-button-container">
                    <div className="icon-buttons">
                      <div className="icon-box">
                        <i class="bx bxs-bell-ring"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-show"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-download"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <div className="report-list-box | report-data">
                  <div className="report-image">
                    <div className="image-box">
                      <img src={imgg} alt="logo" />
                    </div>
                  </div>
                  <div className="">9345688</div>
                  <div className="">Full Body MRI</div>
                  <div className="">CT Scan</div>
                  <div className="">23/77/2024</div>

                  <div className="report-button-container">
                    <div className="icon-buttons">
                      <div className="icon-box">
                        <i class="bx bxs-bell-ring"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-show"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-download"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <div className="report-list-box | report-data">
                  <div className="report-image">
                    <div className="image-box">
                      <img src={imgg} alt="logo" />
                    </div>
                  </div>
                  <div className="">9345688</div>
                  <div className="">Full Body MRI</div>
                  <div className="">CT Scan</div>
                  <div className="">23/77/2024</div>

                  <div className="report-button-container">
                    <div className="icon-buttons">
                      <div className="icon-box">
                        <i class="bx bxs-bell-ring"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-show"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-download"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>


              <li>
                <div className="report-list-box | report-data">
                  <div className="report-image">
                    <div className="image-box">
                      <img src={imgg} alt="logo" />
                    </div>
                  </div>
                  <div className="">9345688</div>
                  <div className="">Full Body MRI</div>
                  <div className="">CT Scan</div>
                  <div className="">23/77/2024</div>

                  <div className="report-button-container">
                    <div className="icon-buttons">
                      <div className="icon-box">
                        <i class="bx bxs-bell-ring"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-show"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bxs-download"></i>
                      </div>
                      <div className="icon-box">
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>



            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reports;
