import React, { useState } from "react";
import dataNavBar from "../data/navBarData.js";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div className="flex justify-between items-center h-16 px-4 max-w-[1240px] mx-auto">
        <h2 className="text-3xl font-cabin hover:text-hover-green">Meranda</h2>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-xl text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <div>X</div> : <div>☰</div>}
          </button>
        </div>
        <ul
          className={`uppercase lg:flex ${
            isMenuOpen ? "block" : "hidden"
          } font-mono lg:mt-0 mt-4 absolute lg:relative top-full left-0 lg:top-0 md:left-auto lg:flex flex-col lg:flex-row bg-white lg:bg-transparent w-full lg:w-auto justify-center items-center`}
        >
        {dataNavBar.map((link, index) => (
          <li key={link.id} className="p-4 hover:text-hover-green" onClick={toggleMenu}>
            <a href={link.sectionId}> {link.name} </a>{" "}
          </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
