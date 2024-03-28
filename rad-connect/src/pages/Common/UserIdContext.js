import React, { createContext, useContext, useState } from 'react';

const UserIdContext = createContext();

export const useUserIdContext = () => {
  return useContext(UserIdContext);
};
export const UserIdContextProvider = ({ children }) => {
  const [data, setData] = useState(0);

  const getUserId =(id)=>{
    setData(id);
    console.log(data);
  }

  return (
    <UserIdContext.Provider value={{ data, getUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};