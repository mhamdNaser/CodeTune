import React, { createContext, useContext, useState, useEffect } from "react";
import { requestHandler } from "../axios-client"; // Import the requestHandler function

const CategoryBrandContext = createContext();

export default function CategoryBrandProvider({ children }) {
  const [items, setItems] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const data = await requestHandler("get", "/site/menu-categories");
        setItems(data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const getBrands = async () => {
      try {
        const data = await requestHandler("get", "/site/menu-Brand");
        setBrands(data || []);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    getCategory();
    getBrands();
  }, []);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <CategoryBrandContext.Provider value={{ items, brands, addItem }}>
      {children}
    </CategoryBrandContext.Provider>
  );
}

export const useCategoryBrand = () => useContext(CategoryBrandContext);
