import React, { useState, useEffect, useRef } from "react";
import axiosClient, { requestHandler } from "../axios-client";
import { useTranslation } from "../Providers/TranslationProvider";
import { MdLanguage } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const LanguageDropdown = ({ IconSize }) => {
  const { translations, changeLanguage } = useTranslation();
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState(
    localStorage.getItem("LANGUAGE") || "en"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getData = async () => {
    try {
      const res = await requestHandler("get", "/site/active-languages");
      setLanguages(res.data.data);
    } catch (error) {
      console.error("Failed to fetch languages:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("LANGUAGE", language);
    axiosClient.defaults.headers["X-Language"] = language;
  }, [language]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
    changeLanguage(lang);
  };

  return (
    <div className="">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="block w-full py-1 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
      >
        <span className="flex items-center">
          <MdLanguage size={IconSize ? IconSize : 22} />
        </span>
      </button>
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className={`absolute lg:mt-[15px] lg:h-auto lg:left-auto lg:right-auto lg:top-auto lg:bottom-auto lg:w-auto z-50 lg:ms-[-50px] overflow-y-auto component-shadow border bg-blocks-color rounded-md
            ${
              language === "ar"
                ? "top-0 bottom-0 right-0 h-screen w-[50%]"
                : "top-0 bottom-0 left-0 h-screen w-[50%]"
            }`}
        >
          <h1 className="px-3 lg:hidden">
            <div className="flex justify-between px-4 py-3 border-b items-center">
              {(translations && translations["language"]) || "languages"}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="navbar-close"
              >
                <IoMdClose />
              </button>
            </div>
          </h1>
          {languages.map((value) => (
            <div
              key={value.slug}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-blocks-color hover:bg-background-color"
              onClick={() => handleChangeLanguage(value.slug)}
            >
              <span className="lg:px-8 px-3">
                {translations && translations[`${value.name}`]}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
