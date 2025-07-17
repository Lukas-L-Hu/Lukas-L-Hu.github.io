import { motion } from 'framer-motion';
import ExperienceTabs from './ExperienceTabs';

export default function Experience() {
    return (
        <>
        <div className="flex flex-col items-center px-4 pt-16 pb-12">
            <motion.h1 initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-fredoka pb-12 text-center text-white">Experience</motion.h1>
            <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} className="text-4xl font-fredoka my-8 pb-24 text-center text-white">
            Below you can take a look at my past work and internship experiences.</motion.h2>
            <div className="w-full flex justify-center">
            <ExperienceTabs />
            </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-24 text-center">
            <div className="bg-[#004B87] text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">Software Engineering Intern</h3>
            <p className="text-lg font-semibold">World Wide Technology</p>
            <p className="italic text-sm mb-2">Jun 2024 – Sep 2024 · St. Louis, MO</p>
            <ul className="text-left list-disc list-inside space-y-1">
                <li>Developed internal tools using React and Flask</li>
                <li>Automated reports saving 5+ hours per week</li>
                <li>Improved system monitoring with Grafana dashboards</li>
            </ul>
            </div>
        </div> */}

        <footer className="mb-2 flex flex-col items-center text-white">
            <p>Made by Lukas Hu</p>
        </footer>
        </>
    )
}