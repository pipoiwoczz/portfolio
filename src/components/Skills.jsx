// src/components/Skills.jsx
import React from 'react';
import { FaPython, FaCode, FaDocker } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiNumpy, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaPython size={40} />, name: 'Python', level: 95 },
    { icon: <SiCplusplus size={40} />, name: 'C++', level: 85 },
    { icon: <SiPytorch size={40} />, name: 'PyTorch', level: 90 },
    { icon: <SiTensorflow size={40} />, name: 'TensorFlow', level: 80 },
    { icon: <SiNumpy size={40} />, name: 'NumPy', level: 90 },
    { icon: <FaDocker size={40} />, name: 'Docker', level: 75 },
    { icon: <FaCode size={40} />, name: 'Z3 Solver', level: 80 },
    { icon: <FaCode size={40} />, name: 'Git', level: 85 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies matching my CV expertise
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-6">
                <FaCode className="text-blue-600 dark:text-blue-400" size={80} />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My development approach focuses on implementing theoretical concepts into practical solutions:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Building from scratch without external libraries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Implementing efficient algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Visualizing complex processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Optimizing for performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;