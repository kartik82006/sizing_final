import React from "react";
import image1 from "../images/smr.jpeg";
import image2 from "../images/winged_plane.jpeg";
import image3 from "../images/quad.jpg"
import image4 from "../images/tiltrotor.jpeg"

const images = [image1, image2, image3,image4];

function Cardnew({ className = "" }) {
  return (
    <div className={`flex flex-col bg-[#92C7CF] ${className} h-full overflow-hidden box-border`}>
      <div className="h-[700px] p-1 flex flex-col items-center justify-start border-2 border-gray-300 overflow-y-scroll p-0 m-0 box-border gap-4">
        {images.map((image, index) => (
          <div key={index}
            className="card-list w-[80%] aspect-[4/3] md:max-h-[200px] lg:max-h-[240px] flex-shrink-0 rounded-3xl flex relative p-0 m-0 box-border overflow-visible"
          >
            <img
              src={image}
              className="reflect-below w-full h-full block object-contain md:hover:scale-125 lg:hover:scale-150
               transition-transform duration-300 box-border rounded-3xl"
              alt="card"
              style={{overflow: 'visible'}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardnew;
