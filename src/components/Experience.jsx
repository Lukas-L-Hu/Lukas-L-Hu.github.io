import { motion } from 'framer-motion';

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-24 text-center"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-24 text-center">
            
        </div>
        <footer className="mb-2 flex flex-col items-center text-white">
            <p>Made by Lukas Hu</p>
        </footer>
        </>
    )
}