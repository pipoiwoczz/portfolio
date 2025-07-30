// src/components/Skills.jsx
import React from 'react';
import { FaReact, FaNodeJs, FaFigma, FaDatabase, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaReact size={40} />, name: 'React', level: 95 },
    { icon: <SiJavascript size={40} />, name: 'JavaScript', level: 90 },
    { icon: <SiTypescript size={40} />, name: 'TypeScript', level: 85 },
    { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS', level: 90 },
    { icon: <FaNodeJs size={40} />, name: 'Node.js', level: 80 },
    { icon: <SiNextdotjs size={40} />, name: 'Next.js', level: 85 },
    { icon: <FaFigma size={40} />, name: 'UI/UX Design', level: 75 },
    { icon: <FaDatabase size={40} />, name: 'Database', level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Skills</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I specialize in
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
                My Development Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I focus on creating clean, efficient code that delivers exceptional user experiences. 
                My development process emphasizes:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Responsive & mobile-first design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Accessibility compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Modern JavaScript practices</span>
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