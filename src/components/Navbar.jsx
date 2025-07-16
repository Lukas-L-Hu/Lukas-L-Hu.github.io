import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#FFD100] text-white shadow-md max-w-full overflow-hidden">
      <div className="text-2xl font-fredoka text-[#004B87]">Lukas Hu</div>
     <div className="space-x-4 font-fredoka">
      <Link to="/" className="text-[#004B87]">Home</Link>
      <Link to="/Education" className="text-[#004B87]">Education</Link>
      <Link to="/Experience" className="text-[#004B87]">Experience</Link>
      <Link to="/Projects" className="text-[#004B87]">Projects</Link>
      <Link to="/Resume" className="text-[#004B87]">Resume</Link>
    </div>
    </nav>
  )
}