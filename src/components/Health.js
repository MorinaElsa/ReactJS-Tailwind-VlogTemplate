import React from "react";

function Health() {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[50vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://i.pinimg.com/736x/24/61/ce/2461ced880b3eb4bf8bf67936b391805.jpg"
          alt="food1"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://m.media-amazon.com/images/I/61X4LcQWs7L.jpg"
          alt="food1"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssiZyc1nWQqAKBjr1lnVgrRgVMSkXY22b5A&usqp=CAU"
          alt="food1"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://i.pinimg.com/564x/bc/2d/e6/bc2de68cfbf68e01797da7ab43a1d267.jpg"
          alt="food1"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://insideofhappiness.com/wp-content/uploads/2020/05/self-care-subscription-box-240x320.png"
          alt="food1"
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-xl md:text-6xl text-gray-400 font-semi-bold">
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
          <button className="border-black border mr-4 hover:shadow-xl rounded-2xl p-1.5">
            Learn More
          </button>
          <button className=" bg-slate-700 border text-white border-black hover:shadow-6xl rounded-2xl p-1.5">
            Book Consult
          </button>
        </div>
      </div>
    </div>
  );
}

export default Health;
