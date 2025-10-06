// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Waves } from "./components/waves-background";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blog';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
// Add more imports as needed
// Import other pages as you create them, e.g., import About from './pages/About';

function App() {
  

  return (
  <Router>
    {/* The parent div must be relative so Waves can stay fixed behind content */}
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🌊 Animated background behind the app */}
      <Waves
        lineColor="rgba(0,0,0,0.15)"   // Light lines
        backgroundColor="#ffffff"            // Deep navy / dark background
        waveSpeedX={0.0125}
        waveSpeedY={0.008}
        waveAmpX={28}
        waveAmpY={18}
        className="z-10"
      />

      {/* Foreground content above the waves */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  </Router>
);

}

export default App;