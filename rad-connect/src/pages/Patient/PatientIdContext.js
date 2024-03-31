import React, { createContext, useContext, useState, useEffect } from 'react';

const PatientIdContext = createContext();

export const usePatientIdContext = () => {
  return useContext(PatientIdContext);
};
export const PatientIdContextProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // Initialize data from localStorage if available
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : null;
  });

  const getPatientId =(id)=>{
    setData(id);
    console.log(id);
  }

  useEffect(() => {
    // Store data in localStorage whenever it changes
    localStorage.setItem('userData', JSON.stringify(data));
  }, [data]);

  return (
    <PatientIdContext.Provider value={{ data, getPatientId }}>
      {children}
    </PatientIdContext.Provider>
  );
};