import { useState } from "react";

export default function Project({ title, description, imageUrl, techStack }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card w-80 h-96 group cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-front bg-gradient-to-br from-yellow-300 via-[#0064A4] to-[#00386c] shadow-lg rounded-lg p-4 flex flex-col">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-36 object-cover rounded mb-4"
            />
          )}
          <h1 className="text-4xl font-fredoka text-black mb-2">{title}</h1>
          {techStack && (
            <ul className="flex flex-wrap text-black justify-center gap-2">
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
          {!isFlipped && (<p className="mt-auto text-sm text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to see the description of the project</p>)}
        </div>

        {/* Back */}
        <div className="flip-back flex flex-col bg-gray-100 shadow-lg rounded-lg justify-center text-center items-center p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2"></h2>
          <p className="text-lg text-black text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
