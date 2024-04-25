import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full bg-background-gray">
      <div className="p-10 lg:p-20 max-w-screen-2xl m-auto flex flex-col lg:flex-row items-start lg:items-center">
        <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          <div className="content mb-6">
            <h2 className="text-lg lg:text-2xl text-gray-900 mb-2">
              Newsletter Subscribe
            </h2>
            <p className="text-sm lg:text-base text-gray-500 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aspernatur ut at quae omnis pariatur obcaecati
              possimus nisi ea iste!
            </p>
          </div>
        </div>

        <form className="lg:w-1/2 w-full">
          <div className="lg:flex items-center justify-between">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-base rounded-lg p-2.5 flex-grow sm:w-96"
              type="email"
              placeholder="Enter your email"
            />
            <button type="submit" className="mt-4 lg:mt-0 ml-2">
              <span className="bg-button-color hover:bg-button-color text-white text-xl lg:text-2xl text-center font-extrabold py-2 px-3 rounded-full">
                ⮚
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
