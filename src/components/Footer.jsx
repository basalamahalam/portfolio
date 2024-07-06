import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-4 flex items-center justify-center">
      <h1 className="text-center text-white font-poppins text-sm tracking-widest mr-5">
        Made with <span className="text-red-600">❤</span> by Alam
      </h1>
      <FaRegCopyright className="text-xs text-white mr-2" />
      <h1 className="text-white font-poppins text-sm tracking-wider">
        2024 - All right reserved
      </h1>
    </div>
  );
};

export default Footer;
