// Login.js
import React, { useState } from 'react';
import '../Common/Login.css';
import CredentialForm from './CredentialForm';
import { useLoginRoleContext } from './LoginRoleContext';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const {getRole}=useLoginRoleContext();

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    getRole(role);
  };

  return (
  <>
    <div className="login-container">
      <div className='left'> 
        <div className='extra'>H</div>
        <div className='extra'>E</div>
        <div className='extra'>Y</div>
      </div>
        <div className="role-selection">
          <div className='heading'>
            <p>Sign In to</p>
            <p>RadConnect</p>
          </div>
          <div className="role-link" onClick={() => handleRoleSelection('Admin')}>
            <div><span className='role'>Admin</span></div>
            <div className='arrow'></div>
          </div><br/>
          <div className="role-link" onClick={() => handleRoleSelection('Doctor')}>
            <div> <span className='role'>Doctor</span></div>
            <div className='arrow'></div>
          </div><br/>
          <div className="role-link" onClick={() => handleRoleSelection('Patient')}>
            <div> <span className='role'>Patient</span></div>
            <div className='arrow'></div>  
          </div><br/>
          <div className="role-link" onClick={() => handleRoleSelection('Radiologist')}>
            <div> <span className='role'>Radiologist</span></div>
            <div className='arrow'></div>
          </div><br/>
          <div className="role-link" onClick={() => handleRoleSelection('Lab')}>
            <div> <span className='role'>Lab</span></div>
            <div className='arrow'></div>
          </div><br/>
        </div>  
      </div>
      {selectedRole && (
        <div className="selected-role-container">
          <CredentialForm />
        </div>
      )}
  </>
  );
};

export default Login;