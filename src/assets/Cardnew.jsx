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
    <div className={`flex bg-[#222831] ${className} h-full overflow-hidden box-border`}>
  <div className=" p-1 flex flex-row box-border gap-4">
    {/* <h1 className="text-2xl font-bold flex bg-[#FFD369]">Select the configuration</h1> */}
    {images.map((imagesrc, index) => (
      <a
  key={index}
  href={`#${imagesrc.title.toLowerCase().replace(/\s+/g, '-')}`}
  className="card-list flex-shrink-0 rounded-3xl flex relative p-2 m-8 box-border group cursor-pointer"
>
  <img
    src={imagesrc.image}
    className="reflect-below flex object-cover md:hover:scale-125 lg:hover:scale-130
     transition-transform duration-300 box-border rounded-3xl"
    alt="card"
  />

  {/* Overlay */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black bg-opacity-20 border-2 border-white backdrop-blur-xl rounded-3xl transition-opacity duration-300 flex items-center justify-center pointer-events-none flex-col object-cover">
    <h1 className="text-white text-xl p-2 flex justify-left">{imagesrc.title}</h1>
    <p className="text-white text-md p-2 flex justify-left">{imagesrc.desc}</p>
  </div>
</a>

    ))}
  </div>
</div>

  );
}

export default Cardnew;
