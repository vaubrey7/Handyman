import React from "react";
import logo from "../../Assests/Images/Logo_1.png";

export default function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img
        className="block h-8 w-auto lg:hidden"
        src={logo}
        alt="bot"
      />
      <img
        className="hidden h-8 w-auto lg:block"
        src={logo}
        alt="bot"
      />
    </div>
  );
}