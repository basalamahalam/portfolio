import React from "react";
import { SlSocialInstagram } from "react-icons/sl";

const About = () => {
  return (
    <div className="mt-10 min-h-screen px-32">
      <SlSocialInstagram className="text-white text-6xl" />
      <div className="mt-10">
        <h1 className="text-center font-arima text-7xl text-white font-bold tracking-wider">
          Hello, I'm <span className="text-secondary">Alam</span>!
        </h1>
        <h3 className="mt-10 tracking-wide font-arima text-center text-5xl font-medium text-gradient">
          Frontend Developer
        </h3>
        <p className="mt-10 text-center text-lg text-white font-light font-arima tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore
          voluptate voluptates quos architecto! Assumenda, et? Accusamus commodi
          possimus ea nihil cumque ut ex est voluptas laborum hic nam, tempora
          pariatur iure. Vel ducimus alias necessitatibus, fugit ipsa nisi
          adipisci delectus totam magni officia, tenetur saepe quibusdam dolores
          perspiciatis officiis.
        </p>

        <div className="mt-10 flex items-center justify-around">
          <div className="w-[400px] bg-gradient-to-tr from-primary to-black rounded-lg">
            <h1 className="text-white font-bold font-lato text-2xl text-center">
              Data
            </h1>
          </div>
          <div className="w-[400px] bg-gradient-to-tr from-primary to-black rounded-lg">
            <h1 className="text-white font-bold font-lato text-2xl text-center">
              Data
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
