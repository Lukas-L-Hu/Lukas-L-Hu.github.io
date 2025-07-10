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
      <div className="flex flex-row items-center justify-center w-full max-w-7xl px-6">
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
            Dedicated software engineer seeking to make a positive impact with the tools at his disposal. Constantly looking for ways to innovate and add more skills to his arsenal.
          </motion.p>
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
      className="flex flex-col items-center pt-2 text-white px-6"
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
        <div className="text-2xl text-center px-4 max-w-7xl mx-auto">
          <h2>Hi! My name is Lukas Hu and I am an aspiring software engineer. Originally from the Washington, D.C. area, I have currently been living on the West Coast in both Las Vegas, NV and Orange County, CA.
          </h2>
          <br></br>
          <h2>Ever since I was young, I have always held a passion for programming and using it to create amazing and impactful projects. 
            This led me to study Computer Science at the University of California, Irvine where I continued to fuel my curiosity and passion. 
            I possess skills such as Python, JavaScript, C++, Java, and SQL which I have been able to apply through various projects and real world experiences.
          </h2>
          <br></br>
          <h2>I previously interned as a software engineer at World Wide Technology where I developed and maintained APIs for backend systems using Node.js and Vue.js.
            Throughout this experience, I learned to write clean, testable code while collaborating in an agile environment.
          </h2>
          <br></br>
          <h2>
            When I am not coding, I enjoy playing sports such as basketball, swimming, and tennis. In addition to playing sports, I also consider myself a big sports fan. Since I grew up in the Greater Baltimore-Washington area, my allegiances are to the Baltimore Ravens, Washington Nationals,
        Washington Capitals, Washington Wizards, and D.C. United.
          </h2>
          <br></br>
          <h2>
            I also really enjoy trying new foods with some of my favorite cuisines being Taiwanese, Korean, Peruvian, Ethiopian, and Venezuelan as some of my favorites that I have tried.
            I love trying new restaurants and I love new recommendations for restaurants around California, Las Vegas, DC, or wherever I end up.
          </h2>
        </div>
      </div>
      <footer className="mb-6 flex flex-col pt-24 items-center text-white">
        <p>Made by Lukas Hu</p>
      </footer>
    </section>
    </>
  );
}

