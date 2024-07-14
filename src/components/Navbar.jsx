import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full top-0 left-0 z-30 flex justify-between items-center h-18 mx-auto max-w-full px-32 text-white backdrop-blur-md bg-primary bg-opacity-75 shadow-lg">
      <Link to="/">
        <div className="py-1 px-3 border-2 border-teal-400 hover:border-slate-900 hover:bg-slate-900 transition duration-500 rounded-br-xl">
          <p className="font-lato text-lg font-bold tracking-widest text-teal-400">
            B
          </p>
        </div>
      </Link>
      <div className="flex justify-start items-center">
        <ul className="md:flex hidden">
          <li className="p-4 font-inter font-medium tracking-widest">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 font-inter font-medium tracking-widest">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="p-4 font-inter font-medium tracking-widest">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <a href="mailto:basalamahalam2@gmail.com" className="p-4">
          <button className="font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border border-slate-900 text-gray-300 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
            Contact
          </button>
        </a>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
