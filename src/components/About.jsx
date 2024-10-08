import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { IoIosFootball } from "react-icons/io";
import Gambar from "../assets/foto.png";

const About = () => {
  return (
    <div className="px-10 lg:px-20 xl:px-32 2xl:px-64 py-10 lg:py-24 xl:py-32 bg-gradient-to-b from-[#021219] to-[#051923] animate-fadeIn">
      <div className="items-center hidden mt-0 lg:mt-8 xl:mt-10 lg:flex justify-evenly">
        {/* button ya jangan lupa */}
        <a
          href="https://www.linkedin.com/in/basalamahalam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-4xl transition-all duration-500 ease-in-out text-slate-500 hover:text-teal-400 hover:scale-125" />
        </a>
        <a
          href="https://www.instagram.com/_bslmhalam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialInstagram className="text-4xl transition-all duration-500 ease-in-out text-slate-500 hover:text-teal-400 hover:scale-125" />
        </a>
        <a
          href="https://github.com/basalamahalam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-4xl transition-all duration-500 ease-in-out text-slate-500 hover:text-teal-400 hover:scale-125" />
        </a>
        <a
          href="https://dribbble.com/advntresupp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillDribbbleCircle className="text-4xl transition-all duration-500 ease-in-out text-slate-500 hover:text-teal-400 hover:scale-125" />
        </a>
        <a
          href="mailto: basalamahalam2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoGmail className="text-4xl transition-all duration-500 ease-in-out text-slate-500 hover:text-teal-400 hover:scale-125" />
        </a>
      </div>
      <div className="mt-[100px]">
        <h1 className="text-4xl font-bold tracking-wider text-center text-white font-lato md:text-5xl lg:text-7xl">
          Hello, I'm <span className="text-secondary">Alam</span>!
        </h1>
        <h3 className="mt-3 text-2xl font-medium tracking-wide text-center md:mt-5 font-lato md:text-4xl lg:text-5xl text-slate-500">
          Software Developer
        </h3>
        <img
          src={Gambar}
          alt="Alam"
          className="block md:hidden w-[150px] mt-5 mx-auto"
        />
        <div className="items-center justify-around mt-10 md:mt-16 md:flex">
          <div className="w-full md:w-[300px] lg:w-[350px] xl:w-[400px] bg-gradient-to-r from-[#081424] to-[#051923] border border-slate-800 rounded-lg p-5">
            <div className="flex items-center justify-start">
              <IoPersonCircleSharp className="text-2xl text-slate-400 lg:text-3xl" />
              <div className="ml-5">
                <h1 className="text-base font-medium text-white md:text-lg lg:text-xl font-inter">
                  Full Name
                </h1>
                <p className="text-xs tracking-wider text-slate-300 md:text-sm font-inter">
                  Muhammad Alam Basalamah
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start mt-4">
              <ImLocation className="text-2xl text-slate-400 lg:text-3xl" />
              <div className="ml-5">
                <h1 className="text-base font-medium text-white md:text-lg lg:text-xl font-inter">
                  Location
                </h1>
                <p className="text-xs tracking-wider text-slate-300 md:text-sm font-inter">
                  Bandung, West Java, Indonesia
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start mt-4">
              <IoIosFootball className="text-slate-400 text-[32px]" />
              <div className="ml-5">
                <h1 className="text-base font-medium text-white md:text-lg lg:text-xl font-inter">
                  Hobbies
                </h1>
                <p className="text-xs tracking-wider text-slate-300 md:text-sm font-inter">
                  Design, Exercise, & Playing Musical Instruments.
                </p>
              </div>
            </div>
          </div>
          <p className="w-full mt-10 md:mt-0 md:w-[300px] lg:w-[350px] xl:w-[500px] text-justify text-sm md:text-base lg:text-lg text-slate-300 font-light font-inter tracking-wide">
            I am a computer science student at Universitas Pendidikan Indonesia
            with a deep interest and strong motivation in the field of
            technology. I am always enthusiastic about learning new things and
            continuously seeking challenges and new experiences to improve
            myself. I also enjoy teamwork, communication, and problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
