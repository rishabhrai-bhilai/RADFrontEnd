import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { LoginRoleContextProvider } from "./pages/Common/LoginRoleContext";
import { UserIdContextProvider } from "./pages/Common/UserIdContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(    
    <UserIdContextProvider>
      <LoginRoleContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginRoleContextProvider>
    </UserIdContextProvider>
);

reportWebVitals();