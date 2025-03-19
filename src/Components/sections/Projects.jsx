import { RevealOnScroll } from "../Common/RevealOnScroll";
import { IoIosArrowForward } from "react-icons/io";

const techDescriptions = {
  "React": "A JavaScript library for building user interfaces.",
  "Node.js": "A runtime environment that allows running JavaScript on the server.",
  "JSX": "A syntax extension for JavaScript, used with React to describe UI structure.",
  "Tailwind": "A utility-first CSS framework for building modern and responsive designs.",
  "ThreeJs": "A JavaScript library used for rendering 3D graphics in the browser.",
  "I18n": "Internationalization library for supporting multiple languages.",
  "Atropos": "A hover effect library that creates layered 3D tilt effects.",
  "ChartJs": "A JavaScript library for creating interactive charts and graphs.",
  "GSAP": "A JavaScript animation library for smooth and complex animations.",
  "Router dom": "A routing library for React applications, enabling navigation between pages.",
  "Next.js": "A React framework for building fast and optimized web applications.",
  "Prisma": "A modern database ORM for managing and interacting with databases.",
  "TSX": "TypeScript syntax extension for React components.",
  "Spline": "A tool for creating and embedding 3D interactive experiences.",
  "HTML": "The standard markup language for creating web pages.",
  "CSS": "A styling language used to design web pages and control layout.",
  "JS": "JavaScript, a programming language used to create interactive web experiences."
};

export const Projects = () => {
  return (
    <section id='projects' className='text min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='cursive text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center'>
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[{
              title: "Razer Mern Shop",
              description: "Razer MERN Shop is an e-commerce platform built using the MERN stack. It features a unique design inspired by Razer products, offering a sleek and dynamic shopping experience.",
              techStack: ["React", "Node.js", "JSX", "Tailwind", "ThreeJs", "I18n", "Atropos", "ChartJs", "GSAP", "Router dom"],
              link: "https://github.com/MDJAmin/razer-mern-shop",
              linkText: "View Project"
            }, {
              title: "GameZone",
              description: "A sleek e-commerce SPA website with an admin panel for managing games and a visually stunning homepage.",
              techStack: ["Next.js", "Prisma", "TSX", "GSAP", "Atropos", "Spline"],
              link: "https://mdjamin.github.io/Game_Zone/",
              linkText: "View Demo"
            }, {
              title: "Elvora",
              description: "Multi-language website within a single day!",
              techStack: ["React", "JSX", "Tailwind", "I18n"],
              link: "https://mdjamin.github.io/Elvora/",
              linkText: "View Project"
            }, {
              title: "Gorillas Game",
              description: "A fun, idea-inspired game that supports multiplayer gameplay.",
              techStack: ["HTML", "CSS", "JS"],
              link: "https://mdjamin.github.io/Gorillas_Game/",
              linkText: "Play"
            }].map((project, index) => (
              <div key={index} className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-gray-500/50 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-400 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.techStack.map((tech, key) => (
                    <span key={key} className='bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm cursor-pointer transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]' title={techDescriptions[tech] || "No description available"}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between items-center'>
                  <a target='_blank' rel='noopener noreferrer' href={project.link} className='flex text-gray-300 hover:text-white transition-colors my-4'>
                    {project.linkText} <IoIosArrowForward className='mt-[5px]' />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};