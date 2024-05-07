import React, { useState } from 'react'
import './AdminDashboard.css'
import DoctorRegistrationForm from './DoctorRegistrationForm'
import RadiologistRegistrationForm from './RadiologistRegistrationForm'
import LabRegistrationForm from './LabRegistrationForm'
import DeactivateUser from '../../components/ui/DeactivateUser'
import AdminWelcome from '../../assets/AdminWelcome.png'
import Navbar from '../../components/navbar/Navbar'

const AdminDashboard = () => {
  const [displayForm, setDisplayForm] = useState("Doctor")
  

  return (

    <>

      <Navbar
      options={[
        { name: "Dashboard", icon: "bx bxs-dashboard" },
        { name: "Analytics", icon: "bx-chart" },
        { name: "Setting", icon: "bx bx-cog" },
      ]}
       alwaysClose={true}></Navbar>

      <section className="home">
        <div className="parent-container">
        <div className="all-items">
    
    <div className="admin__container">
      <div className="left__box">
        <div className="left__nav">
          
        </div>

        <div className="left__body mt-8">
          <div className="body_box1">
            <div className="prof_name">
              <h2 className="greeting underliner"><strong>Hello, ADMIN</strong></h2>
              <p className="admin_title">Today is Monday, 20 Oct 2023</p>
            </div>
          </div>
          <div className="body_box2">
            <div className="subject_details color1" onClick={(e) => setDisplayForm("Doctor")}>
              <div>
                <h6 className="subject_title"><b>Doctor</b></h6>
              </div>
            </div>
            <div className="subject_details color2" onClick={(e) => setDisplayForm("Lab")}>
              <div>
                <h6 className="subject_title"><b>Lab</b></h6>
              </div>
            </div>
            <div className="subject_details color3" onClick={(e) => setDisplayForm("Radiologist")}>
              <div>
                <h6 className="subject_title"><b>Radiologist</b></h6>
              </div>
            </div>

            <div className="subject_details color3" onClick={(e) => setDisplayForm("Deactivate")}>
              <div>
                <h6 className="subject_title"><b>Deactivate User's</b></h6>
              </div>
            </div>

          </div>

          <div className="body_box3  mt-4 mx-2">
            <div class="todays_timetable ">
              <div class="timetable_heading mt-4  underliner">
                <h2 class=" mx-1 "><b>New {displayForm} Registration</b></h2>
              </div>
              <div>
              {/* {displayForm == "null" && <div className='mx-8 admin-img'><img src={AdminWelcome} alt="" /></div>} */}
        {displayForm == "Doctor" && <DoctorRegistrationForm role={"ROLE_DOCTOR"} />}
        {displayForm == "Radiologist" && <RadiologistRegistrationForm role={"ROLE_RADIOLOGIST"} />}
        {displayForm == "Lab" && <LabRegistrationForm role={"ROLE_LAB"} />}
        {displayForm == "Deactivate" && 
        <div className='border-solid border-2 border-slate-300 rounded-lg'>
        <DeactivateUser />
      </div>}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="right__box">


      {/* <div className='border-solid border-2 border-slate-300 rounded-lg'>
        <DeactivateUser />
      </div> */}

        
      </div>
    </div>

    </div>

    </div>

    </section>
    

    </>
  )
}

export default AdminDashboard