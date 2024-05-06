// import logo from './logo.svg';
// import './App.css';
import Login from "./pages/Common/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ReportUpload from "./pages/Lab/ReportUpload";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import PatientRegistration from "./pages/Patient/PatientRegistration";
import NewPatient from "./pages/Patient/NewPatient";
import Reports from "./pages/Patient/Reports";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import ChatPopup from "./components/ui/ChatPopup";
import ChatPage from "./components/ui/ChatPage";
import React, { useState } from "react";
import DocReportComponent from "./pages/Doctor/DocReportComponent";
import SearchDoctor from "./pages/Patient/SearchDoctor";
import { useUserIdContext } from "./pages/Common/UserIdContext";
import ForgotPassword from "./pages/Common/ForgotPassword";
import DicomViewer from "./components/dicom/DicomViewer";
import RadiologistDashboard from "./pages/Radiologist/RadiologistDashboard";

function App() {
  const [email, setEmail] = useState("");
  const [credId, setCredId] = useState();
  const [pat, setPat] = useState(null);
  const { isUserLoggedIn } = useUserIdContext();

  const handleSubmitEmail = (email) => {
    setEmail(email);
  };

  const handleCredId = (credId) => {
    setCredId(credId);
  };

  const handlePat = (patient) => {
    setPat(patient);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/" replace = {true} />} />
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
  {isUserLoggedIn && (
    <>          
        <Route path="/patientdashboard" element={<PatientDashboard />} />
        <Route path="/radiologistdashboard" element={<RadiologistDashboard />} />
        <Route path="/patientreports" element={<Reports />} />
        <Route path="/labdashboard" element={<ReportUpload />} />
        <Route path="/patientchat" element={<ChatPage />} />
        <Route
          path="/doctordashboard"
          element={<DoctorDashboard onClickPat={handlePat} />}
        />
        <Route
          path="/patient/reports"
          element={<DocReportComponent patient={pat} />}
        />
        <Route
          path="/patient/dicom"
          element={<DicomViewer id={1} role={"patient"} />}
        />
    </>
  )}

      </Routes>
    </div>
  );
}

export default App;