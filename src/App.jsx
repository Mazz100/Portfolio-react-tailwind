import { useEffect, useRef, useState } from "react";
import NavbarHeader from "./Components/NavbarHeader";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-body-bg-color font-Inter-font-family text-text-color">
        <header className="sticky top-0 z-10 w-full">
          <NavbarHeader />
        </header>

        <main className="flex max-w-[25rem] flex-col desktop:max-w-[80rem] tablet:max-w-[32rem]">
          <Home />
          <About />
          <Skills />
          <Projects />
        </main>

        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
