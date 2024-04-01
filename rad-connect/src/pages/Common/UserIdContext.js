import React, { createContext, useContext, useState, useEffect } from "react";

const UserIdContext = createContext();

export const useUserIdContext = () => {
  return useContext(UserIdContext);
};
export const UserIdContextProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // Initialize data from localStorage if available
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : null;
  });

  const getUserId = (id) => {
    setData(id);
  };

  useEffect(() => {
    // Store data in localStorage whenever it changes
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  return (
    <UserIdContext.Provider value={{ data, getUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};
