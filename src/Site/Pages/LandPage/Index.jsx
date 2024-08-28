import React from "react";
import Land from "./Components/Land";
import Services from "./Components/Services";
import Tutorial from "./Components/Tutorial";
import WhatSay from "./Components/WhatSay";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

export default function Index() {
  return (
    <div className="flex flex-col">
      <Land />
      <Services />
      <Tutorial />
      <Blog />
      <WhatSay />
      <Contact />
    </div>
  );
}
