import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div id="subscribe" className="w-full bg-background-gray">
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

        <form className="lg:w-1/2 w-full flex flex-row">
          <div className="relative">
            <input
              className={`bg-background-gray border border-gray-950 rounded-3xl text-gray-900 text-xs lg:text-base p-2.5 flex-grow sm:w-96 focus:outline-none ${
                isFocused || email !== "" ? "pt-2" : ""
              }`}
              type="email"
              value={email}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <label
              className={`absolute left-0 mt-7 mx-6 px-2 transition duration-200 input-text ${
                isFocused || email !== "" ? "text-sm -top-5 text-gray-800" : ""
              }`}
            >
              Username or Email
            </label>
          </div>
          <button type="submit" className="mt-4 lg:mt-0 ml-2">
            <span className="bg-button-color hover:bg-button-color text-white text-xl lg:text-2xl text-center font-extrabold py-2 px-3 rounded-full">
              ⮚
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
