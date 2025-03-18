import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./Components/Common/LoadingScreen";
import { Navbar } from "./Components/Common/Navbar";
import { MobileMenu } from "./Components/Common/MobileMenu";
import { Home } from "./Components/Sections/Home";
import { About } from "./Components/Sections/About";
import { Projects } from "./Components/Sections/Projects";
import "./index.css";
import { Contact } from "./Components/Sections/Contact";
import StarsCanvas from "./Components/Common/StarBackground";
import Footer from "./Components/Sections/Footer";

function App() {
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
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default App;
