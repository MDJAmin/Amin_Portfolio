import React from 'react';
import { FaYoutube, FaInstagram,FaXTwitter, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="cursive text-white py-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://www.youtube.com/c/DARKLORDCDL" target="_blank" rel="noopener noreferrer" className="text-text-white transition-opacity opacity-75 hover:text-white hover:opacity-100 text-2xl z-10">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/darklordyt_" target="_blank" rel="noopener noreferrer" className="text-text-white transition-opacity opacity-75 hover:text-white hover:opacity-100 text-2xl z-10">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/m-amin-jafarnezhad" target="_blank" rel="noopener noreferrer" className="text-text-white transition-opacity opacity-75 hover:text-white hover:opacity-100 text-2xl z-10">
        <FaLinkedin />
        </a>
        <a href="https://x.com/Amin_4994" target="_blank" rel="noopener noreferrer" className="text-white transition-opacity opacity-75 hover:text-white hover:opacity-100 text-2xl z-10">
          <FaXTwitter/>
        </a>
      </div>
      <p className="text-sm">&copy; {year} All Rights Reserved.</p>
    </section>
  );
}