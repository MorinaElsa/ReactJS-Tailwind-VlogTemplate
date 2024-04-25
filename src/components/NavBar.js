import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div className="flex justify-between items-center h-16 px-4 max-w-[1240px] mx-auto">
        <h2 className="text-3xl font-cabin hover:text-hover-green">Meranda</h2>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-xl text-gray-800 focus:outline-none"
          >
            ☰
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </button>
        </div>
        <ul
          className={`sm:flex ${
            isMenuOpen ? "block" : "hidden"
          } font-mono sm:mt-0 mt-4 absolute sm:relative top-full left-0 sm:top-0 sm:left-auto sm:flex flex-col sm:flex-row bg-white sm:bg-transparent w-full sm:w-auto justify-center items-center`}
        >
          <li className="p-4 hover:text-hover-green"> HOME </li>
          <li className="p-4 hover:text-hover-green">INFLUENCERS</li>
          <li className="p-4 hover:text-hover-green">TRENDING</li>
          <li className="p-4 hover:text-hover-green">CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
