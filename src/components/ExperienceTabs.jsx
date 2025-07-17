import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Internships', 'Research', 'Teaching'];

const experiences = {
  Internships: [
    {
      title: 'Software Engineering Intern',
      company: 'WWT',
      date: 'Summer 2024',
      details: ["Over the course of 12 weeks, I worked on the backend and database infrastructure, primarily developing and maintaining Node.js REST APIs. My responsibilities included debugging, refining the SQL queries to speed up sales data retrieval, and leveraging Jenkins to deploy APIs. I collaborated with a cross-functional team using agile sprint methodologies and wrote clean, readable code with a focus on reliability and maintainability."]
    },
    {
      title: 'Cybersecurity Analyst Intern',
      company: 'Midnight Ink',
      date: '2024-2025',
      details: ["I worked closely with assessors to identify and document security and compliance gaps in client internal systems, aligning our findings with NIST 800-171 standards. After pinpointing these gaps, I helped explore and implement remediation strategies to strengthen the overall security posture and reduce risk within the client’s environment."]
    }
  ],
  Research: [
    {
      title: 'ML Research Assistant',
      company: 'UC Irvine',
      date: '2023 – 2024',
      details: ["Over the course of my second academic year of college at UC Irvine, I worked with a team under a professor to build machine learning models using Scikit-Learn and XGBoost that predict vehicle trajectories more accurately and reliably. I also cleaned and organized raw vehicle data using NumPy and Pandas to improve data quality and help the models learn better."],
    },
  ],
  Teaching: [
    {
      title: 'CS Learning Assistant',
      company: 'UCI',
      date: '2023 – 2025',
      details: ["My main job was to assist students in their efforts to improve their knowledge in Computer Science concepts such as object-oriented programming, data structures, algorithms, and automata as well as help them prepare for testing. I also proctored exams to ensure a fair testing environment for the students."],
    },
  ],
};

export default function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState('Internships');

  return (
    <div className="w-full flex flex-col items-center px-4 pt-16 pb-24 text-white">

      {/* Tabs */}
      <div className="flex justify-center space-x-8 mb-12 relative">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xl font-semibold transition-colors ${
              activeTab === tab ? 'text-yellow-300' : 'text-black'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="h-1 bg-yellow-300 rounded-full mt-1"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className={`gap-8 ${
            experiences[activeTab].length === 1
                ? 'flex justify-center'
                : 'grid grid-cols-1 md:grid-cols-2'
            }`}

        >
          {experiences[activeTab].map((exp, index) => (
            <div
              key={index}
              className="bg-[#004B87] rounded-xl p-6 shadow-md"
            >
              <h3 className="text-2xl font-fredoka">{exp.title}</h3>
              <p className="text-lg italic mb-2">{exp.company} — {exp.date}</p>
              <ul className="list-disc list-inside text-left space-y-1">
                {exp.details.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
