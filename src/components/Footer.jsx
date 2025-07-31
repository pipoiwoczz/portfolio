// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileDownload, FaLaptopCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Lê Ngọc Anh Khoa</h2>
                <p className="text-blue-400">AI & Machine Learning Engineer</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Passionate about building intelligent systems using machine learning and reinforcement learning. 
              Currently seeking internship opportunities to apply my skills in real-world AI applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/pipoiwoczz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/anh-khoa-l%C3%AA-ng%E1%BB%8Dc-836595354/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:lengocanhkhoa2919@gmail.com" 
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-600 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span>
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span>
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span>
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Projects Column */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-600 pb-2">Featured Projects</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://github.com/pipoiwoczz/Image-Query" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex"
                >
                  <div className="bg-gray-800 rounded-lg w-12 h-12 flex-shrink-0 mr-3 flex items-center justify-center">
                    <FaLaptopCode className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Fashion Search Engine</h4>
                    <p className="text-sm">Multimodal AI search system</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/pipoiwoczz/Tic-tac-toe-RL-Agent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex"
                >
                  <div className="bg-gray-800 rounded-lg w-12 h-12 flex-shrink-0 mr-3 flex items-center justify-center">
                    <FaLaptopCode className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Tic-Tac-Toe RL Agent</h4>
                    <p className="text-sm">Reinforcement Learning</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/pipoiwoczz/Wumpus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex"
                >
                  <div className="bg-gray-800 rounded-lg w-12 h-12 flex-shrink-0 mr-3 flex items-center justify-center">
                    <FaLaptopCode className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Wumpus World Agent</h4>
                    <p className="text-sm">AI Logic-Based Agent</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 border-b border-blue-600 pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:lengocanhkhoa2919@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  lengocanhkhoa2919@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <a href="tel:0838312919" className="text-gray-400 hover:text-blue-400 transition-colors">
                  0838 312 919
                </a>
              </li>
            </ul>
            
            <div className="mt-8 bg-gray-800 rounded-lg p-4">
              <h4 className="font-medium mb-3">Download My CV</h4>
              <a 
                href="/assets/CV.pdf" 
                download="Le_Ngoc_Anh_Khoa_CV.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <FaFileDownload className="mr-2" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Lê Ngọc Anh Khoa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;