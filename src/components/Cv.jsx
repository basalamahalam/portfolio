import { IoBook } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { IoPeopleCircle } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";

const Cv = () => {
  return (
    <div className="pt-28 2xl:px-64 xl:px-32 lg:px-20 px-10 pb-20 min-h-screen bg-gradient-to-b from-primary to-[#051923] animate-fadeIn">
      <h1 className="font-black font-lato md:text-4xl text-3xl text-white text-center tracking-widest">
        RESUME
      </h1>
      
      {/* EDUCATION SECTION */}
      <div className="mt-12 md:mt-5 mb-3 flex items-center justify-start">
        <IoBook className="text-slate-400 text-xl md:text-2xl" />
        <h1 className="text-white font-lato font-bold text-xl md:text-2xl ml-5">
          Education
        </h1>
      </div>
      <ul className="list-none">
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Bachelor Degree, Universitas Pendidikan Indonesia[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:text-sm tracking-wide font-inter mb-5 mt-1 md:mt-0">
                2021 - 2026[cite: 1]
              </p>
              <p className="text-white font-inter text-sm md:text-base font-light">
                Current GPA: 3.79/4.00[cite: 1]
              </p>
            </div>
          </div>
        </li>
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 ml-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  SMK Negeri 13 Bandung[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                2018 - 2021[cite: 1]
              </p>
              <p className="text-white font-inter text-sm md:text-base font-light">
                Current GPA: 90.3/100[cite: 1]
              </p>
            </div>
          </div>
        </li>
      </ul>

      {/* EXPERIENCES SECTION */}
      <div className="mt-5 mb-3 flex items-center justify-start">
        <IoBriefcase className="text-slate-400 text-xl md:text-2xl" />
        <h1 className="text-white font-lato font-bold text-xl md:text-2xl ml-5">
          Experiences
        </h1>
      </div>
      <ul className="list-none">
        
        {/* BINUS */}
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  .Net Developer, BINUS University IT Division[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Jul 2025 - present[cite: 1]
              </p>
              <ul className="text-slate-400 font-inter text-sm md:text-base font-light text-justify list-disc ml-4">
                <li>Contributed to multiple academic system projects, including an academic marketplace platform called Binus Neksus, as well as modules such as Scholarship, Lecturer Profile, and Lecture Services.[cite: 1]</li>
                <li>Worked on both backend and frontend development, including implementing system architecture components such as Business Logic Layer (BLL) and Data Access Layer (DAL).[cite: 1]</li>
                <li>Developed and maintained scheduler systems to support automated processes and data synchronization across services.[cite: 1]</li>
                <li>Prepared and managed data pipelines from data warehouse to consume databases, ensuring data readiness for frontend applications.[cite: 1]</li>
                <li>Collaborated with internal teams through regular meetings to discuss system requirements, progress, and technical solutions.[cite: 1]</li>
                <li>Assisted in designing system flows and user journeys for the academic marketplace platform to improve usability and structure.[cite: 1]</li>
              </ul>
            </div>
          </div>
        </li>

        {/* SALAMUN */}
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Backend Developer, PT Salamun Teknologi Indonesia[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Jan 2025 - present[cite: 1]
              </p>
              <ul className="text-slate-400 font-inter text-sm md:text-base font-light text-justify list-disc ml-4">
                <li>Contributed to a government project with PUPR, developing a regional mapping licensing portal using Laravel.[cite: 1]</li>
                <li>Supported project management processes tailored for PUPR requirements, ensuring structured and efficient development workflows.[cite: 1]</li>
                <li>Assisted the team in handling a project for Mursmedic, including company profile website and internal system development using Spring Boot (Java) as a backend developer.[cite: 1]</li>
                <li>Collaborated with cross-functional teams to solve technical challenges, and ensure smooth project execution.[cite: 1]</li>
                <li>Conducted system testing and participated in client presentations to demonstrate project outcomes and ensure requirements were met.[cite: 1]</li>
              </ul>
            </div>
          </div>
        </li>

        {/* BPSDM */}
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  UI/UX Developer, BPSDM Provinsi Jawa Barat[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Oct 2023 - Oct 2025[cite: 1]
              </p>
              <ul className="text-slate-400 font-inter text-sm md:text-base font-light text-justify list-disc ml-4">
                <li>Designed UI/UX for ARSI website based on West Java government design guidelines (color, typography, branding).[cite: 1]</li>
                <li>Created wireframes and user flows to improve system usability.[cite: 1]</li>
                <li>Designed 5+ logo concepts following official government design standards.[cite: 1]</li>
                <li>Produced motion graphics for launch event, including release video and looping background visuals.[cite: 1]</li>
              </ul>
            </div>
          </div>
        </li>

        {/* FUJICON */}
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Odoo Developer, PT. Fujicon Priangan Perdana[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                Aug 2024 - Jan 2025[cite: 1]
              </p>
              <ul className="text-slate-400 font-inter text-sm md:text-base font-light text-justify list-disc ml-4">
                <li>Developed a custom ERP add-on "Management Construction" using Odoo 17 to support construction business processes.[cite: 1]</li>
                <li>Implemented core modules including Risk Mitigation, Budget Planning, Daily Reports, and dynamic form configuration.[cite: 1]</li>
                <li>Integrated advanced features such as S-Curve tracking and Generative AI to enhance system capabilities.[cite: 1]</li>
                <li>Ensured integration between Odoo backend and mobile applications for real-time data access.[cite: 1]</li>
                <li>Collaborated directly with stakeholders (Director, Managers, IT Team) to align development with business needs.[cite: 1]</li>
                <li>Performed testing, debugging, and optimization to ensure system reliability and performance.[cite: 1]</li>
              </ul>
            </div>
          </div>
        </li>

        {/* JASAMEDIKA */}
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Backend Developer & Frontend Developer, PT. Jasamedika Saranatama[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                January 2024 - Mei 2024[cite: 1]
              </p>
              <ul className="text-slate-400 font-inter text-sm md:text-base font-light text-justify list-disc ml-4">
                <li>Understanding and implementing the concept of Object and Key Result in performing tasks.[cite: 1]</li>
                <li>Debugging existing programs, identifying and fixing errors or bugs found to improve application performance and stability.[cite: 1]</li>
                <li>As a Back-end, Creating an API for SIRs using Express.js as the framework and MongoDB as the DBMS.[cite: 1]</li>
                <li>As a Front-end, Creating a website using ReactJS and TailwindCSS as framework, Figma as design tools, and Katalon, JMeter for testing.[cite: 1]</li>
                <li>Creating user documentation such as manual books, style guides, README files, and other project documentation.[cite: 1]</li>
              </ul>
            </div>
          </div>
        </li>

        {/* SIXTH PROJECTS */}
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 ml-5 mb-5 rounded-xl">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Project Manager & Full Stack Developer, Sixth Projects[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                October 2023 - December 2023[cite: 1]
              </p>
              <ul className="text-slate-400 font-inter text-sm md:text-base font-light text-justify list-disc ml-4">
                <li>Trusted to work with SMKN 13 Bandung in developing the "SISPEK13" website as the school organization's profile.[cite: 1]</li>
                <li>Integrating authentication and authorization services with Laravel and MySQL on the Back-end, while developing the website using TailwindCSS on the Front-end.[cite: 1]</li>
                <li>Designing, creating, presenting daily progress, testing, and deploying the website to the server using CPanel.[cite: 1]</li>
              </ul>
            </div>
          </div>
        </li>

        {/* GITS INDONESIA (Moved from Courses to Experiences as per source) */}
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 mb-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Full Stack Developer (Online Courses -MSIB), PT. GITS Indonesia[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-5">
                August 2023 - December 2023[cite: 1]
              </p>
              <ul className="text-slate-400 font-inter text-sm md:text-base font-light text-justify list-disc ml-4">
                <li>Implemented Scrum methodology with Trunk-Based Development approach, combining iterative and incremental development with continuous integration and collaboration principles in software development.[cite: 1]</li>
                <li>Implementing business logic and website development using Laravel assisted by TailwindCSS to design a responsive and modern user interface.[cite: 1]</li>
                <li>Integrating multiple uses of external APIs and technologies such as authorization & authentication systems, and queue systems (Redis).[cite: 1]</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      
      {/* COURSES & ORGANIZATIONS SECTION CAN FOLLOW HERE AS BEFORE */}
      <div className="mt-5 mb-3 flex items-center justify-start">
        <IoPeopleCircle className="text-slate-400 text-2xl" />
        <h1 className="text-white font-lato font-bold text-xl md:text-2xl ml-5">
          Organizations
        </h1>
      </div>
      <ul className="list-none">
        <li className="rounded-lg group cursor-pointer">
          <div className="flex flex-row">
            <div className="items-center flex flex-col justify-around">
              <div className="bg-secondary border-2 border-black rounded-full md:h-5 md:w-5 h-4 w-4 flex flex-grow justify-around">
                <svg className="flex-none m-2 w-8 h-8"></svg>
              </div>
              <div className="border-l-2 border-dashed h-full border-white"></div>
            </div>
            <div className="flex flex-col p-1 pr-6 rounded-xl ml-5 font-lato">
              <div className="flex justify-start items-center">
                <h1 className="text-white text-base md:text-lg font-inter">
                  Taruna Karya Kelurahan Binong - IT Division[cite: 1]
                </h1>
              </div>
              <p className="text-secondary text-xs md:mt-0 mt-1 md:text-sm tracking-wide font-inter mb-4">
                2020-2023[cite: 1]
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cv;
