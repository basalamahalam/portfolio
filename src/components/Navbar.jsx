import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Gambar from "../assets/dada.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full top-0 left-0 z-30 flex justify-between items-center h-20 mx-auto max-w-full px-32 text-white bg-gradient-to-b from-black to-primary">
      <Link to="/">
        {/* <img src={Gambar} alt="Logo" className="w-[200px]" /> */}
        <p className="text-[24px] font-poppins tracking-wide hover:text-teal-400 transition duration-500">
          Basalamah.
        </p>
      </Link>
      <ul className="md:flex hidden">
        <li className="p-4 font-inter font-medium text-lg tracking-widest">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 font-inter font-medium text-lg tracking-widest">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="p-4 font-inter font-medium text-lg tracking-widest">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <button className="font-poppins text-lg px-8 py-1.5 tracking-wide rounded-md font-bold border border-slate-900 text-gray-300 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
        Contact
      </button>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
