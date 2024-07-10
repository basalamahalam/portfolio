import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { IoIosFootball } from "react-icons/io";

const About = () => {
  return (
    <div className="min-h-screen px-32 py-20 bg-gradient-to-b from-primary to-[#051923]">
      <div className="mt-24 flex items-center justify-evenly">
        {/* button ya jangan lupa */}
        <a
          href="https://www.linkedin.com/in/basalamahalam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-slate-500 hover:text-white text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/_bslmhalam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialInstagram className="text-slate-500 hover:text-white transition duration-400 text-4xl" />
        </a>
        <a
          href="https://github.com/basalamahalam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-slate-500 hover:text-white transition duration-400 text-4xl" />
        </a>
        <a
          href="https://x.com/basalamah_alam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-slate-500 hover:text-white transition duration-400 text-4xl" />
        </a>
        <a
          href="mailto: basalamahalam2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoGmail className="text-slate-500 hover:text-white transition duration-400 text-4xl" />
        </a>
      </div>
      <div className="mt-[100px]">
        <h1 className="text-center font-arima text-7xl text-white font-bold tracking-wider">
          Hello, I'm <span className="text-secondary">Alam</span>!
        </h1>
        <h3 className="mt-5 tracking-wide font-arima text-center text-5xl font-medium text-gradient">
          Frontend Developer
        </h3>
        <div className="mt-10 flex items-center justify-around">
          <p className="w-[400px] text-justify text-lg text-white font-light font-lato tracking-wide">
            I am a computer science student at Universitas Pendidikan Indonesia
            with a deep interest and strong motivation in the field of
            technology. I am always enthusiastic about learning new things and
            continuously seeking challenges and new experiences to improve
            myself. I also enjoy teamwork, communication, and problem-solving.
          </p>
          <div className="w-[400px] bg-gradient-to-tr from-[#051923] to-primary rounded-lg p-5">
            <div className="flex justify-start items-center">
              <IoPersonCircleSharp className="text-white text-3xl" />
              <div className="ml-5">
                <h1 className="text-white font-medium text-xl font-lato">
                  Full Name
                </h1>
                <p className="text-white font-light text-md tracking-wider font-lato">
                  Muhammad Alam Basalamah
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center mt-4">
              <ImLocation className="text-white text-3xl" />
              <div className="ml-5">
                <h1 className="text-white font-medium text-xl font-lato">
                  Location
                </h1>
                <p className="text-white font-light text-md tracking-wider font-lato">
                  Bandung, West Java, Indonesia
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center mt-4">
              <IoIosFootball className="text-white text-3xl" />
              <div className="ml-5">
                <h1 className="text-white font-medium text-xl font-lato">
                  Hobbies
                </h1>
                <p className="text-white font-light text-md tracking-wider font-lato">
                  Design, Exercise, & Playing Musical Instruments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
