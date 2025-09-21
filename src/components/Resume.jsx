import { motion } from 'framer-motion';


export default function Resume() {
  return (
    <section
      className="w-full flex justify-center items-center text-white px-6 pt-16 md:pt-0 pb-8"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6">
        
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 p-4 flex justify-center md:justify-start">
          <img
            src="/picture4resumepage.jpg"
            alt="Resume Photo"
            className="w-full max-w-md md:w-auto md:h-[600px] rounded-lg shadow-lg"
          />
        </motion.div>

        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-5xl md:text-6xl font-bold font-fredoka mb-6 md:mb-4">
            My Resume
          </motion.h1>
          <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl md:text-2xl font-light">
            Explore my experiences, technical skills, and projects that reflect my journey as a software engineer. Click the button below to view my full resume.
          </motion.p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-white text-black text-center font-semibold rounded hover:bg-gray-300 transition"
            >
            View Resume PDF
        </a>
        </div>

      </div>
    </section>
  );
}
