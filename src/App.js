// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
    // Apply dark mode class to body
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    
    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
        <div className="animate-pulse">
          <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full"></div>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;