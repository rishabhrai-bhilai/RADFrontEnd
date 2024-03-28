import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { LoginRoleContextProvider } from './pages/Common/LoginRoleContext';
import { UserIdContextProvider } from './pages/Common/UserIdContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserIdContextProvider>
  <LoginRoleContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </LoginRoleContextProvider>
  </UserIdContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
