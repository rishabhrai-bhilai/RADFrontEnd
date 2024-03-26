// import logo from './logo.svg';
// import './App.css';

import Navbar from './components/navbar/Navbar'; 
import ReportUpload from './pages/Lab/ReportUpload';
import PatientDashboard from './pages/Patient/PatientDashboard';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
    {/* <ReportUpload></ReportUpload> */}
    <PatientDashboard></PatientDashboard>

    </div>
  );
}

export default App;
