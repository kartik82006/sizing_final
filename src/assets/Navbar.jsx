import React from "react";
import logo2 from "../images/logo.png"; // Ensure path is correct

function Navbar() {
  return (
    <nav className="fade-in-navbar fixed top-0 left-0 right-0 z-50 bg-[#E5E1DA] border-4 border-black rounded-b-xl shadow-md px-4 sm:px-6 lg:px-10 mt-1 mx-2">
      <div className="flex items-center h-20 sm:h-24 lg:h-28 max-w-[1440px] mx-auto rounded-lg">
        <img
          src={logo2}
          alt="Logo"
          className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
        />
        <h1 className="ml-4 text-2xl sm:text-3xl md:text-3xl lg:text-5xl text-grey-800 font-bold edu-nsw-act-hand-pre-700">
          SiZing CoDe
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
