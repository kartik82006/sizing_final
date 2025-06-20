import React from "react";
import image1 from "../images/smr.jpeg";
import image2 from "../images/winged_plane.jpeg";
import image3 from "../images/quad.jpg"
import image4 from "../images/tiltrotor.jpeg"
import { desc } from "framer-motion/client";

const images = [{title:"Single Main Rotor",desc:`A single main rotor helicopter uses one main rotor for lift and thrust, and a tail rotor to balance torque and provide stability.
`, image: image1},
                {title:"Winged Plane",desc:`A winged plane is an aircraft with fixed wings that generate lift through the flow of air, enabling it to fly. It typically uses engines for thrust and aerodynamic surfaces for control during flight.`, image: image2},
                {title:"Quadcopter",desc:`A quadcopter is a type of drone that is lifted and propelled by four rotors. It is known for its stability and ability to hover in place.`, image: image3},
                {title:"Tiltrotor",desc:`A tiltrotor is a type of aircraft that has rotors mounted on rotating shafts, allowing it to take off and land like a helicopter while flying like a plane.`, image: image4},];

function Cardnew({ className = "" }) {
  return (
    <div className={`flex flex-col bg-[#92C7CF] ${className} h-full overflow-hidden box-border`}>
  <div className="h-[700px] p-1 flex flex-col items-center justify-start border-2 border-gray-300 overflow-y-scroll p-0 m-0 box-border gap-4">
    {images.map((imagesrc, index) => (
      <a
  key={index}
  href={`#${imagesrc.title.toLowerCase().replace(/\s+/g, '-')}`}
  className="card-list w-[80%] aspect-[4/3] md:max-h-[200px] lg:max-h-[240px] flex-shrink-0 rounded-3xl flex relative p-0 m-0 box-border overflow-visible group cursor-pointer"
>
  <img
    src={imagesrc.image}
    className="reflect-below w-full h-full block object-contain md:hover:scale-125 lg:hover:scale-150
     transition-transform duration-300 box-border rounded-3xl"
    alt="card"
  />

  {/* Overlay */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black bg-opacity-20 border-2 border-white backdrop-blur-xl rounded-3xl transition-opacity duration-300 flex items-center justify-center pointer-events-none flex-col object-cover">
    <h1 className="text-white text-3xl p-2 flex justify-left">{imagesrc.title}</h1>
    <p className="text-white text-lg p-2 flex justify-left">{imagesrc.desc}</p>
  </div>
</a>

    ))}
  </div>
</div>

  );
}

export default Cardnew;
