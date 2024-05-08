import React, { useState } from 'react';
import "./TermsAndConditions.css";

const TermsAndConditions = ({ setTermsCondComp, setTermsAndCond }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTermsCondComp(false);
    if (isChecked) {
      setTermsAndCond(true);
      console.log("User agreed to terms and conditions.");
    } else {
      alert("Please agree to the terms and conditions to proceed.");
    }
  };

  const handleClose = () => {
      setTermsCondComp(false);
  };

  return (
    <div className="modal terms-modal ">
      <div className="modal-content">

        <div className="close-icon-container mr-8">
        <i className="bx bx-x close mr-6 mt-2" onClick={handleClose}></i>

        </div>
          

        <div className="modal-container">

          
        <h2>Terms and Conditions</h2>

        <form onSubmit={handleSubmit}>
          <p>
            By signing up in the application, you agree to share your medical information with doctors and radiologists whom you have given consent. Please note your medical reports will be shared with them for a period of 90 days from the time you give consent unless you manually remove consent.
          </p>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span>I agree to the terms and conditions</span>
          </label>
          <br />
          <button className='submit-btn' type="submit">Submit</button>
        </form>


        </div>
        
      </div>
    </div>
  );
};

export default TermsAndConditions;