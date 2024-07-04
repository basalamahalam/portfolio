import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Footer />
  </React.StrictMode>
);
