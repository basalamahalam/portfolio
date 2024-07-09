import React, { useState } from "react";
import Gambar from "../assets/foto.png";
import { Button } from "@nextui-org/button";

const Header = () => {
  return (
    <div className="pt-28 min-h-screen flex items-start justify-center">
      <div className="relative z-0">
        <div className="flex-col items-center justify-center">
          <p className="absolute w-full top-[8%] right-[92%] font-lato font-bold text-xl text-white -z-10 tracking-wider">
            Muhammad Alam Basallamah
          </p>
          <h1 className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 text-outline p-4 font-bold font-amarante text-[150px] tracking-widest">
            PORTFOLIO
          </h1>
          <h1 className="absolute top-[30%] -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 text-outline p-4 font-bold font-amarante text-[150px] tracking-widest">
            PORTFOLIO
          </h1>
        </div>
        <img src={Gambar} className="top-0 left-0 w-[300px]" alt="Gambar" />
        <h1 className="absolute -bottom-[13.5%] left-1/2 -translate-x-1/2 z-10 text-white text-center p-4 font-bold font-amarante text-[150px] tracking-widest">
          PORTFOLIO
        </h1>
        <p className="absolute -bottom-[12%] -right-[90%] z-10 text-[#f49e21] text-center p-4 font-bold font-lato text-xl tracking-wider">
          Bandung, Indonesia
        </p>
        <Button className="absolute z-10 -bottom-[12%] -left-[92%] font-amaranth text-lg px-8 py-1.5 text-center bg-secondary text-primary rounded-md font-bold">
          DOWNLOAD CV
        </Button>
        <Button className="absolute z-10 -bottom-[12%] -left-10 font-amaranth text-lg px-8 py-1.5 text-center bg-secondary text-primary rounded-md font-bold">
          DOWNLOAD PORTFOLIO
        </Button>
      </div>
    </div>
  );
};

export default Header;
