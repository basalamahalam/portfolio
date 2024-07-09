import { IoBook } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { IoPeopleCircle } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";

const Cv = () => {
  return (
    <div className="pt-28 px-32 min-h-screen bg-gradient-to-b from-primary to-[#051923]">
      <h1 className="font-black font-lato text-4xl text-white text-center tracking-widest">
        RESUME
      </h1>
      <div className="mt-5 mb-2 flex items-center justify-start">
        <IoBook className=" text-[#f49e21] text-2xl" />
        <h1 className="text-white font-lato font-bold text-2xl ml-5">
          Education
        </h1>
      </div>
      <ul class="list-none">
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 h-full border-white"></div> */}
              <div class="bg-[#f49e21] border-2 border-black rounded-full h-5 w-5 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-lg">
                  Bachelor Degree, Universitas Pendidikan Indonesia
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Sept 2021 - Present
              </p>
              <p className="text-white">Current GPA: 3.81/4.00</p>
              <p className="text-white">
                Activities & Societies: BEM Kemakom, Cerchio Yearbook, ConCo,{" "}
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 h-full border-white"></div> */}
              <div class="bg-[#f49e21] border-2 border-black rounded-full h-5 w-5 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white font-lato text-lg ml-5">
                  SMK Negeri 13 Bandung
                </h1>
              </div>
            </div>
          </div>
        </li>
      </ul>
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
