import React from "react";
import "./AnnotationList.css";
const AnnotationList = ({ chatReports, setParticularId }) => {
  return (
    <div className="">
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
              {index == 0 && <p>Original</p>}
              {index != 0 && <p>Annotation {index}</p>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AnnotationList;
