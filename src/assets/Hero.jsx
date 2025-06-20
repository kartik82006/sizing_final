import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Cardnew from "./Cardnew";
import "./reflect.css";
// Array of images to be passed to the Card component


function Hero() {

  const [showCard,setShowCard] = useState(false); 

  return (
    <div className="flex flex-row pb-[5%] mb-[3%] justify-center bg-[#1995AD] items-center font-bold font-delius-regular overflow-y-scroll h-[93vh] box-border">
      {/* Left Section: Slide in from left */}
      <motion.div
        initial={{ x: -200, y: 20, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero m-2 pt-6 border-4 border-black bg-[#B3C8CF] flex-[6] h-full overflow-y-scroll items-start text-center justify-center rounded-lg box-border"
      >
        <h1 className="text-5xl text-[#1995AD] edu-nsw-act-hand-pre-700 font-bolder m-6 justify-center flex">Let’s Get You Airborne</h1>

        <h1 className="text-2xl font-bold j">Our intuitive tool lets you select your eVTOL configuration and input key design parameters to instantly generate sizing calculations, performance estimates, and design insights—streamlining your concept development process.
          </h1>
                    <p className="mt-4 p-6 px-10 font-black text-8xl">Select Your Configuration   ➜ </p>
      </motion.div>
      {/* Right Section: Slide in from right */}
      <Cardnew className="m-2 border-4 border-black bg-[#1995AD] flex-[4] h-full overflow-y-scroll text-center justify-center rounded-lg box-border fade-in-left" />
    </div>
  );
}

export default Hero;
