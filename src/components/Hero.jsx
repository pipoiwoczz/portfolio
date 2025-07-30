// src/components/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Alex Morgan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4 text-gray-600 dark:text-gray-300">
              Frontend Developer & UI/UX Designer
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              I create beautiful, responsive websites and applications with modern technologies.
              Passionate about crafting user experiences that make an impact.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center shadow-lg hover:shadow-blue-500/20"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-full font-medium transition-colors flex items-center"
              >
                Contact Me
              </a>
            </div>
            
            <div className="mt-10 flex justify-center md:justify-start space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <div className="bg-blue-600 dark:bg-blue-700 w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full flex items-center justify-center text-gray-500">
                  Profile Image
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-yellow-400 opacity-20 dark:opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-400 opacity-20 dark:opacity-30"></div>
              <div className="absolute top-20 -left-10 w-16 h-16 rounded-full bg-purple-400 opacity-20 dark:opacity-30"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center animate-bounce">
          <a href="#skills" className="inline-block text-blue-600 dark:text-blue-400">
            <FaArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;