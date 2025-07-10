import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#FFD100] text-white shadow-md max-w-full overflow-hidden">
      <div className="text-2xl font-fredoka text-[#004B87]">Lukas Hu</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/About">Education</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Resume">Resume</Link>
      </div>
    </nav>
  )
}