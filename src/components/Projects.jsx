import Gambar from "../assets/alam.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="min-h-full pt-28 px-10 md:px-32 pb-20 bg-gradient-to-b from-primary to-[#051923]">
      <h1 className="font-black font-lato text-3xl lg:text-4xl text-white text-center tracking-widest">
        PROJECTS
      </h1>
      <div className="mt-12 block lg:flex items-center justify-start bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-4 lg:p-6 rounded-xl">
        <img
          src={Gambar}
          alt="data"
          className="hidden lg:block lg:w-[400px] bg-slate-300 mr-10 rounded-lg shadow-lg"
        />
        <div>
          <div className="lg:mt-0 flex justify-start items-center">
            <h1 className="mr-3 text-xl lg:text-2xl font-inter font-bold text-white tracking-wider">
              GOReserve
            </h1>
            <div className="max-w-fit border-1 border-slate-400 py-1 px-2 lg:px-3 rounded-br-lg rounded-tl-lg">
              <h1 className="text-slate-300  font-lato text-[9px] lg:text-xs tracking-wide">
                Website
              </h1>
            </div>
          </div>
          <p className="mt-3 lg:mt-2 text-slate-400 font-light font-inter lg:text-base text-sm lg:text-left text-justify text-justify lg:text-left">
            Developed a website for GOReserve using Laravel and Tailwind CSS.
            This website provides information about sports halls and more.
          </p>
          <div className="flex xl:flex-nowrap flex-wrap justify-start items-center">
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-300 text-xs">Laravel</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">TailwindCSS</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Midtrans</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Styled Components</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Redis</p>
            </div>
          </div>
          <a
            href="https://github.com/arjunamhv/GOReserve"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-evenly mt-6 lg:mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border-1 border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
              <p className="mr-2">View Github</p>
              <FaGithub />
            </button>
          </a>
        </div>
      </div>
      <div className="mt-5 lg:flex items-center justify-end bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-4 lg:p-6 rounded-xl">
        <div>
          <div className="flex justify-start items-center">
            <h1 className="mr-3 text-xl lg:text-2xl font-inter font-bold text-white tracking-wider">
              SISPEK13 Ver.2
            </h1>
            <div className="max-w-fit border-1 border-slate-400 py-1 lg:px-3 px-2 mr-3 rounded-br-lg rounded-tl-lg">
              <h1 className="text-slate-300  font-lato text-[9px] lg:text-xs tracking-wide">
                Website
              </h1>
            </div>
            <div className="max-w-fit border-1 border-slate-400 py-1 lg:px-3 px-2 rounded-br-lg rounded-tl-lg">
              <h1 className="text-slate-300 font-lato text-[9px] lg:text-xs tracking-wide">
                UI/UX
              </h1>
            </div>
          </div>
          <p className="mt-2 text-slate-400 font-light font-inter lg:text-base text-sm lg:text-left text-justify">
            Updated the website by adding Tailwind CSS, Redis, a queue system,
            and authorization. These enhancements improve the website's design,
            and performance, providing a more efficient and user-friendly
            experience for managing and accessing information about SISPEK13.
          </p>
          <div className="flex xl:flex-nowrap flex-wrap justify-start items-center">
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-300 text-xs">Laravel</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">TailwindCSS</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Javascript</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Styled Components</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Redis</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Queue System</p>
            </div>
          </div>
          <a
            href="https://github.com/basalamahalam/SISPEK13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-evenly mt-6 lg:mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border-1 border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
              <p className="mr-2">View Github</p>
              <FaGithub />
            </button>
          </a>
        </div>
        <img
          src={Gambar}
          alt="data"
          className="hidden lg:block lg:w-[400px] bg-slate-300 ml-10 rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-5 fllg:ex items-center justify-start bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-4 lg:p-6 rounded-xl">
        <img
          src={Gambar}
          alt="data"
          className="hidden lg:block lg:w-[400px] bg-slate-300 mr-10 rounded-lg shadow-lg"
        />
        <div>
          <div className="flex justify-start items-center">
            <h1 className="mr-3 text-xl lg:text-2xl font-inter font-bold text-white tracking-wider">
              SISPEK13 Ver.1
            </h1>
            <div className="max-w-fit border-1 border-slate-400 py-1 lg:px-3 px-2 mr-3 rounded-br-lg rounded-tl-lg">
              <h1 className="text-slate-300  font-lato text-[9px] lg:text-xs tracking-wide">
                Website
              </h1>
            </div>
            <div className="max-w-fit border-1 border-slate-400 py-1 lg:px-3 px-2 rounded-br-lg rounded-tl-lg">
              <h1 className="text-slate-300 font-lato text-[9px] lg:text-xs tracking-wide">
                UI/UX
              </h1>
            </div>
          </div>
          <p className="mt-2 text-slate-400 font-light font-inter lg:text-base text-sm lg:text-left text-justify">
            Developed by a team, we used Laravel and Tailwind CSS to create a
            website that provides information about organizations at SMKN 13
            Bandung. This website showcases activities and how to join the
            organizations, making it easier for students and the community to
            access the latest information.
          </p>
          <div className="flex xl:flex-nowrap flex-wrap justify-start items-center">
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-300 text-xs">Laravel</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">CSS</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Javascript</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Styled Components</p>
            </div>
          </div>
          <a
            href="https://github.com/basalamahalam/SISPEK13-Ver.1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-evenly mt-6 lg:mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border-1 border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
              <p className="mr-2">View Github</p>
              <FaGithub />
            </button>
          </a>
        </div>
      </div>
      <div className="mt-5 lg:flex items-center justify-end bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-4 lg:p-6 rounded-xl">
        <div>
          <div className="flex justify-start items-center">
            <h1 className="mr-3 text-xl lg:text-2xl font-inter font-bold text-white tracking-wider">
              LenderUp
            </h1>
            <div className="max-w-fit border-1 border-slate-400 py-1 lg:px-3 px-2 mr-3 rounded-br-lg rounded-tl-lg">
              <h1 className="text-slate-300  font-lato text-[9px] lg:text-xs tracking-wide">
                Mobile Apps
              </h1>
            </div>
            <div className="max-w-fit border-1 border-slate-400 py-1 lg:px-3 px-2 rounded-br-lg rounded-tl-lg">
              <h1 className="text-slate-300 font-lato text-[9px] lg:text-xs tracking-wide">
                UI/UX
              </h1>
            </div>
          </div>
          <p className="mt-2 text-slate-400 font-light font-inter lg:text-base text-sm lg:text-left text-justify">
            Developed a peer-to-peer (P2P) lending mobile app using Flutter,
            focusing on UI/UX design and frontend development for both borrower
            and lender interfaces.
          </p>
          <div className="flex xl:flex-nowrap flex-wrap justify-start items-center">
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-300 text-xs">Flutter</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Dart</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Figma</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">Styled Components</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3 mt-3 xl:mt-5">
              <p className="text-teal-400 text-xs">FastAPI</p>
            </div>
          </div>
          <a
            href="https://github.com/basalamahalam/Kelompok6_TubesProvis_LenderUp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-evenly mt-6 lg:mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border-1 border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
              <p className="mr-2">View Github</p>
              <FaGithub />
            </button>
          </a>
        </div>
        <img
          src={Gambar}
          alt="data"
          className="hidden lg:block lg:w-[400px] bg-slate-300 ml-10 rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-10 flex justify-center items-center">
        <p className="text-white font-inter font-light mr-2 text-sm">
          Need to see more?
        </p>
        <a
          href="mailto:basalamahalam2@gmail.com"
          rel="noopener noreferrer"
          className="text-teal-400 font-inter font-light text-sm"
        >
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Projects;
