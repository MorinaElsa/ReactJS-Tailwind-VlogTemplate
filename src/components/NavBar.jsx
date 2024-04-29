import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
            {isMenuOpen ? <div>X</div> : <div>☰</div>}
          </button>
        </div>
        <ul
          className={`uppercase sm:flex ${
            isMenuOpen ? "block" : "hidden"
          } font-mono mt-4 absolute sm:relative top-full left-0 sm:left-auto sm:flex flex-col sm:flex-row bg-white sm:bg-transparent w-full sm:w-auto justify-center items-center`}
        >
          <li className="p-4 hover:text-hover-green" onClick={closeMenu}>
            {" "}
            <a href="/"> Home </a>{" "}
          </li>
          <li className="p-4 hover:text-hover-green" onClick={closeMenu}>
            <a href="#trending"> Trending </a>
          </li>
          <li className="p-4 hover:text-hover-green" onClick={closeMenu}>
            <a href="#influencers"> Influencers </a>
          </li>
          <li className="p-4 hover:text-hover-green" onClick={closeMenu}>
            <a href="#health"> Health </a>
          </li>
          <li className="p-4 hover:text-hover-green" onClick={closeMenu}>
            <a href="#subscribe"> Subscribe </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
