import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlutter } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";

const Skills = () => {
  return (
    <div className="bg-gradient-to-t from-[#03071e] to-[#051923] px-32">
      <h1 className="text-white font-lato font-bold text-2xl tracking-wider">
        My Skills
      </h1>
      <div className="py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start w-[200px]">
            <FaHtml5 className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              HTML
            </h1>
          </div>
          <div className="flex items-center justify-start w-[200px]">
            <IoLogoCss3 className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              CSS
            </h1>
          </div>
          <div className="flex items-center justify-start w-[200px]">
            <IoLogoJavascript className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              Javascript
            </h1>
          </div>
          <div className="flex items-center justify-start w-[200px]">
            <FaReact className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              ReactJs
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center justify-start w-[200px]">
            <RiNextjsFill className="text-white text-4xl mr-5" />
            <h1 className="text-white font-medium font-lato text-xl tracking-wider">
              NextJs
            </h1>
          </div>
          <div className="flex items-center justify-start w-[200px]">
            <FaLaravel className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              Laravel
            </h1>
          </div>
          <div className="flex items-center justify-start w-[200px]">
            <DiCodeigniter className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              Codeigniter
            </h1>
          </div>
          <div className="flex items-center justify-start w-[200px]">
            <SiFlutter className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl tracking-wider text-white">
              Flutter
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center justify-start w-[200px]">
            <RiTailwindCssFill className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              TailwindCSS
            </h1>
          </div>
          <div className="flex items-center justify-start w-[200px]">
            <FaBootstrap className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              Bootstrap
            </h1>
          </div>
          <div className="flex items-center justify-start w-[200px]">
            <FiFigma className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              Figma
            </h1>
          </div>
          <div className="flex items-center justify-start w-[200px]">
            <IoLogoGithub className="text-white text-4xl mr-5" />
            <h1 className="font-lato font-medium text-xl text-white tracking-wider">
              Github
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
