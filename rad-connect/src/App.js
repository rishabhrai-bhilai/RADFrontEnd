// import logo from './logo.svg';
// import './App.css';

import Navbar from './components/navbar/Navbar'; 
import ReportUpload from './pages/Lab/ReportUpload';
import PatientDashboard from './pages/Patient/PatientDashboard';
import Reports from './pages/Patient/Reports';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import PatientInformation from './pages/Doctor/PatientInformation';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
    {/* <ReportUpload></ReportUpload> */}
    {/* <PatientDashboard></PatientDashboard> */}
    {/* <PatientInformation></PatientInformation> */}
    {/*  */}
    <Reports></Reports>
    {/* <DoctorDashboard></DoctorDashboard> */}
    {/* <ReportUpload></ReportUpload> */}


    </div>
  );
}

export default App;
