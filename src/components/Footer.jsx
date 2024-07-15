import { FaRegCopyright } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { AiFillDribbbleCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="px-10 xl:px-32 lg:px-20 py-4 flex md:flex-row flex-col items-center justify-center md:justify-between">
      <div className="hidden md:block">
        <h1 className="text-center text-slate-100 font-inter tracking-widest mr-0 md:mr-5">
          Muhammad Alam Basalamah
        </h1>
        <div className="flex justify-start items-center mt-1.5">
          <FaRegCopyright className="text-xs text-white mr-2" />
          <h1 className="text-slate-200 font-inter font-light text-xs tracking-wider">
            2024 - All right reserved
          </h1>
        </div>
      </div>
      <div className="flex w-[200px] justify-between items-center">
        <a
          href="https://www.linkedin.com/in/basalamahalam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-slate-500 text-lg hover:text-teal-400 hover:scale-125 transition-all ease-in-out duration-500" />
        </a>
        <a
          href="https://www.instagram.com/_bslmhalam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialInstagram className="text-slate-500 text-lg hover:text-teal-400 hover:scale-125 transition-all ease-in-out duration-500" />
        </a>
        <a
          href="https://github.com/basalamahalam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-slate-500 text-lg hover:text-teal-400 hover:scale-125 transition-all ease-in-out duration-500" />
        </a>
        <a
          href="https://dribbble.com/advntresupp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillDribbbleCircle className="text-slate-500 text-lg hover:text-teal-400 hover:scale-125 transition-all ease-in-out duration-500" />
        </a>
        <a
          href="mailto: basalamahalam2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoGmail className="text-slate-500 text-lg hover:text-teal-400 hover:scale-125 transition-all ease-in-out duration-500" />
        </a>
      </div>
      <div className="md:hidden flex justify-center items-center mt-4">
        <FaRegCopyright className="text-[9px] text-white mr-2" />
        <h1 className="text-slate-200 font-inter font-light text-[9px]">
          Muhammad Alam Basalamah 2024 - All right reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
