import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { LoginRoleContextProvider } from "./pages/Common/LoginRoleContext";
import { UserIdContextProvider } from "./pages/Common/UserIdContext";
import { PatientIdContextProvider } from "./pages/Patient/PatientIdContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PatientIdContextProvider>
    <UserIdContextProvider>
      <LoginRoleContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginRoleContextProvider>
    </UserIdContextProvider>
  </PatientIdContextProvider>
);

reportWebVitals();
