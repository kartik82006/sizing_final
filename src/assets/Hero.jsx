import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Cardnew from "./Cardnew";
import "./reflect.css";
// Array of images to be passed to the Card component


function Hero() {

  const [showCard,setShowCard] = useState(false); 

  return (
    <div className="flex flex-col pb-[5%] justify-center bg-[#FFD369] items-center font-bold font-delius-regular overflow-y-scroll h-[93vh] box-border">
      {/* Left Section: Slide in from left */}
      <motion.div
        initial={{ x: -200, y: 20, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero m-2 pt-6 border-0 border-black mb-0 bg-[#222831] h-full text-center justify-center rounded-lg box-border"
      >
        <h1 className="text-6xl text-[#FFD369] text-bolder items-center justify-start mb-4 p-2">Let’s Get You Airborne</h1>

        <h1 className="text-3xl text-white flex justify-start items-center pb-2">Our intuitive tool lets you select your eVTOL configuration and input key design parameters to instantly generate sizing calculations, performance estimates, and design insights—streamlining your concept development process.
          </h1>
        {/* <p className="justify-right p-6 px-10 text-[#FFD369] text-8xl">Select Your Configuration   ➜ </p> */}
      </motion.div>
      {/* Right Section: Slide in from right */}
      <Cardnew className="m-2 mt-0 border-0 border-black bg-[#222831] flex h-full text-center justify-center rounded-b-lg box-border fade-in-left" />
    </div>
  );
}

export default Hero;
