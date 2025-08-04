// src/components/Skills.jsx
import React, { useState } from 'react';
import { 
  FaPython, FaCode, FaDocker, FaGitAlt, FaBrain, 
  FaUsers, FaLightbulb, FaChartLine, FaServer 
} from 'react-icons/fa';
import { 
  SiPytorch, SiTensorflow, SiNumpy, SiCplusplus, 
  SiPandas, SiScikitlearn, SiOpencv, SiJupyter , SiJavascript
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');
  
  const languages = [
    { icon: <FaPython size={40} />, name: 'Python', level: 95 },
    { icon: <SiCplusplus size={40} />, name: 'C++', level: 85 },
    { icon: <SiJavascript size= {40}/>, name: 'Javascript', level: 70},
  ];
  
  const frameworks = [
    { icon: <SiPytorch size={40} />, name: 'PyTorch', level: 90 },
    { icon: <SiTensorflow size={40} />, name: 'TensorFlow', level: 80 },
    { icon: <SiNumpy size={40} />, name: 'NumPy', level: 90 },
    { icon: <SiPandas size={40} />, name: 'Pandas', level: 85 },
    { icon: <SiScikitlearn size={40} />, name: 'Scikit-Learn', level: 80 },
    { icon: <SiOpencv size={40} />, name: 'OpenCV', level: 75 },
    { icon: <FaDocker size={40} />, name: 'Docker', level: 75 },
    { icon: <FaGitAlt size={40} />, name: 'Git', level: 85 },
    { icon: <SiJupyter size={40} />, name: 'Jupyter', level: 90 },
  ];
  
  const softSkills = [
    { icon: <FaBrain size={32} />, name: 'Problem Solving', description: 'Breaking down complex AI challenges into solvable components' },
    { icon: <FaUsers size={32} />, name: 'Collaboration', description: 'Working effectively in team environments on technical projects' },
    { icon: <FaLightbulb size={32} />, name: 'Creativity', description: 'Developing innovative solutions for AI implementation' },
    { icon: <FaChartLine size={32} />, name: 'Adaptability', description: 'Quickly learning and applying new technologies and frameworks' },
    { icon: <FaServer size={32} />, name: 'Technical Communication', description: 'Explaining complex concepts to both technical and non-technical audiences' },
  ];

  const renderSkills = () => {
    switch(activeTab) {
      case 'languages':
        return languages;
      case 'frameworks':
        return frameworks;
      case 'soft':
        return softSkills;
      default:
        return languages;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive skills in AI/ML development
          </motion.p>
        </div>
        
        {/* Skills Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['languages', 'frameworks', 'soft'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {tab === 'languages' ? 'Programming Languages' : 
               tab === 'frameworks' ? 'Frameworks & Tools' : 
               'Soft Skills'}
            </motion.button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {renderSkills().map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mr-4">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {skill.name}
                  </h3>
                  
                  {activeTab !== 'soft' ? (
                    <>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-3">
                        <div 
                          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
                        Proficiency: {skill.level}%
                      </span>
                    </>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {skill.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Technical Approach */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <FaCode className="text-blue-300 mr-4" size={48} />
                <div>
                  <h3 className="text-2xl font-bold">Technical Approach</h3>
                  <p className="text-blue-100">AI/ML Development Philosophy</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-blue-100">
                  My development methodology focuses on creating efficient, scalable 
                  AI solutions through a combination of theoretical understanding and 
                  practical implementation.
                </p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    icon: <FaCode className="text-blue-600 dark:text-blue-400" size={24} />,
                    title: "From Fundamentals",
                    description: "Building core implementations from scratch to deepen understanding"
                  },
                  { 
                    icon: <FaChartLine className="text-blue-600 dark:text-blue-400" size={24} />,
                    title: "Algorithm Optimization",
                    description: "Focusing on efficiency and performance in ML implementations"
                  },
                  { 
                    icon: <FaBrain className="text-blue-600 dark:text-blue-400" size={24} />,
                    title: "Visualization Focus",
                    description: "Creating intuitive visualizations for complex AI processes"
                  },
                  { 
                    icon: <FaServer className="text-blue-600 dark:text-blue-400" size={24} />,
                    title: "Practical Solutions",
                    description: "Developing real-world applications of theoretical concepts"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start p-4 bg-blue-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg"
              >
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "I focus on implementing theoretical concepts into practical solutions, 
                  with an emphasis on building core implementations from scratch, optimizing 
                  algorithms for efficiency, and visualizing complex processes."
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;