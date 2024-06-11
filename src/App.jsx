import { useState } from "react";
import NavbarHeader from "./Components/NavbarHeader";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-body-bg-color text-text-color">
        <header className="w-full">
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
