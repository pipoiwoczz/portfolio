// src/components/Education.jsx
import React from 'react';
import { FaGraduationCap, FaBook, FaChartLine } from 'react-icons/fa';

const Education = () => {
  const courses = [
    "Introduction to Machine Learning",
    "Algorithm Design and Analysis",
    "Introduction to Artificial Intelligence",
    "Introduction to Big Data",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Advanced Mathematics",
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background as listed in my CV
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <FaGraduationCap size={32} className="mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">University of Science</h3>
                  <p className="text-blue-100">VNUHCM</p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <FaChartLine className="mr-3" />
                  <div>
                    <p className="text-sm text-blue-200">Current GPA</p>
                    <p className="text-3xl font-bold">8.23</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-lg font-medium">2022 - Present</p>
                  <p className="text-blue-100">Bachelor of Information Technology</p>
                  <p className="text-blue-100">Computer Science Major</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Relevant Coursework</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-start">
                    <FaBook className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;