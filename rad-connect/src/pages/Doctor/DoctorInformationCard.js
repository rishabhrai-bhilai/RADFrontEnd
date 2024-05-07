import React from "react";
import patientImg from "../../assets/patientImg.png";
import "../Patient/PersonalInformation";

function DoctorInformationCard({ doctor }) {
  console.log(doctor);
  return (
    <div className="personal-info">
      <div className="patient-image">
        <div className="image-circle-box">
          <img src={patientImg} alt={doctor.profilePhoto} />
        </div>
        <div className="edit-option">Edit</div>
      </div>
      <div className="patient-info">
        <div className="patient-info-name">
          <span className="text-blue-extradark ">
            {doctor.firstName} {doctor.middleName} {doctor.lastName}
          </span>
        </div>
        <div className="patient-info--attribute-container">
          <div className="patient-info--attribute">
            <div>Email :</div>
            <span className="text-blue-extradark">{doctor.hospitalEmail}</span>
          </div>
          <div className="patient-info--attribute"></div>
          <div className="patient-info--attribute">
            <div>Phone No :</div>
            <span className="text-blue-extradark">{doctor.hospitalPhoneNumber}</span>
          </div>
          <div className="patient-info--attribute">
            <div>Address :</div>{" "}
            <span className="text-blue-extradark">{doctor.hospitalAddress}</span>
          </div>
          <div className="patient-info--attribute">
            <div>City :</div>{" "}
            <span className="text-blue-extradark">{doctor.hospitalCity}</span>
          </div>
          <div className="patient-info--attribute">
            <div>State :</div>{" "}
            <span className="text-blue-extradark">{doctor.hospitalState}</span>
          </div>
          <div className="patient-info--attribute">
            <div>Pincode :</div>{" "}
            <span className="text-blue-extradark">{doctor.hospitalPinCode}</span>
          </div>
          <div className="patient-info--attribute">
            <div>Gender :</div>{" "}
            <span className="text-blue-extradark">{doctor.gender}</span>
          </div>
          <div className="patient-info--attribute">
            <div>Experience :</div>{" "}
            <span className="text-blue-extradark">{doctor.experience}</span>
          </div>
          <div className="patient-info--attribute">
            <div>Highest Education :</div>{" "}
            <span className="text-blue-extradark">{doctor.highestEducation}</span>
          </div>
          <div className="patient-info--attribute">
            <div>Type :</div>{" "}
            <span className="text-blue-extradark">{doctor.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorInformationCard;
