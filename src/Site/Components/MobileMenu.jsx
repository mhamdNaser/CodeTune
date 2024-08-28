import React from 'react'
import { useTranslation } from "../../Providers/TranslationProvider";
import { IoMdClose } from "react-icons/io";

export default function MobileMenu({ toggleMenu, mode }) {
  const { language } = useTranslation();
  
  return (
    <nav
      className={`fixed bg-blocks-color text-primary-text ${
        language === "ar" ? "right-0" : "left-0"
      } top-0  bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto`}
    >
      <div className="flex justify-between items-center mb-8 border-b">
        <a
          className="text-2xl py-4 font-bold text-primary-text dark:text-gray-100"
          href="#"
        >
          <img
            src="/Images/Logo.png"
            className={`h-12 ${mode === "dark" ? "" : "hidden"}`}
            alt=""
          />
          <img
            src="/Images/Logo_light.png"
            className={`h-12 ${mode === "dark" ? "hidden" : ""}`}
            alt=""
          />
        </a>
        <button className="navbar-close" onClick={toggleMenu}>
          <IoMdClose  size={22}/>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1">
            <a
              className="block p-4 text-sm font-semibold text-primary-text bg-background-color"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="mb-1">
            <a
              className="block p-4 text-sm font-semibold text-primary-text bg-background-color"
              href="#"
            >
              Explore
            </a>
          </li>
          <li className="mb-1">
            <a
              className="block p-4 text-sm font-semibold text-primary-text bg-background-color"
              href="#"
            >
              Playground
            </a>
          </li>
          <li className="mb-1">
            <a
              className="block p-4 text-sm font-semibold text-primary-text bg-background-color"
              href="#"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6">
          <a
            className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-background-color"
            href="#"
          >
            Sign In
          </a>
          <a
            className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-primary-text font-semibold bg-background-color"
            href="#"
          >
            Create Account
          </a>
        </div>
        <p className="my-8 text-xs text-center text-primary-text">
          <span>Copyright © 2024 CodeTune</span>
        </p>
      </div>
    </nav>
  );
}
