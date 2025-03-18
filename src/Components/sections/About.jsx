import { useState } from "react";
import { RevealOnScroll } from "../Common/RevealOnScroll";

export const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const frontendSkills = [
    { name: "React", description: "A JavaScript library for building user interfaces." },
    {
      name: "TypeScript",
      description: "A typed superset of JavaScript for better tooling and scalability.",
    },
    {
      name: "TailwindCSS",
      description: "A utility-first CSS framework for rapid UI development.",
    },
    {
      name: "MUI",
      description: "A popular React UI framework for building responsive designs.",
    },
    {
      name: "ThreeJs",
      description: "A 3D library for creating and rendering 3D graphics in the browser.",
    },
    {
      name: "Gsap",
      description: "A JavaScript animation library for high-performance animations.",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      description:
        "A runtime environment for building server-side applications with JavaScript.",
    },
    {
      name: "Python",
      description:
        "A versatile programming language for backend development and data analysis.",
    },
    {
      name: "AWS",
      description: "Amazon Web Services for cloud computing and scalable infrastructure.",
    },
    { name: "MongoDB", description: "A NoSQL database for handling unstructured data." },
    {
      name: "GraphQL",
      description: "A query language for APIs and runtime for executing those queries.",
    },
  ];

  const designSkills = [
    {
      name: "Adobe Pro",
      description: "Professional tools for graphic design and video editing.",
    },
    { name: "Figma", description: "A collaborative design tool for UI/UX prototyping." },
    {
      name: "Blender",
      description: "An open-source 3D creation suite for modeling and animation.",
    },
    { name: "AE", description: "Adobe After Effects for motion graphics and visual effects." },
    { name: "AI", description: "Adobe Illustrator for vector graphics and illustrations." },
  ];

  const otherSkill = [
    {
      name: "Model Optimization",
      description: "Techniques for optimizing machine learning models.",
    },
    { name: "DQN", description: "Deep Q-Networks for reinforcement learning." },
    {
      name: "Computer Vision",
      description: "Techniques for enabling machines to interpret visual data.",
    },
    {
      name: "NLP",
      description: "Natural Language Processing for text analysis and understanding.",
    },
  ];

  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center'>
            About Me
          </h2>

          <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
              A passionate and creative developer with a strong expertise in cutting-edge
              technologies and innovative solutions.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Frontend Skills */}
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                <div className='flex flex-wrap gap-2 relative'>
                  {frontendSkills.map((tech, key) => (
                    <div
                      key={key}
                      className='relative'
                    >
                      <span
                        onMouseEnter={() => setHoveredSkill(tech)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className='bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-700 cursor-pointer hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                      >
                        {tech.name}
                      </span>
                      {hoveredSkill?.name === tech.name && (
                        <div className='absolute left-full ml-2 top-0 bg-white text-black p-2 rounded-lg shadow-lg w-48 z-10'>
                          {tech.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                <div className='flex flex-wrap gap-2 relative'>
                  {backendSkills.map((tech, key) => (
                    <div
                      key={key}
                      className='relative'
                    >
                      <span
                        onMouseEnter={() => setHoveredSkill(tech)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className='bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-700 cursor-pointer hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                      >
                        {tech.name}
                      </span>
                      {hoveredSkill?.name === tech.name && (
                        <div className='absolute left-full ml-2 top-0 bg-white text-black p-2 rounded-lg shadow-lg w-48 z-10'>
                          {tech.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Skills */}
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Design</h3>
                <div className='flex flex-wrap gap-2 relative'>
                  {designSkills.map((tech, key) => (
                    <div
                      key={key}
                      className='relative'
                    >
                      <span
                        onMouseEnter={() => setHoveredSkill(tech)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className='bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-700 cursor-pointer hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                      >
                        {tech.name}
                      </span>
                      {hoveredSkill?.name === tech.name && (
                        <div className='absolute left-full ml-2 top-0 bg-white text-black p-2 rounded-lg shadow-lg w-48 z-10'>
                          {tech.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Skills */}
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Other</h3>
                <div className='flex flex-wrap gap-2 relative'>
                  {otherSkill.map((tech, key) => (
                    <div
                      key={key}
                      className='relative'
                    >
                      <span
                        onMouseEnter={() => setHoveredSkill(tech)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className='bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-700 cursor-pointer hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                      >
                        {tech.name}
                      </span>
                      {hoveredSkill?.name === tech.name && (
                        <div className='absolute left-full ml-2 top-0 bg-white text-black p-2 rounded-lg shadow-lg w-48 z-10'>
                          {tech.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'> 👨🏻‍🎓 Education </h3>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li>
                  <strong> I received my high school diploma on </strong> June 24, 2024 ,
                  <strong>
                    from the Startup Vocational School (Rokad), and I am currently pursuing a
                    bachelor's degree at Azad University.
                  </strong>
                </li>
                <li>
                  <strong> Relevant Coursework : </strong> Web Development (FrontEnd &
                  BackEnd), <br /> Ui Design, Editing...
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'> 💼 Work Experience </h3>
              <div className='space-y-4 text-gray-300'>
                <div>
                  <h4 className='font-semibold'>
                    FrontEnd Developer at Eghamat24 <br />
                    (2024 - Present)
                  </h4>
                  <p>
                    Developed and maintained the front-end of the company's internal project.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold'> Work with Startups & free lancing (2021) </h4>
                  <p>
                    Works with many Clients and Startups such as Green Web and many influencer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
