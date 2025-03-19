import { useEffect } from "react";
import { FiGithub } from "react-icons/fi";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className='cursive fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <a
            href='https://github.com/MDJAmin'
            className='cursive flex gap-0.5 font-mono text-xl font-bold text-white'
            rel='noopener noreferrer'
            target='_blank' 
          >
          <FiGithub className="me-2 mt-1 opacity-80 hover:opacity-100 transition-opacity"/> MDJ<span className='text-blue-100 transition-all hover:text-white hover:ml-1'>Amin</span>
          </a>

          <div
            className='w-7 h-5 relative cursor-pointer z-40 md:hidden'
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#home'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Home
            </a>
            <a
              href='#about'
              className='text-gray-300 hover:text-white transition-colors'
            >
              About
            </a>
            <a
              href='#projects'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Projects
            </a>
            <a
              href='#contact'
              className='text-gray-300 hover:text-white transition-colors-'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
