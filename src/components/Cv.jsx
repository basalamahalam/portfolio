import { IoBook } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { IoPeopleCircle } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";

const Cv = () => {
  return (
    <div className="pt-28 md:px-32 px-10 pb-20 min-h-screen bg-gradient-to-b from-primary to-[#051923]">
      <h1 className="font-black font-lato md:text-4xl text-3xl text-white text-center tracking-widest">
        RESUME
      </h1>
      <div className="mt-12 md:mt-5 mb-3 flex items-center justify-start">
        <IoBook className=" text-slate-400 text-xl md:text-2xl" />
        <h1 className="text-white font-lato font-bold text-xl md:text-2xl ml-5">
          Education
        </h1>
      </div>
      <ul class="list-none">
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Bachelor Degree, Universitas Pendidikan Indonesia
                </h1>
              </div>
              <p className="text-secondary text-xs md:text-sm tracking-wide font-inter mb-5 mt-1 md:mt-0">
                Sept 2021 - Present
              </p>
              <p className="text-white font-inter text-sm md:text-base font-light">
                Current GPA: 3.81/4.00
              </p>
              <p className="text-slate-400 font-inter text-sm md:text-base font-light text-justify">
                Activities & Societies: BEM Kemakom, Cerchio Yearbook, ConCo,
                etc.
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 ml-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  SMK Negeri 13 Bandung
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                July 2018 - July 2021
              </p>
              <p className="text-white font-inter text-sm md:text-base font-light">
                Current GPA: 90.3/100
              </p>
              <p className="text-slate-400 font-inter text-sm md:text-base font-light text-justify">
                Activities & Societies: OSIS, Pramuka, Forum OSIS Jawa Barat,
                Forum Komunikasi Siswa, Satgas Adhiwiyata, JabarLead, etc.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-5 mb-3 flex items-center justify-start">
        <IoBriefcase className="text-slate-400 text-xl md:text-2xl" />
        <h1 className="text-white font-lato font-bold text-xl md:text-2xl ml-5">
          Experiences
        </h1>
      </div>
      <ul class="list-none">
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Frontend Web Developer Internship, PT. Jasamedika Saranatama
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Jan 2024 - May 2024
              </p>
              <p className="text-slate-400 font-inter text-sm md:text-base font-light text-justify">
                I am involved in developing websites using React and Next.js,
                and learning to implement Nuxt.js for future projects.
                Additionally, I collaborate with other student designers and
                engineers on a project to create new brands, design systems, and
                websites for an organization.
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 ml-5 mb-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Fullstack Web Developer, SISPEK Ver.2
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Nov 2023 - Feb 2024
              </p>
              <p className="text-slate-400 font-inter text-sm md:text-base font-light text-justify">
                I am involved in the redevelopment of the previous SISPEK
                website, covering interface design and development using Laravel
                and TailwindCSS. Additionally, I manage all features such as the
                admin dashboard, "menfess," registration, authentication system,
                etc. at SISPEK13.
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 ml-5 mb-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Fullstack Web Developer, GOReserve
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Nov 2023 - Dec 2023
              </p>
              <p className="text-slate-400 font-inter text-sm md:text-base font-light text-justify">
                I am involved in developing the GOReserve website using Laravel
                and TailwindCSS. Additionally, I manage various features such as
                GOR booking, My Ticket, List GOR, History, Payment Gateway, etc.
                at GOReserve.id.
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 ml-5 mb-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Project Manager, Sixth Projects (SISPEK Ver.1)
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Feb 2023 - May 2023
              </p>
              <p className="text-slate-400 font-inter text-sm md:text-base font-light text-justify">
                Responsible for the entire project, including creating design
                systems and websites for the organization, as well as developing
                and delivering technical solutions according to the business
                needs of stakeholders.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-5 mb-3 flex items-center justify-start">
        <IoSchoolSharp className="text-slate-400 text-xl md:text-2xl" />
        <h1 className="text-white font-lato font-bold text-xl md:text-2xl ml-5">
          Courses
        </h1>
      </div>
      <ul class="list-none">
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Fullstack Web Developer, PT. Gits Indonesia
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Aug 2023 - Jan 2024
              </p>
              <p className="text-slate-400 font-inter text-sm md:text-base font-light text-justify">
                Learning about application development commonly used by
                full-stack developers, such as Laravel.
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Junior Web Developer, Citra Sarana Bahasa dan Informatika
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Aug 2021 - Dec 2021
              </p>
              <p className="text-slate-400 font-inter text-sm md:text-base font-light text-justify">
                Learning HTML, CSS, and JavaScript, learning to design user
                interfaces (UI), and implementing them in application
                development projects using the CodeIgniter framework.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-5 mb-3 flex items-center justify-start">
        <IoPeopleCircle className="text-slate-400 text-2xl" />
        <h1 className="text-white font-lato font-bold text-xl md:text-2xl ml-5">
          Organizations
        </h1>
      </div>
      <ul class="list-none">
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  ConCo Technology - Vice Chairman
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter">
                Mar 2022 - present
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Cerchio Yearbook - Chairman
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter">
                Mar 2023 - present
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Radix Official - Chairman
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter">
                Mar 2020 - Mar 2023
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  BEM Kemakom FPMIPA UPI - Creative & Designer Staff
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter">
                Jan 2022 - Jan 2023
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Karang Taruna Kelurahan Binong - IT Staff
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter">
                Feb 2020 - Feb 2023
              </p>
            </div>
          </div>
        </li>
        <li class="rounded-lg group cursor-pointer">
          <div class="flex flex-row">
            <div class="items-center flex flex-col justify-around">
              {/* <div class="border-l-2 border-dashed h-full border-white"></div> */}
              <div class="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg class="flex-none m-2  w-8 h-8"></svg>
              </div>
              <div class="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  OSIS SMKN 13 Bandung - Chairman
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter">
                Nov 2019 - Nov 2020
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cv;
