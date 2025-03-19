export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`cursive fixed top-0 right-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out transform
                     ${
                       menuOpen
                         ? "translate-x-0 opacity-100 pointer-events-auto"
                         : "translate-x-full opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
        aria-label='Close Menu'
      >
        &times;
      </button>

      <a
        href='#home'
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                      menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                    }        
            `}
      >
        Home
      </a>
      <a
        href='#about'
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}        
    `}
      >
        About
      </a>
      <a
        href='#projects'
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}        
    `}
      >
        Projects
      </a>
      <a
        href='#contact'
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}        
    `}
      >
        Contact
      </a>
    </div>
  );
};
