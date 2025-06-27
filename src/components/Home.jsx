import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col justify-between items-center text-white pt-12 px-6"
    >
      <div className="flex flex-row items-center justify-center w-full max-w-6xl px-6">
        <div className="w-1/2 p-4 flex flex-col justify-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl mb-4 text-left font-fredoka"
          >
            Hello there! I am Lukas Hu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl mb-4 text-left font-fredoka"
          >
            Dedicated software engineer seeking to make a positive impact with the tools at his disposal. Constantly looking for ways to learn and add more skills to his arsenal.
          </motion.p>
        </div>
        <div className="w-1/2 p-4">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/bubbles.jpg"
            alt="Decorative"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center w-full max-w-6xl px-6 mt-12">
        <div className="w-1/2 p-4">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-fredoka text-left mb-8"
          >
            Who Am I?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl font-fredoka text-left mb-8"
          >
            Ever since I was at a young age, I have always had an interest in programming and using it to create amazing and impactful projects.

            I can speak JavaScript, Python, C/C++ proficiently.
          </motion.p>
        </div>
        <div className="w-1/2 p-4"></div>
      </div>
      <div className="mb-6 flex flex-col items-center text-white">
        <p className="text-lg mb-2">Connect With Me</p>
        <div className="flex space-x-4 text-3xl">
          <a href="https://github.com/Lukas-L-Hu" target="_blank" className="text-[#181717] hover:opacity-80">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/lukaslhu" target="_blank" className="text-[#0077B5] hover:opacity-80">
            <FaLinkedin />
          </a>
          <a href="#" className="text-[#E4405F] hover:opacity-80">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

