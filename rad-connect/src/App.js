// import logo from './logo.svg';
// import './App.css';
import Login from './pages/Common/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import ReportUpload from './pages/Lab/ReportUpload';
import PatientDashboard from './pages/Patient/PatientDashboard';
import Reports from './pages/Patient/Reports';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import PatientInformation from './pages/Doctor/PatientInformation';
import ChatPopup from './components/ui/ChatPopup';
import ChatPage from './components/ui/ChatPage';

function App() {
  return (
    <div className="App">   

    
      <Routes>
          <Route path="/" element={<Login/>}/>
          {/* <Route path="/patientregistration" element={<PatientRegistrationForm/>}/> */}
          <Route path="/patientdashboard" element={<PatientDashboard/>}/>
          <Route path="/patientreports" element={<Reports/>}/>
          <Route path="/labdashboard" element={<ReportUpload/>}/>
          <Route path="/patientchat" element={<ChatPage/>}/>
          
          {/* <Route path="/labprofile" element={<LabProfile/>}/> */}
          {/* <Route path="/doctorprofile" element={<DoctorProfile/>}/> */}
      </Routes>
      <ChatPopup></ChatPopup>
    </div>
    // <div className="App">
    //   {/* <Navbar></Navbar> */}
    //   <Login></Login>
    // {/* <ReportUpload></ReportUpload> */}
    // {/* <PatientDashboard></PatientDashboard> */}
    // {/*  */}
    //   {/* <Reports></Reports> */}

    // </div>
  );
}

export default App;