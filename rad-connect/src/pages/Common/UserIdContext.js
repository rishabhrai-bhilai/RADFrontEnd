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

  const [token, setToken] = useState(() => {
    // Initialize token from localStorage if available
    const storedToken = localStorage.getItem("userToken");
    return storedToken ? storedToken : "";
  });

  const getUserToken = (token) => {
    setToken(token);
  };

  const getUserId = (id) => {
    setData(id);
  };

  useEffect(() => {
    // Store data in localStorage whenever it changes
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    // Store token in localStorage whenever it changes
    localStorage.setItem("userToken", token);
  }, [token]);

  return (
    <UserIdContext.Provider value={{ data, getUserId, token, getUserToken }}>
      {children}
    </UserIdContext.Provider>
  );
};
