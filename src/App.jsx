import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-700 via-blue-500 to-red-500 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  );
}