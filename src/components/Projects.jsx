import Gambar from "../assets/alam.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="min-h-full pt-28 px-32 pb-20 bg-gradient-to-b from-primary to-[#051923]">
      <h1 className="font-black font-lato text-4xl text-white text-center tracking-widest">
        PROJECTS
      </h1>
      <div className="mt-10 flex items-center justify-start bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-6 rounded-xl">
        <img
          src={Gambar}
          alt="data"
          className="w-[400px] bg-slate-300 mr-10 rounded-lg shadow-lg"
        />
        <div>
          <div className="flex justify-start items-center">
            <h1 className="mr-3 text-2xl font-inter font-bold text-white tracking-wider">
              GOReserve
            </h1>
            <div className="max-w-fit border-1 border-slate-400 py-1 px-3 rounded-br-lg rounded-tl-lg">
              <h1 className="text-slate-300  font-lato text-xs tracking-wide">
                Website
              </h1>
            </div>
          </div>
          <p className="mt-2 text-slate-400 font-light font-inter">
            Developed a website for GOReserve using Laravel and Tailwind CSS.
            This website provides information about sports halls and more.
          </p>
          <div className="mt-5 flex justify-start items-center">
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3">
              <p className="text-teal-300 text-xs">Laravel</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3">
              <p className="text-teal-400 text-xs">TailwindCSS</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3">
              <p className="text-teal-400 text-xs">Midtrans</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3">
              <p className="text-teal-400 text-xs">Styled Components</p>
            </div>
            <div className="p-1 px-2 bg-teal-400/10 rounded-lg mr-3">
              <p className="text-teal-400 text-xs">Redis</p>
            </div>
          </div>
          <button className="flex items-center justify-evenly mt-10 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border-1 border-slate-600 text-gray-300 hover:border-slate-900 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
            <p className="mr-2">View Github</p>
            <FaGithub />
          </button>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-end bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-6 rounded-xl">
        <div>
          <div className="max-w-fit bg-teal-600 py-1 px-3 rounded-lg">
            <h1 className="text-black font-bold font-inter text-xs tracking-wide">
              Website
            </h1>
          </div>
          <h1 className="mt-5 text-2xl font-inter font-bold text-white tracking-wider">
            SISPEK13 Ver.2
          </h1>
          <p className="mt-2 text-slate-400 font-light font-inter">
            Developed a website for GOReserve using Laravek and Tailwind CSS.
            This website provides information about Sporthall and blablabla.
          </p>
          <button className="flex items-center justify-evenly mt-5 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border-2 border-slate-900 text-gray-300 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
            <p className="mr-2">View Github</p>
            <FaGithub />
          </button>
        </div>
        <img
          src={Gambar}
          alt="data"
          className="w-[400px] bg-slate-300 ml-10 rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-5 flex items-center justify-start bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-6 rounded-xl">
        <img
          src={Gambar}
          alt="data"
          className="w-[400px] bg-slate-300 mr-10 rounded-lg shadow-lg"
        />
        <div>
          <div className="max-w-fit bg-teal-600 py-1 px-3 rounded-lg">
            <h1 className="text-black font-bold font-inter text-xs tracking-wide">
              Website
            </h1>
          </div>
          <h1 className="mt-5 text-2xl font-inter font-bold text-white tracking-wider">
            SISPEK13 Ver.1
          </h1>
          <p className="mt-2 text-slate-400 font-light font-inter">
            Developed a website for GOReserve using Laravek and Tailwind CSS.
            This website provides information about Sporthall and blablabla.
          </p>
          <button className="flex items-center justify-evenly mt-5 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border-2 border-slate-900 text-gray-300 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
            <p className="mr-2">View Github</p>
            <FaGithub />
          </button>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-end bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-6 rounded-xl">
        <div>
          <div className="max-w-fit bg-teal-600 py-1 px-3 rounded-lg">
            <h1 className="text-black font-bold font-inter text-xs tracking-wide">
              Website
            </h1>
          </div>
          <h1 className="mt-5 text-2xl font-inter font-bold text-white tracking-wider">
            LenderUp
          </h1>
          <p className="mt-2 text-slate-400 font-light font-inter">
            Developed a website for GOReserve using Laravek and Tailwind CSS.
            This website provides information about Sporthall and blablabla.
          </p>
          <button className="flex items-center justify-evenly mt-5 font-poppins px-6 py-1.5 tracking-wide rounded-md font-bold border-2 border-slate-900 text-gray-300 hover:bg-slate-900 hover:text-teal-400 transition duration-500">
            <p className="mr-2">View Github</p>
            <FaGithub />
          </button>
        </div>
        <img
          src={Gambar}
          alt="data"
          className="w-[400px] bg-slate-300 ml-10 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Projects;
