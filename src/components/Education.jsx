import TextArea from "./TextArea.jsx";
import Icons from "./Icons.jsx";
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <>
    <div className="flex flex-col gap-y-16 pt-16 pb-20">
      <div className="flex flex-col text-white items-center text-center mx-auto">
      <motion.h1 initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-fredoka">Education</motion.h1>
      <br></br>
      <br></br>
      <motion.h2 initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} 
            className="text-4xl font-fredoka">Below is my educational background, highlighting the coursework and experiences that helped shape my interest in software engineering.</motion.h2>
      </div>

      <div className="w-full px-4">

        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto bg-[#004B87] p-8 rounded-xl shadow-md"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-fredoka text-white">
            University of California, Irvine
          </h2>
          <h3 className="text-xl md:text-2xl text-white mt-2">
            B.S. in Computer Science / Intelligent Systems Specialization
          </h3>
          <p className="text-white mt-1">2022 – 2025</p>
        </div>

        <div className="mt-6 text-white text-left font-courier">
          <p>
            At UC Irvine, I had the opportunity to deepen my understanding of core computer science concepts while exploring emerging technologies through research and personal projects.
          </p>

          <p className="mt-6 font-semibold underline">Courses taken:</p>
          <div className="space-y-4 mt-2">
            <div>
              <span className="font-semibold">ICS 31–33: Python Programming</span><br />
              Beginner to intermediate courses covering Python basics, libraries, and object-oriented design.
            </div>
            <div>
              <span className="font-semibold">ICS 45C: C/C++ Programming</span><br />
              Introduction to C++ and fundamentals of memory management and data structures.
            </div>
            <div>
              <span className="font-semibold">ICS 46: Data Structures & Algorithms</span><br />
              Implementation of data structures and analyzing algorithms using C++.
            </div>
            <div>
              <span className="font-semibold">ICS 51: Computer Organization</span><br />
              Understanding system-level components and Assembly programming.
            </div>
            <div>
              <span className="font-semibold">ICS 53: System Design</span><br />
              Deep dive into the principles of the system design of software such as operating systems, compilers, and networking. Introduction to complex concepts such as memory management, concurrency, and network communication.
            </div>
            <div>
              <span className="font-semibold">CS 121: Information Retrieval</span><br />
              Course that introduces information retrieval concepts and applications such as indexing, retrieval, and web crawlers.
            </div>
            <div>
              <span className="font-semibold">CS 161: Algorithms</span><br />
              A look into the efficiency and design of algorithms such as Divide and Conquer, Dynamic Programming, and Time/Space Complexity.
            </div>
            <div>
              <span className="font-semibold">CS 162: Formal Languages & Automata</span><br />
              Theoretical aspects of recognizing languages by grammar and automata. Introduction to regular and context-free languages and the definition of computability.
            </div>
            <div>
              <span className="font-semibold">CS 171 & 178: AI & Machine Learning</span><br />
              The principles of artificial intelligence and machine learning and their practical and theoretical applications in the real word.
            </div>
          </div>

          {/* <a
            href="https://ics.uci.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 bg-[#FFD100] rounded text-black font-semibold"
          >
            Visit Website
          </a> */}
        </div>
      </motion.div>
    </div>

    </div>
    <footer className="mb-6 flex flex-col items-center text-white">
        <p>Made by Lukas Hu</p>
    </footer>
    </>
  );
}
