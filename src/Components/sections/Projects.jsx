import { RevealOnScroll } from "../Common/RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center'>
            {" "}
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-gray-500/50 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
              <h3 className='text-xl font-bold mb-2'>Razer Mern Shop</h3>
              <p className='text-gray-400 mb-4'>
                Razer MERN Shop is an e-commerce platform built using the MERN stack. It
                features a unique design inspired by Razer products, offering a sleek and
                dynamic shopping experience. The platform includes…
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {[
                  "React",
                  "Node.js",
                  "JSX",
                  "Tailwind",
                  "ThreeJs",
                  "I18n",
                  "Atropos",
                  "ChartJs",
                  "GSAP",
                  "Router dom",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className='bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-700 cursor-pointer 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex justify-between items-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/MDJAmin/razer-mern-shop'
                  className='text-gray-300 hover:text-white transition-colors my-4'
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className='
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/50
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all'
            >
              <h3 className='text-xl font-bold mb-2'>GameZone</h3>
              <p className='text-gray-400 mb-4'>
                A sleek e-commerce spa website with an admin panel for managing games and a
                visually stunning homepage. Featuring GSAP animations, 3D models, and Atropos
                hover effects, it offers a modern, interactive experience.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Next.js", "Prisma", "TSX", "GSAP", "Atropos", "Spline"].map((tech, key) => (
                  <span
                    key={key}
                    className='
                      bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm cursor-pointer
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex justify-between items-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://mdjamin.github.io/Game_Zone/'
                  className='text-gray-300 hover:text-white transition-colors my-4'
                >
                  View Demo →
                </a>
              </div>
            </div>

            <div
              className='
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1  hover:border-gray-500/50
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            '
            >
              <h3 className='text-xl font-bold mb-2'>Elvora</h3>
              <p className='text-gray-400 mb-4'>Multi-language website within a single day!</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["React", "JSX", "Tailwind", "I18n"].map((tech) => (
                  <span
                    key={tech}
                    className='
                      bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm cursor-pointer
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    '
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex justify-between items-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://mdjamin.github.io/Elvora/'
                  className='text-gray-300 hover:text-white transition-colors my-4'
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className='
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1  hover:border-gray-500/50
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            '
            >
              <h3 className='text-xl font-bold mb-2'>Gorillas Game</h3>
              <p className='text-gray-400 mb-4'>
                A fun, idea-inspired game that supports multiplayer gameplay
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["HTML", "CSS", "JS"].map((tech, key) => (
                  <span
                    key={key}
                    className='
                      bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm cursor-pointer
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    '
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex justify-between items-center '>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://mdjamin.github.io/Gorillas_Game/'
                  className='text-gray-300 hover:text-white transition-colors my-4'
                >
                  Play →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
