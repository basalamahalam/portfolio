import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Gambar from "../assets/dada.png";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full top-0 left-0 z-30 flex justify-between items-center h-20 mx-auto max-w-full px-32 text-white bg-gradient-to-b from-black to-primary">
      <img src={Gambar} alt="Logo" className="w-[200px]" />
      <ul className="md:flex hidden">
        <li className="p-4  font-amaranth text-lg tracking-wider">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4  font-amaranth text-lg tracking-wider">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="p-4  font-amaranth text-lg tracking-wider">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <Button className="font-amaranth text-lg px-6 py-1 bg-secondary text-primary rounded-md font-bold">
        CONTACT ME
      </Button>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
