import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";
import { ScrollShadow } from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
