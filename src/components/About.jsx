import TextArea from "./TextArea";
import Icons from "./Icons.jsx";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex flex-col gap-y-16 pt-16 pb-20">
    <TextArea heading="Education">
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
          <p className="mt-4 font-courier">
            Here are some of the courses I took at UCI:
          </p>
          <ul className="list-disc list-inside mt-2 font-courier">
            <li>ICS 31–33: Python Programming</li>
            <li>ICS 45C: C/C++ Programming</li>
            <li>ICS 46: Data Structures & Algorithms</li>
            <li>ICS 51: Computer Organization</li>
            <li>ICS 53: System Design</li>
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
  );
}
