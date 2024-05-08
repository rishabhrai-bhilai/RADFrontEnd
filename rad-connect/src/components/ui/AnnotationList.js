import React from "react";
import "./AnnotationList.css";
const AnnotationList = ({ chatReports, setParticularId }) => {
  return (
    <div className="chat-report-container">
      <div className="report-list">
        {chatReports &&
          chatReports.map((report, index) => (
            <div
              key={report.annotationId}
              className="report-item"
              onClick={() => {
                setParticularId(report.annotationId);
              }}
            >
              <img src={report.annotatedImage} />
              {index == 0 && <span>Original</span>}
              {index != 0 && <span>Annotation {index}</span>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AnnotationList;
