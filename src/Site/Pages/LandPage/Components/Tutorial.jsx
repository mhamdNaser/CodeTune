import React from "react";
import {
  FaReact,
  FaLaravel,
  FaShopify,
  FaWordpress,
  FaGithub,
} from "react-icons/fa";
import { useOutletContext } from "react-router";

export default function Tutorial() {
  const { mode } = useOutletContext();
  return (
    <div
      className="w-full h-[620px] my-4 flex flex-row-reverse items-center pt-96"
      id="tutorial"
    >
      <div className="grid grid-cols-2 gap-6 absolute mr-[20%]">
        <div className="relative">
          <img
            src="/Images/tut-1.jpg"
            alt="Office"
            className="rounded-lg shadow-lg w-[240px] right-0 ml-[-10%] border-blocks-color"
          />
        </div>
        <div className="relative">
          <img
            src="/Images/tut-3.jpg"
            alt="Office"
            className="rounded-lg shadow-lg w-[180px] right-0 mt-[20%] border-blocks-color"
          />
        </div>
        <div className="relative">
          <img
            src="/Images/tut-2.webp"
            alt="Office"
            className="absolute rounded-lg shadow-lg w-[80px] right-0 mt-8 border-blocks-color"
          />
        </div>
        <div className="relative">
          <img
            src="/Images/tut-4.jpg"
            alt="Office"
            className="rounded-lg shadow-lg w-[160px] h-[160px] border-blocks-color"
          />
        </div>
      </div>
      {/* text */}
      <div className="w-full bg-blocks-color py-10 my-4">
        <div className="w-[80%] m-auto flex justify-between items-center h-full text-9xl text-secondary-text">
          <div className="flex flex-row-reverse w-2/3 z-10">
            <div className="flex items-center">
              {" "}
              <h2
                className={`flex flex-col gap-y-3 text-3xl font-extrabold ${
                  mode === "light" ? "text-secondaryColor" : "text-primaryColor"
                } `}
              >
                <span className="text-lg w-[70%] my-1 text-primary-text">
                  At Codetune,
                </span>
                <span className="block">Crafting Elegant Solutions,</span>
                <span className="text-lg w-[60%] my-6 text-primary-text">
                  At Codetune, we specialize in creating sophisticated and
                  efficient digital solutions. Our approach ensures that every
                  line of code contributes to a seamless and elegant user
                  experience. Transform your vision with precision and style,
                  one line at a time.
                </span>
                <button className="bg-background-color hover:bg-gray-400 w-[20%] text-lg rounded-lg py-4">
                  Go To Tutorial
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
