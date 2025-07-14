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
            transition={{ duration: 1 }} className="text-4xl font-bold my-8 pb-24 text-center text-white">Here are some of the current and past projects that I have worked on! Will be updated as I develop more projects!</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-24 text-center">
            <Project title="AlgoNotes" techStack={["AWS", "Flask", "HTML/CSS"]} description={"A Flask application that calls on AWS Bedrock to give a summary of the raw algorithm notes that are given and recommed similar topics to study. Users can use this app to store notes relating to DSA concepts and receive in-depth explanation to notes taken."} />
            <Project title="AI Wordle" techStack={["Python"]} description={"An automated AI agent for solving Wordle in as efficient amount of guesses as possible."}/>
            <Project title="Travel Wiz" techStack={["Node.js", "React.js", "HTML/CSS"]} description={"A React.js powered app that utilizes API calls to inform users of the best travel hacks and recommendations for users looking to travel."}/>
            <Project title="AI Minesweeper" techStack={["Python"]} description={"An AI agent tasked for solving Minesweeper and avoiding the bombs."}/>
            <Project title="ChordStore" techStack={["React.js", "HTML/CSS"]} description={"A storage app built for keeping track of creative chord progressions for music producers to go back to."}/>
            <Project title="Escape-Vape" techStack={["React.js", "Express.js", "HTML", "Bootstrap CSS"]} description={"A web application built to combat nicotine addiction with different therapy and accountability methods such as daily logs, fun games, and virtual calls to therapists."}/>
            </div>
        </div>
        </>
    )
}