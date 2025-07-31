// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes, FaHome, FaUser, FaLaptopCode, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome className="mr-2" /> },
    { name: 'Skills', href: '#skills', icon: <FaUser className="mr-2" /> },
    { name: 'Projects', href: '#projects', icon: <FaLaptopCode className="mr-2" /> },
    { name: 'Education', href: '#education', icon: <FaGraduationCap className="mr-2" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="mr-2" /> },
  ];

  const getIconForSection = (sectionName) => {
    switch(sectionName) {
      case 'home': return <FaHome />;
      case 'skills': return <FaUser />;
      case 'projects': return <FaLaptopCode />;
      case 'education': return <FaGraduationCap />;
      case 'contact': return <FaEnvelope />;
      default: return <FaHome />;
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex items-center text-xl font-bold text-blue-600 dark:text-blue-400"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">L</span>
              </div>
              <span>Lê Ngọc Anh Khoa</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center ${
                  activeSection === link.href.substring(1)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center ml-4 space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-lg hover:shadow-blue-500/20 flex items-center"
              >
                <FaEnvelope className="mr-2" />
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`flex items-center px-3 py-3 rounded-lg text-base font-medium ${
                  activeSection === link.href.substring(1)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="flex items-center justify-center bg-blue-600 text-white px-3 py-3 rounded-lg text-center font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope className="mr-2" />
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;