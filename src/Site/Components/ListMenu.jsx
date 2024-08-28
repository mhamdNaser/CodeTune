import React from "react";
import { useNavigate } from "react-router";

export default function ListMenu({ mode }) {
  const navgated = useNavigate();

  const navigateTo = (link) => {
    navgated(link);
  };

  return (
    <ul className="items-end text-xl px-4 hidden lg:flex pt-12">
      <li className="relative text-center">
        <button
          className={`font-semibold w-[120px] text-primary-text transition-transform focus:bg-background-color focus:border-t ${mode === "dark" ? "border-white": "border-black"} py-3 px-4 rounded-tl-lg rounded-tr-lg focus:scale-100 hover:scale-110 ease-in-out`}
          onClick={() => navigateTo("/home")}
        >
          Home
        </button>
      </li>
      <li className="relative text-center">
        <button
          className={`font-semibold w-[120px] text-primary-text transition-transform focus:bg-background-color focus:border-t ${mode === "dark" ? "border-white": "border-black"} py-3 px-4 rounded-tl-lg rounded-tr-lg focus:scale-100 hover:scale-110 ease-in-out`}
          href="#"
        >
          About Us
        </button>
      </li>
      <li className="relative text-center">
        <button
          className={`font-semibold w-[120px] text-primary-text transition-transform focus:bg-background-color focus:border-t ${mode === "dark" ? "border-white": "border-black"} py-3 px-4 rounded-tl-lg rounded-tr-lg focus:scale-100 hover:scale-110 ease-in-out`}
          href="#"
        >
          Blog
        </button>
      </li>
      <li className="relative text-center">
        <button
          className={`font-semibold w-[120px] text-primary-text transition-transform focus:bg-background-color focus:border-t ${mode === "dark" ? "border-white": "border-black"} py-3 px-4 rounded-tl-lg rounded-tr-lg focus:scale-100 hover:scale-110 ease-in-out`}
          href="#"
        >
          Contact Us
        </button>
      </li>
    </ul>
  );
}
