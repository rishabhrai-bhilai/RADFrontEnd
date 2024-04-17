// LoginRoleContext.js
import React, { createContext, useContext, useState } from "react";
// import QuantityButton from './Quantity';
const LoginRoleContext = createContext();

export const useLoginRoleContext = () => {
  return useContext(LoginRoleContext);
};
export const LoginRoleContextProvider = ({ children }) => {
  const [data, setData] = useState(0);

  const getRole = (role) => {
    setData(role);
  };

  return (
    <LoginRoleContext.Provider value={{ data, getRole }}>
      {children}
    </LoginRoleContext.Provider>
  );
};
