// import logo from './logo.svg';
// import './App.css';
import Login from './pages/Common/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import ReportUpload from './pages/Lab/ReportUpload';
import PatientDashboard from './pages/Patient/PatientDashboard';
import PatientRegistration from './pages/Patient/PatientRegistration';
import NewPatient from './pages/Patient/NewPatient';
import Reports from './pages/Patient/Reports';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import PatientInformation from './pages/Doctor/PatientInformation';
import ChatPopup from './components/ui/ChatPopup';
import React, { useState } from 'react';

function App() {

  const [email,setEmail]=useState("");
  const [credId,setCredId]=useState();

  const handleSubmitEmail = (email) => {
    // Handle email submission logic here
    console.log('Email submitted:', email);
    setEmail(email);
  };

  const handleCredId = (credId) => {
    // Handle email submission logic here
    console.log('Credential ID obtained:', credId);
    setCredId(credId);
  };


  return (
    <div className="App">   

    
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/patientregistration" element={<PatientRegistration email={email} credId={credId}/>}/>
          <Route path="/newpatient" element={<NewPatient onSubmitEmail={handleSubmitEmail} onSubmitCred={handleCredId}/>}/>
          <Route path="/patientdashboard" element={<PatientDashboard/>}/>
          <Route path="/patientreports" element={<Reports/>}/>
          <Route path="/labdashboard" element={<ReportUpload/>}/>
          
          {/* <Route path="/labprofile" element={<LabProfile/>}/> */}
          {/* <Route path="/doctorprofile" element={<DoctorProfile/>}/> */}
      </Routes>
      {/* <ChatPopup></ChatPopup> */}
    </div>
  );
}

export default App;