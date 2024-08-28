import React from "react";
import {
  FaReact,
  FaLaravel,
  FaShopify,
  FaWordpress,
  FaGithub,
} from "react-icons/fa";
import Land from "./Components/Land";
import Services from "./Components/Services";
import Tutorial from "./Components/Tutorial";
import WhatSay from "./Components/WhatSay";

export default function Index() {
  return (
    <div className="flex flex-col">
      <Land />

      <div className="w-full h-60 bg-blocks-color my-8">
        <div className="w-[60%] m-auto flex justify-between items-center h-full text-9xl text-secondary-text">
          <FaReact />
          <FaLaravel />
          <FaShopify />
          <FaWordpress />
          <FaGithub />
        </div>
      </div>
      <Services />
      <Tutorial />
      <WhatSay />
    </div>
  );
}
