import React from "react";
import image1 from "./helicopter1.jpg";
import image2 from "./helicoter2.jpg";

const images = [image1, image2, image1, image2];

function Cardnew({ className = "" }) {
  return (
    <div className={`flex flex-col bg-[#E5E1DA] ${className}`}>
      {/* Apply perspective to a wrapper around `.card` */}
      <div className="w-full h-full flex items-center justify-center perspective">
        <div className="card w-full flex flex-col items-center justify-center h-full bg-[#E5E1DA] rounded-lg shadow-lg overflow-visible relative">
          {images.map((image, index) => (
            <div
              key={index}
              className="card-list w-full rounded-xl flex overflow-visible relative"
            >
              <img
                src={image}
                className="w-full rounded-xl hover:scale-105 transition-transform duration-300"
                alt="card"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cardnew;
