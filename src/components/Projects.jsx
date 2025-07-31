// src/components/Projects.jsx
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Multimodal Fashion Search Engine',
      description: 'End-to-end multimodal search engine for fashion items using computer vision and NLP',
      tags: ['PyTorch', 'CLIP', 'FAISS', 'BLIP', 'Gradio'],
      github: 'https://github.com/pipoiwoczz/Image-Query',
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hands-on implementations matching my CV experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300 h-full flex flex-col"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                      Project Preview
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-900 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="GitHub repository"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
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
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      
          <div className="text-center mt-8">
            <a
              href="https://github.com/pipoiwoczz?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Watch More on GitHub
            </a>
          </div>
    </section>
  );
};

export default Projects;