import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TextArea from "./TextArea";

export default function Home() {
  return (
    <>
    <section
      id="home"
      className="w-full min-h-screen flex justify-center items-center text-white pb-24 px-6"
    >
      <div className="flex flex-row items-center justify-center w-full max-w-6xl px-6">
        <div className="w-1/2 p-4 flex flex-col justify-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl mb-4 text-left font-fredoka"
          >
            <div className="whitespace-nowrap text-7xl">Lukas Hu</div>
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
          className="text-8xl font-fredoka text-center mb-8"
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
          <TextArea heading="Get to Know Me">
            <h2>Originally from the Washington, D.C. area, I have lived on the West Coast in both Las Vegas, NV and Orange County, CA. While I am still an East
              Coast kid at heart, I have really enjoyed life in the West. I have also had the privilege of traveling the world to places such as Taiwan, Austria, the Philippines, 
              and the United Arab Emirates. I enjoy working anywhere and getting to experience new places.
            </h2>
            <br></br>
            <h2>
              In my free time I enjoy playing sports such as basketball, swimming, and tennis. In addition to playing sports,
              I also consider myself a big sports fan. Growing up in the Greater Baltimore-Washington area, my allegiances are to the Baltimore Ravens, Washington Nationals,
              Washington Capitals, Washington Wizards, and D.C. United.
            </h2>
            <br></br>
            <h2>
              I also really enjoy trying new foods with some of my favorite cuisines being Taiwanese, Korean, Peruvian, Ethiopian, and Venezuelan as some of my favorites that I have tried.
              I love trying new restaurants and I love new recommendations for restaurants around California, Las Vegas, DC, or wherever I end up.
            </h2>
          </TextArea>
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

