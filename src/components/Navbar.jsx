import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-teal-400"
      : "text-white hover:text-teal-400 transition duration-500";
  };

  return (
    <>
      <div className="fixed w-full top-0 left-0 z-30 flex justify-between items-center h-18 mx-auto max-w-full md:px-32 px-10 md:py-0 py-3 text-white backdrop-blur-md bg-primary bg-opacity-75 shadow-lg">
        <Link to="/">
          <div className="py-1 px-3 border-2 border-teal-400 hover:border-slate-900 hover:bg-slate-900 transition duration-500 rounded-br-xl">
            <p className="font-lato md:text-lg text-base font-bold tracking-widest text-teal-400">
              B
            </p>
          </div>
        </Link>
        <div className="flex justify-start items-center">
          <ul className="md:flex hidden items-center">
            <li
              className={`p-4 font-inter tracking-widest ${getLinkClass("/")}`}
            >
              <Link to="/" className="nav_link">
                Home
              </Link>
            </li>
            <li
              className={`p-4 font-inter tracking-widest ${getLinkClass(
                "/resume"
              )}`}
            >
              <Link to="/resume" className="nav_link">
                Resume
              </Link>
            </li>
            <li
              className={`p-4 font-inter tracking-widest ${getLinkClass(
                "/projects"
              )}`}
            >
              <Link to="/projects" className="nav_link">
                Projects
              </Link>
            </li>
            <a href="mailto:basalamahalam2@gmail.com" className="p-4">
              <button className="font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border border-slate-900 text-gray-300 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
                Contact
              </button>
            </a>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          <div
            className={`transition-transform duration-500 ${
              nav ? "rotate-90" : "rotate-0"
            }`}
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      <div
        className={`fixed top-18 left-0 w-full bg-primary backdrop-blur-md shadow-lg md:hidden transition-transform duration-500 ${
          nav ? "translate-y-14" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col px-10">
          <li
            className={`pt-6 pb-3 text-sm font-inter tracking-widest ${getLinkClass(
              "/"
            )}`}
          >
            <Link to="/" onClick={handleNav} className="nav_link">
              Home
            </Link>
          </li>
          <li
            className={`py-3 text-sm font-inter tracking-widest ${getLinkClass(
              "/resume"
            )}`}
          >
            <Link to="/resume" onClick={handleNav} className="nav_link">
              Resume
            </Link>
          </li>
          <li
            className={`py-3 text-sm font-inter tracking-widest ${getLinkClass(
              "/projects"
            )}`}
          >
            <Link to="/projects" onClick={handleNav} className="nav_link">
              Projects
            </Link>
          </li>
          <li
            className={`py-3 text-sm font-inter tracking-widest ${getLinkClass(
              "/projects"
            )}`}
          >
            <Link to="/projects" onClick={handleNav} className="nav_link">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
