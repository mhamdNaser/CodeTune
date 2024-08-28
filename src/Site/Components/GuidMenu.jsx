import React, { useEffect, useState, useRef } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { useTranslation } from "../../Providers/TranslationProvider";
import { Link } from "react-router-dom";

export default function GuidMenu({ mode, setLoginModalOpen, setSingupModalOpen }) {
  const [showmenu, setShowmenu] = useState(false);
  const { translations, language } = useTranslation();
  const dropdownRef = useRef(null);

  const getshowmenu = () => {
    setShowmenu(!showmenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowmenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showmenu]);

  return (
    <>
      <button onClick={getshowmenu}>
        <BiSolidUserCircle size={25} className="text-primary-text" />
      </button>
      <div
        ref={dropdownRef}
        className={`absolute flex flex-col xl:mt-[12px] lg:mt-[160px] min-w-[120px] overflow-y-auto end-0 component-shadow bg-blocks-color rounded-md ${
          showmenu ? "h-[auto]" : "h-0"
        }`}
      >
        <button
          onClick={() => {
            setLoginModalOpen(true);
          }}
          className="font-bold px-6 text-primary-text py-2 hover:bg-background-color transition-all duration-400 ease-in-out"
        >
          {(translations && translations["Login"]) || "Login"}
        </button>
        <button
          onClick={() => {
            setSingupModalOpen(true);
          }}
          className="font-bold px-6 text-primary-text py-2 hover:bg-background-color transition-all duration-400 ease-in-out"
        >
          {(translations && translations["Singup"]) || "Singup"}
        </button>
      </div>
    </>
  );
}
