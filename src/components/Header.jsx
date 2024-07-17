import React, { useState } from "react";
import Gambar from "../assets/foto.png";

const Header = () => {
  const handleDownload = () => {
    const pdfUrl = "CV_Muhammad Alam Basalamah.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Muhammad Alam Basalamah.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hidden pt-24 md:flex items-start justify-center bg-gradient-to-b from-primary to-[#021219] animate-fadeIn">
      <div className="relative z-0">
        <div className="flex-col items-center justify-center">
          <p className="hidden lg:block absolute w-full top-[8%] right-[95%] font-lato font-bold text-xl text-secondary -z-10 tracking-wider">
            Muhammad Alam Basalamah
          </p>
          <h1 className="absolute top-[59%] -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 text-outline p-4 font-bold font-anton text-[90px] md:text-[100px] lg:text-[140px] tracking-widest">
            PORTFOLIO
          </h1>
          <h1 className="absolute top-[28%] -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 text-outline p-4 font-bold font-anton text-[90px] md:text-[100px] lg:text-[140px] tracking-widest">
            PORTFOLIO
          </h1>
        </div>
        <img
          src={Gambar}
          className="top-0 left-0 w-[200px] lg:w-[300px]"
          alt="Gambar"
        />
        <h1 className="absolute -bottom-[14%] lg:-bottom-[12%] left-1/2 -translate-x-1/2 z-10 text-slate-200 text-center p-4 font-bold font-anton text-[90px] md:text-[100px] lg:text-[140px] tracking-widest">
          PORTFOLIO
        </h1>
        <p className="absolute lg:hidden -bottom-[15%] -left-[44%] -translate-x-1/2 z-10 text-secondary text-center p-4 font-bold font-lato text-lg lg:text-xl tracking-wider">
          Muhammad Alam Basalamah
        </p>
        <p className="absolute -bottom-[15%] -right-[57%] lg:-right-[97%] z-10 lg:translate-x-0 translate-x-1/2 text-secondary text-center p-4 font-bold font-lato text-lg lg:text-xl tracking-wider">
          Bandung, Indonesia
        </p>
        <button
          onClick={handleDownload}
          className="hidden lg:block absolute z-10 -bottom-[35%] -left-[50%] -translate-x-1/2 lg:translate-x-0 lg:-bottom-[15%] lg:-left-[95%] font-poppins text-lg px-8 py-1.5 tracking-wide rounded-md font-bold border border-slate-800 text-gray-300 hover:bg-slate-900 hover:text-teal-400 transition duration-500"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Header;
