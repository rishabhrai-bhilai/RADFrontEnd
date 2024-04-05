import React from 'react'
import patientImg from '../../assets/patientImg.png';
import './PatientInformationCard.css';

function PatientInformationCard({patient}) {
  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  return (
      <div className="personal-info">
        <div className="patient-image">
          <div className="image-circle-box"><img src={patientImg} alt={patient.profilePhoto}/></div>
          <div className="edit-option">Edit</div>
        </div>
        <div className="patient-info">
          <div className='patient-info-name'><span className="text-blue-extradark ">{patient.firstName} {patient.middleName} {patient.lastName}</span></div>
          <div className='patient-info--attribute-container'>
          <div className="patient-info--attribute"><div>Email :</div> <span className="text-blue-extradark">{patient.email}</span></div>
          <div className="patient-info--attribute"></div>
          <div className="patient-info--attribute"><div>Phone No :</div> <span className="text-blue-extradark">{patient.phoneNumber}</span></div>
          <div className="patient-info--attribute"><div>Age :</div> <span className="text-blue-extradark">{calculateAge(patient.dateOfBirth)} yrs</span></div>
          <div className="patient-info--attribute"><div>Height :</div> <span className="text-blue-extradark">{patient.height} cm</span></div>
          <div className="patient-info--attribute"><div>Weight :</div> <span className="text-blue-extradark">{patient.weight} kg</span></div>
          <div className="patient-info--attribute"><div>Blood Group :</div>  <span className="text-blue-extradark extra-margin">{patient.bloodGroup}</span></div>
          <div className="patient-info--attribute"><div>Gender :</div> <span className="text-blue-extradark">{patient.gender}</span></div>
          </div>
        </div>
      </div>
  )
}

export default PatientInformationCard