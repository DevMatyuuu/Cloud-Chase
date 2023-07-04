import React, { createContext, useContext, useEffect, useState } from 'react';

export const AgeContext = createContext();


export const useAgeContext = () => useContext(AgeContext);


export function AgeProvider({ children }) {
  const [age, setAge] = useState(null);

  useEffect(() => {
    // Retrieve the age 
    const storedAge = localStorage.getItem('userAge');
    if (storedAge) {
      setAge(storedAge);
    }
  }, []);

  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {children}
    </AgeContext.Provider>
  );
}