// src/components/Projects.jsx
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-featured online shopping experience with React and Node.js',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Productivity app with drag-and-drop interface and real-time updates',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'web',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Fitness Tracker Mobile App',
      description: 'Mobile application for tracking workouts and nutrition',
      tags: ['React Native', 'Redux', 'GraphQL'],
      category: 'mobile',
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website Template',
      description: 'Modern portfolio template for developers and designers',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'web',
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Restaurant Booking System',
      description: 'Reservation platform with real-time availability',
      tags: ['React', 'Express', 'PostgreSQL'],
      category: 'web',
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with interactive maps',
      tags: ['JavaScript', 'API Integration', 'Chart.js'],
      category: 'web',
      github: '#',
      live: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setActiveFilter('web')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeFilter === 'web'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Web Applications
          </button>
          <button 
            onClick={() => setActiveFilter('mobile')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeFilter === 'mobile'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Mobile Apps
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center text-gray-500">
                  Project Image
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-900 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-900 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;