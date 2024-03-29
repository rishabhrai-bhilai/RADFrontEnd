import React from 'react'
import patientImg from '../../assets/patientImg.png';
import './PatientInformationCard.css';

function PatientInformationCard() {
  return (
    
    
      <div className="personal-info">

        <div className="patient-image">
          <div className="image-circle-box"><img src={patientImg} alt="" /></div>
          <div className="edit-option">Edit</div>
        </div>
        <div className="patient-info">
          <div className='patient-info-name'><span className="text-blue-extradark ">Dr Albert Einstein</span></div>
          <div className='patient-info--attribute-container'>
          <div className="patient-info--attribute"><div>Email :</div> <span className="text-blue-extradark">ttt@gmail.com</span></div>
          <div className="patient-info--attribute"><div>Phone No :</div> <span className="text-blue-extradark">9340677493</span></div>
          <div className="patient-info--attribute"><div>Age :</div> <span className="text-blue-extradark">23</span></div>
          <div className="patient-info--attribute"><div>Height :</div> <span className="text-blue-extradark">5'4</span></div>
          <div className="patient-info--attribute"><div>Weight :</div> <span className="text-blue-extradark">65</span></div>
          <div className="patient-info--attribute"><div>Blood Group :</div>  <span className="text-blue-extradark extra-margin">B-</span></div>
          <div className="patient-info--attribute"><div>Gender :</div> <span className="text-blue-extradark">Male</span></div>
          </div>
        </div>
      </div>


  )
}

export default PatientInformationCard