import React from 'react';

function Instagram() {
  return (
    <div >
      <div className="grid grid-cols-4 gap-0 md:col-span-2 ">
        <img
          src={require("../img/vlog1.png")}
          alt="food1"
          className="w-full h-[150px]"
        />
        <img
          src={require("../img/vlog3.jpg")}
          alt="food1"
          className="w-full h-[150px]"
        />
        <img
          src={require("../img/vlog2.jpg")}
          alt="food1"
          className="w-full h-[150px]"
        />
        <img
          src={require("../img/cook.png")}
          alt="food1"
          className="w-full h-[150px]"
        />
      </div>
    </div>
  );
}

export default Instagram;
