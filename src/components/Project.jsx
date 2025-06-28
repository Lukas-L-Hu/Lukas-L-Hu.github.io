import { useState } from "react";

export default function ProjectCard({ title, description, imageUrl, techStack }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card w-80 h-96"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-front bg-white shadow-lg rounded-lg p-4">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-36 object-cover rounded mb-4"
            />
          )}
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          {techStack && (
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className="bg-gray-200 text-sm px-2 py-1 rounded"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Back */}
        <div className="flip-back bg-gray-100 shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">About</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
