import React, { createContext, useState, useContext } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState(null);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);