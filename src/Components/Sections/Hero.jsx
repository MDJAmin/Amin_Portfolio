import { RevealOnScroll } from "../Common/RevealOnScroll";
export const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative'
    >
      <RevealOnScroll>
        <div className='text-center z-10 px-4'>
          <h1 className='cursive text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-right'>
            Hi, I'm Amin
          </h1>

          <p className='text-[18px] tex-gray-400 mb-8 max-w-lg mx-auto'>
          A creative front-end developer and UI designer with a passion for crafting visually stunning and user-friendly web experiences. With over four years of experience in content creation and video editing,
            <strong>  I always strive to give my best in everything I do ~</strong>
          </p>

          <div className='flex justify-center space-x-4'>
            <a
              href='#projects'
              className='cursive bg-gray-300 text-black py-3 px-6 transition-all rounded font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-white'
            >
              View Projects
            </a>

            <a
              href='#contact'
              className='cursive border border-white text-gray-300 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(237, 244, 255, 0.2)] hover:bg-gray-100 hover:text-black'
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
