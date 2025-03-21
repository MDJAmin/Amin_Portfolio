import { RevealOnScroll } from "../Common/RevealOnScroll";
import { skillSections } from "../../Constant";

export const About = () => {
  return (
    <section
      id='about'
      className='text min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='cursive text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center'>
            About Me
          </h2>
          <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6 text-sm'>
              A passionate and creative developer with a strong expertise in cutting-edge
              technologies and innovative solutions.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {skillSections.map((skillSections, index) => (
                <div
                  key={index}
                  className='rounded-xl p-2 hover:-translate-y-1 transition-all'
                >
                  <h3 className='text-xl font-bold mb-4'>{skillSections.title}</h3>
                  <div className='flex flex-wrap gap-2'>
                    {skillSections.skills.map((skill, key) => (
                      <span
                        key={key}
                        className='bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-700 cursor-pointer hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'
                        title={skill.description}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-3'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'> 👨🏻‍🎓 Education </h3>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li>
                  <strong> I received my high school diploma on </strong> June 24, 2024 ,
                  <strong>
                    {" "}
                    from the Startup Vocational School (Rokad), and I am currently pursuing a
                    bachelor's degree at Azad University.
                  </strong>
                </li>
                <li>
                  <strong> Relevant Coursework: </strong> Web Development (FrontEnd & BackEnd),
                  Ui Design, Editing...
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'> 💼 Work Experience </h3>
              <div className='space-y-4 text-gray-300'>
                <div>
                  <h4 className='font-semibold'>
                    FrontEnd Developer at Eghamat24 (2024 - Present)
                  </h4>
                  <p>
                    Developed and maintained the front-end of the company's internal project.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold'> Work with Startups & Freelancing (2021) </h4>
                  <p>
                    Worked with many clients and startups such as Green Web and various
                    influencers.
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
