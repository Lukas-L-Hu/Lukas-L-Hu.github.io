import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Work', 'Research', 'Academia'];

const experiences = {
  Work: [
    {
      title: 'Associate Software Engineer',
      company: 'CareFirst BlueCross BlueShield',
      date: 'December 2025-present',
      details: ["Supported the development of automation frameworks and database validation efforts, utilizing TypeScript, Java, Postgres, and MongoDB."]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Cloud2 Labs',
      date: 'Fall 2025',
      details: ["I worked on AI applications to support pre-sales enablement for enterprise customers, building a FastAPI powered backend with a React.js front-end. My role in the development of these applications included containerization with Docker as well as the successful implementation of text-to-speech and retrieval augmented generation capabilities."]
    },
    {
      title: 'Software Engineering Intern',
      company: 'World Wide Technology',
      date: 'Summer 2024',
      details: ["Over the course of 12 weeks, I worked on the backend and database infrastructure, primarily developing and maintaining Node.js REST APIs. My responsibilities included debugging, refining the SQL queries to speed up sales data retrieval, and leveraging Jenkins to deploy APIs. I collaborated with a cross-functional team using agile sprint methodologies and wrote clean, readable code with a focus on reliability and maintainability."]
    },
  ],
  Research: [
    {
      title: 'ML Research Assistant',
      company: 'UC Irvine',
      date: '2023 – 2024',
      details: ["Over the course of my second academic year of college at UC Irvine, I worked with a team under a professor to build machine learning models using Scikit-Learn and XGBoost that predict vehicle trajectories more accurately and reliably. I also cleaned and organized raw vehicle data using NumPy and Pandas to improve data quality and help the models learn better."],
    },
  ],
  Academia: [
    {
      title: 'CS Learning Assistant',
      company: 'UCI',
      date: '2023 – 2025',
      details: ["My main job was to assist students in their efforts to improve their knowledge in Computer Science concepts such as object-oriented programming, data structures, algorithms, and automata as well as help them prepare for testing. I also proctored exams to ensure a fair testing environment for the students."],
    },
  ],
};

export default function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState('Work');

  return (
    <div className="w-full flex flex-col items-center px-4 pt-16 pb-24 text-white">

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 relative">
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

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className={`gap-8 ${
            experiences[activeTab].length === 1
                ? 'grid grid-cols-1 md:flex md:justify-center'
                : 'grid grid-cols-1 md:grid-cols-2'
            }`}

        >
          {experiences[activeTab].map((exp, index) => (
            <div
              key={index}
              className="bg-[#004B87] rounded-xl p-4 sm:p-6 shadow-md w-full"
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
