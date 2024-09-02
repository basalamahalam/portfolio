import Motoom from "../assets/motoom.png";
import Lender from "../assets/lenderup.png";
import Goreserve from "../assets/goreserve.png";
import Sispek1 from "../assets/sispek-1.png";
import Sispek2 from "../assets/sispek-2.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="min-h-full pt-28 px-10 lg:px-20 xl:px-32 2xl:px-64 pb-20 bg-gradient-to-b from-primary to-[#051923] animate-fadeIn">
      <h1 className="text-3xl font-black tracking-widest text-center text-white font-lato lg:text-4xl">
        PROJECTS
      </h1>
      <div className="mt-12 block lg:flex items-center justify-start bg-gradient-to-r from-[rgb(8,20,36)] to-[#051923] border border-slate-800 p-4 lg:p-6 rounded-xl hover:scale-105 transition-all ease-out duration-500">
        <img
          src={Goreserve}
          alt="data"
          className="hidden lg:block lg:w-[350px] xl:w-[400px] bg-slate-300 mr-10 rounded-lg shadow-lg"
        />
        <div>
          <div className="flex items-center justify-start lg:mt-0">
            <h1 className="mr-3 text-xl font-bold tracking-wider text-white lg:text-2xl font-inter">
              GOReserve
            </h1>
            <div className="px-2 py-1 border rounded-tl-lg rounded-br-lg max-w-fit border-slate-400 lg:px-3">
              <h1 className="text-slate-300  font-lato text-[9px] lg:text-xs tracking-wide">
                Website
              </h1>
            </div>
          </div>
          <p className="mt-3 text-sm font-light text-justify lg:mt-2 text-slate-400 font-inter lg:text-base lg:text-left">
            Developed a website for GOReserve using Laravel and Tailwind CSS.
            This website provides information about sports halls and more.
          </p>
          <div className="flex flex-wrap items-center justify-start xl:flex-nowrap">
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-300">Laravel</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">TailwindCSS</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Midtrans</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Styled Components</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Redis</p>
            </div>
          </div>
          <a
            href="https://github.com/arjunamhv/GOReserve"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-evenly mt-6 lg:mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
              <p className="mr-2">View Github</p>
              <FaGithub />
            </button>
          </a>
        </div>
      </div>
      <div className="mt-5 lg:flex items-center justify-end bg-gradient-to-r from-[#081424] to-[#051923] border border-slate-800 p-4 lg:p-6 rounded-xl hover:scale-105 transition-all ease-out duration-500">
        <div>
          <div className="flex items-center justify-start">
            <h1 className="mr-3 text-xl font-bold tracking-wider text-white lg:text-2xl font-inter">
              SISPEK13 Ver.2
            </h1>
            <div className="px-2 py-1 mr-3 border rounded-tl-lg rounded-br-lg max-w-fit border-slate-400 lg:px-3">
              <h1 className="text-slate-300  font-lato text-[9px] lg:text-xs tracking-wide">
                Website
              </h1>
            </div>
            <div className="px-2 py-1 border rounded-tl-lg rounded-br-lg max-w-fit border-slate-400 lg:px-3">
              <h1 className="text-slate-300 font-lato text-[9px] lg:text-xs tracking-wide">
                UI/UX
              </h1>
            </div>
          </div>
          <p className="mt-2 text-sm font-light text-justify text-slate-400 font-inter lg:text-base lg:text-left">
            Updated the website by adding Tailwind CSS, Redis, a queue system,
            and authorization. These enhancements improve the website's design,
            and performance, providing a more efficient and user-friendly
            experience for managing and accessing information about SISPEK13.
          </p>
          <div className="flex flex-wrap items-center justify-start xl:flex-nowrap">
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-300">Laravel</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">TailwindCSS</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Javascript</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Styled Components</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Redis</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Queue System</p>
            </div>
          </div>
          <a
            href="https://github.com/basalamahalam/SISPEK13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-evenly mt-6 lg:mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
              <p className="mr-2">View Github</p>
              <FaGithub />
            </button>
          </a>
        </div>
        <img
          src={Sispek2}
          alt="data"
          className="hidden lg:block lg:w-[350px] xl:w-[400px] bg-slate-300 ml-10 rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-5 flex items-center justify-start bg-gradient-to-r from-[#081424] to-[#051923] border border-slate-800 p-4 lg:p-6 rounded-xl hover:scale-105 transition-all ease-out duration-500">
        <img
          src={Sispek1}
          alt="data"
          className="hidden lg:block lg:w-[350px] xl:w-[400px] bg-slate-300 mr-10 rounded-lg shadow-lg"
        />
        <div>
          <div className="flex items-center justify-start">
            <h1 className="mr-3 text-xl font-bold tracking-wider text-white lg:text-2xl font-inter">
              SISPEK13 Ver.1
            </h1>
            <div className="px-2 py-1 mr-3 border rounded-tl-lg rounded-br-lg max-w-fit border-slate-400 lg:px-3">
              <h1 className="text-slate-300  font-lato text-[9px] lg:text-xs tracking-wide">
                Website
              </h1>
            </div>
            <div className="px-2 py-1 border rounded-tl-lg rounded-br-lg max-w-fit border-slate-400 lg:px-3">
              <h1 className="text-slate-300 font-lato text-[9px] lg:text-xs tracking-wide">
                UI/UX
              </h1>
            </div>
          </div>
          <p className="mt-2 text-sm font-light text-justify text-slate-400 font-inter lg:text-base lg:text-left">
            Developed by a team, we used Laravel and Tailwind CSS to create a
            website that provides information about organizations at SMKN 13
            Bandung. This website showcases activities and how to join the
            organizations, making it easier for students and the community to
            access the latest information.
          </p>
          <div className="flex flex-wrap items-center justify-start xl:flex-nowrap">
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-300">Laravel</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">CSS</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Javascript</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Styled Components</p>
            </div>
          </div>
          <a
            href="https://github.com/basalamahalam/SISPEK13-Ver.1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-evenly mt-6 lg:mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
              <p className="mr-2">View Github</p>
              <FaGithub />
            </button>
          </a>
        </div>
      </div>
      <div className="mt-5 lg:flex items-center justify-end bg-gradient-to-r from-[#081424] to-[#051923] border border-slate-800 p-4 lg:p-6 rounded-xl hover:scale-105 transition-all ease-out duration-500">
        <div>
          <div className="flex items-center justify-start">
            <h1 className="mr-3 text-xl font-bold tracking-wider text-white lg:text-2xl font-inter">
              LenderUp
            </h1>
            <div className="px-2 py-1 mr-3 border rounded-tl-lg rounded-br-lg max-w-fit border-slate-400 lg:px-3">
              <h1 className="text-slate-300  font-lato text-[9px] lg:text-xs tracking-wide">
                Mobile
              </h1>
            </div>
            <div className="px-2 py-1 border rounded-tl-lg rounded-br-lg max-w-fit border-slate-400 lg:px-3">
              <h1 className="text-slate-300 font-lato text-[9px] lg:text-xs tracking-wide">
                UI/UX
              </h1>
            </div>
          </div>
          <p className="mt-2 text-sm font-light text-justify text-slate-400 font-inter lg:text-base lg:text-left">
            Developed a peer-to-peer (P2P) lending mobile app using Flutter,
            focusing on UI/UX design and frontend development for both borrower
            and lender interfaces.
          </p>
          <div className="flex flex-wrap items-center justify-start xl:flex-nowrap">
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-300">Flutter</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Dart</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Figma</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Styled Components</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">FastAPI</p>
            </div>
          </div>
          <a
            href="https://github.com/basalamahalam/Kelompok6_TubesProvis_LenderUp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-evenly mt-6 lg:mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
              <p className="mr-2">View Github</p>
              <FaGithub />
            </button>
          </a>
        </div>
        <img
          src={Lender}
          alt="data"
          className="hidden lg:block lg:w-[350px] xl:w-[400px] bg-slate-300 ml-10 rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-5 flex items-center justify-start bg-gradient-to-r from-[#081424] to-[#051923] border border-slate-800 p-4 lg:p-6 rounded-xl hover:scale-105 transition-all ease-out duration-500">
        <img
          src={Motoom}
          alt="data"
          className="hidden lg:block lg:w-[350px] xl:w-[400px] bg-slate-300 mr-10 rounded-lg shadow-lg"
        />
        <div>
          <div className="flex items-center justify-start">
            <h1 className="mr-3 text-xl font-bold tracking-wider text-white lg:text-2xl font-inter">
              MOTOOM
            </h1>
            <div className="px-2 py-1 mr-3 border rounded-tl-lg rounded-br-lg max-w-fit border-slate-400 lg:px-3">
              <h1 className="text-slate-300  font-lato text-[9px] lg:text-xs tracking-wide">
                Website
              </h1>
            </div>
            <div className="px-2 py-1 border rounded-tl-lg rounded-br-lg max-w-fit border-slate-400 lg:px-3">
              <h1 className="text-slate-300 font-lato text-[9px] lg:text-xs tracking-wide">
                IoT
              </h1>
            </div>
          </div>
          <p className="mt-2 text-sm font-light text-justify text-slate-400 font-inter lg:text-base lg:text-left">
            Developed by a team using PHP, Bootstrap, HTML, JavaScript, and
            SCSS, this website integrates with an IoT system to monitor soil
            moisture levels. The website allows users to view real-time soil
            moisture data, enabling them to determine whether their plants need
            watering. With a user-friendly interface and efficient data
            management, MOTOOM makes plant maintenance more effective.
          </p>
          <div className="flex flex-wrap items-center justify-start xl:flex-nowrap">
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-300">Bootstrap</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Arduino</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Javascript</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">Styled Components</p>
            </div>
            <div className="p-1 px-2 mt-3 mr-3 rounded-lg bg-teal-400/10 xl:mt-5">
              <p className="text-xs text-teal-400">SCSS</p>
            </div>
          </div>
          <a
            href="https://github.com/basalamahalam/MOTOOM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-evenly mt-6 lg:mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
              <p className="mr-2">View Github</p>
              <FaGithub />
            </button>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p className="mr-2 text-sm font-light text-white font-inter">
          Need to see more?
        </p>
        <a
          href="mailto:basalamahalam2@gmail.com"
          rel="noopener noreferrer"
          className="text-sm font-light text-teal-400 font-inter"
        >
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Projects;
