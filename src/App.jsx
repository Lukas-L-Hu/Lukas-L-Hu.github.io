import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Experience from './components/Experience';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden">
      <Navbar />
      <main className="flex-grow container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  );
}