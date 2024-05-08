import React from "react";
import "./AnnotationList.css";
import reportImg from '../../assets/report.png'

const AnnotationList = ({ chatReports, setParticularId }) => {
  return (
    <div className="">
      <div className="report-list mx-2">
        {chatReports &&
          chatReports.map((report, index) => (
            <div
              key={report.annotationId}
              className="report-item mx-4"
              onClick={() => {
                setParticularId(report.annotationId);
              }}
            >
              <img src={reportImg} />
              {index == 0 && <p>Original</p>}
              {index != 0 && <p>Annotation {index}</p>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AnnotationList;
