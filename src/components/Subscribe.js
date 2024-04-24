import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full bg-background-gray">
      <div className=" p-20 max-w-screen-2xl m-auto flex items-center">
        <div className="grid grid-cols-2 gap-x-60">
          <div className="content">
            <h2 className="text-lg text-gray-900 mb-6">Newsletter Subcribe</h2>
            <p className="text-sm text-gray-500 font-medium ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aspernatur ut at quae omnis pariatur obcaecati
              possimus nisi ea iste!
            </p>
          </div>
          <div>
            <form className="inputbutton grid grid-cols-2 mt-10">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5"
                type="email"
                placeholder="Enter your email"
              />
              <button type="submit">
                <span className="bg-button-color hover:bg-button-color text-white font-bold py-2 px-4 rounded-l">
                  {" "}
                  send
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
