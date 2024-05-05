import React from 'react'
import './AdminDashboard.css'
import AdminPageRegistrationForm from './AdminPageRegistrationForm'
import SearchBar from '../../components/ui/SearchBar'
import AdminWelcome from '../../assets/AdminWelcome.png'
const AdminDashboard = () => {
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
              <p className="admin_title">Today is Monday,20 Oct 2023</p>
            </div>
          </div>
          <div className="body_box2">
            <div className="subject_details color1">
              <div className="">
                <h4 className="subject_title"><b>Doctor</b></h4>
                {/* <p className="subject_code">Total Doctor : (5531)</p> */}
                {/* <p className="subject_block">Block : Ramanujan</p>
                <p className="subject_room">Room No : 203</p>
                <p className="subject_capacity">Max Student Capacity : 160</p> */}
              </div>
            </div>
            <div className="subject_details color2">
              <div className="">
                <h4 className="subject_title"><b>Lab</b></h4>
                {/* <p className="subject_code">Total Labs : (5531)</p> */}
                {/* <p className="subject_block">Block : Ramanujan</p>
                <p className="subject_room">Room No : 203</p>
                <p className="subject_capacity">Max Student Capacity : 160</p> */}
              </div>
            </div>
            <div className="subject_details color3">
              <div className="">
                <h4 className="subject_title"><b>Radiologist</b></h4>
                {/* <p className="subject_code">Total Radiologist : (5531)</p> */}
                {/* <p className="subject_block">Block : Ramanujan</p>
                <p className="subject_room">Room No : 203</p>
                <p className="subject_capacity">Max Student Capacity : 160</p> */}
              </div>
            </div>
          </div>

          

          <div className="body_box3  mt-4">

          <div class="todays_timetable">
              <div class="timetable_heading underliner">
                <h2 class=" mx-1"><b>Search Doctor</b></h2>
              </div>

                <div>
                    <div className='border-solid border-2 border-slate-300 rounded-lg'><SearchBar></SearchBar></div>
                    
                </div>
              

            </div>
            
          </div>
        </div>
      </div>

      <div className="right__box">
        <div className="column_heading  blue mb-5">
          <h2 className="greeting right__box_heading underliner"><strong>New Doctor Registration</strong></h2>
        </div>

        <div className='mx-8 admin-img'><img src={AdminWelcome} alt="" /></div>
        {/* <AdminPageRegistrationForm></AdminPageRegistrationForm> */}
      </div>
    </div>
    

    </>
  )
}

export default AdminDashboard