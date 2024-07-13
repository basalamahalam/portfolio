import Gambar from "../assets/alam.png";
import { Button } from "@nextui-org/button";

const Projects = () => {
  return (
    <div className="min-h-full pt-28 px-32 pb-20 bg-gradient-to-b from-primary to-[#051923]">
      <h1 className="font-black font-lato text-4xl text-white text-center tracking-widest">
        PROJECTS
      </h1>
      <div className="mt-10 flex items-start justify-start bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-6 rounded-xl">
        <img
          src={Gambar}
          alt="data"
          className="w-[400px] bg-slate-300 mr-10 rounded-lg shadow-lg"
        />
        <div>
          <div className="max-w-fit bg-[#f49e21] py-1 px-4 rounded-lg">
            <h1 className="text-black font-bold font-lato text-sm tracking-wide">
              Website
            </h1>
          </div>
          <h1 className="mt-5 text-2xl font-lato font-black text-white tracking-wider">
            GOReserve
          </h1>
          <p className="mt-2 text-white font-light font-lato text-md">
            Developed a website for GOReserve using Laravek and Tailwind CSS.
            This website provides information about Sporthall and blablabla.
          </p>
          <Button className="mt-5 font-poppins text-lg px-8 py-1.5 text-center bg-secondary text-primary rounded-md font-bold">
            VIEW GITHUB
          </Button>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-end bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-6 rounded-xl">
        <div>
          <div className="max-w-fit bg-[#f49e21] py-1 px-4 rounded-lg">
            <h1 className="text-black font-bold font-lato text-sm tracking-wide">
              Website
            </h1>
          </div>
          <h1 className="mt-5 text-2xl font-lato font-black text-white tracking-wider">
            SISPEK13 Ver.2
          </h1>
          <p className="mt-2 text-white font-light font-lato text-md">
            Developed a website for GOReserve using Laravek and Tailwind CSS.
            This website provides information about Sporthall and blablabla.
          </p>
          <Button className="mt-5 font-poppins text-lg px-8 py-1.5 text-center bg-secondary text-primary rounded-md font-bold">
            VIEW GITHUB
          </Button>
        </div>
        <img
          src={Gambar}
          alt="data"
          className="w-[400px] bg-slate-300 ml-10 rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-5 flex items-start justify-start bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-6 rounded-xl">
        <img
          src={Gambar}
          alt="data"
          className="w-[400px] bg-slate-300 mr-10 rounded-lg shadow-lg"
        />
        <div>
          <div className="max-w-fit bg-[#f49e21] py-1 px-4 rounded-lg">
            <h1 className="text-black font-bold font-lato text-sm tracking-wide">
              Website
            </h1>
          </div>
          <h1 className="mt-5 text-2xl font-lato font-black text-white tracking-wider">
            SISPEK13 Ver.1
          </h1>
          <p className="mt-2 text-white font-light font-lato text-md">
            Developed a website for GOReserve using Laravek and Tailwind CSS.
            This website provides information about Sporthall and blablabla.
          </p>
          <Button className="mt-5 font-poppins text-lg px-8 py-1.5 text-center bg-secondary text-primary rounded-md font-bold">
            VIEW GITHUB
          </Button>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-end bg-gradient-to-r from-[#081424] to-[#051923] border-1 border-slate-800 p-6 rounded-xl">
        <div>
          <div className="max-w-fit bg-[#f49e21] py-1 px-4 rounded-lg">
            <h1 className="text-black font-bold font-lato text-sm tracking-wide">
              Website
            </h1>
          </div>
          <h1 className="mt-5 text-2xl font-lato font-black text-white tracking-wider">
            LenderUp
          </h1>
          <p className="mt-2 text-white font-light font-lato text-md">
            Developed a website for GOReserve using Laravek and Tailwind CSS.
            This website provides information about Sporthall and blablabla.
          </p>
          <Button className="mt-5 font-poppins text-lg px-8 py-1.5 text-center bg-secondary text-primary rounded-md font-bold">
            VIEW GITHUB
          </Button>
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
