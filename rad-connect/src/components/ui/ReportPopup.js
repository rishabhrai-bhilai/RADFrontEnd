// ExpandingDiv.js

import React, { useState } from "react";
import "./ReportPopup.css"; // Import CSS file for styling
import mriImg from '../../assets/mri_img.png'

const ReportPopup = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleDiv = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };

  return (
    <div className="report-position">
      <div className="chat-report-button">

      {!expanded ? (<button onClick={toggleDiv} className="chat-report-button">
          <i class="bx bx-file-blank bx-tada"></i>
        </button>

        ) :(<button onClick={toggleDiv} className="chat-report-button">
        <i class='bx bx-x bx-flip-horizontal' ></i>
      </button>) }

      </div>
      <div id="expandingDiv" className={expanded ? "report-expanded" : "reportdiv"}>
        
        <div className="report-images-container">
            <div className="report-img-box">
            <div className="report-img-holder"><img src={mriImg} alt="" /></div>
            <div className="report-img-name"><p>Report 1</p></div>
            </div>


            <div className="report-img-box">
            <div className="report-img-holder"><img src={mriImg} alt="" /></div>
            <div className="report-img-name"><p>Report 1</p></div>
            </div>


            <div className="report-img-box">
            <div className="report-img-holder"><img src={mriImg} alt="" /></div>
            <div className="report-img-name"><p>Report 1</p></div>
            </div>


            <div className="report-img-box">
            <div className="report-img-holder"><img src={mriImg} alt="" /></div>
            <div className="report-img-name"><p>Report 1</p></div>
            </div>

            <div className="report-img-box">
            <div className="report-img-holder"><img src={mriImg} alt="" /></div>
            <div className="report-img-name"><p>Report 1</p></div>
            </div>


            <div className="report-img-box">
            <div className="report-img-holder"><img src={mriImg} alt="" /></div>
            <div className="report-img-name"><p>Report 1</p></div>
            </div>


            <div className="report-img-box">
            <div className="report-img-holder"><img src={mriImg} alt="" /></div>
            <div className="report-img-name"><p>Report 1</p></div>
            </div>



            <div className="report-img-box">
            <div className="report-img-holder"><img src={mriImg} alt="" /></div>
            <div className="report-img-name"><p>Report 1</p></div>
            </div>


            <div className="report-img-box">
            <div className="report-img-holder"><img src={mriImg} alt="" /></div>
            <div className="report-img-name"><p>Report 1</p></div>
            </div>

            
        </div>
      </div>
    </div>
  );
};

export default ReportPopup;
