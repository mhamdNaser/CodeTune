import React, { createContext, useContext, useState, useEffect } from "react";
import { requestHandler } from "../axios-client"; // Import the requestHandler function

const CompanyInfoContext = createContext();

export const CompanyInfoProvider = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCompanyInfo = async () => {
    try {
      const data = await requestHandler("get", "site/company/info");
      setCompanyInfo(data.data);
      
    } catch (error) {
      console.error("Error fetching company information:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanyInfo();
  }, []);

  return (
    <CompanyInfoContext.Provider
      value={{ companyInfo, loading, getCompanyInfo: fetchCompanyInfo }}
    >
      {children}
    </CompanyInfoContext.Provider>
  );
};

export const useCompanyInfo = () => {
  return useContext(CompanyInfoContext);
};
