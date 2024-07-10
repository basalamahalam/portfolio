import { IoBook } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { IoPeopleCircle } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";

const Cv = () => {
  return (
    <div className="pt-28 px-32 pb-20 min-h-screen bg-gradient-to-b from-primary to-[#051923]">
      <h1 className="font-black font-lato text-4xl text-white text-center tracking-widest">
        RESUME
      </h1>
      <div className="mt-5 mb-3 flex items-center justify-start">
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
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
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
                Activities & Societies: BEM Kemakom, Cerchio Yearbook, ConCo, &
                UPIGen.
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
            <div className="flex flex-col p-1 pr-6 ml-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white font-lato text-lg">
                  SMK Negeri 13 Bandung
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                July 2018 - July 2021
              </p>
              <p className="text-white">Current GPA: 90.3/100</p>
              <p className="text-white">
                Activities & Societies: OSIS, Pramuka, Forum OSIS Jawa Barat,
                Forum Komunikasi Siswa, Satgas Adhiwiyata, & JabarLed.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-5 mb-3 flex items-center justify-start">
        <IoBriefcase className="text-[#f49e21] text-2xl" />
        <h1 className="text-white font-lato font-bold text-2xl ml-5">
          Experiences
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
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-lg">
                  Frontend Web Developer Internship, PT. Jasamedika Saranatama
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Aug 2024 - May 2024
              </p>
              <p className="text-white">NGerjain apa</p>
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
            <div className="flex flex-col p-1 pr-6 ml-5 mb-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white font-lato text-lg">
                  Fullstack Web Developer, SISPEK Ver.2
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Nov 2023 - Feb 2024
              </p>
              <p className="text-white">Laravel</p>
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
            <div className="flex flex-col p-1 pr-6 ml-5 mb-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white font-lato text-lg">
                  Fullstack Web Developer, Sixth Projects (SISPEK Ver.1)
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Feb 2023 - May 2023
              </p>
              <p className="text-white">Laravel</p>
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
            <div className="flex flex-col p-1 pr-6 ml-5 mb-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white font-lato text-lg">
                  Mobile Developer, LenderUp
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Feb 2023 - May 2023
              </p>
              <p className="text-white">LAravel</p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-5 mb-3 flex items-center justify-start">
        <IoSchoolSharp className="text-[#f49e21] text-2xl" />
        <h1 className="text-white font-lato font-bold text-2xl ml-5">
          Courses
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
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-lg">
                  Fullstack Web Developer, PT. Gits Indonesia
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Aug 2023 - Jan 2024
              </p>
              <p className="text-white">NGerjain apa</p>
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
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-lg">
                  Junior Web Developer, Citra Sarana Bahasa dan Informatika
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Jan 2021 - Apr 2021
              </p>
              <p className="text-white">NGerjain apa</p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-5 mb-3 flex items-center justify-start">
        <IoPeopleCircle className="text-[#f49e21] text-2xl" />
        <h1 className="text-white font-lato font-bold text-2xl ml-5">
          Organizations
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
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-lg">BEM Kemakom FPMIPA UPI</h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Jan 2022 - Jan 2023
              </p>
              <p className="text-white">NGerjain apa</p>
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
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-lg">
                  Karang Taruna Kelurahan Binong
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Feb 2020 - Feb 2023
              </p>
              <p className="text-white">NGerjain apa</p>
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
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-lg">OSIS SMKN 13 Bandung</h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Nov 2019 - Nov 2020
              </p>
              <p className="text-white">NGerjain apa</p>
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
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-lg">
                  OSIS SMP Islam Al-Azhar 36 Bandung
                </h1>
              </div>
              <p className="text-[#f49e21] text-sm tracking-wide">
                Des 2015 - Dec 2016
              </p>
              <p className="text-white">NGerjain apa</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cv;
