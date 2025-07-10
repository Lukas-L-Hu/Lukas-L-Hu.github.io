import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
export default function Home() {
  return (
    <>
    <section
      id="home"
      className="w-full min-h-screen flex justify-center items-center text-white pb-24 px-6"
    >
      <div className="flex flex-row items-center justify-center w-full max-w-6xl px-6">
        <div className="w-1/2 p-4 flex flex-col justify-center mx-auto">
          {/* <motion.h3 initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
              Hello! I am...
          </motion.h3> */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl mb-4 text-left font-fredoka"
          >
            <Typewriter
              words={['Lukas Hu']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={100}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-4xl mb-4 text-left font-fredoka"
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
            className="w-full h-[350px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    <section
      id="about-me"
      className="flex flex-col items-center pt-16 text-white px-6"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-fredoka text-center mb-8"
        >
          About Me
        </motion.h1>
        {/* <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-fredoka text-center mb-12"
        >
          Ever since I was at a young age, I have always had an interest in programming and using it to create amazing and impactful projects.<br />
          I can speak JavaScript, Python, C/C++ proficiently.
        </motion.p> */}
      </div>
      <div className="flex flex-col gap-y-16 pt-16 pb-20">
          <h2></h2>
      </div>
      <footer className="mb-6 flex flex-col items-center text-white">
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
      </footer>
    </section>
    </>
  );
}

