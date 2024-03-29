import React from "react";
import "./Modal.css";
import SearchBar from "./SearchBar";
import Toggle from "./Toggle";
import patientImage from "../../assets/patientbox.png";
const Modal = ({ closeModal }) => {
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };

  const handleToggle = (isToggled) => {
    console.log("Toggle state:", isToggled ? "On" : "Off");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {/* <span className="close" onClick={closeModal}>&times;</span> */}
        <div className="close-icon-container">
          <i className="bx bx-x close" onClick={closeModal}></i>
        </div>

        <div className="modal-container">
          <div>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="modal-doctor-container">
            <ul role="list" className="modal-doctor-list">

              <li className="modal-doctor-list-item">
                <div className="list-item-box">
                  <div className="list-image-holder">
                    <div className="image">
                      <img src={patientImage} alt="" />
                    </div>
                  </div>
                  <div className="list-name">Dr Albert Einstein</div>
                  <div className="list-date">23/11/1996</div>
                  <div className="list-toggle-btn">
                    <div>
                      <Toggle onToggle={handleToggle} />
                    </div>
                  </div>
                </div>
              </li>


              <li className="modal-doctor-list-item">
                <div className="list-item-box">
                  <div className="list-image-holder">
                    <div className="image">
                      <img src={patientImage} alt="" />
                    </div>
                  </div>
                  <div className="list-name">Dr Albert Einstein</div>
                  <div className="list-date">23/11/1996</div>
                  <div className="list-toggle-btn">
                    <div>
                      <Toggle onToggle={handleToggle} />
                    </div>
                  </div>
                </div>
              </li>


              <li className="modal-doctor-list-item">
                <div className="list-item-box">
                  <div className="list-image-holder">
                    <div className="image">
                      <img src={patientImage} alt="" />
                    </div>
                  </div>
                  <div className="list-name">Dr Albert Einstein</div>
                  <div className="list-date">23/11/1996</div>
                  <div className="list-toggle-btn">
                    <div>
                      <Toggle onToggle={handleToggle} />
                    </div>
                  </div>
                </div>
              </li>



              <li className="modal-doctor-list-item">
                <div className="list-item-box">
                  <div className="list-image-holder">
                    <div className="image">
                      <img src={patientImage} alt="" />
                    </div>
                  </div>
                  <div className="list-name">Dr Albert Einstein</div>
                  <div className="list-date">23/11/1996</div>
                  <div className="list-toggle-btn">
                    <div>
                      <Toggle onToggle={handleToggle} />
                    </div>
                  </div>
                </div>
              </li>


              <li className="modal-doctor-list-item">
                <div className="list-item-box">
                  <div className="list-image-holder">
                    <div className="image">
                      <img src={patientImage} alt="" />
                    </div>
                  </div>
                  <div className="list-name">Dr Albert Einstein</div>
                  <div className="list-date">23/11/1996</div>
                  <div className="list-toggle-btn">
                    <div>
                      <Toggle onToggle={handleToggle} />
                    </div>
                  </div>
                </div>
              </li>


              <li className="modal-doctor-list-item">
                <div className="list-item-box">
                  <div className="list-image-holder">
                    <div className="image">
                      <img src={patientImage} alt="" />
                    </div>
                  </div>
                  <div className="list-name">Dr Albert Einstein</div>
                  <div className="list-date">23/11/1996</div>
                  <div className="list-toggle-btn">
                    <div>
                      <Toggle onToggle={handleToggle} />
                    </div>
                  </div>
                </div>
              </li>

              
            </ul>
          </div>
        </div>
        {/* <p>This is a modal! You can put any content here.</p> */}
      </div>
    </div>
  );
};

export default Modal;
