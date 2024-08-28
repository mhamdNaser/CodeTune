import React, { createContext, useContext, useState, useEffect } from "react";
import { requestHandler } from "../axios-client"; // Import the requestHandler function

const LocationContext = createContext();

export default function LocationProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await requestHandler("get", "/site/all-countries");
        setCountries(data.data || []);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    const getStates = async () => {
      try {
        const data = await requestHandler("get", "/site/all-states");
        setStates(data.data || []);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    const getCities = async () => {
      try {
        const data = await requestHandler("get", "/site/all-cities");
        setCities(data.data || []);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    getCountries();
    getStates();
    getCities();
  }, []);

  return (
    <LocationContext.Provider value={{ countries, states, cities }}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => useContext(LocationContext);
