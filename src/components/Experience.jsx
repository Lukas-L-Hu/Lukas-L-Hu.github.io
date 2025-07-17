import { motion } from 'framer-motion';
import ExperienceTabs from './ExperienceTabs';

export default function Experience() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col items-center px-4 pt-16">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-fredoka pb-8 text-center text-white"
          >
            Experience
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-fredoka pb-12 text-center text-white"
          >
            Below you can take a look at my past work and internship experiences.
          </motion.h2>
        </div>
        <div className="w-full flex justify-center px-4 pb-12">
          <ExperienceTabs />
        </div>
        <footer className="mt-auto mb-6 flex flex-col items-center text-white">
          <p>Made by Lukas Hu</p>
        </footer>
      </div>
    </>
  );
}
