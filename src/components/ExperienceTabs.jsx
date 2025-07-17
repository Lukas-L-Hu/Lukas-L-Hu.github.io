import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Internships', 'Research', 'Teaching'];

const experiences = {
  Internships: [
    {
      title: 'Software Engineering Intern',
      company: 'WWT',
      date: 'Summer 2024',
      details: ['Built Flask APIs', 'Used React for dashboards'],
    },
    {
      title: 'Cybersecurity Analyst Intern',
      company: 'Midnight Ink',
      date: '2024-2025',
      details: ['Monitored network activity', 'Audited security logs'],
    },
  ],
  Research: [
    {
      title: 'ML Research Assistant',
      company: 'UC Irvine',
      date: '2022 – 2023',
      details: ['Worked on CRF models', 'Published in XYZ Conference'],
    },
  ],
  Teaching: [
    {
      title: 'CS Learning Assistant',
      company: 'UCI',
      date: '2021 – 2022',
      details: ['Helped 100+ students', 'Led weekly lab sessions'],
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
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
