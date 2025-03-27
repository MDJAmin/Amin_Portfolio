import "./index.css";
import { useState } from "react";
import useLenis from "./Utils/useLenis";
import { Hero } from "./Components/Sections/Hero";
import Footer from "./Components/Sections/Footer";
import { About } from "./Components/Sections/About";
import { Navbar } from "./Components/Sections/Navbar";
import { Contact } from "./Components/Sections/Contact";
import { Projects } from "./Components/Sections/Projects";
import { MobileMenu } from "./Components/Common/MobileMenu";
import StarsCanvas from "./Components/Common/StarBackground";
import { LoadingScreen } from "./Components/Common/LoadingScreen";

function App() {
  useLenis();
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <StarsCanvas />
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
