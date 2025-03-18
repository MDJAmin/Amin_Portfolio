import { RevealOnScroll } from "../Common/RevealOnScroll";
export const Home = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative'
    >
      <RevealOnScroll>
        <div className='text-center z-10 px-4'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-right'>
            Hi, I'm Mohammad Amin
          </h1>

          <p className='tex-gray-400 text-lg mb-8 max-w-lg mx-auto'>
            I’m a UI designer and creative front-end developer with a passion for crafting
            visually stunning and user-friendly web experiences. With over 4 years of
            experience in video editing and content creation, I bring a unique blend of
            technical expertise and creative flair to every project I work on.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gray-300 text-black py-3 px-6 transition-all rounded font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-white"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(237, 244, 255, 0.2)] hover:bg-gray-100 hover:text-black"
            >
              Contact Me
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
