import React, { useState } from 'react'
import './AdminDashboard.css'
import DoctorRegistrationForm from './DoctorRegistrationForm'
import RadiologistRegistrationForm from './RadiologistRegistrationForm'
import LabRegistrationForm from './LabRegistrationForm'
import DeactivateUser from '../../components/ui/DeactivateUser'
import AdminWelcome from '../../assets/AdminWelcome.png'

const AdminDashboard = () => {
  const [displayForm, setDisplayForm] = useState("null")

  return (
    <>
    <div className="admin__container">
      <div className="left__box">
        <div className="left__nav">
          
        </div>

        <div className="left__body">
          <div className="body_box1">
            <div className="prof_name">
              <h2 className="greeting underliner"><strong>Hello, ADMIN</strong></h2>
              <p className="admin_title">Today is Monday, 20 Oct 2023</p>
            </div>
          </div>
          <div className="body_box2">
            <div className="subject_details color1" onClick={(e) => setDisplayForm("Doctor")}>
              <div>
                <h4 className="subject_title"><b>Doctor</b></h4>
              </div>
            </div>
            <div className="subject_details color2" onClick={(e) => setDisplayForm("Lab")}>
              <div>
                <h4 className="subject_title"><b>Lab</b></h4>
              </div>
            </div>
            <div className="subject_details color3" onClick={(e) => setDisplayForm("Radiologist")}>
              <div>
                <h4 className="subject_title"><b>Radiologist</b></h4>
              </div>
            </div>
          </div>

          <div className="body_box3  mt-4">
            <div class="todays_timetable">
              <div class="timetable_heading underliner">
                <h2 class=" mx-1"><b>Deactivate Users</b></h2>
              </div>
              <div>
                <div className='border-solid border-2 border-slate-300 rounded-lg'>
                  <DeactivateUser />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="right__box">
        {displayForm == "null" && <div className='mx-8 admin-img'><img src={AdminWelcome} alt="" /></div>}
        {displayForm == "Doctor" && <DoctorRegistrationForm role={"ROLE_DOC"} />}
        {displayForm == "Radiologist" && <RadiologistRegistrationForm role={"ROLE_RADIOLOGIST"} />}
        {displayForm == "Lab" && <LabRegistrationForm role={"ROLE_LAB"} />}
      </div>
    </div>
    

    </>
  )
}

export default AdminDashboard