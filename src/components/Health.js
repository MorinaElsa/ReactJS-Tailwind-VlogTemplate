import React from "react";

function Health() {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 md:h-[80vh] sm:h-[50vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={require("../img/vlog1.png")}
          alt="food1"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={require("../img/vlog2.jpg")}
          alt="food1"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
           src={require("../img/vlog3.jpg")}
          alt="food1"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
           src={require("../img/influencer.png")}
          alt="food1"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={require("../img/cook.png")}
          alt="food1"
        />
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
