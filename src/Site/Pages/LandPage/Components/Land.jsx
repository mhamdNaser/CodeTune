import React from 'react'
import { useOutletContext } from "react-router";

export default function Land() {
  const { mode } = useOutletContext();
  return (
    <div className="flex flex-row-reverse py-28 px-12" id='home'>
      <div className="relative flex flex-row-reverse w-full" id="test1">
        {/* Background dotted pattern */}
        <div className="relative flex flex-row-reverse w-1/2 z-0">
          {/* point */}
          <div className="w-1/2 h-[620px] bg-blocks-color shadow-lg rounded-lg">
            <div className="absolute bottom-0 left-0 ml-96 mb-5">
              <svg
                width="600"
                height="320"
                className="opacity-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect className="w-fit h-fit" fill="none" />
                <g transform="scale(1.2)">
                  {[...Array(12)].map((_, row) =>
                    [...Array(12)].map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={50 + col * 25}
                        cy={50 + row * 25}
                        r="5.1"
                        fill="black"
                      />
                    ))
                  )}
                </g>
              </svg>
            </div>
          </div>

          <div className="absolute left-0 top-0 mt-[8%] ml-[25%] z-20">
            <img
              src="/Images/landpage-1.jpg"
              alt="Office"
              className="h-auto rounded-lg shadow-lg w-[420px]"
            />
          </div>
          <div className="absolute top-0 left-0 w-[40%] mt-[50%] z-30 p-4 text-white border bg-secondaryColor border-blocks-color rounded-lg shadow-lg">
            <p className="text-lg">
              <strong className=" font-bold text-yellow-500">" </strong>
              You can’t have great software without a great team, and most
              software teams behave like a dysfunctional family.
              <strong className=" font-bold text-yellow-500"> "</strong>
              <span className="block text-right mt-2">- James Gosling</span>
            </p>
          </div>
        </div>

        <div className="relative flex flex-row-reverse w-1/2 z-10">
          <div className="flex items-center w-[70%] h-[620px]">
            {" "}
            <h1
              className={`flex flex-col gap-y-3 text-5xl font-extrabold ${
                mode === "light" ? "text-secondaryColor" : "text-primaryColor"
              }`}
            >
              <span className="block">Crafting Elegant Solutions,</span>
              <span className="block">One Line at a Time</span>
              <span className="text-lg text-primary-text w-[70%] my-6">
                At Codetune, we specialize in creating sophisticated and
                efficient digital solutions. Our approach ensures that every
                line of code contributes to a seamless and elegant user
                experience. Transform your vision with precision and style, one
                line at a time.
              </span>
              <button className="bg-blocks-color w-[30%] text-lg rounded-lg py-4 text-primaryColor hover:bg-gray-400">
                Contact Us
              </button>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
