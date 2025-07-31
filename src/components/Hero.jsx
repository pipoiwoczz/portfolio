// src/components/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Lê Ngọc Anh Khoa</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4 text-gray-600 dark:text-gray-300">
              AI & Machine Learning Engineer
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Passionate AI engineering student seeking to apply machine learning and reinforcement learning skills in real-world projects through an internship opportunity.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center shadow-lg hover:shadow-blue-500/20"
              >
                View Projects
              </a>
              <a 
                href="assets/CV.pdf" 
                download="Le_Ngoc_Anh_Khoa_CV.pdf"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-full font-medium transition-colors flex items-center"
              >
                <FaFileDownload className="mr-2" /> Download CV
              </a>
            </div>
            
            <div className="mt-10 flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/pipoiwoczz" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/anh-khoa-l%C3%AA-ng%E1%BB%8Dc-836595354/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:lengocanhkhoa2919@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:0838312919" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="Phone">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transform rotate-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Profile Image
                </div>
              </div>
              
              {/* AI badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 flex items-center">
                <div className="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">AI Specialist</span>
              </div>
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