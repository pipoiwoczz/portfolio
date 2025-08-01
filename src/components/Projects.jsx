// src/components/Projects.jsx
import React, { useState } from 'react';
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'Multimodal Fashion Search Engine',
      description: 'End-to-end multimodal search engine for fashion items using computer vision and NLP',
      tags: ['PyTorch', 'CLIP', 'FAISS', 'BLIP', 'Gradio'],
      github: 'https://github.com/pipoiwoczz/Image-Query',
      youtube: 'https://www.youtube.com/watch?v=pmll65e1jqk&feature=youtu.be',
      image: 'assets/image_query.png',
      features: [
        'Implemented CLIP embeddings + FAISS indexing achieving <0.5s query latency',
        'Integrated BLIP model for automatic image captioning',
        'Built Gradio interface with gallery previews',
        'Processed/optimized 50k+ DeepFashion images'
      ]
    },
    {
      id: 2,
      title: 'Simple Neural Network for Handwritten Digit Classification',
      description: 'Digit classification model built from scratch using NumPy',
      tags: ['NumPy', 'Matplotlib', 'Machine Learning'],
      github: 'https://github.com/pipoiwoczz/Simple-Neural-Network-For-Number-Classification',
      youtube: 'https://www.youtube.com/watch?v=bPuqigg_S5k&feature=youtu.be', 
      image: 'assets/neural_network.png',
      features: [
        'Achieved 98% test accuracy on MNIST dataset',
        'Implemented backpropagation without external ML libraries',
        'Designed and tuned activation functions and architectures'
      ]
    },
    {
      id: 3,
      title: 'Wumpus World Agent',
      description: 'AI logic-based agent for hazardous grid-world navigation',
      tags: ['Z3 Solver', 'Propositional Logic', 'Tkinter'],
      github: 'https://github.com/pipoiwoczz/Wumpus-World-Agent',
      youtube: '',
      image: './assets/wumpus.png',
      features: [
        'Used Z3 solver for dynamic inference',
        'Integrated percept-based frontier exploration',
        'Visualized agent state with Tkinter GUI'
      ]
    },
    {
      id: 4,
      title: 'Reinforcement Learning Agent for Tic-Tac-Toe',
      description: 'Q-learning agent mastering Tic-Tac-Toe through self-play',
      tags: ['Reinforcement Learning', 'Q-learning', 'Tkinter'],
      github: 'https://github.com/pipoiwoczz/Tic-tac-toe-RL-Agent',
      youtube: '',
      image: '/assets/ttt.png',
      features: [
        'Implemented epsilon-greedy exploration and state hashing',
        'Designed game environment and reward function from scratch',
        'Visualized agent sessions using Tkinter GUI'
      ]
    },
    {
      id: 5,
      title: 'Crossing Game - OOP Terminal Arcade',
      description: 'Terminal-based obstacle-dodging game engine in C++',
      tags: ['C++', 'OOP', 'Windows API', 'Multithreading'],
      github: 'https://github.com/pipoiwoczz/Crossing_Game_OOP',
      youtube: 'https://www.youtube.com/watch?v=PdXGWGMGf4E', 
      image: 'assets/crossing_game.png',
      features: [
        'Built 20+ OOP classes for game components',
        'Integrated multi-threaded engine loop',
        'Designed game save/load system with dynamic difficulty'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Hands-on implementations matching my CV experience
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    Project Preview
                  </div>
                )}
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-900 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-md"
                    aria-label="GitHub repository"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* GitHub and YouTube buttons */}
                  <div className="flex gap-3 mt-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                    >
                      <FaGithub className="text-blue-400" />
                      GitHub
                    </a>
                    
                    {project.youtube && (
                      <a 
                        href={project.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                      >
                        <FaYoutube className="text-white" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/pipoiwoczz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            View More Projects on GitHub
            <FaExternalLinkAlt className="ml-1 text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;