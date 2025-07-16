import TextArea from "./TextArea.jsx";
import Icons from "./Icons.jsx";
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <>
    <div className="flex flex-col gap-y-16 pt-16 pb-20">
      <div className="flex flex-col text-white items-center text-center mx-auto">
      <motion.h1 className="text-6xl font-fredoka">Education</motion.h1>
      <br></br>
      <br></br>
      <motion.h2 className="text-4xl font-fredoka">Below is my educational background, highlighting the coursework and experiences that helped shape my interest in software engineering.</motion.h2>
      </div>
    <TextArea heading="Degrees and Courses">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* <img
          src={UciLogo}
          alt="UCI"
          className="w-32 h-32 object-contain transform scale-90"
        /> */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}className="flex-1">
          <h2 className="text-2xl font-fredoka">
            University of California, Irvine
          </h2>
          <h3 className="text-xl">
            B.S. in Computer Science / Intelligent Systems Specialization
          </h3>
          <p className="mt-2">2022 - 2025</p>
          <br></br>
          <p>At UC Irvine, I had the opportunity to deepen my understanding of core computer science concepts while exploring emerging technologies through research and personal projects.</p>
          <p className="mt-4 font-courier">
            Here are some of the courses I took at UCI:
          </p>
          <ul className="list-disc list-inside mt-2 font-courier">
            <li>ICS 31–33: Python Programming</li>
              <ul>Beginner to intermediate courses that tackle Python basics, libraries, and object-oriented design</ul>
            <li>ICS 45C: C/C++ Programming</li>
              <ul>Introduction to C++ as a second language and basics of data structures and memory management</ul>
            <li>ICS 46: Data Structures & Algorithms</li>
              <ul>Leveraging C++ to implement data structures and use of algorithms</ul>
            <li>ICS 51: Computer Organization</li>
              <ul>Deeper dive into the connectino of computer system components and introduction to Assembly language</ul>
            <li>ICS 53: System Design</li>
              <ul></ul>
            <li>CS 121: Information Retrieval</li>
            <li>CS 161: Algorithms</li>
            <li>CS 162: Format Languages and Automata</li>
            <li>CS 171, 178: Artificial Intelligence & Machine Learning</li>
          </ul>
          <a
            href="https://ics.uci.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-[rgba(40,200,149,0.3)] rounded text-[#5d2a42] font-semibold"
          >
            Visit Website
          </a>
        </motion.div>
      </div>
    </TextArea>
    </div>
    <footer className="mb-6 flex flex-col items-center text-white">
        <p>Made by Lukas Hu</p>
    </footer>
    </>
  );
}
