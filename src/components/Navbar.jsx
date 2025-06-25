import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white shadow-md max-w-full overflow-hidden">
      <div className="text-2xl font-bold text-purple-700">Lukas Hu</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Resume">Resume</Link>
      </div>
    </nav>
  )
}