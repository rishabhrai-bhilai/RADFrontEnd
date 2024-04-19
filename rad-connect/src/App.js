// import logo from './logo.svg';
// import './App.css';
import Login from "./pages/Common/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ReportUpload from "./pages/Lab/ReportUpload";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import PatientRegistration from "./pages/Patient/PatientRegistration";
import NewPatient from "./pages/Patient/NewPatient";
import Reports from "./pages/Patient/Reports";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import PatientInformation from "./pages/Doctor/PatientInformation";
import ChatPopup from "./components/ui/ChatPopup";
import ChatPage from "./components/ui/ChatPage";
import React, { useState } from "react";
import DocReportComponent from "./pages/Doctor/DocReportComponent";

import SearchDoctor from "./pages/Patient/SearchDoctor";

function App() {
  const [email, setEmail] = useState("");
  const [credId, setCredId] = useState();
  const [patId, setPatId] = useState();

  const handleSubmitEmail = (email) => {
    setEmail(email);
  };

  const handleCredId = (credId) => {
    setCredId(credId);
  };

  const handlePatId = (patId) => {
    setPatId(patId);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PatientDashboard />} />
        <Route
          path="/patientregistration"
          element={<PatientRegistration email={email} credId={credId} />}
        />
        <Route
          path="/newpatient"
          element={
            <NewPatient
              onSubmitEmail={handleSubmitEmail}
              onSubmitCred={handleCredId}
            />
          }
        />
        <Route path="/patientdashboard" element={<PatientDashboard />} />
        <Route path="/patientreports" element={<Reports />} />
        <Route path="/labdashboard" element={<ReportUpload />} />
        <Route path="/patientchat" element={<ChatPage />} />
        <Route
          path="/doctordashboard"
          element={<DoctorDashboard onClickPat={handlePatId} />}
        />
        <Route
          path="/patient/reports"
          element={<DocReportComponent patientId={patId} />}
        />

        {/* <Route path="/labprofile" element={<LabProfile/>}/> */}
        {/* <Route path="/doctorprofile" element={<DoctorProfile/>}/> */}
      </Routes>
      {/* <ChatPopup></ChatPopup>
      <Navbar /> */}
    </div>
  );
}

export default App;
