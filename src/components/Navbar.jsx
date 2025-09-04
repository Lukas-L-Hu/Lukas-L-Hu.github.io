import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
      <nav className="bg-[#FFD100] shadow-md w-full">
        <div className="flex justify-between items-center p-6">
          <div className="text-2xl font-fredoka">
            <Link to="/" className="text-[#004B87] cursor-pointer">
              Lukas Hu
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 font-fredoka text-lg">
            <Link to="/" className="text-[#004B87]">Home</Link>
            <Link to="/Education" className="text-[#004B87]">Education</Link>
            <Link to="/Experience" className="text-[#004B87]">Experience</Link>
            <Link to="/Projects" className="text-[#004B87]">Projects</Link>
            <Link to="/Resume" className="text-[#004B87]">Resume</Link>
          </div>

          <div className="md:hidden text-2xl text-[#004B87] cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {isOpen && (
          <div className="flex flex-col space-y-4 px-6 pb-6 font-fredoka text-lg md:hidden">
            <Link to="/" className="text-[#004B87]" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/Education" className="text-[#004B87]" onClick={() => setIsOpen(false)}>Education</Link>
            <Link to="/Experience" className="text-[#004B87]" onClick={() => setIsOpen(false)}>Experience</Link>
            <Link to="/Projects" className="text-[#004B87]" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/Resume" className="text-[#004B87]" onClick={() => setIsOpen(false)}>Resume</Link>
          </div>
        )}
      </nav>
  )
}
