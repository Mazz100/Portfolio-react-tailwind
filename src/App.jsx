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
      <div className="min-h-screen flex flex-col items-start">
        <header>
          <NavbarHeader />
        </header>

        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
