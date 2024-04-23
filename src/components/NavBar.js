import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h24 px-4 max-w-[1240px] mx-auto">
      <h2 className="text-3xl font-cabin hover:text-hover-green">Meranda</h2>
      <ul className="flex font-mono">
        <li className="p-4"> <a href="#"> HOME </a></li>
        <li className="p-4"><a href="#">CATEGORIES</a></li>
        <li className="p-4"><a href="#">HEALTH</a></li>
        <li className="p-4"><a href="#">DESIGN</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
