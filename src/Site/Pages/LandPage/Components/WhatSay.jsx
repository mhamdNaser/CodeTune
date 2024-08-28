import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function WhatSay() {
  return (
    <div className="p-12 w-[70%] m-auto">
      <div className="text-center mb-12 text-primary-text">
        <h2 className="text-3xl font-bold mb-4">What They Say?</h2>
        <p className="text-lg">
          Hear directly from our clients about their experiences with our
          services. We take pride in delivering exceptional results and building
          lasting relationships. Read on to discover how we’ve made a difference
          for businesses like yours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-primary-text">
        <div className="flex flex-col items-center relative bg-blocks-color p-6 rounded-lg shadow-lg">
          <div className="absolute top-0 mt-[-30px] text-primaryColor p-3 rounded-lg text-5xl">
            <RiDoubleQuotesL />
          </div>
          <div className="flex flex-col items-center py-2">
            <img
              src="/Images/tut-4.jpg"
              alt="Office"
              className="rounded-full h-16 w-16"
            />
            <h3 className="text-xl font-semibold py-1">My Name Is</h3>
            <h4 className="text-sm font-semibold text-secondary-text">12/04/2024</h4>
            <p className="mt-2 text-lg w-[95%]">
              Transform your ideas into dynamic websites and web applications
              tailored to your business needs. We leverage cutting-edge
              technologies to build solutions that are both functional and
              visually captivating.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center relative bg-blocks-color p-6 rounded-lg shadow-lg">
          <div className="absolute top-0 mt-[-30px] text-primaryColor p-3 rounded-lg text-5xl">
            <RiDoubleQuotesL />
          </div>
          <div className="flex flex-col items-center py-2">
            <img
              src="/Images/tut-4.jpg"
              alt="Office"
              className="rounded-full h-16 w-16"
            />
            <h3 className="text-xl font-semibold py-1">My Name Is</h3>
            <h4 className="text-sm font-semibold text-secondary-text">12/04/2024</h4>
            <p className="mt-2 text-lg w-[95%]">
              Transform your ideas into dynamic websites and web applications
              tailored to your business needs. We leverage cutting-edge
              technologies to build solutions that are both functional and
              visually captivating.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center relative bg-blocks-color p-6 rounded-lg shadow-lg">
          <div className="absolute top-0 mt-[-30px] text-primaryColor p-3 rounded-lg text-5xl">
            <RiDoubleQuotesL />
          </div>
          <div className="flex flex-col items-center py-2">
            <img
              src="/Images/tut-4.jpg"
              alt="Office"
              className="rounded-full h-16 w-16"
            />
            <h3 className="text-xl font-semibold py-1">My Name Is</h3>
            <h4 className="text-sm font-semibold text-secondary-text">12/04/2024</h4>
            <p className="mt-2 text-lg w-[95%]">
              Transform your ideas into dynamic websites and web applications
              tailored to your business needs. We leverage cutting-edge
              technologies to build solutions that are both functional and
              visually captivating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
