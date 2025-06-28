import Project from "./Project";

export default function Projects({ ription, imageUrl, techStack, repoLink, liveLink }) {
    return (
        <>
        <div className="flex flex-col items-center px-4">
            <h1 className="text-4xl font-bold my-8 text-center">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <Project title="AI Wordle" techStack={["Python"]}/>
            <Project title="Travel Wiz" techStack={["Node.js", "React.js", "HTML/CSS"]}/>
            <Project title="AI Minesweeper" techStack={["Python"]}/>
            <Project title="ChordStore" techStack={["React.js", "HTML/CSS"]}/>
            <Project title="Escape-Vape" techStack={["React.js", "Express.js", "HTML", "Bootstrap CSS"]}/>
            </div>
        </div>
        </>
    )
}