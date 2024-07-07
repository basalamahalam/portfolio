import { IoBook } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { IoPeopleCircle } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { Timeline } from "primereact/timeline";

const Cv = () => {
  return (
    <div className="pt-28 px-32 mt-4 min-h-screen bg-gradient-to-b from-primary to-[#051923]">
      <h1 className="font-black font-lato text-4xl text-white text-center tracking-widest">
        RESUME
      </h1>
      <div className="mt-5 flex items-center justify-start">
        <IoBook className="text-[#f49e21] text-2xl" />
        <h1 className="text-white font-lato font-bold text-2xl ml-5">
          Education
        </h1>
      </div>
      <div className="mt-5 flex items-center justify-start">
        <IoBriefcase className="text-[#f49e21] text-2xl" />
        <h1 className="text-white font-lato font-bold text-2xl ml-5">
          Experiences
        </h1>
      </div>
      <div className="mt-5 flex items-center justify-start">
        <IoSchoolSharp className="text-[#f49e21] text-2xl" />
        <h1 className="text-white font-lato font-bold text-2xl ml-5">
          Courses
        </h1>
      </div>
      <div className="mt-5 flex items-center justify-start">
        <IoPeopleCircle className="text-[#f49e21] text-2xl" />
        <h1 className="text-white font-lato font-bold text-2xl ml-5">
          Organizations
        </h1>
      </div>
    </div>
  );
};

export default Cv;
