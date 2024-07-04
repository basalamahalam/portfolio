import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlutter } from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const Skills = () => {
  return (
    <div className="bg-gradient-to-t from-[#03071e] to-[#051923] px-32">
      <h1 className="text-white font-lato font-bold text-2xl tracking-wider">
        My Skills
      </h1>
      <div className="flex items-center justify-center">
        <FaHtml5 className="text-white text-4xl" />
        <IoLogoCss3 className="text-white text-4xl" />
        <IoLogoJavascript className="text-white text-4xl" />
        <FaReact className="text-white text-4xl" />
      </div>
      <RiNextjsFill className="text-white text-4xl" />
    </div>
  );
};

export default Skills;
