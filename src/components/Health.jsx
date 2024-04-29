import React from "react";
import dataHealth from "../data/healthData.js";

function Health() {
  return (
    <div
      id="health"
      className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4"
    >
       <div className="grid grid-cols-2 grid-rows-6 lg:h-[50vh] md:h-[50vh] ">
        {dataHealth.map((image, index) => (
          <img
            key={index}
            className={`object-cover w-full h-full p-2 ${image.className}`}
            src={image.imgSrc}
            alt="Foto"
          />
        ))}
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-2xl md:text-2xl text-gray-400 font-semi-bold">
          {" "}
          Healthy lifestyle
        </h3>
        <p className="text-md py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam
          natus sint expedita, possimus dolores repellat totam culpa,
          exercitationem minus, perspiciatis doloremque debitis amet facilis
          corporis deserunt doloribus aperiam tempora?
        </p>
        <p className="pb-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam
          natus sint expedita, possimus dolores repellat totam culpa,
          exercitationem minus, perspiciatis doloremque debitis amet facilis
          corporis deserunt doloribus aperiam tempora?
        </p>
        <div>
          <button className="md:text-sm border-black border mr-4 hover:shadow-xl rounded-2xl p-1.5">
            Learn More
          </button>
          <button className="md:text-sm bg-slate-700 border text-white border-black hover:shadow-6xl rounded-2xl p-1.5">
            Book Consult
          </button>
        </div>
      </div>
    </div>
  );
}

export default Health;
