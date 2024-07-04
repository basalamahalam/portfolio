import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-4">
      <h1 className="text-center text-white font-poppins text-sm tracking-widest">
        Made with <span className="text-red-600">❤</span> by Alam
      </h1>
      <div className="flex items-center justify-center mt-2">
        <FaRegCopyright className="text-xs text-white mr-2" />
        <h1 className="text-white font-poppins text-sm tracking-widest">
          2024 - All right reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
