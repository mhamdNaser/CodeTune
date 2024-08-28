import React, {  useState } from "react";
import { FaSun, FaSearch, FaList } from "react-icons/fa";
import { AiFillMoon } from "react-icons/ai";
import GuidMenu from "./GuidMenu";
import MobileMenu from "./MobileMenu";
import ListMenu from "./ListMenu";
import LanguageDropdown from "../../Components/LanguageDropdown";

export default function Header({ direction, handleMode,  mode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`flex justify-between items-center lg:items-end bg-blocks-color shadow-md px-12 ${direction}`}
      >
        <div
          className={`w-[70%] flex m-auto justify-between items-center lg:items-end bg-blocks-color ${direction}`}
        >
          <div className="flex items-end gap-x-4">
            {/* logo */}
            <a className="text-2xl font-bold text-primary-text py-3" href="/home">
              <img
                src="/Images/Logo.png"
                className={`h-16 ${mode === "dark" ? "" : "hidden"}`}
                alt=""
              />
              <img
                src="/Images/Logo_light.png"
                className={`h-16 ${mode === "dark" ? "hidden" : ""}`}
                alt=""
              />
            </a>

            <ListMenu mode={mode} />
          </div>

          {/* mobile menu toggle */}
          <div className="lg:hidden flex gap-x-6">
            <button
              className="navbar-burger flex items-center text-primary-text  p-1"
              onClick={toggleMenu}
            >
              <FaList size={22} />
            </button>
          </div>

          {/* right menu */}
          <div className="hidden lg:flex justify-between items-center gap-x-7 py-3 text-primary-text">
            {/* search bar */}
            <ul
              className={` lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
                isMenuOpen ? "" : "hidden"
              }`}
            >
              <li>
                <div className="relative mx-auto text-primary-text">
                  <input
                    className="border bg-background-color placeholder-current h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-4"
                  >
                    <FaSearch />
                  </button>
                </div>
              </li>
            </ul>

            <LanguageDropdown />

            <button
              id="theme-toggle"
              type="button"
              className="bg-background-color text-center rounded-full text-primary-text"
              onClick={handleMode}
            >
              <FaSun size={22} className={mode === "dark" ? "hidden" : ""} />
              <AiFillMoon
                size={26}
                className={mode === "dark" ? "" : "hidden"}
              />
            </button>

            <GuidMenu mode={mode} />
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"
          onClick={toggleMenu}
        ></div>
        <MobileMenu toggleMenu={toggleMenu} mode={mode} />
      </div>
    </>
  );
}
