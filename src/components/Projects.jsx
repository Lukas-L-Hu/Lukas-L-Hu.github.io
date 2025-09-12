import Project from "./Project";
import { motion } from 'framer-motion';

export default function Projects({ ription, imageUrl, techStack, repoLink, liveLink }) {
    return (
        <>
        <div className="flex flex-col items-center px-4 pt-16 pb-12">
            <motion.h1 initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-fredoka pb-12 text-center text-white">Projects</motion.h1>
            <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} className="text-4xl font-fredoka my-8 pb-24 text-center text-white">Here are some of the current and past projects that I have worked on! Will be updated as I develop more projects!<br /><br /> 
            Some of these projects are public on my Github <a href="https://github.com/Lukas-L-Hu" target="_blank" className="font-bold underline text-white hover:opacity-80">here</a></motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-24 text-center justify-items-center">
            <Project title="AlgoNotes" date={["2025"]} techStack={["AWS", "Flask", "HTML/CSS"]} description={"A Flask application that calls on AWS Bedrock to give a summary of the raw algorithm notes that are given and recommed similar topics to study. Users can use this app to store notes relating to DSA concepts and receive in-depth explanation to notes taken."} />
            <Project title="AI Wordle" date={["2025"]} techStack={["Python"]} description={"An automated AI agent for solving Wordle in as efficient amount of guesses as possible. This project uses an entropy-based strategy, leveraging information gain to systematically reduce uncertainty and make the most optimal Wordle guesses."}/>
            <Project title="Travel Wiz" date={["2025"]} techStack={["Node.js", "React.js", "HTML/CSS"]} description={"A React.js powered app that utilizes API calls to inform users of the best travel hacks and recommendations for users looking to travel. Users can choose a location by selecting a place on Google Maps which would provide tailored iteniraries."}/>
            <Project title="AI Minesweeper" techStack={["Python"]} date={["2024"]} description={"A Python interface with an AI agent that will play Minesweeper for the user. This involved optimizing weights and algorithms for choosing which tiles to uncover to avoid failure by uncovering a bomb. This project achieved an average success rate of over 80% for the intermediate difficulty."}/>
            <Project title="ChordStore" date={["2023"]} techStack={["React.js", "HTML/CSS"]} description={"Built with React.js, this app lets music producers easily save and revisit their favorite chord progressions, acting as a creative notebook to keep ideas organized and accessible for future projects."}/>
            <Project title="Escape-Vape" date={["2020-2021"]} techStack={["React.js", "Express.js", "HTML", "Bootstrap CSS"]} description={"A full-stack application that offers a private, supportive space for those struggling with nicotine addiction. Through daily logs, gamified coping strategies, and virtual access to therapists, users can pursue recovery at their own pace and comfort level."}/>
            </div>
            
        </div>
        <footer className="mb-6 flex flex-col items-center text-white">
            <p>Made by Lukas Hu</p>
        </footer>
        </>
    )
}