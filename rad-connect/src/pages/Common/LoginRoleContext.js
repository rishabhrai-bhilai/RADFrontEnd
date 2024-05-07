// LoginRoleContext.js
import React, { createContext, useContext, useState } from "react";
// import QuantityButton from './Quantity';
const LoginRoleContext = createContext();

export const useLoginRoleContext = () => {
  return useContext(LoginRoleContext);
};
export const LoginRoleContextProvider = ({ children }) => {
  const [role, setRole] = useState(0);

  const getRole = (role) => {
    setRole(role);
  };

  return (
    <LoginRoleContext.Provider value={{ role, getRole }}>
      {children}
    </LoginRoleContext.Provider>
  );
};