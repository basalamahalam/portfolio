import React, { useState } from "react";
import Gambar from "../assets/foto.png";

const Header = () => {
  return (
    <div className="pt-28 min-h-screen flex items-start justify-center bg-gradient-to-b from-primary to-[#021219]">
      <div className="relative z-0">
        <div className="flex-col items-center justify-center">
          <p className="absolute w-full top-[8%] right-[88%] font-lato font-bold text-xl text-secondary -z-10 tracking-wider">
            Muhammad Alam Basallamah
          </p>
          <h1 className="absolute top-[61%] -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 text-outline p-4 font-bold font-fira text-[140px] tracking-widest">
            PORTFOLIO
          </h1>
          <h1 className="absolute top-[30%] -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 text-outline p-4 font-bold font-fira text-[140px] tracking-widest">
            PORTFOLIO
          </h1>
        </div>
        <img src={Gambar} className="top-0 left-0 w-[300px]" alt="Gambar" />
        <h1 className="absolute -bottom-[14%] left-1/2 -translate-x-1/2 z-10 text-white text-center p-4 font-bold font-fira text-[140px] tracking-widest">
          PORTFOLIO
        </h1>
        <p className="absolute -bottom-[15%] -right-[88%] z-10 text-secondary text-center p-4 font-bold font-lato text-xl tracking-wider">
          Bandung, Indonesia
        </p>
        <button className="absolute z-10 -bottom-[15%] -left-[88%] font-poppins text-lg px-8 py-1.5 tracking-wide rounded-md font-bold border border-slate-800 text-gray-300 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Header;
