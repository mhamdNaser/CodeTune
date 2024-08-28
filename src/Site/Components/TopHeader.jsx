import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import LanguageDropdown from "../../Components/LanguageDropdown";

export default function TopHeader({ handleMode, mode }) {
  return (
    <div className="bg-background-color text-primary-text flex justify-between lg:hidden py-3 px-8">
      <p>for all coding services</p>
      <div className="flex gap-x-8">
              <LanguageDropdown IconSize={15} />
        <button
          id="theme-toggle"
          type="button"
          className="bg-background-color text-center rounded-full text-primary-text"
          onClick={handleMode}
        >
          <FaSun size={14} className={mode === "dark" ? "hidden" : ""} />
          <FaMoon size={14} className={mode === "dark" ? "" : "hidden"} />
        </button>
      </div>
    </div>
  );
}
